/**********************************************************************
 *
 * rows/obj.js
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
	
		function rows() 
		{
			//console.log("rows::constructor");
			
			this.m_sKWExt		= "rows";
			this.m_sKWSimpleKey	= "kwRows"
		}

		rows.sKWKey = "kwRows";

		rows.prototype = new simpleNum();
		rows.prototype.constructor = rows;
		rows.constructor = simpleNum.prototype.constructor;

		rows.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = rows.sKWKey;

			simpleNum.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		rows.prototype.init =
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

		rows.prototype.snInitOR =
			function()
		{
			this.rowsInit(); 
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
		
		rows.prototype.rowsInit = 
			function rowsInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return rows;

	}
);
