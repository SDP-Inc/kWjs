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
		button,
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

		simple.prototype = new button();
		simple.prototype.constructor = simple;
		simple.constructor = button.prototype.constructor;

		simple.prototype.check = function check()
		{
			button.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		simple.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			button.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		public callsimpleacks
	//***
	//*******************************************************************//
	
	//*******************************************************************//
	//***																	   
	//***		public formMethods
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private formMethods (non-overrides)
	//***
	//*******************************************************************//
	
		simple.prototype.buttonCreateOR = function()
		{
			this.simpleCreate();
		};

		simple.prototype.baseDeleteOR =
			function()
			{
				this.simpleDelete();
			};

		simple.prototype.buttonInitOR = function()
		{
			this.simpleInit();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private formMethods (overrides)
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private formMethods
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
