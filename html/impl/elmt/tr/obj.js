/**********************************************************************
 *
 * tr/obj.js
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

		function tr()
		{
			//console.log("tr::constructor");
			this.m_sKWTag = "tr";
		}

		tr.prototype = new elmt();
		tr.prototype.constructor = tr;
		tr.constructor = elmt.prototype.constructor;

		tr.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		tr.prototype.init = 
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
	
		tr.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.trCreateAttrs(); 
		};
		
		tr.prototype.elmtCreateViewOR =
			function()
		{
			return this.trCreateView();
		};
		
		tr.prototype.elmtInitOR = 
			function()
		{
			this.trInit();
		};
		
		tr.prototype.elmtRetrieveOR =
			function()
		{
			this.trRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		tr.prototype.trInitOR = 
			function trInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		tr.prototype.trCreateAttrs = 
			function trCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		tr.prototype.trCreateView = 
			function trCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		tr.prototype.trInit = 
			function trInit()
		{
			//console.log(this.kWLogCalled());
			this.trInitOR();
		};

		tr.prototype.trRetrieve = 
			function trRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return tr;

	}
);
