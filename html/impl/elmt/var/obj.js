/**********************************************************************
 *
 * var/obj.js
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

		function var_()
		{
			//console.log("var::constructor");
			this.m_sKWTag = "var";
		}

		var_.prototype = new elmt();
		var_.prototype.constructor = var_;
		var_.constructor = elmt.prototype.constructor;

		var_.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		var_.prototype.init = 
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
	
		var_.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.varCreateAttrs(); 
		};
		
		var_.prototype.elmtCreateViewOR = 
			function()
		{
			return this.varCreateView();
		};
		
		var_.prototype.elmtInitOR =
			function()
		{
			this.varInit();
		};
		
		var_.prototype.elmtRetrieveOR = 
			function()
		{
			this.varRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		var_.prototype.varInitOR = 
			function varInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		var_.prototype.varCreateAttrs = 
			function varCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		var_.prototype.varCreateView = 
			function varCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		var_.prototype.varInit = 
			function varInit()
		{
			//console.log(this.kWLogCalled());
			this.varInitOR();
		};

		var_.prototype.varRetrieve = 
			function varRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return var_;

	}
);
