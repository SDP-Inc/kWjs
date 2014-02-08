/**********************************************************************
 *
 * shape/obj.js
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
	
		function shape() 
		{
			//console.log("shape::constructor");
			
			this.m_sKWExt		= "shape";
		}

		shape.sKWKey = "kwShape";

		shape.prototype = new simpleText();
		shape.prototype.constructor = shape;
		shape.constructor = simpleText.prototype.constructor;

		shape.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = shape.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		shape.prototype.init =
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

		shape.prototype.stInitOR = 
			function()
		{
			this.shapeInit(); 
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
		
		shape.prototype.shapeInit = 
			function shapeInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return shape;

	}
);
