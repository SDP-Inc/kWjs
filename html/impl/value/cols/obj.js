/**********************************************************************
 *
 * cols/obj.js
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
	
		function cols() 
		{
			//console.log("cols::constructor");
			
			this.m_sKWExt		= "cols";
		}

		cols.sKWKey = "kwCols";

		cols.prototype = new simpleNum();
		cols.prototype.constructor = cols;
		cols.constructor = simpleNum.prototype.constructor;

		cols.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = cols.sKWKey;

			simpleNum.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		cols.prototype.init =
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

		cols.prototype.snInitOR =
			function()
		{
			this.colsInit(); 
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
		
		cols.prototype.colsInit = 
			function colsInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return cols;

	}
);
