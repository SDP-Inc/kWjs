/**********************************************************************
 *
 * ul/obj.js
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

		function ul()
		{
			//console.log("ul::constructor");
			this.m_sKWTag = "ul";
		};

		ul.prototype = new elmt();
		ul.prototype.constructor = ul;
		ul.constructor = elmt.prototype.constructor;

		ul.prototype.check =
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		ul.prototype.init = 
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
	
		ul.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.ulCreateAttrs(); 
		};
		
		ul.prototype.elmtCreateViewOR =
			function()
		{
			return this.ulCreateView();
		};
		
		ul.prototype.elmtInitOR = 
			function()
		{
			this.ulInit();
		};
		
		ul.prototype.elmtRetrieveOR =
			function()
		{
			this.ulRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		ul.prototype.ulInitOR = 
			function ulInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		ul.prototype.ulCreateAttrs = 
			function ulCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		ul.prototype.ulCreateView = 
			function ulCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		ul.prototype.ulInit = 
			function ulInit()
		{
			//console.log(this.kWLogCalled());
			this.ulInitOR();
		};
		
		ul.prototype.ulRetrieve = 
			function ulRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return ul;

	}
);
