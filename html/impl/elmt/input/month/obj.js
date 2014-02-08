/**********************************************************************
 *
 * month/obj.js
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

		function month()
		{
			//console.log("month::constructor");
			this.m_sKWType = "month";
		}

		month.prototype = new input();
		month.prototype.constructor = month;
		month.constructor = input.prototype.constructor;

		month.prototype.check = 
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		month.prototype.init =
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

		month.prototype.monthInitOR = 
			function monthInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		month.prototype.inputCreateAttrsOR = 
			function()
		{
			return this.monthCreateAttrs(); 
		};
		
		month.prototype.elmtCreateViewOR = 
			function()
		{
			return this.monthCreateView();
		};
		
		month.prototype.inputInitOR = 
			function()
		{
			this.monthInit();
		};
		
		month.prototype.inputRetrieveOR = 
			function()
		{
			this.monthRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		month.prototype.monthCreateAttrs = 
			function monthCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
	
			theAttrs = new attrs();
			
			return theAttrs;
		};

		month.prototype.monthCreateView = 
			function monthCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		month.prototype.monthInit = 
			function monthInit()
		{
			//console.log(this.kWLogCalled());
			this.monthInitOR();
		};

		month.prototype.monthRetrieve = 
			function monthRetrieve()
		{
			//console.log(this.kWLogCalled());
		};

		return month;

	}
);
