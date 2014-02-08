/**********************************************************************
 *
 * start/obj.js
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
	
		function start() 
		{
			//console.log("start::constructor");
			
			this.m_sKWExt		= "start";
		}

		start.sKWKey = "kwStart";

		start.prototype = new simpleNum();
		start.prototype.constructor = start;
		start.constructor = simpleNum.prototype.constructor;

		start.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = start.sKWKey;

			simpleNum.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		start.prototype.init =
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

		start.prototype.snInitOR =
			function()
		{
			this.startInit(); 
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
		
		start.prototype.startInit = 
			function startInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return start;

	}
);
