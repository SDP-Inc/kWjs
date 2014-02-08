/**********************************************************************
 *
 * dd/obj.js
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

		function dd()
		{
			//console.log("dd::constructor");
			this.m_sKWTag = "dd";
		}

		dd.prototype = new elmt();
		dd.prototype.constructor = dd;
		dd.constructor = elmt.prototype.constructor;

		dd.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		dd.prototype.init = 
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

		dd.prototype.ddInitOR = 
			function ddInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		dd.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.ddCreateAttrs(); 
		};
		
		dd.prototype.elmtCreateViewOR = 
			function()
		{
			return this.ddCreateView();
		};
		
		dd.prototype.elmtInitOR = 
			function()
		{
			this.ddInit();
		};
		
		dd.prototype.elmtRetrieveOR = 
			function()
		{
			this.ddRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		dd.prototype.ddCreateAttrs = 
			function ddCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		dd.prototype.ddCreateView = 
			function ddCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		dd.prototype.ddInit = 
			function ddInit()
		{
			//console.log(this.kWLogCalled());
			this.ddInitOR();
		};
		
		dd.prototype.ddRetrieve = 
			function ddRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return dd;

	}
);
