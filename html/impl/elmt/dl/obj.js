/**********************************************************************
 *
 * dl/obj.js
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

		function dl()
		{
			//console.log("dl::constructor");
			this.m_sKWTag = "dl";
		}

		dl.prototype = new elmt();
		dl.prototype.constructor = dl;
		dl.constructor = elmt.prototype.constructor;

		dl.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		dl.prototype.init = 
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
	
		dl.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.dlCreateAttrs(); 
		};
		
		dl.prototype.elmtCreateViewOR = 
			function()
		{
			return this.dlCreateView();
		};
		
		dl.prototype.elmtInitOR = 
			function()
		{
			this.dlInit();
		};
		
		dl.prototype.elmtRetrieveOR = 
			function()
		{
			this.dlRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		dl.prototype.dlInitOR = 
			function dlInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		dl.prototype.dlCreateAttrs = 
			function dlCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		dl.prototype.dlCreateView = 
			function dlCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		dl.prototype.dlInit = 
			function dlInit()
		{
			//console.log(this.kWLogCalled());
			this.dlInitOR();
		};
		
		dl.prototype.dlRetrieve = 
			function dlRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return dl;

	}
);
