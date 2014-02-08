/**********************************************************************
 *
 * dfn/obj.js
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

		function dfn()
		{
			//console.log("dfn::constructor");
			this.m_sKWTag = "dfn";
		}

		dfn.prototype = new elmt();
		dfn.prototype.constructor = dfn;
		dfn.constructor = elmt.prototype.constructor;

		dfn.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		dfn.prototype.init = 
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

		dfn.prototype.dfnInitOR = 
			function dfnInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		dfn.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.dfnCreateAttrs(); 
		};
		
		dfn.prototype.elmtCreateViewOR = 
			function()
		{
			return this.dfnCreateView();
		};
		
		dfn.prototype.elmtInitOR = 
			function()
		{
			this.dfnInit();
		};
		
		dfn.prototype.elmtRetrieveOR = 
			function()
		{
			this.dfnRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		dfn.prototype.dfnCreateAttrs = 
			function dfnCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		dfn.prototype.dfnCreateView = 
			function dfnCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		dfn.prototype.dfnInit = 
			function dfnInit()
		{
			//console.log(this.kWLogCalled());
			this.dfnInitOR();
		};
		
		dfn.prototype.dfnRetrieve = 
			function dfnRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return dfn;

	}
);
