/**********************************************************************
 *
 * time/obj.js
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

		function time()
		{
			//console.log("time::constructor");
			this.m_sKWType = "time";
		}

		time.prototype = new input();
		time.prototype.constructor = time;
		time.constructor = input.prototype.constructor;

		time.prototype.check = 
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		time.prototype.init = 
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

		time.prototype.timeInitOR = 
			function timeInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		time.prototype.inputCreateAttrsOR = 
			function()
		{
			return this.timeCreateAttrs(); 
		};
		
		time.prototype.elmtCreateViewOR = 
			function()
		{
			return this.timeCreateView();
		};
		
		time.prototype.inputInitOR = 
			function()
		{
			this.timeInit();
		};
		
		time.prototype.inputRetrieveOR = 
			function()
		{
			this.timeRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		time.prototype.timeCreateAttrs = 
			function timeCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
	
			theAttrs = new attrs();
			
			return theAttrs;
		};

		time.prototype.timeCreateView = 
			function timeCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		time.prototype.timeInit = 
			function timeInit()
		{
			//console.log(this.kWLogCalled());
			this.timeInitOR();
		};

		time.prototype.timeRetrieve = 
			function timeRetrieve()
		{
			//console.log(this.kWLogCalled());
		};

		return time;

	}
);
