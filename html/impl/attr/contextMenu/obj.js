/**********************************************************************
 *
 * contextMenu/obj.js
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
		"../../../base/attr/string/obj",
		"kWStat/validate"
	],
	function
	(
		string,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function contextMenu() 
		{
			//console.log("contextMenu::constructor");
			
			this.m_sKWExt	= "contextMenu";

			this.m_sKWAttr	= "contextMenu";
		}

		contextMenu.prototype = new string();
		contextMenu.prototype.constructor = contextMenu;
		contextMenu.constructor = string.prototype.constructor;

		contextMenu.prototype.check =
			function check() 
		{
			string.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		contextMenu.prototype.init =
			function init() 
		{
			//console.log(this.kWLogCalled());
			string.prototype.init.call(this);
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

		contextMenu.prototype.baseRetrieveOR = 
			function()
		{
			this.cmRetrieve(); 
		};
		
		contextMenu.prototype.stringInitOR = 
			function()
		{
			this.cmInit(); 
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
		
		contextMenu.prototype.cmInit = 
			function cmInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		contextMenu.prototype.cmRetrieve = 
			function cmRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			this.m_kWValueView = this.m_kWView.getKWContextMenu();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return contextMenu;

	}
);
