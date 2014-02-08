/**********************************************************************
 *
 * p/obj.js
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
	//***		pubpc initiapzors
	//***
	//*******************************************************************//

		function p()
		{
			//console.log("p::constructor");
			this.m_sKWTag = "p";
		}

		p.prototype = new elmt();
		p.prototype.constructor = p;
		p.constructor = elmt.prototype.constructor;

		p.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		p.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			elmt.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		pubpc accessors
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		pubpc callbacks
	//***
	//*******************************************************************//
	
	//*******************************************************************//
	//***																	   
	//***		pubpc methods
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		p.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.pCreateAttrs(); 
		};
		
		p.prototype.elmtCreateViewOR = 
			function()
		{
			return this.pCreateView();
		};
		
		p.prototype.elmtInitOR = 
			function()
		{
			this.pInit();
		};
		
		p.prototype.elmtRetrieveOR = 
			function()
		{
			this.pRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		p.prototype.pInitOR = 
			function pInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		p.prototype.pCreateAttrs = 
			function pCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		p.prototype.pCreateView = 
			function pCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		p.prototype.pInit = 
			function pInit()
		{
			//console.log(this.kWLogCalled());
			this.pInitOR();
		};
		
		p.prototype.pRetrieve = 
			function pRetrieve()
		{
			//console.log(this.kWLogCalled());
		};

		return p;

	}
);
