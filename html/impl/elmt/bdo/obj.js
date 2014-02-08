/**********************************************************************
 *
 * bdo/obj.js
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

		function bdo()
		{
			//console.log("bdo::constructor");
			
			this.m_sKWTag	= "bdo";
		}

		bdo.prototype = new elmt();
		bdo.prototype.constructor = bdo;
		bdo.constructor = elmt.prototype.constructor;

		bdo.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		bdo.prototype.init = 
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

		bdo.prototype.bdoInitOR = 
			function bdoInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		bdo.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.bdoCreateAttrs(); 
		};
		
		bdo.prototype.elmtCreateViewOR = 
			function()
		{
			return this.bdoCreateView();
		};
		
		bdo.prototype.elmtInitOR = 
			function()
		{
			this.bdoInit();
		};
		
		bdo.prototype.elmtRetrieveOR = 
			function()
		{
			this.bdoRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		bdo.prototype.bdoCreateAttrs = 
			function bdoCreateAttrs()
		{
			theAttrs = null;
			
			//console.log(this.kWLogCalled());
			theAttrs = new attrs();
			
			return theAttrs;
		};

		bdo.prototype.bdoCreateView = 
			function bdoCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		bdo.prototype.bdoInit = 
			function bdoInit()
		{
			//console.log(this.kWLogCalled());
			this.bdoInitOR();
		};
		
		bdo.prototype.bdoRetrieve = 
			function bdoRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return bdo;

	}
);
