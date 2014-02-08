/**********************************************************************
 *
 * br/obj.js
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

		function br()
		{
			//console.log("br::constructor");
			this.m_sKWTag = "br";
		}

		br.prototype = new elmt();
		br.prototype.constructor = br;
		br.constructor = elmt.prototype.constructor;

		br.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		br.prototype.init = 
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

		br.prototype.brInitOR = 
			function brInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		br.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.brCreateAttrs(); 
		};
		
		br.prototype.elmtCreateViewOR = 
			function()
		{
			return this.brCreateView();
		};
		
		br.prototype.elmtInitOR = 
			function()
		{
			this.brInit();
		};
		
		br.prototype.elmtRetrieveOR =
			function()
		{
			this.brRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		br.prototype.brCreateAttrs = 
			function brCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		br.prototype.brCreateView = 
			function brCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		br.prototype.brInit = 
			function brInit()
		{
			//console.log(this.kWLogCalled());
			this.brInitOR();
		};
		
		br.prototype.brRetrieve = 
			function brRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return br;

	}
);
