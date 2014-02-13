/**********************************************************************
 *
 * app.js
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
		"./persist/obj",
		"./state/obj",
		"./text/obj",
		"stat/globals",
		"kWMVC/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
		persist,
		state,
		text,
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
	
		function app() 
		{
			console.log("app::constructor");

			this.m_sKWExt		    = "app";
			this.m_sKWID		    = "app";
			
			this.m_sKWFile		    = "resources/views/app.json";

			this.m_sKWKeyDate		= "date";
			this.m_sKWKeySubVersion	= "subVersion";
			this.m_sKWKeyVersion	= "version";

			this.m_kWPersist	    = null;
			this.m_kWDom		    = null;
			this.m_kWResize	        = null;
			this.m_kWText		    = null;

			this.m_sKWDate          = null;
			this.m_sKWSubVersion    = null;
			this.m_sKWVersion       = null;
		}

		app.prototype = new mvc();
		app.prototype.constructor = app;
		app.constructor = mvc.prototype.constructor;
		
		app.prototype.check = 
			function check()
		{
			mvc.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sKWFile))
			{
				console.error(this.kWLogInvalid("m_sKWFile"));
			}

			if (!validate.isString(this.m_sKWKeyDate))
			{
				console.error(this.kWLogInvalid("m_sKWKeyDate"));
			}

			if (!validate.isString(this.m_sKWKeySubVersion))
			{
				console.error(this.kWLogInvalid("m_sKWKeySubVersion"));
			}

			if (!validate.isString(this.m_sKWKeyVersion))
			{
				console.error(this.kWLogInvalid("m_sKWKeyVersion"));
			}
		};

		app.prototype.init = 
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

		app.prototype.kWStateChanged =
			function(e)
		{
			this.appStateChanged(e);
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
		
		app.prototype.mvcHandleCBReadyOR = function(sTopic, data)
		{
			this.appHandleCBReady(sTopic, data);
		};

		app.prototype.mvcInitOR = function()
		{
			this.appInit();
		};

		app.prototype.mvcResizeOR = function()
		{
			this.appResize();
		};

		//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//
		
		app.prototype.appCreatePersistOR  = 
			function appCreatePersistOR()
		{
			return new persist();
		};

		app.prototype.appCreateStateOR  =
			function appCreateStateOR()
		{
			return new state();
		};

		app.prototype.appInitOR =
			function appInitOR()
		{
			console.error(this.kWLogNotImpl());
		};

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		app.prototype.appCreatePersist =
			function appCreatePersist()
			{
				//console.log(this.kWLogCalled());

				if (this.m_kWPersist)
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

				this.m_kWPersist = this.appCreatePersistOR();
				if(!validate.isNotNull(this.m_kWPersist))
				{
					console.error(this.kWLogInvalid("m_kWPersist"));
				}

				this.m_kWPersist.setKWIDParent(this.m_sKWID);
				this.m_kWPersist.setKWViewParent(this.m_kWView);

				this.m_kWPersist.check();
				this.m_kWPersist.init();
			};

		app.prototype.appCreateResize =
			function appCreateResize()
			{
				//console.log(this.kWLogCalled());

				if (this.m_kWResize)
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

				this.m_kWResize = this.appCreateResizeOR();
				if(!validate.isNotNull(this.m_kWResize))
				{
					console.error(this.kWLogInvalid("m_kWResize"));
				}

				this.m_kWResize.setKWIDParent(this.m_sKWID);
				this.m_kWResize.setKWViewParent(this.m_kWView);

				this.m_kWResize.check();
				this.m_kWResize.init();
			};

		app.prototype.appCreateState =
			function appCreateState() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_kWState)
			{
			   console.error(this.kWLogRepeated());
			}

			if(!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			} 

			if(!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			} 
			
			this.m_kWState = this.appCreateStateOR();
			if(!validate.isNotNull(this.m_kWState))
			{
				console.error(this.kWLogErrCreate("m_kWState"));
			} 
			
			this.m_kWState.setKWIDParent(this.m_sKWID);
			this.m_kWState.setKWViewParent(this.m_kWView);
			
			this.m_kWState.check();
			this.m_kWState.init();
		};

		app.prototype.appCreateText =
			function appCreateText()
		{
			//console.log(this.kWLogCalled());

			if(this.m_kWText)
			{
				console.error(this.kWLogRepeated());
			}

			if(!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			if(!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			this.m_kWText = new text();

			this.m_kWText.setKWIDParent(this.m_sKWID);
			this.m_kWText.setKWViewParent(this.m_kWView);

			this.m_kWText.check();
			this.m_kWText.init();
		};

		app.prototype.appHandleCBReady =
			function appHandleCBReady(sTopic) 
		{
			//console.log(this.kWLogCalled());

			this.appCreatePersist();
			this.appCreateResize();
			this.appCreateState();
			this.appInitOR();
		};

		app.prototype.appInit = function appInit() 
		{
            //console.log(this.kWLogCalled());
			
			this.appRetrieveBody();
			this.appRetrieveDate();
			this.appRetrieveSubVersion();
			this.appRetrieveVersion();
			this.appCreateText();
		};

		app.prototype.appResize =
			function appResize()
			{
				//console.log(this.kWLogCalled());

				if (!validate.isNotNull(this.m_kWResize))
				{
					console.error(this.kWLogInvalid("m_kWResize"));
				}

				this.m_kWResize.resize();
			};

		app.prototype.appRetrieveBody =
			function appRetrieveBody()
			{
				//console.log(this.kWLogCalled());

				if (validate.isDom(this.m_kWDom))
				{
					console.error(this.kWLogRepeated());
				}

				this.m_kWDom = $("body");
				if (!validate.isDom(this.m_kWDom))
				{
					console.error(this.kWLogErrRetrieve("m_kWDom"));
				}
			};

		app.prototype.appRetrieveDate =
			function appRetrieveDate()
			{
				//console.log(this.kWLogCalled());

				if (validate.isString(this.m_sKWDate))
				{
					console.error(this.kWLogRepeated());
				}

				if (!validate.isString(this.m_sKWKeyDate))
				{
					console.error(this.kWLogInvalid("m_sKWKeyDate"));
				}

				this.m_sKWDate = this.getKWViewText(this.m_sKWKeyDate);
				if (!validate.isString(this.m_sKWDate))
				{
					console.error(this.kWLogErrRetrieve("m_sKWDate"));
				}

				//console.debug(this.kWLogDisplay("m_sKWDate", this.m_sKWDate));
			};

		app.prototype.appRetrieveSubVersion =
			function appRetrieveSubVersion()
			{
				//console.log(this.kWLogCalled());

				if (validate.isString(this.m_sKWSubVersion))
				{
					console.error(this.kWLogRepeated());
				}

				if (!validate.isString(this.m_sKWKeySubVersion))
				{
					console.error(this.kWLogInvalid("m_sKWKeySubVersion"));
				}

				this.m_sKWSubVersion = this.getKWViewText(this.m_sKWKeySubVersion);
				if (!validate.isString(this.m_sKWSubVersion))
				{
					console.error(this.kWLogErrRetrieve("m_sKWSubVersion"));
				}

				//console.debug(this.kWLogDisplay("m_sKWSubVersion", this.m_sKWSubVersion));
			};

		app.prototype.appRetrieveVersion =
			function appRetrieveVersion()
			{
				//console.log(this.kWLogCalled());

				if (validate.isString(this.m_sKWVersion))
				{
					console.error(this.kWLogRepeated());
				}

				if (!validate.isString(this.m_sKWKeyVersion))
				{
					console.error(this.kWLogInvalid("m_sKWKeyVersion"));
				}

				if(!validate.isNotNull(globals))
				{
					console.error(this.kWLogInvalid("globals"));
				}

				this.m_sKWVersion = this.getKWViewText(this.m_sKWKeyVersion);
				if (!validate.isString(this.m_sKWVersion))
				{
					console.error(this.kWLogErrRetrieve("m_sKWVersion"));
				}

				//console.debug(this.kWLogDisplay("m_sKWVersion", this.m_sKWVersion));
			};

		app.prototype.appStart =
			function appStart() 
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWPersist))
			{
				console.error(this.kWLogInvalid("m_kWPersist"));
			}
			
			this.m_kWPersist.start();
		};
		
		app.prototype.appStateChanged = 
			function appStateChanged(e) 
		{
			//console.log(this.kWLogCalled());
            
			if (!validate.isNotNull(this.m_kWPersist))
			{
				console.error(this.kWLogInvalid("m_kWPersist"));
			}
			
			this.m_kWPersist.kWStateChanged(e);
		};

		return app;
		
	}
);