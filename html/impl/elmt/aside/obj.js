/**********************************************************************
 *
 * aside/obj.js
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

		function aside()
		{
			//console.log("aside::constructor");
			this.m_sKWTag = "aside";
		}

		aside.prototype = new elmt();
		aside.prototype.constructor = aside;
		aside.constructor = elmt.prototype.constructor;

		aside.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		aside.prototype.init = 
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
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		aside.prototype.asideInitOR = 
			function asideInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		aside.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.asideCreateAttrs(); 
		};
		
		aside.prototype.elmtCreateViewOR = 
			function()
		{
			return this.asideCreateView();
		};
		
		aside.prototype.elmtInitOR = 
			function()
		{
			this.asideInit();
		};
		
		aside.prototype.elmtRetrieveOR = 
			function()
		{
			this.asideRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		aside.prototype.asideCreateAttrs = 
			function asideCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		aside.prototype.asideCreateView = 
			function asideCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		aside.prototype.asideInit = 
			function asideInit()
		{
			//console.log(this.kWLogCalled());
			this.asideInitOR();
		};
		
		aside.prototype.asideRetrieve = 
			function asideRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return aside;

	}
);
