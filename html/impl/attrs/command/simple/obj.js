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
		command,
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

		simple.prototype = new command();
		simple.prototype.constructor = simple;
		simple.constructor = command.prototype.constructor;

		simple.prototype.check = 
			function check()
		{
			command.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		simple.prototype.init =
			function init()
		{
			//console.log(this.kWLogCalled());
			command.prototype.init.call(this);
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
		
		simple.prototype.commandCreateOR = 
			function()
		{
			this.simpleCreate();
		};

		simple.prototype.commandDeleteOR = function()
		{
			this.simpleDelete();
		};

		simple.prototype.commandInitOR =
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
