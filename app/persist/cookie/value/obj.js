/**********************************************************************
 *
 * value/obj.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"kWLog/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
		log,
		validate,
		$
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function value() 
		{
			//console.log("value::constructor");
            
            this.m_sKWKey     = null;
            
            this.m_kWOptions  = null;
            this.m_kWValue    = null;
 		}

		value.prototype = new log();
		value.prototype.constructor = value;
		value.constructor = log.prototype.constructor;
		
		value.prototype.check = 
			function check()
		{
			log.prototype.check.call(this);
			
            //console.log(this.kWLogCalled());
			
            if(!validate.isNotNull(this.m_kWOptions))
			{
				console.error(this.kWLogInvalid("m_kWOptions"));
			}
            
            if(!validate.isString(this.m_sKWKey))
			{
				console.error(this.kWLogInvalid("m_sKWKey"));
			}
		};

		value.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			log.prototype.init.call(this);
		}; 

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		value.prototype.getKWValue =
			function()
		{
			return this.valueGet();
		}; 

		value.prototype.getKWKey =
			function()
		{
			return this.m_sKWKey;
		}; 

		value.prototype.setKWValue =
			function(obj)
		{
			this.valueSet(obj);
		}; 

		value.prototype.setKWOptions =
			function(obj)
		{
			this.m_kWOptions = obj;
		}; 

	//*******************************************************************//
	//***																	   
	//***		public callbacks
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		public methods
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
		
		value.prototype.uBLInitOR = function()
		{
			this.valueInit();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
		
		value.prototype.valueInitOR = function()
		{
			console.error(this.kWLogNotImpl());
		};

		value.prototype.valueVerifyOR = function()
		{
			console.error(this.kWLogNotImpl());
		};

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		value.prototype.valueGet = 
			function valueGet()
		{
			//console.log(this.kWLogCalled());

			this.valueRead();
            return this.m_kWValue;
		};  

		value.prototype.valueInit =
			function valueInit() 
		{
			//console.log(this.kWLogCalled());
            this.valueInitOR();
		};

		value.prototype.valueRead = 
			function valueRead()
		{
			//console.log(this.kWLogCalled());

			if(!validate.isString(this.m_sKWKey))
			{
				console.error(this.kWLogInvalid("m_sKWKey"));
			} 

			this.m_kWValue = $.cookie(this.m_sKWKey);
            
            this.valueVerify();
		};  

		value.prototype.valueSet = 
			function valueSet(obj)
		{
			//console.log(this.kWLogCalled());

            this.m_kWValue = obj;
			this.valueWrite();
		};  

		value.prototype.valueVerify = 
			function valueVerify()
		{
			//console.log(this.kWLogCalled());
    		this.valueVerifyOR();
		};  

		value.prototype.valueWrite = 
			function valueWrite()
		{
			//console.log(this.kWLogCalled());

			if(!validate.isNotNull(this.m_kWOptions))
			{
				console.error(this.kWLogInvalid("m_kWOptions"));
			} 

			if(!validate.isString(this.m_sKWKey))
			{
				console.error(this.kWLogInvalid("m_sKWKey"));
			} 

            this.valueVerify();
            
			$.cookie(this.m_sKWKey, this.m_kWValue, this.m_kWOptions);
		}; 

		return value;
		
	}
);