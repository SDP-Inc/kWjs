/**********************************************************************
 *
 * keyPlaceHolder/obj.js
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
	
		function keyPlaceHolder() 
		{
			//console.log("keyPlaceHolder::constructor");
			
			this.m_sKWExt		= "keyPlaceHolder";
		}

		keyPlaceHolder.sKWKey = "kwKeyPlaceHolder";

		keyPlaceHolder.prototype = new i18n();
		keyPlaceHolder.prototype.constructor = keyPlaceHolder;
		keyPlaceHolder.constructor = i18n.prototype.constructor;

		keyPlaceHolder.prototype.check =
			function check() 
		{
			this.m_sKWI18NKey = keyPlaceHolder.sKWKey;

			i18n.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		keyPlaceHolder.prototype.init = 
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

		keyPlaceHolder.prototype.i18nInitOR =
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
		
		keyPlaceHolder.prototype.hrInit = 
			function hrInit()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_kWValue))
			{
				//console.debug(this.kWLogDisplay("m_kWValue", this.m_kWValue));
			}
		};
		
		return keyPlaceHolder;

	}
);
