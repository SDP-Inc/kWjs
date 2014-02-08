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
		"kWUtils/value/simpleText/obj"
	],
	function
	(
		simpleText
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
			
			this.m_sKWExt		= "contextMenu";
		}

		contextMenu.sKWKey = "kwContextMenu";

		contextMenu.prototype = new simpleText();
		contextMenu.prototype.constructor = contextMenu;
		contextMenu.constructor = simpleText.prototype.constructor;

		contextMenu.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = contextMenu.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		contextMenu.prototype.init = 
			function init() 
		{
			//console.log(this.kWLogCalled());
			simpleText.prototype.init.call(this);
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

		contextMenu.prototype.stInitOR = 
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
		
		return contextMenu;

	}
);
