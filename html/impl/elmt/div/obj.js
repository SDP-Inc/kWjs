/**********************************************************************
 *
 * div/obj.js
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
		"../../attrs/div/obj",
		"../../view/div/obj",
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

		function div()
		{
			//console.log("div::constructor");

			this.m_sKWTag	= "div";
			
			this.m_sKWRole	= null;
		}

		div.prototype = new elmt();
		div.prototype.constructor = div;
		div.constructor = elmt.prototype.constructor;

		div.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		div.prototype.init = 
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
	
		div.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.divCreateAttrs(); 
		};
		
		div.prototype.elmtCreateViewOR = 
			function()
		{
			return this.divCreateView();
		};
		
		div.prototype.elmtInitOR = 
			function()
		{
			this.divInit();
		};
		
		div.prototype.elmtRetrieveOR = 
			function()
		{
			this.divRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		div.prototype.divInitOR = 
			function divInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		div.prototype.divCreateAttrs = 
			function divCreateAttrs()
		{
			theAttrs = null;
			
			//console.log(this.kWLogCalled());
			theAttrs = new attrs();
			
			theAttrs.setKWRole(this.m_sKWRole);
			
			return theAttrs;
		};

		div.prototype.divCreateView = 
			function divCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		div.prototype.divInit = 
			function divInit()
		{
			//console.log(this.kWLogCalled());
			this.divInitOR();
		};

		div.prototype.divRetrieve = 
			function divRetrieve()
		{
			//console.log(this.kWLogCalled());
			this.divRetrieveRole();
		};

		div.prototype.divRetrieveRole = 
			function divRetrieveRole()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWRole))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWRole();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWRole = value.getKWValue();
			if (validate.isString(this.m_sKWRole))
			{
				//console.debug(this.kWLogDisplay("m_sKWRole", this.m_sKWRole));
			}
		};
		
		return div;

	}
);
