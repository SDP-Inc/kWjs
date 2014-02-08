/**********************************************************************
 *
 * hidden/obj.js
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
		"../../../attrs/input/simple/obj",
		"../../../view/input/simple/obj",
		"../obj",
		"jquery",
		"kWStat/validate"
	], 
	function
	(
		attrs,
		view,
		input,
		$,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function hidden()
		{
			//console.log("hidden::constructor");
			this.m_sKWType = "hidden";
		}

		hidden.prototype = new input();
		hidden.prototype.constructor = hidden;
		hidden.constructor = input.prototype.constructor;

		hidden.prototype.check = 
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		hidden.prototype.init = 
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

		hidden.prototype.hiddenInitOR = 
			function hiddenInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		hidden.prototype.inputCreateAttrsOR = 
			function()
		{
			return this.hiddenCreateAttrs(); 
		};
		
		hidden.prototype.elmtCreateViewOR = 
			function()
		{
			return this.hiddenCreateView();
		};
		
		hidden.prototype.inputInitOR = 
			function()
		{
			this.hiddenInit();
		};
		
		hidden.prototype.inputRetrieveOR = 
			function()
		{
			this.hiddenRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		hidden.prototype.hiddenCreateAttrs = 
			function hiddenCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
	
			theAttrs = new attrs();
			
			return theAttrs;
		};

		hidden.prototype.hiddenCreateView = 
			function hiddenCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		hidden.prototype.hiddenInit = 
			function hiddenInit()
		{
			//console.log(this.kWLogCalled());
			this.hiddenInitOR();
		};

		hidden.prototype.hiddenRetrieve = 
			function hiddenRetrieve()
		{
			//console.log(this.kWLogCalled());
		};

		return hidden;

	}
);
