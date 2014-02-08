/**********************************************************************
 *
 * max/obj.js
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
	
		function max() 
		{
			//console.log("max::constructor");
			
			this.m_sKWExt		= "max";
		}

		max.sKWKey = "kwMax";

		max.prototype = new simpleNum();
		max.prototype.constructor = max;
		max.constructor = simpleNum.prototype.constructor;

		max.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = max.sKWKey;

			simpleNum.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		max.prototype.init =
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

		max.prototype.snInitOR =
			function()
		{
			this.maxInit(); 
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
		
		max.prototype.maxInit = 
			function maxInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return max;

	}
);
