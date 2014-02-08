/**********************************************************************
 *
 * tel/obj.js
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

		function tel()
		{
			//console.log("tel::constructor");
			this.m_sKWType = "tel";
		}

		tel.prototype = new input();
		tel.prototype.constructor = tel;
		tel.constructor = input.prototype.constructor;

		tel.prototype.check = 
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		tel.prototype.init =
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

		tel.prototype.telInitOR = 
			function telInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		tel.prototype.inputCreateAttrsOR =
			function()
		{
			return this.telCreateAttrs(); 
		};
		
		tel.prototype.elmtCreateViewOR =
			function()
		{
			return this.telCreateView();
		};
		
		tel.prototype.inputInitOR = 
			function()
		{
			this.telInit();
		};
		
		tel.prototype.inputRetrieveOR = 
			function()
		{
			this.telRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		tel.prototype.telCreateAttrs = 
			function telCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
	
			theAttrs = new attrs();
			
			return theAttrs;
		};

		tel.prototype.telCreateView = 
			function telCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		tel.prototype.telInit = 
			function telInit()
		{
			//console.log(this.kWLogCalled());
			this.telInitOR();
		};

		tel.prototype.telRetrieve = 
			function telRetrieve()
		{
			//console.log(this.kWLogCalled());
		};

		return tel;

	}
);
