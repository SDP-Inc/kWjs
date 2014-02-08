/**********************************************************************
 *
 * summary/obj.js
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

		function summary()
		{
			//console.log("summary::constructor");
			this.m_sKWTag = "summary";
		}

		summary.prototype = new elmt();
		summary.prototype.constructor = summary;
		summary.constructor = elmt.prototype.constructor;

		summary.prototype.check =
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		summary.prototype.init = 
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
	
		summary.prototype.elmtCreateAttrsOR =
			function()
		{
			return this.summaryCreateAttrs(); 
		};
		
		summary.prototype.elmtCreateViewOR =
			function()
		{
			return this.summaryCreateView();
		};
		
		summary.prototype.elmtInitOR = 
			function()
		{
			this.summaryInit();
		};
		
		summary.prototype.elmtRetrieveOR = 
			function()
		{
			this.summaryRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		summary.prototype.summaryInitOR = 
			function summaryInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		summary.prototype.summaryCreateAttrs = 
			function summaryCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		summary.prototype.summaryCreateView = 
			function summaryCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		summary.prototype.summaryInit = 
			function summaryInit()
		{
			//console.log(this.kWLogCalled());
			this.summaryInitOR();
		};

		summary.prototype.summaryRetrieve = 
			function summaryRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return summary;

	}
);
