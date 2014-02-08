/**********************************************************************
 *
 * tFoot/obj.js
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

		function tFoot()
		{
			//console.log("tFoot::constructor");
			this.m_sKWTag = "tFoot";
		}

		tFoot.prototype = new elmt();
		tFoot.prototype.constructor = tFoot;
		tFoot.constructor = elmt.prototype.constructor;

		tFoot.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		tFoot.prototype.init = 
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
	
		tFoot.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.tfCreateAttrs(); 
		};
		
		tFoot.prototype.elmtCreateViewOR = 
			function()
		{
			return this.tfCreateView();
		};
		
		tFoot.prototype.elmtInitOR = 
			function()
		{
			this.tfInit();
		};
		
		tFoot.prototype.elmtRetrieveOR = 
			function()
		{
			this.tfRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		tFoot.prototype.tfInitOR = 
			function tfInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		tFoot.prototype.tfCreateAttrs = 
			function tfCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		tFoot.prototype.tfCreateView = 
			function tfCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		tFoot.prototype.tfInit = 
			function tfInit()
		{
			//console.log(this.kWLogCalled());
			this.tfInitOR();
		};

		tFoot.prototype.tfRetrieve = 
			function tfRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return tFoot;

	}
);
