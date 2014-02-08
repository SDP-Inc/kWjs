/**********************************************************************
 *
 * url/obj.js
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

		function url()
		{
			//console.log("url::constructor");
			this.m_sKWType = "url";
		}

		url.prototype = new input();
		url.prototype.constructor = url;
		url.constructor = input.prototype.constructor;

		url.prototype.check = 
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		url.prototype.init =
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

		url.prototype.urlInitOR = 
			function urlInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		url.prototype.inputCreateAttrsOR = 
			function()
		{
			return this.urlCreateAttrs(); 
		};
		
		url.prototype.elmtCreateViewOR = 
			function()
		{
			return this.urlCreateView();
		};
		
		url.prototype.inputInitOR = 
			function()
		{
			this.urlInit();
		};
		
		url.prototype.inputRetrieveOR = 
			function()
		{
			this.urlRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		url.prototype.urlCreateAttrs = 
			function urlCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
	
			theAttrs = new attrs();
			
			return theAttrs;
		};

		url.prototype.urlCreateView = 
			function urlCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		url.prototype.urlInit = 
			function urlInit()
		{
			//console.log(this.kWLogCalled());
			this.urlInitOR();
		};

		url.prototype.urlRetrieve = 
			function urlRetrieve()
		{
			//console.log(this.kWLogCalled());
		};

		return url;

	}
);
