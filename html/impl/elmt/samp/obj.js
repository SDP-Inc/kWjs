/**********************************************************************
 *
 * samp/obj.js
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

		function samp()
		{
			//console.log("samp::constructor");
			this.m_sKWTag = "samp";
		}

		samp.prototype = new elmt();
		samp.prototype.constructor = samp;
		samp.constructor = elmt.prototype.constructor;

		samp.prototype.check =
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		samp.prototype.init =
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
	
		samp.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.sampCreateAttrs(); 
		};
		
		samp.prototype.elmtCreateViewOR =
			function()
		{
			return this.sampCreateView();
		};
		
		samp.prototype.elmtInitOR = 
			function()
		{
			this.sampInit();
		};
		
		samp.prototype.elmtRetrieveOR = 
			function()
		{
			this.sampRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		samp.prototype.sampInitOR = 
			function sampInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		samp.prototype.sampCreateAttrs = 
			function sampCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		samp.prototype.sampCreateView = 
			function sampCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		samp.prototype.sampInit = 
			function sampInit()
		{
			//console.log(this.kWLogCalled());
			this.sampInitOR();
		};

		samp.prototype.sampRetrieve = 
			function sampRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return samp;

	}
);
