/**********************************************************************
 *
 * date/obj.js
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

		function date()
		{
			//console.log("date::constructor");
			this.m_sKWType = "date";
		}

		date.prototype = new input();
		date.prototype.constructor = date;
		date.constructor = input.prototype.constructor;

		date.prototype.check = 
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		date.prototype.init = 
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

		date.prototype.dateInitOR = 
			function dateInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		date.prototype.inputCreateAttrsOR = 
			function()
		{
			return this.dateCreateAttrs(); 
		};
		
		date.prototype.elmtCreateViewOR = 
			function()
		{
			return this.dateCreateView();
		};
		
		date.prototype.inputInitOR = 
			function()
		{
			this.dateInit();
		};
		
		date.prototype.inputRetrieveOR = 
			function()
		{
			this.dateRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		date.prototype.dateCreateAttrs = 
			function dateCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
	
			theAttrs = new attrs();
			
			return theAttrs;
		};

		date.prototype.dateCreateView = 
			function dateCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		date.prototype.dateInit = 
			function dateInit()
		{
			//console.log(this.kWLogCalled());
			this.dateInitOR();
		};

		date.prototype.dateRetrieve = 
			function dateRetrieve()
		{
			//console.log(this.kWLogCalled());
		};

		return date;

	}
);
