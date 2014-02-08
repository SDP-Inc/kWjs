/**********************************************************************
 *
 * reset/obj.js
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

		function reset()
		{
			//console.log("reset::constructor");
			this.m_sKWType = "reset";
		}

		reset.prototype = new input();
		reset.prototype.constructor = reset;
		reset.constructor = input.prototype.constructor;

		reset.prototype.check = 
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		reset.prototype.init = 
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

		reset.prototype.resetInitOR = 
			function resetInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		reset.prototype.inputCreateAttrsOR = 
			function()
		{
			return this.resetCreateAttrs(); 
		};
		
		reset.prototype.elmtCreateViewOR = 
			function()
		{
			return this.resetCreateView();
		};
		
		reset.prototype.inputInitOR = 
			function()
		{
			this.resetInit();
		};
		
		reset.prototype.inputRetrieveOR = 
			function()
		{
			this.resetRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		reset.prototype.resetCreateAttrs = 
			function resetCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
	
			theAttrs = new attrs();
			
			return theAttrs;
		};

		reset.prototype.resetCreateView = 
			function resetCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		reset.prototype.resetInit = 
			function resetInit()
		{
			//console.log(this.kWLogCalled());
			this.resetInitOR();
		};

		reset.prototype.resetRetrieve = 
			function resetRetrieve()
		{
			//console.log(this.kWLogCalled());
		};

		return reset;

	}
);
