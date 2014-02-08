/**********************************************************************
 *
 * datalist/obj.js
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

		function datalist()
		{
			//console.log("datalist::constructor");
			this.m_sKWTag = "datalist";
		}

		datalist.prototype = new elmt();
		datalist.prototype.constructor = datalist;
		datalist.constructor = elmt.prototype.constructor;

		datalist.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		datalist.prototype.init = 
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

		datalist.prototype.dlInitOR = 
			function dlInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		datalist.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.dlCreateAttrs(); 
		};
		
		datalist.prototype.elmtCreateViewOR = 
			function()
		{
			return this.dlCreateView();
		};
		
		datalist.prototype.elmtInitOR = 
			function()
		{
			this.dlInit();
		};
		
		datalist.prototype.elmtRetrieveOR = 
			function()
		{
			this.dlRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		datalist.prototype.dlCreateAttrs = 
			function dlCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		datalist.prototype.dlCreateView = 
			function dlCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		datalist.prototype.dlInit = 
			function dlInit()
		{
			//console.log(this.kWLogCalled());
			this.dlInitOR();
		};
		
		datalist.prototype.dlRetrieve = 
			function dlRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return datalist;

	}
);
