/**********************************************************************
 *
 * optimum/obj.js
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
	
		function optimum() 
		{
			//console.log("optimum::constructor");
			
			this.m_sKWExt		= "optimum";
		}

		optimum.sKWKey = "kwOptimum";

		optimum.prototype = new simpleNum();
		optimum.prototype.constructor = optimum;
		optimum.constructor = simpleNum.prototype.constructor;

		optimum.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = optimum.sKWKey;

			simpleNum.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		optimum.prototype.init =
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

		optimum.prototype.snInitOR =
			function()
		{
			this.optimumInit(); 
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
		
		optimum.prototype.optimumInit = 
			function optimumInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return optimum;

	}
);
