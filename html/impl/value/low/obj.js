/**********************************************************************
 *
 * low/obj.js
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
	
		function low() 
		{
			//console.log("low::constructor");
			
			this.m_sKWExt		= "low";
		}

		low.sKWKey = "kwLow";

		low.prototype = new simpleNum();
		low.prototype.constructor = low;
		low.constructor = simpleNum.prototype.constructor;

		low.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = low.sKWKey;

			simpleNum.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		low.prototype.init =
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

		low.prototype.snInitOR =
			function()
		{
			this.lowInit(); 
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
		
		low.prototype.lowInit = 
			function lowInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return low;

	}
);
