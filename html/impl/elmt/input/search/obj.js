/**********************************************************************
 *
 * search/obj.js
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
		"../../../attrs/input/simple/obj",
		"../../../view/input/simple/obj",
		"../obj",
		"jquery",
		"kWStat/validate"
	], 
	function
	(
		attrs,
		view,
		input,
		$,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function search()
		{
			//console.log("search::constructor");
			this.m_sKWType = "search";
		}

		search.prototype = new input();
		search.prototype.constructor = search;
		search.constructor = input.prototype.constructor;

		search.prototype.check = 
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		search.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			input.prototype.init.call(this);
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

		search.prototype.searchInitOR = 
			function searchInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		search.prototype.inputCreateAttrsOR = 
			function()
		{
			return this.searchCreateAttrs(); 
		};
		
		search.prototype.elmtCreateViewOR = 
			function()
		{
			return this.searchCreateView();
		};
		
		search.prototype.inputInitOR = 
			function()
		{
			this.searchInit();
		};
		
		search.prototype.inputRetrieveOR = 
			function()
		{
			this.searchRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		search.prototype.searchCreateAttrs = 
			function searchCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
	
			theAttrs = new attrs();
			
			return theAttrs;
		};

		search.prototype.searchCreateView = 
			function searchCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		search.prototype.searchInit = 
			function searchInit()
		{
			//console.log(this.kWLogCalled());
			this.searchInitOR();
		};

		search.prototype.searchRetrieve = 
			function searchRetrieve()
		{
			//console.log(this.kWLogCalled());
		};

		return search;

	}
);
