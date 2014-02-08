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
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		html,
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

		simple.prototype = new html();
		simple.prototype.constructor = simple;
		simple.constructor = html.prototype.constructor;

		simple.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		simple.prototype.init =
			function init()
		{
			//console.log(this.kWLogCalled());
			html.prototype.init.call(this);
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

		simple.prototype.htmlCreateOR =
			function()
			{
				this.simpleCreate();
			};

		simple.prototype.htmlDeleteOR =
			function()
			{
				this.simpleDelete();
			};

		simple.prototype.htmlInitOR =
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
