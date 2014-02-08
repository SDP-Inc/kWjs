/**********************************************************************
 *
 * dt/obj.js
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

		function dt()
		{
			//console.log("dt::constructor");
			this.m_sKWTag = "dt";
		}

		dt.prototype = new elmt();
		dt.prototype.constructor = dt;
		dt.constructor = elmt.prototype.constructor;

		dt.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		dt.prototype.init = 
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
	
		dt.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.dtCreateAttrs(); 
		};
		
		dt.prototype.elmtCreateViewOR = 
			function()
		{
			return this.dtCreateView();
		};
		
		dt.prototype.elmtInitOR = 
			function()
		{
			this.dtInit();
		};
		
		dt.prototype.elmtRetrieveOR = 
			function()
		{
			this.dtRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		dt.prototype.dtInitOR = 
			function dtInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		dt.prototype.dtCreateAttrs = 
			function dtCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		dt.prototype.dtCreateView = 
			function dtCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		dt.prototype.dtInit = 
			function dtInit()
		{
			//console.log(this.kWLogCalled());
			this.dtInitOR();
		};
		
		dt.prototype.dtRetrieve = 
			function dtRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return dt;

	}
);
