/**********************************************************************
 *
 * b/obj.js
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

		function b()
		{
			//console.log("b::constructor");
			this.m_sKWTag = "b";
		};

		b.prototype = new elmt();
		b.prototype.constructor = b;
		b.constructor = elmt.prototype.constructor;

		b.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		b.prototype.init = 
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
	
		b.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.bCreateAttrs(); 
		};
		
		b.prototype.elmtCreateViewOR = 
			function()
		{
			return this.bCreateView();
		};
		
		b.prototype.elmtInitOR =
			function()
		{
			this.bInit();
		};
		
		b.prototype.elmtRetrieveOR = 
			function()
		{
			this.bRetrieve(); 
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		b.prototype.bInitOR = 
			function bInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		b.prototype.bCreateAttrs = 
			function bCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		b.prototype.bCreateView = 
			function bCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		b.prototype.bInit = 
			function bInit()
		{
			//console.log(this.kWLogCalled());
			this.bInitOR();
		};

		b.prototype.bRetrieve = 
			function bRetrieve()
		{
			//console.log(this.kWLogCalled());
		};

		return b;

	}
);
