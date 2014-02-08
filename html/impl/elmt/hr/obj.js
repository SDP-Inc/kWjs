/**********************************************************************
 *
 * hr/obj.js
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

		function hr()
		{
			//console.log("hr::constructor");
			this.m_sKWTag = "hr";
		}

		hr.prototype = new elmt();
		hr.prototype.constructor = hr;
		hr.constructor = elmt.prototype.constructor;

		hr.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		hr.prototype.init = 
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

		hr.prototype.elmtCreateAttrsOR =
			function()
		{
			return this.hrCreateAttrs(); 
		};
		
		hr.prototype.elmtCreateViewOR =
			function()
		{
			return this.hrCreateView();
		};
		
		hr.prototype.elmtInitOR = 
			function()
		{
			this.hrInit();
		};
		
		hr.prototype.elmtRetrieveOR = 
			function()
		{
			this.hrRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		hr.prototype.hrInitOR = 
			function hrInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		hr.prototype.hrCreateAttrs = 
			function hrCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attr();
		};

		hr.prototype.hrCreateView = 
			function hrCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		hr.prototype.hrInit = 
			function hrInit()
		{
			//console.log(this.kWLogCalled());
			this.hrInitOR();
		};

		hr.prototype.hrRetrieve = 
			function hrRetrieve()
		{
			//console.log(this.kWLogCalled());
		};

		return hr;

	}
);
