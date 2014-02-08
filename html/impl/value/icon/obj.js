/**********************************************************************
 *
 * icon/obj.js
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
	
		function icon() 
		{
			//console.log("icon::constructor");
			
			this.m_sKWExt		= "icon";
		}

		icon.sKWKey = "kwIcon";

		icon.prototype = new simpleText();
		icon.prototype.constructor = icon;
		icon.constructor = simpleText.prototype.constructor;

		icon.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = icon.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		icon.prototype.init = 
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

		icon.prototype.stInitOR =
			function()
		{
			this.iconInit(); 
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
		
		icon.prototype.iconInit = 
			function iconInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return icon;

	}
);
