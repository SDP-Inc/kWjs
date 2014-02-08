/**********************************************************************
 *
 * simple/obj.js
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
		"../obj",
		"kWStat/validate"
	], 
	function
	(
		input,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function simple()
		{
			//console.log("simple::constructor");
		}

		simple.prototype = new input();
		simple.prototype.constructor = simple;
		simple.constructor = input.prototype.constructor;

		simple.prototype.check =
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		simple.prototype.init =
			function init()
		{
			//console.log(this.kWLogCalled());
			input.prototype.init.call(this);
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

		simple.prototype.inputCreateOR =
			function()
		{
			this.simpleCreate();
		};

		simple.prototype.inputDeleteOR =
			function()
		{
			this.simpleDelete();
		};

		simple.prototype.inputInitOR =
			function()
		{
			this.simpleInit();
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

		simple.prototype.simpleCreate =
			function simpleCreate()
		{
			//console.log(this.kWLogCalled());
		};

		simple.prototype.simpleDelete =
			function simpleDelete()
		{
			//console.log(this.kWLogCalled());
		};

		simple.prototype.simpleInit =
			function simpleInit()
		{
			//console.log(this.kWLogCalled());
		};

		return simple;

	}
);
