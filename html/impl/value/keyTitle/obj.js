/**********************************************************************
 *
 * keyTitle/obj.js
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
	
		function keyTitle() 
		{
			//console.log("keyTitle::constructor");
			
			this.m_sKWExt		= "keyTitle";
		}

		keyTitle.sKWKey = "kwKeyTitle";

		keyTitle.prototype = new i18n();
		keyTitle.prototype.constructor = keyTitle;
		keyTitle.constructor = i18n.prototype.constructor;

		keyTitle.prototype.check =
			function check() 
		{
			this.m_sKWI18NKey = keyTitle.sKWKey;

			i18n.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		keyTitle.prototype.init =
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

		keyTitle.prototype.i18nInitOR =
			function()
		{
			this.keyTitleInit(); 
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
		
		keyTitle.prototype.keyTitleInit = 
			function keyTitleInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return keyTitle;

	}
);
