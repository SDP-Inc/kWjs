/**********************************************************************
 *
 * sub/obj.js
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

		function sub()
		{
			//console.log("sub::constructor");
			this.m_sKWTag = "sub";
		}

		sub.prototype = new elmt();
		sub.prototype.constructor = sub;
		sub.constructor = elmt.prototype.constructor;

		sub.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		sub.prototype.init =
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
	
		sub.prototype.elmtCreateAttrsOR =
			function()
		{
			return this.subCreateAttrs(); 
		};
		
		sub.prototype.elmtCreateViewOR =
			function()
		{
			return this.subCreateView();
		};
		
		sub.prototype.elmtInitOR = 
			function()
		{
			this.subInit();
		};
		
		sub.prototype.elmtRetrieveOR = 
			function()
		{
			this.subRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		sub.prototype.subInitOR = 
			function subInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		sub.prototype.subCreateAttrs = 
			function subCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		sub.prototype.subCreateView = 
			function subCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		sub.prototype.subInit = 
			function subInit()
		{
			//console.log(this.kWLogCalled());
			this.subInitOR();
		};

		sub.prototype.subRetrieve = 
			function subRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return sub;

	}
);
