/**********************************************************************
 *
 * figCaption/obj.js
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

		function figCaption()
		{
			//console.log("figCaption::constructor");
			this.m_sKWTag = "figCaption";
		}

		figCaption.prototype = new elmt();
		figCaption.prototype.constructor = figCaption;
		figCaption.constructor = elmt.prototype.constructor;

		figCaption.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		figCaption.prototype.init = 
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

		figCaption.prototype.fcInitOR = 
			function fcInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		figCaption.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.fcCreateAttrs(); 
		};
		
		figCaption.prototype.elmtCreateViewOR =
			function()
		{
			return this.fcCreateView();
		};
		
		figCaption.prototype.elmtInitOR = 
			function()
		{
			this.fcInit();
		};
		
		figCaption.prototype.elmtRetrieveOR = 
			function()
		{
			this.fcRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		figCaption.prototype.fcCreateAttrs = 
			function fcCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		figCaption.prototype.fcCreateView = 
			function fcCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		figCaption.prototype.fcInit = 
			function fcInit()
		{
			//console.log(this.kWLogCalled());
			this.fcInitOR();
		};
		
		figCaption.prototype.fcRetrieve = 
			function fcRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return figCaption;

	}
);
