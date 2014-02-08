/**********************************************************************
 *
 * step/obj.js
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
	
		function step() 
		{
			//console.log("step::constructor");
			
			this.m_sKWExt		= "step";
		}

		step.sKWKey = "kwStep";

		step.prototype = new simpleNum();
		step.prototype.constructor = step;
		step.constructor = simpleNum.prototype.constructor;

		step.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = step.sKWKey;

			simpleNum.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		step.prototype.init = 
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

		step.prototype.snInitOR = 
			function()
		{
			this.stepInit(); 
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
		
		step.prototype.stepInit = 
			function stepInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return step;

	}
);
