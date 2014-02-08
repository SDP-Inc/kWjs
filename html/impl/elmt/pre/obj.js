/**********************************************************************
 *
 * pre/obj.js
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

		function pre()
		{
			//console.log("pre::constructor");
			this.m_sKWTag = "pre";
		}

		pre.prototype = new elmt();
		pre.prototype.constructor = pre;
		pre.constructor = elmt.prototype.constructor;

		pre.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		pre.prototype.init =
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
	
		pre.prototype.elmtCreateAttrsOR =
			function()
		{
			return this.preCreateAttrs(); 
		};
		
		pre.prototype.elmtCreateViewOR = 
			function()
		{
			return this.preCreateView();
		};
		
		pre.prototype.elmtInitOR =
			function()
		{
			this.preInit();
		};
		
		pre.prototype.elmtRetrieveOR = 
			function()
		{
			this.preRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		pre.prototype.preInitOR = 
			function preInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		pre.prototype.preCreateAttrs = 
			function preCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		pre.prototype.preCreateView = 
			function preCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		pre.prototype.preInit = 
			function preInit()
		{
			//console.log(this.kWLogCalled());
			this.preInitOR();
		};

		pre.prototype.preRetrieve = 
			function preRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return pre;

	}
);
