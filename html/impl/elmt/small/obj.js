/**********************************************************************
 *
 * small/obj.js
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

		function small()
		{
			//console.log("small::constructor");
			this.m_sKWTag = "small";
		}

		small.prototype = new elmt();
		small.prototype.constructor = small;
		small.constructor = elmt.prototype.constructor;

		small.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		small.prototype.init = 
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
	
		small.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.smallCreateAttrs(); 
		};
		
		small.prototype.elmtCreateViewOR = 
			function()
		{
			return this.smallCreateView();
		};
		
		small.prototype.elmtInitOR = 
			function()
		{
			this.smallInit();
		};
		
		small.prototype.elmtRetrieveOR =
			function()
		{
			this.smallRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		small.prototype.smallInitOR = 
			function smallInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		small.prototype.smallCreateAttrs = 
			function smallCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		small.prototype.smallCreateView = 
			function smallCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		small.prototype.smallInit = 
			function smallInit()
		{
			//console.log(this.kWLogCalled());
			this.smallInitOR();
		};

		small.prototype.smallRetrieve = 
			function smallRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return small;

	}
);
