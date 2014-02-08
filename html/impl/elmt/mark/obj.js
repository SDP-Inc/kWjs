/**********************************************************************
 *
 * mark/obj.js
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
	//***		pubmarkc initiamarkzors
	//***
	//*******************************************************************//

		function mark()
		{
			//console.log("mark::constructor");
			this.m_sKWTag	= "mark";
		}

		mark.prototype = new elmt();
		mark.prototype.constructor = mark;
		mark.constructor = elmt.prototype.constructor;

		mark.prototype.check =
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		mark.prototype.init =
			function init()
		{
			//console.log(this.kWLogCalled());
			elmt.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		pubmarkc accessors
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		pubmarkc callbacks
	//***
	//*******************************************************************//
	
	//*******************************************************************//
	//***																	   
	//***		pubmarkc methods
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		mark.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.markCreateAttrs(); 
		};
		
		mark.prototype.elmtCreateViewOR =
			function()
		{
			return this.markCreateView();
		};
		
		mark.prototype.elmtInitOR =
			function()
		{
			this.markInit();
		};
		
		mark.prototype.elmtRetrieveOR = 
			function()
		{
			this.markRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		mark.prototype.markInitOR = 
			function markInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		mark.prototype.markCreateAttrs = 
			function markCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		mark.prototype.markCreateView = 
			function markCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		mark.prototype.markInit = 
			function markInit()
		{
			//console.log(this.kWLogCalled());
			this.markInitOR();
		};

		mark.prototype.markRetrieve = 
			function markRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return mark;

	}
);
