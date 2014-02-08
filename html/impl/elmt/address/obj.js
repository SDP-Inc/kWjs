/**********************************************************************
 *
 * address/obj.js
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

		function address()
		{
			//console.log("address::constructor");
			this.m_sKWTag = "address";
		}

		address.prototype = new elmt();
		address.prototype.constructor = address;
		address.constructor = elmt.prototype.constructor;

		address.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		address.prototype.init = 
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

		address.prototype.addressInitOR = 
			function addressInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		address.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.addressCreateAttrs(); 
		};
		
		address.prototype.elmtCreateViewOR =
			function()
		{
			return this.addressCreateView();
		};
		
		address.prototype.elmtInitOR = 
			function()
		{
			this.addressInit();
		};
		
		address.prototype.elmtRetrieveOR = 
			function()
		{
			this.addressRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		address.prototype.addressCreateAttrs = 
			function addressCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		address.prototype.addressCreateView = 
			function addressCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		address.prototype.addressInit = 
			function addressInit()
		{
			//console.log(this.kWLogCalled());
			this.addressInitOR();
		};
		
		address.prototype.addressRetrieve = 
			function addressRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return address;

	}
);
