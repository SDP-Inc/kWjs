/**********************************************************************
 *
 * keyHtml/obj.js
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
		"kWUtils/value/i18n/obj"
	],
	function
	(
		i18n
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function keyHtml()
		{
			//console.log("html::constructor");
			
			this.m_sKWExt		= "keyHtml";
		}

		keyHtml.sKWKey = "kwKeyHtml";

		keyHtml.prototype = new i18n();
		keyHtml.prototype.constructor = keyHtml;
		keyHtml.constructor = i18n.prototype.constructor;

		keyHtml.prototype.check =
			function check() 
		{
			this.m_sKWI18NKey = keyHtml.sKWKey;

			i18n.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		keyHtml.prototype.init =
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

		keyHtml.prototype.i18nInitOR =
			function()
		{
			this.khInit();
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

		keyHtml.prototype.khInit =
			function khInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return keyHtml;

	}
);
