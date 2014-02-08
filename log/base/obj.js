/**********************************************************************
 *
 * base/obj.js
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
	], 
	function
	(
	)
	{
		
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function logBase() 
		{
			this.m_sKWBase = "[base]";

			this.m_bKWInit = false;
		}

		logBase.prototype.check = function()
		{
			//this.bLogCheck();
		};

		logBase.prototype.init = function()
		{
			//this.bLogInit);

			if (this.m_bKWInit)
			{
				this.bLogRepeated("init");
			}

			this.m_bKWInit = true;
		};

	//*******************************************************************//
	//***																	   
	//***				public accessors
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***				public methods
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***					protected (accessible)
	//***
	//*******************************************************************//

		logBase.prototype.bLogCalled = function()
		{
			var sMethod = arguments.callee.caller.name;
			var sMsg = "called.";
			return this.baseLogMsg(sMethod, sMsg);
		};

		logBase.prototype.bLogCheck = function()
		{
			//this.bLogCheck();
		};

		logBase.prototype.bLogCtor = function()
		{
			this.bLogCtor();
		};

		logBase.prototype.bLogDisplay = function(sTag, sVal)
		{
			var sMethod = arguments.callee.caller.name;
			var sMsg = sTag + " is ["  + sVal + "]";
			return this.baseLogMsg(sMethod, sMsg);
		};

		logBase.prototype.bLogError = function()
		{
			var sMethod = arguments.callee.caller.name;
			var sMsg = "error.";
			return this.baseLogMsg(sMethod, sMsg);
		};

		logBase.prototype.bLogErrCreate = function(sTag)
		{
			var sMethod = arguments.callee.caller.name;
			var sMsg = "error creating.";
			return this.baseLogMsg(sMethod, sMsg);
		};

		logBase.prototype.bLogErrRetrieve = function(sTag)
		{
			var sMethod = arguments.callee.caller.name;
			var sMsg = "error retrieving.";
			return this.baseLogMsg(sMethod, sMsg);
		};

		logBase.prototype.bLogExit = function()
		{
			var sMethod = arguments.callee.caller.name;
			var sMsg = "exit.";
			return this.baseLogMsg(sMethod, sMsg);
		};

		logBase.prototype.bLogInit = function()
		{
		};

		logBase.prototype.bLogInvalid = function(sTag)
		{
			var sMethod = arguments.callee.caller.name;
			var sMsg = "[" + sTag + "] is invalid.";
			return this.baseLogMsg(sMethod, sMsg);
		};

		logBase.prototype.bLogNotImpl = function()
		{
			var sMethod = arguments.callee.caller.name;
			var sMsg = "not implemented.";
			return this.baseLogMsg(sMethod, sMsg);
		};

		logBase.prototype.bLogRepeated = function()
		{
			var sMethod = arguments.callee.caller.name;
			var sMsg = "repeated.";
			return this.baseLogMsg(sMethod, sMsg);
		};

		logBase.prototype.bLogSuccess = function()
		{
			var sMethod = arguments.callee.caller.name;
			var sMsg = "success.";
			return this.baseLogMsg(sMethod, sMsg);
		};

	//*******************************************************************//
	//***																	   
	//***				protected (overridable)
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***				private
	//***
	//*******************************************************************//

		logBase.prototype.baseLogCheck = function()
		{
			this.baseLogMsg("check", "called");
		};

		logBase.prototype.baseLogExit = function()
		{
			this.baseLogMsg("exit", "called");
		};

		logBase.prototype.baseLogInit = function()
		{
			this.baseLogMsg("init", "called");
		};

		logBase.prototype.baseLogMsg = function(sMethod, sStatus)
		{
			var sFirst	= this.m_sKWBase + this.declaredClass	+ "::";
			var sText 	= sFirst + sMethod + "() " + sStatus;

			return sText;
		};

		
		return logBase;

	}
)
