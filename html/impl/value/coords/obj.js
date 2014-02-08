/**********************************************************************
 *
 * coords/obj.js
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
	
		function coords() 
		{
			//console.log("coords::constructor");
			
			this.m_sKWExt		= "coords";
		}

		coords.sKWKey = "kwCoords";

		coords.prototype = new simpleText();
		coords.prototype.constructor = coords;
		coords.constructor = simpleText.prototype.constructor;

		coords.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = coords.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		coords.prototype.init =
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

		coords.prototype.stInitOR =
			function()
		{
			this.coordsInit(); 
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
		
		coords.prototype.coordsInit = 
			function coordsInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return coords;

	}
);
