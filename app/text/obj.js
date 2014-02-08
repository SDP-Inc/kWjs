/**********************************************************************
 *
 * text/obj.js
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
		"./lang/obj",
		"./map/obj",
		"kWStat/globals",
		"kWMVC/obj",
		"kWUtils/jsonp/obj",
		"kWStat/validate"
	],
	function
	(
		lang,
		map,
		globalsKW,
		mvc,
		jsonp,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function text()
		{
			//console.log("text::constructor")
			
			this.m_sKWExt		= "text";
			
			this.m_sKWKeyFileLang	= "fileLang";
			
			this.m_kWJson		= null;
			this.m_kWLang		= null;
			this.m_kWMap			= null;
			
			this.m_sKWTextLang		= null;
		}

		text.prototype = new mvc();
		text.prototype.constructor = text;
		text.constructor = mvc.prototype.constructor;
		
		text.prototype.check = 
			function check()
		{
			mvc.prototype.check.call(this);

			//console.log(this.kWLogCalled());

			if(!validate.isString(this.m_sKWKeyFileLang))
			{
				console.error(this.kWLogInvalid("m_sKWKeyFileLang"));
			} 
		};

		text.prototype.init = 
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

		text.prototype.callback = function(view) 
		{
			this.textLoaded(view);
		};
		
	//*******************************************************************//
	//***																	   
	//***		public methods
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private methods (non-ovrrides)
	//***
	//*******************************************************************//
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
		
		text.prototype.mvcInitOR = function()
		{
			this.textInit();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		text.prototype.textCreateLang = 
			function textCreateLang() 
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWLang))
			{
				//console.log(this.kWLogRepeated());
			}
			
			this.m_kWLang = new lang();
			
			this.m_kWLang.check();
			this.m_kWLang.init();
		};
		
		text.prototype.textCreateMap = 
			function textCreateMap() 
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWMap))
			{
				//console.log(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				//console.log(this.kWLogInvalid("m_kWView"));
			}
			
			if (!validate.isString(this.m_sKWTextLang))
			{
				//console.log(this.kWLogInvalid("m_sKWTextLang"));
			}
			
			this.m_kWMap = new map();
			
			this.m_kWMap.setKWLang(this.m_sKWTextLang);
			this.m_kWMap.setKWText(this.m_kWView);
			
			this.m_kWMap.check();
			this.m_kWMap.init();
		}
		
		text.prototype.textInit = 
			function textInit()
		{
			//console.log(this.kWLogCalled());
			
			this.textRetrieveFileLang();
			this.textCreateLang();
			this.textRetrieveLang();
			this.textRetrieveView();
		};

		text.prototype.textLoaded = 
			function textLoaded(view)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(view))
			{
				//console.log(this.kWLogInvalid("view"));
			}
			
			this.m_kWView = view;
			
			this.textCreateMap();
			this.textStoreMap();
			this.kWPublishReady();
		};
		
		text.prototype.textRetrieveFileLang = 
			function textRetrieveFileLang() 
		{
			//console.log(this.kWLogCalled());

			if (validate.isString(this.m_sKWFileLang))
			{
				//console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWKeyFileLang))
			{
				//console.error(this.kWLogInvalid("m_sKWKeyFileLang"));
			} 
			
			if(!validate.isNotNull(this.m_kWView))
			{
				//console.error(this.kWLogInvalid("m_kWView"));
			} 

			this.m_sKWFileLang = this.getKWViewText(this.m_sKWKeyFileLang);
			if (!validate.isString(this.m_sKWFileLang))
			{
				console.error(this.kWLogErrRetrieve("m_sKWFileLang"));
			}
			//console.log(this.kWLogDisplay(this.m_sKWKeyFileLang, this.m_sKWFileLang));
		};
		
		text.prototype.textRetrieveLang = 
			function textRetrieveLang() 
		{
			//console.log(this.kWLogCalled());

			if (validate.isString(this.m_sKWTextLang))
			{
				//console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWLang))
			{
				//console.error(this.kWLogInvalid("m_kWLang"));
			}
			
			this.m_sKWTextLang = this.m_kWLang.getKWLang();
			if (!validate.isString(this.m_sKWTextLang))
			{
				//console.error(this.kWLogErrRetrieve("m_kWView"));
			}
		}
		
		text.prototype.textRetrieveView = 
			function textRetrieveView() 
		{
			var sFile = null;
			
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWJson))
			{
				//console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWFileLang))
			{
				console.error(this.kWLogInvalid("m_sKWFileLang"));
			}
			
			if (!validate.isString(this.m_sKWTextLang))
			{
				console.error(this.kWLogInvalid("m_sKWTextLang"));
			}
			
			sFile = this.m_sKWFileLang + "_" + this.m_sKWTextLang + ".json";
			
			this.m_kWJson = new jsonp();
			
			this.m_kWJson.setKWContext(this);
			this.m_kWJson.setKWMethod(this.callback);
			this.m_kWJson.setKWFile(sFile);
			
			this.m_kWJson.check();
			this.m_kWJson.init();
		}
		
		text.prototype.textStoreMap = 
			function textStoreMap()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(globalsKW))
			{
				//console.error(this.kWLogInvalid("globalsKW"));
			}
			
			if (validate.isNotNull(globalsKW.gText))
			{
				//console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWMap))
			{
				//console.error(this.kWLogInvalid("m_kWMap"));
			}
			
			globalsKW.gText = this.m_kWMap;
		};
		
		return text;
		
	}
)