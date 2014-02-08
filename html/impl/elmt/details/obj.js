/**********************************************************************
 *
 * details/obj.js
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
		"../../attrs/details/obj",
		"../../view/details/obj",
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

		function details()
		{
			//console.log("details::constructor");
			this.m_sKWTag	= "details";
			
			this.m_bKWOpen	= true;
		}

		details.prototype = new elmt();
		details.prototype.constructor = details;
		details.constructor = elmt.prototype.constructor;

		details.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		details.prototype.init = 
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

		details.prototype.detailsInitOR = 
			function detailsInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		details.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.detailsCreateAttrs(); 
		};
		
		details.prototype.elmtCreateViewOR = 
			function()
		{
			return this.detailsCreateView();
		};
		
		details.prototype.elmtInitOR = 
			function()
		{
			this.detailsInit();
		};
		
		details.prototype.elmtRetrieveOR = 
			function()
		{
			this.detailsRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		details.prototype.detailsCreateAttrs = 
			function detailsCreateAttrs()
		{
			theAttrs = null;
			
			//console.log(this.kWLogCalled());
			theAttrs = new attrs();
			
			theAttrs.setKWOpen(this.m_bKWOpen);
			
			return theAttrs;
		};

		details.prototype.detailsCreateView = 
			function detailsCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		details.prototype.detailsInit = 
			function detailsInit()
		{
			//console.log(this.kWLogCalled());
			this.detailsInitOR();
		};
		
		details.prototype.detailsRetrieve = 
			function detailsRetrieve()
		{
			//console.log(this.kWLogCalled());
			this.detailsRetrieveOpen();
		};
		
		details.prototype.detailsRetrieveOpen = 
			function detailsRetrieveOpen()
		{
			var value	= null;
			
			var bVal	= true;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWOpen();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWOpen = bVal;
				//console.debug(this.kWLogDisplay("m_bKWOpen", this.m_bKWOpen));
			}
		};
		
		return details;

	}
);
