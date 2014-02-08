/**********************************************************************
 *
 * persist/obj.js
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
		"./breadCrumbs/obj",
		"./cookie/obj",
		"kWStat/globals",
		"kWMVC/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
		breadcrumbs,
		cookie,
		globals,
		mvc,
		validate,
		$
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function persist() 
		{
			//console.log("persist::constructor");
			
			this.m_sKWExt			= "persist";
			
            this.m_sKWKeySeparator  = "kwSeparator";
            
			this.m_breadCrumbs		= null;
			this.m_cookie			= null;
            this.m_kWState          = null;

			this.m_sHash			= null;
			this.m_sKWSeparator		= null;
			
			this.m_bIsStateLoaded	= false;
		}

		persist.prototype = new mvc();
		persist.prototype.constructor = persist;
		persist.constructor = mvc.prototype.constructor;
		
		persist.prototype.check = 
			function check()
		{
			mvc.prototype.check.call(this);
            
			//console.log(this.kWLogCalled());
            
			if(!validate.isString(this.m_sKWKeySeparator))
			{
				console.error(this.kWLogInvalid("m_sKWKeySeparator"));
			}
		};

		persist.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			mvc.prototype.init.call(this);
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
		
		persist.prototype.mvcHandleCBDefaultOR =
			function(sTopic, data)
		{
			this.persistHandleCBDefault(sTopic);
		};

		persist.prototype.mvcHandleCBReadyOR =
			function(sTopic, data)
		{
			this.persistHandleCBReady(sTopic);
		};

		persist.prototype.mvcInitOR = function()
		{
			this.persistInit();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//
		
		persist.prototype.persistCreateBCOR = 
			function persistCreateBCOR()
		{
			return new breadcrumbs();
		};

		persist.prototype.persistCreateCookieOR = 
			function persistCreateCookieOR()
		{
			return new cookie();
		};

		persist.prototype.persistInitOR = 
			function persistInitOR()
		{
			//console.error(this.kWLogNotImpl());
		};

		persist.prototype.persistPackStateOR  = 
			function persistPackStateOR()
		{
			//console.error(this.kWLogNotImpl());
		};

		persist.prototype.persistUnPackStateOR  = 
			function persistUnPackStateOR()
		{
			//console.error(this.kWLogNotImpl());
		};

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		persist.prototype.persistCreateBreadCrumbs = 
			function persistCreateBreadCrumbs() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_breadCrumbs)
			{
				console.error(this.kWLogRepeated());
			}

			if(!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			} 
			
			if(!validate.isString(this.m_sKWSeparator))
			{
				console.error(this.kWLogInvalid("m_sKWSeparator"));
			}
            
			if(!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			} 

			this.m_breadCrumbs = this.persistCreateBCOR();
			if(!validate.isNotNull(this.m_breadCrumbs))
			{
				console.error(this.kWLogErrCreate("m_breadCrumbs"));
			} 

			this.m_breadCrumbs.setKWIDParent(this.m_sKWID);
			this.m_breadCrumbs.setKWSeparator(this.m_sKWSeparator);
			this.m_breadCrumbs.setKWViewParent(this.m_kWView);
			
			this.m_breadCrumbs.check();
			this.m_breadCrumbs.init();   
		};

		persist.prototype.persistCreateCookie = 
			function persistCreateCookie() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_cookie)
			{
				console.error(this.kWLogRepeated());
			}

			if(!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			} 
			
			if(!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			} 

			this.m_cookie = this.persistCreateCookieOR();
			if(!validate.isNotNull(this.m_cookie))
			{
				console.error(this.kWLogErrCreate("m_cookie"));
			} 

			this.m_cookie.setKWIDParent(this.m_sKWID);
			this.m_cookie.setKWViewParent(this.m_kWView);
			
			this.m_cookie.check();
			this.m_cookie.init();   
		};

		persist.prototype.persistHandleCBDefault = 
			function persistHandleCBDefault(sTopic, data)
		{
			//console.log(this.kWLogCalled());
			
			//console.debug(this.kWLogDisplay("sTopic", sTopic));
			
            if (!this.isKWReady())
            {
                return;
            }
            
			this.persistStore();
		};  

		persist.prototype.persistHandleCBReady = 
			function persistHandleCBReady(sTopic, data)
		{
			//console.log(this.kWLogCalled());
			
			//console.debug(this.kWLogDisplay("sTopic", sTopic));
            
            this.persistRetrieve();
            this.kWPublishReady();
		};  

		persist.prototype.persistInit =
			function persistInit() 
		{
			//console.log(this.kWLogCalled());
			
            this.persistRetrieveSeparator();
			this.persistCreateBreadCrumbs();
			this.persistCreateCookie();
			this.persistInitOR();
		};

		persist.prototype.persistPackState = 
			function persistPackState() 
		{
			//console.log(this.kWLogCalled());
			this.persistPackStateOR();
		};
		
		persist.prototype.persistRetrieve = 
			function persistRetrieve() 
		{
			//console.log(this.kWLogCalled());
            
			this.persistRetrieveBC();
			if (!validate.isNotNull(this.m_kWState))
			{
				this.persistRetrieveCookie();
			}
            
            this.persistUnPackState();
		};
		
		persist.prototype.persistRetrieveBC = 
			function persistRetrieveBC() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWState))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_breadCrumbs))
			{
				console.error(this.kWLogInvalid("m_breadCrumbs"));
			}
			
			this.m_kWState = this.m_breadCrumbs.get();
		};
		
		persist.prototype.persistRetrieveCookie = 
			function persistRetrieveCookie() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWState))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_cookie))
			{
				console.error(this.kWLogInvalid("m_cookie"));
			}
			
			this.m_kWState = this.m_cookie.get();
			if (!validate.isNotNull(this.m_kWState))
			{
				console.error(this.kWLogInvalid("m_kWState"));
			}
		};
		
		persist.prototype.persistRetrieveSeparator = 
			function persistRetrieveSeparator() 
		{
			//console.log(this.kWLogCalled());
			
			if(validate.isString(this.m_sKWSeparator))
			{
				console.error(this.kWLogInvalid("m_sKWSeparator"));
			}
            
			if(!validate.isString(this.m_sKWKeySeparator))
			{
				console.error(this.kWLogInvalid("m_sKWKeySeparator"));
			}
            
            this.m_sKWSeparator = this.getKWViewText(this.m_sKWKeySeparator);
 			if(!validate.isString(this.m_sKWSeparator))
			{
				console.error(this.kWLogErrRetrieve("m_sKWSeparator"));
			}
		};
		
		persist.prototype.persistStore = 
			function persistStore() 
		{
			//console.log(this.kWLogCalled());

			this.persistPackState();
			this.persistStoreBC();
			this.persistStoreCookie();
		};

		persist.prototype.persistStoreBC = 
			function persistStoreBC() 
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_breadCrumbs))
			{
				console.error(this.kWLogInvalid("m_breadCrumbs"));
			}
			
			if (!validate.isNotNull(this.m_kWState))
			{
				console.error(this.kWLogInvalid("m_kWState"));
			}
			
			this.m_breadCrumbs.set(this.m_kWState);
        };

  		persist.prototype.persistStoreCookie = 
			function persistStoreCookie() 
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_cookie))
			{
				console.error(this.kWLogInvalid("m_cookie"));
			}
			
			if (!validate.isNotNull(this.m_kWState))
			{
				console.error(this.kWLogInvalid("m_kWState"));
			}
			
			this.m_cookie.set(this.m_kWState);
		};

		persist.prototype.persistUnPackState = 
			function persistUnPackState() 
		{
			//console.log(this.kWLogCalled());
			this.persistUnPackStateOR();
		};

		return persist;
		
	}
)