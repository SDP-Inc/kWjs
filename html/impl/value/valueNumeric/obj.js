/**********************************************************************
 *
 * valueNumeric/obj.js
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
	
		function valueNumeric() 
		{
			//console.log("valueNumeric::constructor");
			
			this.m_sKWExt		= "valueNumeric";
		}

		valueNumeric.sKWKey = "kwValue";

		valueNumeric.prototype = new simpleNum();
		valueNumeric.prototype.constructor = valueNumeric;
		valueNumeric.constructor = simpleNum.prototype.constructor;

		valueNumeric.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = valueNumeric.sKWKey;

			simpleNum.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		valueNumeric.prototype.init =
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

		valueNumeric.prototype.snInitOR =
			function()
		{
			this.valueNumericInit(); 
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
		
		valueNumeric.prototype.valueNumericInit = 
			function valueNumericInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return valueNumeric;

	}
);
