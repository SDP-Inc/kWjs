/**********************************************************************
 *
 * value/obj.js
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
		"kWUtils/value/simpleText/obj"
	],
	function
	(
		simpleText
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function value() 
		{
			//console.log("value::constructor");
			
			this.m_sKWExt		= "value";
		}

		value.sKWKey = "kwValue";

		value.prototype = new simpleText();
		value.prototype.constructor = value;
		value.constructor = simpleText.prototype.constructor;

		value.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = value.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		value.prototype.init =
			function init() 
		{
			//console.log(this.kWLogCalled());
			simpleText.prototype.init.call(this);
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

		value.prototype.stInitOR = 
			function()
		{
			this.valueInit(); 
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
		
		value.prototype.valueInit = 
			function valueInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return value;

	}
);
