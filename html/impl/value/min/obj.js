/**********************************************************************
 *
 * min/obj.js
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
	
		function min() 
		{
			//console.log("min::constructor");
			
			this.m_sKWExt		= "min";
			this.m_sKWSimpleKey	= ""
		}

		min.sKWKey = "kwMin";

		min.prototype = new simpleNum();
		min.prototype.constructor = min;
		min.constructor = simpleNum.prototype.constructor;

		min.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = min.sKWKey;

			simpleNum.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		min.prototype.init = 
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

		min.prototype.snInitOR = function()
		{
			this.minInit(); 
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
		
		min.prototype.minInit = 
			function minInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return min;

	}
);
