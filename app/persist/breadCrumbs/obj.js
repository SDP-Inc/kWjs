/**********************************************************************
 *
 * breadCrumbs/obj.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2013 iTKunst Corporation
 *
 **********************************************************************/

define
(
	[
		"kWStat/base64",
		"kWMVC/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
		base64,
		mvc,
		validate,
		$
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function breadCrumbs() 
		{
			//console.log("breadCrumbs::constructor");
			
			this.m_sKWExt			= "breadCrumbs";
            
			this.m_sHash			= null;
            this.m_sKWSeparator     = null;
			this.m_sState			= null;
		}

		breadCrumbs.prototype = new mvc();
		breadCrumbs.prototype.constructor = breadCrumbs;
		breadCrumbs.constructor = mvc.prototype.constructor;
		
		breadCrumbs.prototype.check = 
			function check()
		{
			mvc.prototype.check.call(this);
            
			//console.log(this.kWLogCalled());
            
			if(!validate.isString(this.m_sKWSeparator))
			{
				console.error(this.kWLogInvalid("m_sKWSeparator"));
			}
		};

		breadCrumbs.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			mvc.prototype.init.call(this);
		}; 

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		breadCrumbs.prototype.get = 
			function()
		{
			return this.bcRetrieve();
		}; 

		breadCrumbs.prototype.set = 
			function(obj)
		{
			this.bcStore(obj);
		}; 

		breadCrumbs.prototype.setKWSeparator =
			function(sVal)
		{
			this.m_sKWSeparator = sVal;
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
		
		breadCrumbs.prototype.mvcInitOR = function()
		{
			this.bcInit();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//
		
		breadCrumbs.prototype.bcInitOR =
            function bcInitOR()
		{
			//console.error(this.kWLogNotImpl());
		};

		breadCrumbs.prototype.bcPackStateOR =
            function bcPackStateOR()
		{
			//console.error(this.kWLogNotImpl());
		};

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		breadCrumbs.prototype.bcDeSerialize = 
			function bcDeSerialize() 
		{
			//console.log(this.kWLogCalled());

			if(!validate.isString(this.m_sHash))
			{
				return;
			}

			this.m_sState = base64.decode(this.m_sHash);
			if(!validate.isString(this.m_sState))
			{
				console.error(this.kWLogErrRetrieve("m_sState"));
			}

			//console.debug(this.kWLogDisplay("m_sState", this.m_sState));
		};

		breadCrumbs.prototype.bcInit =
			function bcInit() 
		{
			//console.log(this.kWLogCalled());
            
            this.bcInitOR();
		};

		breadCrumbs.prototype.bcPackState = 
			function bcPackState() 
		{
			//console.log(this.kWLogCalled());
            this.bcPackStateOR();
		};
        
		breadCrumbs.prototype.bcRetrieve = 
			function bcRetrieve() 
		{
			//console.log(this.kWLogCalled());
			
            this.bcRetrieveHash();
            this.bcDeSerialize();
			if (validate.isString(this.m_sState))
            {
               this.bcPackState();
            }
            
            return this.m_kWState;
		};
        
		breadCrumbs.prototype.bcRetrieveHash = 
			function bcRetrieveHash() 
		{
			var sHash = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(window.location))
			{
				console.error(this.kWLogInvalid("location"));
			}
			
            this.m_sHash = "";
            
			sHash = window.location.hash;
			
			if (!validate.isString(sHash))
			{
                return;
			}
			
			if (sHash === "#QEBcXA==")
			{
				return;
			}
			
			this.m_sHash = sHash;
		};
		
		breadCrumbs.prototype.bcSerialize = 
			function bcSerialize() 
		{
			//console.log(this.kWLogCalled());

			this.m_sHash = null;

			if (!validate.isString(this.m_sState))
			{
				console.error(this.kWLogInvalid("m_sState"));
			}
				
			this.m_sHash = base64.encode(this.m_sState);
			//console.debug(this.kWLogDisplay("m_sHash", this.m_sHash));
		};

		breadCrumbs.prototype.bcStore =
			function bcStore(obj)
		{
			//console.log(this.kWLogCalled());

			this.m_kWState = obj;
            
            this.bcUnPackState();
            this.bcSerialize();
            this.bcStoreHash();
		};
		
		breadCrumbs.prototype.bcStoreHash =
			function bcStoreHash()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(window.location))
			{
				console.error(this.kWLogInvalid("location"));
			}
			
			window.location.hash = this.m_sHash;
		};
		
		breadCrumbs.prototype.bcUnPackState =
			function bcUnPackState() 
		{
            var array = null;
            
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWState))
            {
                console.error(this.kWLogInvalid("m_kWState"));
            }
            
			if(!validate.isString(this.m_sKWSeparator))
			{
				console.error(this.kWLogInvalid("m_sKWSeparator"));
			}
            
            array = [];
            
            for (var prop in this.m_kWState)
            {
                array.push(this.m_kWState[prop]);
            }
            
            this.m_sState = array.join(this.m_sKWSeparator);
            
            //console.debug(this.kWLogDisplay("m_sState", this.m_sState));
		};
        
		return breadCrumbs;
		
	}
)