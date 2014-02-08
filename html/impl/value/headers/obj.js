/**********************************************************************
 *
 * headers/obj.js
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
	
		function headers() 
		{
			//console.log("headers::constructor");
			
			this.m_sKWExt		= "headers";
		}

		headers.sKWKey = "kwHeaders";

		headers.prototype = new simpleText();
		headers.prototype.constructor = headers;
		headers.constructor = simpleText.prototype.constructor;

		headers.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = headers.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		headers.prototype.init = 
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

		headers.prototype.stInitOR = 
			function()
		{
			this.headersInit(); 
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
		
		headers.prototype.headersInit = 
			function headersInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return headers;

	}
);
