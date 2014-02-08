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
		"../../../attrs/command/simple/obj",
		"../../../view/command/simple/obj",
		"../obj",
		"kWStat/validate",
		"jquery"
	], 
	function
	(
		attrs,
		view,
		command,
		validate,
		$
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
			this.m_sKWType = "command";
		}

		simple.prototype = new command();
		simple.prototype.constructor = simple;
		simple.constructor = command.prototype.constructor;

		simple.prototype.check = function check()
		{
			command.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		simple.prototype.init = function init()
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
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		simple.prototype.simpleInitOR = 
			function simpleInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		simple.prototype.commandCreateAttrsOR = function()
		{
			return this.simpleCreateAttrs(); 
		};
		
		simple.prototype.commandInitOR = function()
		{
			this.simpleInit();
		};
		
		simple.prototype.commandRetrieveOR = function()
		{
			this.simpleRetrieve();
		};
		
		simple.prototype.elmtCreateViewOR = function()
		{
			return this.simpleCreateView();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		simple.prototype.simpleCreateAttrs = 
			function simpleCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		simple.prototype.simpleCreateView = 
			function simpleCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		simple.prototype.simpleInit = 
			function simpleInit()
		{
			//console.log(this.kWLogCalled());
			this.simpleInitOR();
		};
		
		simple.prototype.simpleRetrieve = 
			function simpleRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return simple;

	}
);
