/**********************************************************************
 *
 * dateTime/obj.js
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
	
		function dateTime() 
		{
			//console.log("dateTime::constructor");
			
			this.m_sKWExt		= "dateTime";
		}

		dateTime.sKWKey = "kwDateTime";

		dateTime.prototype = new simpleText();
		dateTime.prototype.constructor = dateTime;
		dateTime.constructor = simpleText.prototype.constructor;

		dateTime.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = dateTime.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		dateTime.prototype.init = 
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

		dateTime.prototype.stInitOR =
			function()
		{
			this.dtInit(); 
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
		
		dateTime.prototype.dtInit = 
			function dtInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return dateTime;

	}
);
