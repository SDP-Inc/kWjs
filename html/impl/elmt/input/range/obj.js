/**********************************************************************
 *
 * range/obj.js
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

		function range()
		{
			//console.log("range::constructor");
			this.m_sKWType = "range";
		}

		range.prototype = new input();
		range.prototype.constructor = range;
		range.constructor = input.prototype.constructor;

		range.prototype.check = 
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		range.prototype.init = 
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

		range.prototype.rangeInitOR = 
			function rangeInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		range.prototype.inputCreateAttrsOR = 
			function()
		{
			return this.rangeCreateAttrs(); 
		};
		
		range.prototype.elmtCreateViewOR = 
			function()
		{
			return this.rangeCreateView();
		};
		
		range.prototype.inputInitOR = 
			function()
		{
			this.rangeInit();
		};
		
		range.prototype.inputRetrieveOR = 
			function()
		{
			this.rangeRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		range.prototype.rangeCreateAttrs = 
			function rangeCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
	
			theAttrs = new attrs();
			
			return theAttrs;
		};

		range.prototype.rangeCreateView = 
			function rangeCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		range.prototype.rangeInit = 
			function rangeInit()
		{
			//console.log(this.kWLogCalled());
			this.rangeInitOR();
		};

		range.prototype.rangeRetrieve = 
			function rangeRetrieve()
		{
			//console.log(this.kWLogCalled());
		};

		return range;

	}
);
