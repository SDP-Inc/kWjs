/**********************************************************************
 *
 * log/obj.js
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
		"./base/obj",
		"./msg/stat/factory",
		"./msg/stat/enums",
		"kWStat/globals",
		"kWStat/validate"
	], 
	function
	(
		base,
		create,
		enums,
		globals,
		validate
	)
	{
		
	//*******************************************************************//
	//***																	   
	//***				public initializors
	//***
	//*******************************************************************//
		
		function log()
		{

			this.m_sKWExt			= null;
			this.m_sKWID			= null;
			this.m_sKWIDParent		= null;
			this.m_sKWJSClass		= null;
			this.m_sKWLang			= null;
			
			//this.bLogCtor();
		}

		log.prototype = new base();
		log.prototype.constructor = log;
		log.constructor = base.prototype.constructor;

		log.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);

			this.uBLCheck();
			//console.log("log.check() called - m_sKWExt is [" + this.m_sKWExt + "]");
			//this.bLogCheck();
		};

		log.prototype.init = 
			function init()
		{
			//this.bLogInit();
			this.uBLInit();
		};

    //*******************************************************************//
    //***																	   
    //***				public accessors
    //***
    //*******************************************************************//

		log.prototype.getKWID =
			function()
		{
			return this.m_sKWID;
		};

		log.prototype.getKWText =
			function(sKey)
		{
			return this.uBLRetrieveText(sKey);
		};

		log.prototype.setKWExt =
			function(sVal)
		{
			this.m_sKWExt = sVal;
		};

		log.prototype.setKWID =
			function(sVal)
		{
			this.m_sKWID = sVal;
		};

		log.prototype.setKWIDParent =
			function(sVal)
		{
			this.m_sKWIDParent = sVal;
		};

    //*******************************************************************//
    //***																	   
    //***				public methods
    //***
    //*******************************************************************//

		log.prototype.kWDelete =
			function()
		{
			this.uBLDelete();
		};

		log.prototype.kWLogCalled =
			function()
		{
			if (!this.m_bKWInit)
			{
				return "log::kWLogCalled() failed - still initializing";
			}
			var sMethod = arguments.callee.caller.name;
			return this.uBLLogCalled(sMethod);
		};

		log.prototype.kWLogCoord =
			function(nX, nY)
		{
			if (!this.m_bKWInit)
			{
				return "log::kWLogCoord() failed - still initializing";
			}

			var sMethod = arguments.callee.caller.name;
			return this.uBLLogCoord(sMethod, nX, nY);
		};

		log.prototype.kWLogCheckInvalid =
			function(sTag)
		{
			if (!this.m_bKWInit)
			{
				return "log::kWLogCheckInvalid() failed - still initializing";
			}
			return this.uBLLogCheckInvalid(sTag);
		};

		log.prototype.kWLogDisplay =
			function(sTag, value)
		{
			if (!this.m_bKWInit)
			{
				return "log::kWLogDisplay() failed - still initializing";
			}
			var sMethod = arguments.callee.caller.name;
			return this.uBLLogDisplay(sMethod, sTag, value);
		};

		log.prototype.kWLogErr =
			function()
		{
			if (!this.m_bKWInit)
			{
				return "log::kWLogErr() failed - still initializing";
			}
			var sMethod = arguments.callee.caller.name;
			return this.uBLLogErr(sMethod);
		};   

		log.prototype.kWLogErrCreate =
			function(sTag)
		{
			if (!this.m_bKWInit)
			{
				return "log::kWLogErrCreate() failed - still initializing";
			}
			var sMethod = arguments.callee.caller.name;
			return this.uBLLogErrCreate(sMethod, sTag);
		};

		log.prototype.kWLogErrRetrieve =
			function(sTag)
		{
			if (!this.m_bKWInit)
			{
				return "log::kWLogErrRetrieve() failed - still initializing";
			}
			var sMethod = arguments.callee.caller.name;
			return this.uBLLogErrRetrieve(sMethod, sTag);
		};

		log.prototype.kWLogExit =
			function()
		{
			if (!this.m_bKWInit)
			{
				return "log::kWLogExit() failed - still initializing";
			}
			var sMethod = arguments.callee.caller.name;
			return this.uBLLogExit(sMethod);
		};

		log.prototype.kWLogInvalid =
			function(sTag)
		{
			var sMethod = arguments.callee.caller.name;
			return this.uBLLogInvalid(sMethod, sTag);
		};

		log.prototype.kWLogNotImpl =
			function()
		{
			if (!this.m_bKWInit)
			{
				return "log::kWLogNotImpl() failed - still initializing";
			}
			var sMethod = arguments.callee.caller.name;
			return this.uBLLogNotImpl(sMethod);
		};

		log.prototype.kWLogRepeated =
			function()
		{
			if (!this.m_bKWInit)
			{
				return "log::kWLogRepeated() failed - still initializing";
			}
			var sMethod = arguments.callee.caller.name;
			return this.uBLLogRepeated(sMethod);
		};

		log.prototype.kWLogRetrieveLang =
			function()
		{
			return this.uBLLogRetrieveLang();
		};

		log.prototype.kWLogStatus =
			function(sStatus)
		{
			if (!this.m_bKWInit)
			{
				return "log::kWLogStatus() failed - still initializing";
			}
			var sMethod = arguments.callee.caller.name;
			return this.uBLLogStatus(sMethod, sStatus);
		};

		log.prototype.kWLogSuccess =
			function()
		{
			if (!this.m_bKWInit)
			{
				return "log::kWLogSuccess() failed - still initializing";
			}
			var sMethod = arguments.callee.caller.name;
			return this.uBLLogSuccess(sMethod);
		};

		log.prototype.kWResize =
			function()
		{
			this.uBLResize();
		};

	//*******************************************************************//
	//***																	   
	//***				protected (accessible)
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***				protected (overrides)
	//***
	//*******************************************************************//

		log.prototype.uBLDeleteOR =
			function uBLDeleteOR()
		{
			console.error(this.bLogNotImpl());
		};

		log.prototype.uBLInitOR =
			function uBLInitOR()
		{
			console.error(this.bLogNotImpl());
		};

		log.prototype.uBLRetrieveIDParentOR =
			function uBLRetrieveIDParentOR()
		{
			console.error(this.bLogNotImpl());
		};
		
		log.prototype.uBLResizeOR =
			function uBLResizeOR()
		{
			//console.error(this.bLogNotImpl());
		};

	//*******************************************************************//
	//***																	   
	//***				protected (non-overridable)
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***				private
	//***
	//*******************************************************************//

		log.prototype.uBLCheck =
			function uBLCheck()
			{
				//console.log(this.bLogCalled("uBLCheck"));

				this.uBLCreateID();
				this.uBLRetrieveJSClass();
				this.uBLRetrieveLang();

				//console.log(this.bLogExit("uBLCheck"));
			};

		log.prototype.uBLDelete =
			function uBLDelete()
			{
				//console.log(this.bLogCalled("uBLDelete"));

				this.uBLDeleteOR();
			};

		log.prototype.uBLInit =
			function uBLInit()
		{
			//console.log(this.bLogCalled("uBLInit"));
			this.uBLInitOR();
		};

		log.prototype.uBLCreateID = 
			function uBLCreateID()
		{
			//console.log(this.bLogCalled());
			
			if (this.m_sKWID)
			{
				return;
			}
			
			if (!validate.isString(this.m_sKWIDParent))
			{
				this.uBLRetrieveIDParent();
			}
			
			if (!validate.isString(this.m_sKWExt))
			{
				console.error(this.bLogInvalid("m_sKWExt"));
			}
			
			this.m_sKWID = this.m_sKWIDParent + "_" + this.m_sKWExt;
		};

		log.prototype.uBLCreateMsg = 
			function uBLCreateMsg(nMsg)
		{
			//console.log(this.bLogCalled("uBLCreateMsg"));

			var msg = null;

			if (!validate.isNumberPos(nMsg))
			{
				console.error(this.bLogInvalid("uBLCreateMsg", "nMsg"));
			}

			msg = create(nMsg);
			if (!msg)
			{
				console.error(this.bLogErrCreate("uBLCreateMsg", "msg"));
			}

			this.uBLLoadMsg(msg);

			return msg;
		};

		log.prototype.uBLInit = 
			function uBLInit()
		{
			//console.log(this.bLogCalled("uBLInit"));
			
			if (this.m_bKWInit)
			{
				console.error("[" + this.m_sKWID + "] log.init() repeated");
			}
			
			this.m_bKWInit = true;
			
			this.uBLInitOR();
		};

		log.prototype.uBLLoadMsg = 
			function uBLLoadMsg(msg)
		{
			//console.log(this.bLogCalled("uBLLoadMsg"));

			if (!validate.isNotNull(msg))
			{
				console.error(this.bLogInvalid("msg"));
			}

			if (!validate.isString(this.m_sKWJSClass))
			{
				console.error(this.bLogInvalid("m_sKWJSClass"));
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.bLogInvalid("m_sKWID"));
			}

			msg.setKWClass(this.m_sKWJSClass);
			msg.setKWID(this.m_sKWID);

			//console.log(this.bLogExit());
		};

		log.prototype.uBLLogCalled = 
			function uBLLogCalled(sMethod)
		{
			//console.log(this.bLogCalled());

			var msg = this.uBLCreateMsg(enums.nCalled);

			msg.setKWMethodName(sMethod);
			msg.check();
			msg.init();

			return msg.getKWMsg();
		};

		log.prototype.uBLLogCoord = 
			function uBLLogCoord(sMethod, nX, nY)
		{
			//console.log(this.bLogCalled());

			var msg = this.uBLCreateMsg(enums.nCoord);

			msg.setKWMethodName(sMethod);
			msg.setKWX(nX);
			msg.setKWY(nY);
			msg.check();
			msg.init();

			return msg.getKWMsg();
		};

		log.prototype.uBLLogCheckInvalid =
			function uBLLogCheckInvalid(sTag)
		{
			//console.log(this.bLogCalled());

			var msg = this.uBLCreateMsg(enums.nCheckInvalid);

			msg.setKWTag(sTag);
			msg.check();
			msg.init();

			return msg.getKWMsg();
		};

		log.prototype.uBLLogDisplay = 
			function uBLLogDisplay(sMethod, sTag, value)
		{
			//console.log(this.bLogCalled());

			var msg = this.uBLCreateMsg(enums.nDisplay);

			msg.setKWMethodName(sMethod);
			msg.setKWTag(sTag);
			msg.setKWVal(value);
			msg.check();
			msg.init();

			return msg.getKWMsg();
		};

		log.prototype.uBLLogErr = 
			function uBLLogErr(sMethod)
		{
			//console.log(this.bLogCalled());

			var msg = this.uBLCreateMsg(enums.nMsgErr);

			msg.setKWMethodName(sMethod);
			msg.check();
			msg.init();

			return msg.getKWMsg();
		};   

		log.prototype.uBLLogErrCreate = 
			function uBLLogErrCreate(sMethod, sTag)
		{
			//console.log(this.bLogCalled());

			var msg = this.uBLCreateMsg(enums.nErrCreate);

			msg.setKWMethodName(sMethod);
			msg.setKWTag(sTag);
			msg.check();
			msg.init();

			return msg.getKWMsg();
		};

		log.prototype.uBLLogErrRetrieve =
			function uBLLogErrRetrieve(sMethod, sTag)
		{
			//console.log(this.bLogCalled());

			var msg = this.uBLCreateMsg(enums.nErrRetrieve);

			msg.setKWMethodName(sMethod);
			msg.setKWTag(sTag);
			msg.check();
			msg.init();

			return msg.getKWMsg();
		};

		log.prototype.uBLLogExit =
			function uBLLogExit(sMethod)
		{
			//console.log(this.bLogCalled());

			var msg = this.uBLCreateMsg(enums.nExit);

			msg.setKWMethodName(sMethod);
			msg.check();
			msg.init();

			return msg.getKWMsg();
		};

		log.prototype.uBLLogInvalid = 
			function uBLLogInvalid(sMethod, sTag)
		{
			//console.log(this.bLogCalled());

			var msg = this.uBLCreateMsg(enums.nInvalid);

			msg.setKWMethodName(sMethod);
			msg.setKWTag(sTag);
			msg.check();
			msg.init();

			return msg.getKWMsg();
		};

		log.prototype.uBLLogNotImpl = 
			function uBLLogNotImpl(sMethod)
		{
			//console.log(this.bLogCalled());

			var msg = this.uBLCreateMsg(enums.nNotImpl);

			msg.setKWMethodName(sMethod);
			msg.check();
			msg.init();

			return msg.getKWMsg();
		};

		log.prototype.uBLLogRepeated = 
			function uBLLogRepeated(sMethod)
		{
			//console.log(this.bLogCalled());

			var msg = this.uBLCreateMsg(enums.nRepeated);

			msg.setKWMethodName(sMethod);
			msg.check();
			msg.init();

			return msg.getKWMsg();
		};

		log.prototype.uBLLogStatus = 
			function uBLLogStatus(sMethod, sStatus)
		{
			//console.log(this.bLogCalled());

			var msg = this.uBLCreateMsg(enums.nStatus);

			msg.setKWMethodName(sMethod);
			msg.setKWStatus(sStatus);
			msg.check();
			msg.init();

			return msg.getKWMsg();
		};

		log.prototype.uBLLogSuccess = 
			function uBLLogSuccess(sMethod)
		{
			//console.log(this.bLogCalled());

			var msg = this.uBLCreateMsg(enums.nSuccess);

			msg.setKWMethodName(sMethod);
			msg.check();
			msg.init();

			return msg.getKWMsg();
		};

		log.prototype.uBLResize =
			function uBLResize()
		{
			//console.log(this.bLogCalled());

			this.uBLResizeOR();
		};

		log.prototype.uBLRetrieveIDParent =
			function uBLRetrieveIDParent()
		{
			//console.log(this.bLogCalled());
			
			this.uBLRetrieveIDParentOR();
			
			if (!validate.isString(this.sLogIDParent))
			{
				console.error(this.bLogErrRetrieve("m_sJSCsLogIDParentlass"));
			}
		};
		
		log.prototype.uBLRetrieveJSClass =
			function uBLRetrieveJSClass()
		{
			//console.log(this.bLogCalled());

			this.m_sKWJSClass = this.constructor.name;
			if (!validate.isString(this.m_sKWJSClass))
			{
				this.m_sKWJSClass = this.m_sKWExt;
			}

			if (!validate.isString(this.m_sKWJSClass))
			{
				this.m_sKWJSClass = "unknown";
			}

			//console.log(this.bLogDisplay("m_sJSClass", this.m_sKWJSClass));
		};

		log.prototype.uBLRetrieveLang =
			function uBLRetrieveLang() 
		{
			//console.log(this.kWLogCalled());

			if (validate.isString(this.m_sKWLang))
			{
				//console.error(this.bLogRepeated());
			}

			if (!globals)
			{
				console.error(this.bLogInvalid("globals"));
			}

			if (!globals.gText)
			{
				return;
			}

			this.m_sKWLang = globals.gText.getKWLang();
			if (!validate.isString(this.m_sKWLang))
			{
				console.error(this.bLogErrRetrieve("m_sKWLang"));
			}
		};

		log.prototype.uBLRetrieveText = 
			function uBLRetrieveText(sKey)
		{
			var sText = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(sKey))
			{
				console.error(this.bLogInvalid("sKey"));
			}
			
			if (!validate.isNotNull(globals))
			{
				console.error(this.bLogInvalid("globals"));
			}
			
			if (!validate.isNotNull(globals.gText))
			{
				console.error(this.bLogInvalid("gText"));
			}
			
			//console.debug(this.kWLogDisplay("sKey", sKey));
			
			sText = globals.gText.getKWVal(sKey);
			if (!validate.isString(sText))
			{
				console.error(this.bLogErrRetrieve("sText"));
			}
			
			//console.debug(this.kWLogDisplay("sText", sText));
			
			return sText;
		};
		
		return log;

	}
);