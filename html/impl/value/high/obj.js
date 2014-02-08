/**********************************************************************
 *
 * high/obj.js
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
	
		function high() 
		{
			//console.log("high::constructor");
			
			this.m_sKWExt		= "high";
		}

		high.sKWKey = "kwHigh";

		high.prototype = new simpleNum();
		high.prototype.constructor = high;
		high.constructor = simpleNum.prototype.constructor;

		high.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = high.sKWKey;

			simpleNum.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		high.prototype.init =
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

		high.prototype.snInitOR =
			function()
		{
			this.highInit(); 
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
		
		high.prototype.highInit = 
			function highInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return high;

	}
);
