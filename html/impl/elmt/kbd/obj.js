/**********************************************************************
 *
 * kbd/obj.js
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
		"kWStat/validate",
		"jquery"
	], 
	function
	(
		attrs,
		view,
		elmt,
		validate,
		$
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function kbd()
		{
			//console.log("kbd::constructor");
			this.m_sKWTag = "kbd";
		}

		kbd.prototype = new elmt();
		kbd.prototype.constructor = kbd;
		kbd.constructor = elmt.prototype.constructor;

		kbd.prototype.check = function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		kbd.prototype.init = function init()
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

		kbd.prototype.kbdInitOR = 
			function kbdInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		kbd.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.kbdCreateAttrs(); 
		};
		
		kbd.prototype.elmtCreateViewOR = 
			function()
		{
			return this.kbdCreateView();
		};
		
		kbd.prototype.elmtInitOR = 
			function()
		{
			this.kbdInit();
		};
		
		kbd.prototype.elmtRetrieveOR = 
			function()
		{
			this.kbdRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		kbd.prototype.kbdCreateAttrs = 
			function kbdCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		kbd.prototype.kbdCreateView = 
			function kbdCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		kbd.prototype.kbdInit = 
			function kbdInit()
		{
			//console.log(this.kWLogCalled());
			this.kbdInitOR();
		};
		
		kbd.prototype.kbdRetrieve = 
			function kbdRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return kbd;

	}
);
