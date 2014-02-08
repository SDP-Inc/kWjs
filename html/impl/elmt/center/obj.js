/**********************************************************************
 *
 * center/obj.js
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

		function center()
		{
			//console.log("center::constructor");
			this.m_sKWTag = "center";
		}

		center.prototype = new elmt();
		center.prototype.constructor = center;
		center.constructor = elmt.prototype.constructor;

		center.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		center.prototype.init = 
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

		center.prototype.centerInitOR = 
			function centerInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		center.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.centerCreateAttrs(); 
		};
		
		center.prototype.elmtCreateViewOR = 
			function()
		{
			return this.centerCreateView();
		};
		
		center.prototype.elmtInitOR =
			function()
		{
			this.centerInit();
		};
		
		center.prototype.elmtRetrieveOR = 
			function()
		{
			this.centerRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		center.prototype.centerCreateAttrs = 
			function centerCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		center.prototype.centerCreateView = 
			function centerCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		center.prototype.centerInit = 
			function centerInit()
		{
			//console.log(this.kWLogCalled());
			this.centerInitOR();
		};
		
		center.prototype.centerRetrieve = 
			function centerRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return center;

	}
);
