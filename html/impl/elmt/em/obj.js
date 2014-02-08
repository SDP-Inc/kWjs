/**********************************************************************
 *
 * em/obj.js
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

		function em()
		{
			//console.log("em::constructor");
			this.m_sKWTag = "em";
		}

		em.prototype = new elmt();
		em.prototype.constructor = em;
		em.constructor = elmt.prototype.constructor;

		em.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		em.prototype.init = 
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
	
		em.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.emCreateAttrs(); 
		};
		
		em.prototype.elmtCreateViewOR = 
			function()
		{
			return this.emCreateView();
		};
		
		em.prototype.elmtInitOR = 
			function()
		{
			this.emInit();
		};
		
		em.prototype.elmtRetrieveOR =
			function()
		{
			this.emRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		em.prototype.emInitOR = 
			function emInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		em.prototype.emCreateAttrs = 
			function emCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		em.prototype.emCreateView = 
			function emCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		em.prototype.emInit = 
			function emInit()
		{
			//console.log(this.kWLogCalled());
			this.emInitOR();
		};
		
		em.prototype.emRetrieve = 
			function emRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return em;

	}
);
