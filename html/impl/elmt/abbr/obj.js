/**********************************************************************
 *
 * abbr/obj.js
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

		function abbr()
		{
			//console.log("abbr::constructor");
			this.m_sKWTag = "abbr";
		}

		abbr.prototype = new elmt();
		abbr.prototype.constructor = abbr;
		abbr.constructor = elmt.prototype.constructor;

		abbr.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		abbr.prototype.init = 
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

		abbr.prototype.abbrInitOR = 
			function abbrInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		abbr.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.abbrCreateAttrs(); 
		};
		
		abbr.prototype.elmtCreateViewOR = 
			function()
		{
			return this.abbrCreateView();
		};
		
		abbr.prototype.elmtInitOR = 
			function()
		{
			this.abbrInit();
		};
		
		abbr.prototype.elmtRetrieveOR = 
			function()
		{
			this.abbrRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		abbr.prototype.abbrCreateAttrs = 
			function abbrCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		abbr.prototype.abbrCreateView = 
			function abbrCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		abbr.prototype.abbrInit = 
			function abbrInit()
		{
			//console.log(this.kWLogCalled());
			this.abbrInitOR();
		};
		
		abbr.prototype.abbrRetrieve = 
			function abbrRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return abbr;

	}
);
