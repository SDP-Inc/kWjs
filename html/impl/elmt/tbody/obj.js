/**********************************************************************
 *
 * tBody/obj.js
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

		function tBody()
		{
			//console.log("tBody::constructor");
			this.m_sKWTag = "tBody";
		}

		tBody.prototype = new elmt();
		tBody.prototype.constructor = tBody;
		tBody.constructor = elmt.prototype.constructor;

		tBody.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		tBody.prototype.init =
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
	
		tBody.prototype.elmtCreateAttrsOR =
			function()
		{
			return this.tbCreateAttrs(); 
		};
		
		tBody.prototype.elmtCreateViewOR = 
			function()
		{
			return this.tbCreateView();
		};
		
		tBody.prototype.elmtInitOR =
			function()
		{
			this.tbInit();
		};
		
		tBody.prototype.elmtRetrieveOR =
			function()
		{
			this.tbRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		tBody.prototype.tbInitOR = 
			function tbInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		tBody.prototype.tbCreateAttrs = 
			function tbCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		tBody.prototype.tbCreateView = 
			function tbCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		tBody.prototype.tbInit = 
			function tbInit()
		{
			//console.log(this.kWLogCalled());
			this.tbInitOR();
		};

		tBody.prototype.tbRetrieve = 
			function tbRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return tBody;

	}
);
