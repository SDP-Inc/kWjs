/**********************************************************************
 *
 * week/obj.js
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

		function week()
		{
			//console.log("week::constructor");
			this.m_sKWType = "week";
		}

		week.prototype = new input();
		week.prototype.constructor = week;
		week.constructor = input.prototype.constructor;

		week.prototype.check = 
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		week.prototype.init = 
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

		week.prototype.weekInitOR = 
			function weekInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		week.prototype.inputCreateAttrsOR = 
			function()
		{
			return this.weekCreateAttrs(); 
		};
		
		week.prototype.elmtCreateViewOR = 
			function()
		{
			return this.weekCreateView();
		};
		
		week.prototype.inputInitOR = 
			function()
		{
			this.weekInit();
		};
		
		week.prototype.inputRetrieveOR = 
			function()
		{
			this.weekRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		week.prototype.weekCreateAttrs = 
			function weekCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
	
			theAttrs = new attrs();
			
			return theAttrs;
		};

		week.prototype.weekCreateView = 
			function weekCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		week.prototype.weekInit = 
			function weekInit()
		{
			//console.log(this.kWLogCalled());
			this.weekInitOR();
		};

		week.prototype.weekRetrieve = 
			function weekRetrieve()
		{
			//console.log(this.kWLogCalled());
		};

		return week;

	}
);
