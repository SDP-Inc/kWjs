/**********************************************************************
 *
 * menu/obj.js
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
		"../../attrs/menu/obj",
		"../../view/menu/obj",
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

		function menu()
		{
			//console.log("menu::constructor");
			this.m_sKWTag	= "menu";
			
			this.m_sKWLabel	= null;
			this.m_sKWType	= null;
		}

		menu.prototype = new elmt();
		menu.prototype.constructor = menu;
		menu.constructor = elmt.prototype.constructor;

		menu.prototype.check =
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		menu.prototype.init =
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

		menu.prototype.menuInitOR = 
			function menuInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		menu.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.menuCreateAttrs(); 
		};
		
		menu.prototype.elmtCreateViewOR =
			function()
		{
			return this.menuCreateView();
		};
		
		menu.prototype.elmtInitOR =
			function()
		{
			this.menuInit();
		};
		
		menu.prototype.elmtRetrieveOR = 
			function()
		{
			this.menuRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		menu.prototype.menuCreateAttrs = 
			function menuCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWLabel(this.m_sKWLabel);
			theAttrs.setKWType(this.m_sKWType);
			
			return theAttrs;
		};

		menu.prototype.menuCreateView = 
			function menuCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		menu.prototype.menuInit = 
			function menuInit()
		{
			//console.log(this.kWLogCalled());
			this.menuInitOR();
		};
		
		menu.prototype.menuRetrieve = 
			function menuRetrieve()
		{
			//console.log(this.kWLogCalled());
			this.menuRetrieveLabel();
			this.menuRetrieveType();
		};
		
		menu.prototype.menuRetrieveLabel = 
			function menuRetrieveLabel()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWLabel))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWLabel();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value", value));
			}
			
			this.m_sKWLabel = value.getKWValue();
			if (validate.isString(this.m_sKWLabel))
			{
				//console.log(this.kWLogDisplay("m_sKWLabel", this.m_sKWLabel));
			}
		};
		
		menu.prototype.menuRetrieveType = 
			function menuRetrieveType()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWType))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWType();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value", value));
			}
			
			this.m_sKWType = value.getKWValue();
			if (validate.isString(this.m_sKWType))
			{
				//console.log(this.kWLogDisplay("m_sKWType", this.m_sKWType));
			}
		};
		
		return menu;

	}
);
