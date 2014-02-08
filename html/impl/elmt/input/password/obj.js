/**********************************************************************
 *
 * password/obj.js
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

		function password()
		{
			//console.log("password::constructor");
			this.m_sKWType = "password";
		}

		password.prototype = new input();
		password.prototype.constructor = password;
		password.constructor = input.prototype.constructor;

		password.prototype.check = 
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		password.prototype.init = 
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

		password.prototype.passwordInitOR = 
			function passwordInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		password.prototype.inputCreateAttrsOR = 
			function()
		{
			return this.passwordCreateAttrs(); 
		};
		
		password.prototype.elmtCreateViewOR = 
			function()
		{
			return this.passwordCreateView();
		};
		
		password.prototype.inputInitOR = 
			function()
		{
			this.passwordInit();
		};
		
		password.prototype.inputRetrieveOR = 
			function()
		{
			this.passwordRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		password.prototype.passwordCreateAttrs = 
			function passwordCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
	
			theAttrs = new attrs();
			
			return theAttrs;
		};

		password.prototype.passwordCreateView = 
			function passwordCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		password.prototype.passwordInit = 
			function passwordInit()
		{
			//console.log(this.kWLogCalled());
			this.passwordInitOR();
		};

		password.prototype.passwordRetrieve = 
			function passwordRetrieve()
		{
			//console.log(this.kWLogCalled());
		};

		return password;

	}
);
