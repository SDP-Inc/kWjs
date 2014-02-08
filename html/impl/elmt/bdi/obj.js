/**********************************************************************
 *
 * bdi/obj.js
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

		function bdi()
		{
			//console.log("bdi::constructor");
			
			this.m_sKWTag	= "bdi";
		}

		bdi.prototype = new elmt();
		bdi.prototype.constructor = bdi;
		bdi.constructor = elmt.prototype.constructor;

		bdi.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		bdi.prototype.init = 
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

		bdi.prototype.bdiInitOR = 
			function bdiInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		bdi.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.bdiCreateAttrs(); 
		};
		
		bdi.prototype.elmtCreateViewOR = 
			function()
		{
			return this.bdiCreateView();
		};
		
		bdi.prototype.elmtInitOR = 
			function()
		{
			this.bdiInit();
		};
		
		bdi.prototype.elmtRetrieveOR = 
			function()
		{
			this.bdiRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		bdi.prototype.bdiCreateAttrs = 
			function bdiCreateAttrs()
		{
			theAttrs = null;
			
			//console.log(this.kWLogCalled());
			theAttrs = new attrs();
			
			return theAttrs;
		};

		bdi.prototype.bdiCreateView = 
			function bdiCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		bdi.prototype.bdiInit = 
			function bdiInit()
		{
			//console.log(this.kWLogCalled());
			this.bdiInitOR();
		};
		
		bdi.prototype.bdiRetrieve = 
			function bdiRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return bdi;

	}
);
