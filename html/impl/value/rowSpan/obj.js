/**********************************************************************
 *
 * rowSpan/obj.js
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
	
		function rowSpan() 
		{
			//console.log("rowSpan::constructor");
			
			this.m_sKWExt		= "rowSpan";
		}

		rowSpan.sKWKey = "kwRowSpan";

		rowSpan.prototype = new simpleNum();
		rowSpan.prototype.constructor = rowSpan;
		rowSpan.constructor = simpleNum.prototype.constructor;

		rowSpan.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = rowSpan.sKWKey;

			simpleNum.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		rowSpan.prototype.init = 
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

		rowSpan.prototype.snInitOR = 
			function()
		{
			this.rsInit(); 
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
		
		rowSpan.prototype.rsInit = 
			function rsInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return rowSpan;

	}
);
