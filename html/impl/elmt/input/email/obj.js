/**********************************************************************
 *
 * email/obj.js
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

		function email()
		{
			//console.log("email::constructor");
			this.m_sKWType = "email";
		}

		email.prototype = new input();
		email.prototype.constructor = email;
		email.constructor = input.prototype.constructor;

		email.prototype.check = 
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		email.prototype.init = 
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

		email.prototype.emailInitOR = 
			function emailInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		email.prototype.inputCreateAttrsOR = 
			function()
		{
			return this.emailCreateAttrs(); 
		};
		
		email.prototype.elmtCreateViewOR = 
			function()
		{
			return this.emailCreateView();
		};
		
		email.prototype.inputInitOR = 
			function()
		{
			this.emailInit();
		};
		
		email.prototype.inputRetrieveOR = 
			function()
		{
			this.emailRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		email.prototype.emailCreateAttrs = 
			function emailCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
	
			theAttrs = new attrs();
			
			return theAttrs;
		};

		email.prototype.emailCreateView = 
			function emailCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		email.prototype.emailInit = 
			function emailInit()
		{
			//console.log(this.kWLogCalled());
			this.emailInitOR();
		};

		email.prototype.emailRetrieve = 
			function emailRetrieve()
		{
			//console.log(this.kWLogCalled());
		};

		return email;

	}
);
