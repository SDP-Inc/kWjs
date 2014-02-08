/**********************************************************************
 *
 * span/obj.js
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
		"../../attrs/simple/obj",
		"../../view/simple/obj",
		"../../../base/elmt/obj",
		"kWStat/validate"
	], 
	function
	(
		attrs,
		view,
		elmt,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function span()
		{
			//console.log("span::constructor");
			this.m_sKWTag = "span";
		}

		span.prototype = new elmt();
		span.prototype.constructor = span;
		span.constructor = elmt.prototype.constructor;

		span.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		span.prototype.init =
			function init()
		{
			//console.log(this.kWLogCalled());
			elmt.prototype.init.call(this);
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
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		span.prototype.elmtCreateAttrsOR =
			function()
		{
			return this.spanCreateAttrs(); 
		};
		
		span.prototype.elmtCreateViewOR =
			function()
		{
			return this.spanCreateView();
		};
		
		span.prototype.elmtInitOR =
			function()
		{
			this.spanInit();
		};
		
		span.prototype.elmtRetrieveOR = 
			function()
		{
			this.spanRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//
	
		span.prototype.spanInitOR = 
			function spanInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		span.prototype.spanCreateAttrs = 
			function spanCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		span.prototype.spanCreateView = 
			function spanCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		span.prototype.spanInit = 
			function spanInit()
		{
			//console.log(this.kWLogCalled());
			this.spanInitOR();
		};
		
		span.prototype.spanRetrieve = 
			function spanRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return span;

	}
);
