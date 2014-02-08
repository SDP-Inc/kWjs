/**********************************************************************
 *
 * cite/obj.js
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

		function cite()
		{
			//console.log("cite::constructor");
			this.m_sKWTag = "cite";
		}

		cite.prototype = new elmt();
		cite.prototype.constructor = cite;
		cite.constructor = elmt.prototype.constructor;

		cite.prototype.check =
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		cite.prototype.init = 
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

		cite.prototype.citeInitOR = 
			function citeInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		cite.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.citeCreateAttrs(); 
		};
		
		cite.prototype.elmtCreateViewOR = 
			function()
		{
			return this.citeCreateView();
		};
		
		cite.prototype.elmtInitOR = 
			function()
		{
			this.citeInit();
		};
		
		cite.prototype.elmtRetrieveOR = 
			function()
		{
			this.citeRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		cite.prototype.citeCreateAttrs = 
			function citeCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		cite.prototype.citeCreateView = 
			function citeCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		cite.prototype.citeInit = 
			function citeInit()
		{
			//console.log(this.kWLogCalled());
			this.citeInitOR();
		};
		
		cite.prototype.citeRetrieve = 
			function citeRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return cite;

	}
);
