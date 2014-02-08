/**********************************************************************
 *
 * display/obj.js
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
	
		function display() 
		{
			//console.log("display::constructor");
			
			this.m_sKWExt		= "display";
		}

		display.sKWKey = "kwDisplay";

		display.prototype = new simpleText();
		display.prototype.constructor = display;
		display.constructor = simpleText.prototype.constructor;

		display.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = display.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		display.prototype.init = 
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

		display.prototype.stInitOR = 
			function()
		{
			this.displayInit(); 
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
		
		display.prototype.displayInit = 
			function displayInit()
		{
			//console.log(this.kWLogCalled());
			//console.log(this.kWLogDisplay("m_baseValue", this.m_baseValue));
		};
		
		return display;

	}
);
