/**********************************************************************
 *
 * strong/obj.js
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

		function strong()
		{
			//console.log("strong::constructor");
			this.m_sKWTag = "strong";
		}

		strong.prototype = new elmt();
		strong.prototype.constructor = strong;
		strong.constructor = elmt.prototype.constructor;

		strong.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		strong.prototype.init =
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
	
		strong.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.strongCreateAttrs(); 
		};
		
		strong.prototype.elmtCreateViewOR = 
			function()
		{
			return this.strongCreateView();
		};
		
		strong.prototype.elmtInitOR = 
			function()
		{
			this.strongInit();
		};
		
		strong.prototype.elmtRetrieveOR = 
			function()
		{
			this.strongRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		strong.prototype.strongInitOR = 
			function strongInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		strong.prototype.strongCreateAttrs = 
			function strongCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		strong.prototype.strongCreateView = 
			function strongCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		strong.prototype.strongInit = 
			function strongInit()
		{
			//console.log(this.kWLogCalled());
			this.strongInitOR();
		};

		strong.prototype.strongRetrieve = 
			function strongRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return strong;

	}
);
