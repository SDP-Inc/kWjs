/**********************************************************************
 *
 * hRefLang/obj.js
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
	
		function hRefLang() 
		{
			//console.log("hRefLang::constructor");
			
			this.m_sKWExt	    = "hRefLang";
		}

		hRefLang.sKWKey = "kwKeyHRefLang";

		hRefLang.prototype = new i18n();
		hRefLang.prototype.constructor = hRefLang;
		hRefLang.constructor = i18n.prototype.constructor;

		hRefLang.prototype.check = 
			function check() 
		{
			this.m_sKWI18NKey = hRefLang.sKWKey;

			i18n.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		hRefLang.prototype.init = 
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

		hRefLang.prototype.i18nInitOR = 
			function()
		{
			this.hrlInit(); 
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
		
		hRefLang.prototype.hrlInit = 
			function hrlInit()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_kWValue))
			{
				//console.debug(this.kWLogDisplay("m_kWValue", this.m_kWValue));
			}
		};
		
		return hRefLang;

	}
);
