/**********************************************************************
 *
 * button/obj.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2013 iTKunst Corporation
 *
 *
 **********************************************************************/

define
(
	[	
		"../../../attrs/input/simple/obj",
		"../../../view/input/simple/obj",
		"../obj",
		"kWStat/validate",
		"jquery"
	], 
	function
	(
		attrs,
		view,
		input,
		validate,
		$
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function button()
		{
			//console.log("button::constructor");
			this.m_sKWType = "button";
		}

		button.prototype = new input();
		button.prototype.constructor = button;
		button.constructor = input.prototype.constructor;

		button.prototype.check = 
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		button.prototype.init = 
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
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		button.prototype.buttonHandleClickOR = 
			function buttonHandleClickOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
		button.prototype.buttonInitOR = 
			function buttonInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		button.prototype.elmtHandleClickOR = 
			function()
		{
			this.buttonHandleClick();
		};
		
		button.prototype.inputCreateAttrsOR = 
			function()
		{
			return this.buttonCreateAttrs(); 
		};
		
		button.prototype.elmtCreateViewOR = 
			function()
		{
			return this.buttonCreateView();
		};
		
		button.prototype.inputInitOR = 
			function()
		{
			this.buttonInit();
		};
		
		button.prototype.inputRetrieveOR = 
			function()
		{
			this.buttonRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		button.prototype.buttonCreateAttrs = 
			function buttonCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
	
			theAttrs = new attrs();
			return theAttrs;
		};

		button.prototype.buttonCreateView = 
			function buttonCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		button.prototype.buttonHandleClick = 
			function buttonHandleClick()
		{
			//console.log(this.kWLogCalled());
			this.buttonHandleClickOR();
		};  
		
		button.prototype.buttonInit = 
			function buttonInit()
		{
			//console.log(this.kWLogCalled());
			this.kWSubscribeClick();
			this.buttonInitOR();
		};

		button.prototype.buttonRetrieve = 
			function buttonRetrieve()
		{
			//console.log(this.kWLogCalled());
		};

		return button;

	}
);
