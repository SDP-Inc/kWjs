/**********************************************************************
 *
 * section/obj.js
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
	//***		public initializors
	//***
	//*******************************************************************//

		function section()
		{
			//console.log("section::constructor");
			this.m_sKWTag = "section";
		}

		section.prototype = new elmt();
		section.prototype.constructor = section;
		section.constructor = elmt.prototype.constructor;

		section.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		section.prototype.init = 
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
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		section.prototype.elmtCreateAttrsOR =
			function()
		{
			return this.sectionCreateAttrs(); 
		};
		
		section.prototype.elmtCreateViewOR = 
			function()
		{
			return this.sectionCreateView();
		};
		
		section.prototype.elmtInitOR = 
			function()
		{
			this.sectionInit();
		};
		
		section.prototype.elmtRetrieveOR = 
			function()
		{
			this.sectionRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		section.prototype.sectionInitOR = 
			function sectionInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		section.prototype.sectionCreateAttrs = 
			function sectionCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		section.prototype.sectionCreateView = 
			function sectionCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		section.prototype.sectionInit = 
			function sectionInit()
		{
			//console.log(this.kWLogCalled());
			this.sectionInitOR();
		};

		section.prototype.sectionRetrieve = 
			function sectionRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return section;

	}
);
