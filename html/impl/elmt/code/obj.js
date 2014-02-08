/**********************************************************************
 *
 * code/obj.js
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

		function code()
		{
			//console.log("code::constructor");
			this.m_sKWTag = "code";
		}

		code.prototype = new elmt();
		code.prototype.constructor = code;
		code.constructor = elmt.prototype.constructor;

		code.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		code.prototype.init = 
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

		code.prototype.codeInitOR = 
			function codeInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		code.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.codeCreateAttrs(); 
		};
		
		code.prototype.elmtCreateViewOR = 
			function()
		{
			return this.codeCreateView();
		};
		
		code.prototype.elmtInitOR = 
			function()
		{
			this.codeInit();
		};
		
		code.prototype.elmtRetrieveOR = 
			function()
		{
			this.codeRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		code.prototype.codeCreateAttrs = 
			function codeCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		code.prototype.codeCreateView = 
			function codeCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		code.prototype.codeInit = 
			function codeInit()
		{
			//console.log(this.kWLogCalled());
			this.codeInitOR();
		};
		
		code.prototype.codeRetrieve = 
			function codeRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return code;

	}
);
