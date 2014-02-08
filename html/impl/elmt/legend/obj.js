/**********************************************************************
 *
 * legend/obj.js
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

		function legend()
		{
			//console.log("legend::constructor");
			this.m_sKWTag = "legend";
		}

		legend.prototype = new elmt();
		legend.prototype.constructor = legend;
		legend.constructor = elmt.prototype.constructor;

		legend.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		legend.prototype.init = 
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

		legend.prototype.legendInitOR = 
			function legendInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		legend.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.legendCreateAttrs(); 
		};
		
		legend.prototype.elmtCreateViewOR = 
			function()
		{
			return this.legendCreateView();
		};
		
		legend.prototype.elmtInitOR =
			function()
		{
			this.legendInit();
		};
		
		legend.prototype.elmtRetrieveOR = 
			function()
		{
			this.legendRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		legend.prototype.legendCreateAttrs = 
			function legendCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		legend.prototype.legendCreateView = 
			function legendCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		legend.prototype.legendInit = 
			function legendInit()
		{
			//console.log(this.kWLogCalled());
			this.legendInitOR();
		};
		
		legend.prototype.legendRetrieve = 
			function legendRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return legend;

	}
);
