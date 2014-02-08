/**********************************************************************
 *
 * footer/obj.js
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

		function footer()
		{
			//console.log("footer::constructor");
			this.m_sKWTag = "footer";
		}

		footer.prototype = new elmt();
		footer.prototype.constructor = footer;
		footer.constructor = elmt.prototype.constructor;

		footer.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		footer.prototype.init = 
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

		footer.prototype.footerInitOR = 
			function footerInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		footer.prototype.elmtCreateAttrsOR =
			function()
		{
			return this.footerCreateAttrs(); 
		};
		
		footer.prototype.elmtCreateViewOR =
			function()
		{
			return this.footerCreateView();
		};
		
		footer.prototype.elmtInitOR = 
			function()
		{
			this.footerInit();
		};
		
		footer.prototype.elmtRetrieveOR = 
			function()
		{
			this.footerRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		footer.prototype.footerCreateAttrs = 
			function footerCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		footer.prototype.footerCreateView = 
			function footerCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		footer.prototype.footerInit = 
			function footerInit()
		{
			//console.log(this.kWLogCalled());
			this.footerInitOR();
		};
		
		footer.prototype.footerRetrieve = 
			function footerRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return footer;

	}
);
