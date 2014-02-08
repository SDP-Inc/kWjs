/**********************************************************************
 *
 * base/obj.js
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
		"kWLog/obj",
		"kWStat/validate"
	],
	function
	(
		log,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function base() 
		{
			//console.log("base::constructor");
			
			this.m_kWDom		= null;
			this.m_kWView		= null;
			
			this.m_sKWAttr		= null;
		}

		base.prototype = new log();
		base.prototype.constructor = base;
		base.constructor = log.prototype.constructor;

		base.prototype.check =
			function check() 
		{
			log.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}
			
			if (!validate.isString(this.m_sKWAttr))
			{
				console.error(this.kWLogInvalid("m_sKWAttr"));
			}
		};

		base.prototype.init = 
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

		base.prototype.getKWValue =
			function() 
		{
			return this.baseGetValue();
		};

		base.prototype.setKWDom =
			function(obj) 
		{
			this.m_kWDom = obj;
		};

		base.prototype.setKWValue =
			function(obj) 
		{
			this.baseSetValue(obj);
		};

		base.prototype.setKWValueByAttr =
			function(sAttr, obj) 
		{
			this.baseSetValueByAttr(sAttr, obj);
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

		base.prototype.kWClear =
			function() 
		{
			this.baseClear();
		};

		base.prototype.kWRemove =
			function() 
		{
			this.baseRemove();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		base.prototype.uBLDeleteOR =
			function()
			{
				this.baseDelete();
			};

		base.prototype.uBLInitOR =
			function()
			{
				this.baseInit();
			};

	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		base.prototype.baseGetOR =
			function baseGetOR()
			{
				console.error(this.kWLogNotImpl());
			};

		base.prototype.baseInitOR =
			function baseInitOR()
			{
				console.error(this.kWLogNotImpl());
			};

		base.prototype.baseRetrieveOR =
			function baseRetrieveOR(obj)
		{
			console.error(this.kWLogNotImpl());
		};
		
		base.prototype.baseSetOR = 
			function baseSetOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		base.prototype.baseClear =
			function baseClear()
			{
				//console.log(this.kWLogCalled());

				if (!validate.isString(this.m_sKWAttr))
				{
					console.error(this.kWLogInvalid("m_sKWAttr"));
				}

				if (!validate.isDom(this.m_kWDom))
				{
					console.error(this.kWLogInvalid("m_kWDom"));
				}

				//console.log(this.kWLogDisplay("m_sKWAttr", this.m_sKWAttr));

				this.m_kWDom.attr(this.m_sKWAttr, "");
			};

		base.prototype.baseDelete =
			function baseDelete()
			{
				//console.log(this.kWLogCalled());
				this.m_kWDom		= null;
				this.m_kWView		= null;
			};

		base.prototype.baseGetValue =
			function baseGetValue()
		{
			//console.log(this.kWLogCalled());
			return this.baseGetOR();
		};
		
		base.prototype.baseGetValueByAttr = 
			function baseGetValueByAttr(sAttr)
		{
			var sVal = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(sAttr))
			{
				console.error(this.kWLogInvalid("sAttr"));
			}
			
			if (!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}
			
			sVal = this.m_kWDom.attr(sAttr);
			
			//console.debug(this.kWLogDisplay("sAttr", sVal));
			
			return sVal;
		};
		
		base.prototype.baseInit = 
			function baseInit()
		{
			//console.log(this.kWLogCalled());
			this.baseInitOR();
		};

		base.prototype.baseRemove = 
			function baseRemove()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sKWAttr))
			{
				console.error(this.kWLogInvalid("m_sKWAttr"));
			}
			
			if (!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}
			
			//console.log(this.kWLogDisplay("m_sKWAttr", this.m_sKWAttr));

			this.m_kWDom.removeAttr(this.m_sKWAttr);
		};
		
		base.prototype.baseSetValue =
			function baseSetValue(obj)
		{
			//console.log(this.kWLogCalled());
			this.baseSetOR(obj);
		};
		
		base.prototype.baseSetValueByAttr = 
			function baseSetValueByAttr(sAttr, val)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(sAttr))
			{
				console.error(this.kWLogInvalid("sAttr"));
			}
			
			if (!validate.isNotNull(val))
			{
				console.error(this.kWLogInvalid("val"));
			}
			
			if (!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}
			
			//console.debug(this.kWLogDisplay(sAttr, val));

			this.m_kWDom.attr(sAttr, val);
		};
		
		return base;

	}
);
