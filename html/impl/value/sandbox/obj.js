/**********************************************************************
 *
 * sandbox/obj.js
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
	
		function sandbox() 
		{
			//console.log("sandbox::constructor");
			
			this.m_sKWExt		= "sandbox";
		}

		sandbox.prototype = new simpleText();
		sandbox.prototype.constructor = sandbox;
		sandbox.constructor = simpleText.prototype.constructor;

		sandbox.sKWKey = "kwSandbox";

		sandbox.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = sandbox.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		sandbox.prototype.init = 
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

		sandbox.prototype.stInitOR =
			function()
		{
			this.sandboxInit(); 
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
		
		sandbox.prototype.sandboxInit = 
			function sandboxInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return sandbox;

	}
);
