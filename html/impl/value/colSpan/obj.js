/**********************************************************************
 *
 * colSpan/obj.js
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
	
		function colSpan() 
		{
			//console.log("colSpan::constructor");
			
			this.m_sKWExt		= "colSpan";
		}

		colSpan.sKWKey = "kwColSpan";

		colSpan.prototype = new simpleNum();
		colSpan.prototype.constructor = colSpan;
		colSpan.constructor = simpleNum.prototype.constructor;

		colSpan.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = colSpan.sKWKey;

			simpleNum.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		colSpan.prototype.init = 
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

		colSpan.prototype.snInitOR =
			function()
		{
			this.csInit(); 
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
		
		colSpan.prototype.csInit = 
			function csInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return colSpan;

	}
);
