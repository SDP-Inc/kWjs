/**********************************************************************
 *
 * keyHRef/obj.js
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
		"kWUtils/value/i18n/obj",
		"kWStat/validate"
	],
	function
	(
		i18n,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function keyHRef() 
		{
			//console.log("keyHRef::constructor");
			
			this.m_sKWExt		= "keyHRef";
		}

		keyHRef.sKWKey = "kwKeyHRef";

		keyHRef.prototype = new i18n();
		keyHRef.prototype.constructor = keyHRef;
		keyHRef.constructor = i18n.prototype.constructor;

		keyHRef.prototype.check =
			function check() 
		{
			this.m_sKWI18NKey = keyHRef.sKWKey;

			i18n.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		keyHRef.prototype.init = 
			function init() 
		{
			//console.log(this.kWLogCalled());
			i18n.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

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

		keyHRef.prototype.i18nInitOR =
			function()
		{
			this.hrInit(); 
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//
		
		keyHRef.prototype.hrInit = 
			function hrInit()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_kWValue))
			{
				//console.debug(this.kWLogDisplay("m_kWValue", this.m_kWValue));
			}
		};
		
		return keyHRef;

	}
);
