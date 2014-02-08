/**********************************************************************
 *
 * method/obj.js
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
	
		function method() 
		{
			//console.log("method::constructor");
			
			this.m_sKWExt		= "method";
		}

		method.sKWKey = "kwMethod";

		method.prototype = new simpleText();
		method.prototype.constructor = method;
		method.constructor = simpleText.prototype.constructor;

		method.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = method.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		method.prototype.init = 
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

		method.prototype.stInitOR =
			function()
		{
			this.methodInit(); 
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
		
		method.prototype.methodInit = 
			function methodInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return method;

	}
);
