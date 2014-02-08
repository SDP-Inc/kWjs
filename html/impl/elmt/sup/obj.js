/**********************************************************************
 *
 * sup/obj.js
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

		function sup()
		{
			//console.log("sup::constructor");
			this.m_sKWTag = "sup";
		}

		sup.prototype = new elmt();
		sup.prototype.constructor = sup;
		sup.constructor = elmt.prototype.constructor;

		sup.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		sup.prototype.init =
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
	
		sup.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.supCreateAttrs(); 
		};
		
		sup.prototype.elmtCreateViewOR = 
			function()
		{
			return this.supCreateView();
		};
		
		sup.prototype.elmtInitOR = 
			function()
		{
			this.supInit();
		};
		
		sup.prototype.elmtRetrieveOR =
			function()
		{
			this.supRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		sup.prototype.supInitOR = 
			function supInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		sup.prototype.supCreateAttrs = 
			function supCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		sup.prototype.supCreateView = 
			function supCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		sup.prototype.supInit = 
			function supInit()
		{
			//console.log(this.kWLogCalled());
			this.supInitOR();
		};

		sup.prototype.supRetrieve = 
			function supRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return sup;

	}
);
