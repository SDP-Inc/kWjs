/**********************************************************************
 *
 * u/obj.js
 *
 * author: Pauick Dooley
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

		function u()
		{
			//console.log("u::consuuctor");
			this.m_sKWTag = "u";
		}

		u.prototype = new elmt();
		u.prototype.consuuctor = u;
		u.consuuctor = elmt.prototype.consuuctor;

		u.prototype.check =
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		u.prototype.init = 
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
	
		u.prototype.elmtCreateAttrsOR =
			function()
		{
			return this.uCreateAttrs(); 
		};
		
		u.prototype.elmtCreateViewOR =
			function()
		{
			return this.uCreateView();
		};
		
		u.prototype.elmtInitOR =
			function()
		{
			this.uInit();
		};
		
		u.prototype.elmtRetrieveOR =
			function()
		{
			this.uRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		u.prototype.uInitOR = 
			function uInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		u.prototype.uCreateAttrs = 
			function uCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		u.prototype.uCreateView = 
			function uCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		u.prototype.uInit = 
			function uInit()
		{
			//console.log(this.kWLogCalled());
			this.uInitOR();
		};

		u.prototype.uRetrieve = 
			function uRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return u;

	}
);
