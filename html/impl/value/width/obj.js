/**********************************************************************
 *
 * width/obj.js
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
		"kWUtils/value/simpleNum/obj"
	],
	function
	(
		simpleNum
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function width() 
		{
			//console.log("width::constructor");
			
			this.m_sKWExt		= "width";
		}

		width.sKWKey = "kwWidth";

		width.prototype = new simpleNum();
		width.prototype.constructor = width;
		width.constructor = simpleNum.prototype.constructor;

		width.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = width.sKWKey;

			simpleNum.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		width.prototype.init =
			function init() 
		{
			//console.log(this.kWLogCalled());
			simpleNum.prototype.init.call(this);
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

		width.prototype.snInitOR =
			function()
		{
			this.widthInit(); 
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
		
		width.prototype.widthInit = 
			function widthInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return width;

	}
);
