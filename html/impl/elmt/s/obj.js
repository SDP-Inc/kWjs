/**********************************************************************
 *
 * s/obj.js
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

		function s()
		{
			//console.log("s::constructor");
			this.m_sKWTag	= "s";
			
			this.m_nKWValue	= -1;
		}

		s.prototype = new elmt();
		s.prototype.constructor = s;
		s.constructor = elmt.prototype.constructor;

		s.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		s.prototype.init =
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
	
		s.prototype.elmtCreateAttrsOR =
			function()
		{
			return this.sCreateAttrs(); 
		};
		
		s.prototype.elmtCreateViewOR =
			function()
		{
			return this.sCreateView();
		};
		
		s.prototype.elmtInitOR = 
			function()
		{
			this.sInit();
		};
		
		s.prototype.elmtRetrieveOR =
			function()
		{
			this.sRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		s.prototype.sInitOR = 
			function sInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		s.prototype.sCreateAttrs = 
			function sCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		s.prototype.sCreateView = 
			function sCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		s.prototype.sInit = 
			function sInit()
		{
			//console.log(this.kWLogCalled());
			this.sInitOR();
		};

		s.prototype.sRetrieve = 
			function sRetrieve()
		{
			//console.log(this.kWLogCalled());
		};

		return s;

	}
);
