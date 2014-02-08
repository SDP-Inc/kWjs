/**********************************************************************
 *
 * dateTimeLocal/obj.js
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

		function dateTimeLocal()
		{
			//console.log("dateTimeLocal::constructor");
			this.m_sKWType = "dateTimeLocal";
		}

		dateTimeLocal.prototype = new input();
		dateTimeLocal.prototype.constructor = dateTimeLocal;
		dateTimeLocal.constructor = input.prototype.constructor;

		dateTimeLocal.prototype.check = 
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		dateTimeLocal.prototype.init = 
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

		dateTimeLocal.prototype.dtlInitOR = 
			function dtlInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		dateTimeLocal.prototype.inputCreateAttrsOR = 
			function()
		{
			return this.dtlCreateAttrs(); 
		};
		
		dateTimeLocal.prototype.elmtCreateViewOR = 
			function()
		{
			return this.dtlCreateView();
		};
		
		dateTimeLocal.prototype.inputInitOR = 
			function()
		{
			this.dtlInit();
		};
		
		dateTimeLocal.prototype.inputRetrieveOR = 
			function()
		{
			this.dtlRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		dateTimeLocal.prototype.dtlCreateAttrs = 
			function dtlCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
	
			theAttrs = new attrs();
			
			return theAttrs;
		};

		dateTimeLocal.prototype.dtlCreateView = 
			function dtlCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		dateTimeLocal.prototype.dtlInit = 
			function dtlInit()
		{
			//console.log(this.kWLogCalled());
			this.dtlInitOR();
		};

		dateTimeLocal.prototype.dtlRetrieve = 
			function dtlRetrieve()
		{
			//console.log(this.kWLogCalled());
		};

		return dateTimeLocal;

	}
);
