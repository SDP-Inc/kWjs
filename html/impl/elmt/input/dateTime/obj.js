/**********************************************************************
 *
 * dateTime/obj.js
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

		function dateTime()
		{
			//console.log("dateTime::constructor");
			this.m_sKWType = "dateTime";
		}

		dateTime.prototype = new input();
		dateTime.prototype.constructor = dateTime;
		dateTime.constructor = input.prototype.constructor;

		dateTime.prototype.check = 
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		dateTime.prototype.init = 
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

		dateTime.prototype.dtInitOR = 
			function dtInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		dateTime.prototype.inputCreateAttrsOR = 
			function()
		{
			return this.dtCreateAttrs(); 
		};
		
		dateTime.prototype.elmtCreateViewOR = 
			function()
		{
			return this.dtCreateView();
		};
		
		dateTime.prototype.inputInitOR = 
			function()
		{
			this.dtInit();
		};
		
		dateTime.prototype.inputRetrieveOR = 
			function()
		{
			this.dtRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		dateTime.prototype.dtCreateAttrs = 
			function dtCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
	
			theAttrs = new attrs();
			
			return theAttrs;
		};

		dateTime.prototype.dtCreateView = 
			function dtCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		dateTime.prototype.dtInit = 
			function dtInit()
		{
			//console.log(this.kWLogCalled());
			this.dtInitOR();
		};

		dateTime.prototype.dtRetrieve = 
			function dtRetrieve()
		{
			//console.log(this.kWLogCalled());
		};

		return dateTime;

	}
);
