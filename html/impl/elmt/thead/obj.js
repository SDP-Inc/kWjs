/**********************************************************************
 *
 * tHead/obj.js
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

		function tHead()
		{
			//console.log("tHead::constructor");
			this.m_sKWTag = "tHead";
		}

		tHead.prototype = new elmt();
		tHead.prototype.constructor = tHead;
		tHead.constructor = elmt.prototype.constructor;

		tHead.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		tHead.prototype.init = 
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
	
		tHead.prototype.elmtCreateAttrsOR =
			function()
		{
			return this.thCreateAttrs(); 
		};
		
		tHead.prototype.elmtCreateViewOR = 
			function()
		{
			return this.thCreateView();
		};
		
		tHead.prototype.elmtInitOR = 
			function()
		{
			this.thInit();
		};
		
		tHead.prototype.elmtRetrieveOR = 
			function()
		{
			this.thRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		tHead.prototype.thInitOR = 
			function thInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		tHead.prototype.thCreateAttrs = 
			function thCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		tHead.prototype.thCreateView = 
			function thCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		tHead.prototype.thInit = 
			function thInit()
		{
			//console.log(this.kWLogCalled());
			this.thInitOR();
		};

		tHead.prototype.thRetrieve = 
			function thRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return tHead;

	}
);
