/**********************************************************************
 *
 * number/obj.js
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

		function number()
		{
			//console.log("number::constructor");
			this.m_sKWType = "number";
		}

		number.prototype = new input();
		number.prototype.constructor = number;
		number.constructor = input.prototype.constructor;

		number.prototype.check = 
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		number.prototype.init = 
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

		number.prototype.numberInitOR = 
			function numberInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		number.prototype.inputCreateAttrsOR = 
			function()
		{
			return this.numberCreateAttrs(); 
		};
		
		number.prototype.elmtCreateViewOR = 
			function()
		{
			return this.numberCreateView();
		};
		
		number.prototype.inputInitOR = 
			function()
		{
			this.numberInit();
		};
		
		number.prototype.inputRetrieveOR = 
			function()
		{
			this.numberRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		number.prototype.numberCreateAttrs = 
			function numberCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
	
			theAttrs = new attrs();
			
			return theAttrs;
		};

		number.prototype.numberCreateView = 
			function numberCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		number.prototype.numberInit = 
			function numberInit()
		{
			//console.log(this.kWLogCalled());
			this.numberInitOR();
		};

		number.prototype.numberRetrieve = 
			function numberRetrieve()
		{
			//console.log(this.kWLogCalled());
		};

		return number;

	}
);
