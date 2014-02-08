/**********************************************************************
 *
 * hGroup/obj.js
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

		function hGroup()
		{
			//console.log("hGroup::constructor");
			this.m_sKWTag = "hGroup";
		}

		hGroup.prototype = new elmt();
		hGroup.prototype.constructor = hGroup;
		hGroup.constructor = elmt.prototype.constructor;

		hGroup.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		hGroup.prototype.init = 
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

		hGroup.prototype.hgInitOR = 
			function hgInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		hGroup.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.hgCreateAttrs(); 
		};
		
		hGroup.prototype.elmtCreateViewOR = 
			function()
		{
			return this.hgCreateView();
		};
		
		hGroup.prototype.elmtInitOR = 
			function()
		{
			this.hgInit();
		};
		
		hGroup.prototype.elmtRetrieveOR = 
			function()
		{
			this.hgRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		hGroup.prototype.hgCreateAttrs = 
			function hgCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		hGroup.prototype.hgCreateView = 
			function hgCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		hGroup.prototype.hgInit = 
			function hgInit()
		{
			//console.log(this.kWLogCalled());
			this.hgInitOR();
		};
		
		hGroup.prototype.hgRetrieve = 
			function hgRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return hGroup;

	}
);
