/**********************************************************************
 *
 * h/obj.js
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
		attr,
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

		function h()
		{
			//console.log("h::constructor");
		};

		h.prototype = new elmt();
		h.prototype.constructor = h;
		h.constructor = elmt.prototype.constructor;

		h.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		h.prototype.init = 
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
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		h.prototype.hInitOR = 
			function hInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		h.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.hCreateAttrs(); 
		};
		
		h.prototype.elmtCreateViewOR = 
			function()
		{
			return this.hCreateView();
		};
		
		h.prototype.elmtInitOR = 
			function()
		{
			this.hInit();
		};
		
		h.prototype.elmtRetrieveOR = 
			function()
		{
			this.hRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		h.prototype.hCreateAttrs = 
			function hCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attr();
		};

		h.prototype.hCreateView = 
			function hCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		h.prototype.hInit = 
			function hInit()
		{
			//console.log(this.kWLogCalled());
			this.hInitOR();
		};

		h.prototype.hRetrieve = 
			function hRetrieve()
		{
			//console.log(this.kWLogCalled());
		};

		
		return h;

	}
);
