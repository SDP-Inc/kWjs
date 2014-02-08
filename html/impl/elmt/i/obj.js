/**********************************************************************
 *
 * i/obj.js
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

		function i()
		{
			//console.log("i::constructor");
			this.m_sKWTag = "i";
		}

		i.prototype = new elmt();
		i.prototype.constructor = i;
		i.constructor = elmt.prototype.constructor;

		i.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		i.prototype.init = 
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

		i.prototype.iInitOR = 
			function iInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		i.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.iCreateAttrs(); 
		};
		
		i.prototype.elmtCreateViewOR =
			function()
		{
			return this.iCreateView();
		};
		
		i.prototype.elmtInitOR = 
			function()
		{
			this.iInit();
		};
		
		i.prototype.elmtRetrieveOR = 
			function()
		{
			this.iRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		i.prototype.iCreateAttrs = 
			function iCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		i.prototype.iCreateView = 
			function iCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		i.prototype.iInit = 
			function iInit()
		{
			//console.log(this.kWLogCalled());
			this.iInitOR();
		};
		
		i.prototype.iRetrieve = 
			function iRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return i;

	}
);
