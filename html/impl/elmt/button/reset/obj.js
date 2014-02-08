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

		function reset()
		{
			//console.log("reset::constructor");
			this.m_sKWType = "reset";
		}

		reset.prototype = new button();
		reset.prototype.constructor = reset;
		reset.constructor = button.prototype.constructor;

		reset.prototype.check = 
			function check()
		{
			button.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		reset.prototype.init = 
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
	
		reset.prototype.buttonCreateAttrsOR = 
			function()
		{
			return this.resetCreateAttrs(); 
		};
		
		reset.prototype.buttonInitOR = 
			function()
		{
			this.resetInit();
		};
		
		reset.prototype.buttonRetrieveOR = 
			function()
		{
			this.resetRetrieve();
		};
		
		reset.prototype.elmtCreateViewOR =
			function()
		{
			return this.resetCreateView();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		reset.prototype.resetCreateAttrs = 
			function resetCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
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
