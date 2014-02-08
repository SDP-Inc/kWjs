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
		"../../../attrs/button/simple/obj",
		"../../../view/button/simple/obj",
		"../obj",
		"kWStat/validate",
		"jquery"
	], 
	function
	(
		attrs,
		view,
		button,
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
			this.m_sKWType = "";
		}

		simple.prototype = new button();
		simple.prototype.constructor = simple;
		simple.constructor = button.prototype.constructor;

		simple.prototype.check = 
			function check()
		{
			button.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		simple.prototype.init = 
			function init()
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
	
		simple.prototype.buttonCreateAttrsOR = 
			function()
		{
			return this.simpleCreateAttrs(); 
		};
		
		simple.prototype.buttonInitOR = 
			function()
		{
			this.simpleInit();
		};
		
		simple.prototype.buttonRetrieveOR = 
			function()
		{
			this.simpleRetrieve();
		};
		
		simple.prototype.elmtCreateViewOR = 
			function()
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
