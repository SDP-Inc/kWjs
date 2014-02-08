/**********************************************************************
 *
 * header/obj.js
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

		function header()
		{
			//console.log("header::constructor");
			this.m_sKWTag = "header";
		}

		header.prototype = new elmt();
		header.prototype.constructor = header;
		header.constructor = elmt.prototype.constructor;

		header.prototype.check =
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		header.prototype.init =
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

		header.prototype.headerInitOR = 
			function headerInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		header.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.headerCreateAttrs(); 
		};
		
		header.prototype.elmtCreateViewOR = 
			function()
		{
			return this.headerCreateView();
		};
		
		header.prototype.elmtInitOR = 
			function()
		{
			this.headerInit();
		};
		
		header.prototype.elmtRetrieveOR = 
			function()
		{
			this.headerRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		header.prototype.headerCreateAttrs = 
			function headerCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		header.prototype.headerCreateView = 
			function headerCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		header.prototype.headerInit = 
			function headerInit()
		{
			//console.log(this.kWLogCalled());
			this.headerInitOR();
		};
		
		header.prototype.headerRetrieve = 
			function headerRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return header;

	}
);
