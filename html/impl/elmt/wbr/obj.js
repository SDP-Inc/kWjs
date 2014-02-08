/**********************************************************************
 *
 * wbr/obj.js
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

		function wbr()
		{
			//console.log("wbr::constructor");
			this.m_sKWTag = "wbr";
		}

		wbr.prototype = new elmt();
		wbr.prototype.constructor = wbr;
		wbr.constructor = elmt.prototype.constructor;

		wbr.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		wbr.prototype.init = 
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
	
		wbr.prototype.elmtCreateAttrsOR =
			function()
		{
			return this.wbrCreateAttrs(); 
		};
		
		wbr.prototype.elmtCreateViewOR = 
			function()
		{
			return this.wbrCreateView();
		};
		
		wbr.prototype.elmtInitOR = 
			function()
		{
			this.wbrInit();
		};
		
		wbr.prototype.elmtRetrieveOR =
			function()
		{
			this.wbrRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		wbr.prototype.wbrInitOR = 
			function wbrInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		wbr.prototype.wbrCreateAttrs = 
			function wbrCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		wbr.prototype.wbrCreateView = 
			function wbrCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		wbr.prototype.wbrInit = 
			function wbrInit()
		{
			//console.log(this.kWLogCalled());
			this.wbrInitOR();
		};

		wbr.prototype.wbrRetrieve = 
			function wbrRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return wbr;

	}
);
