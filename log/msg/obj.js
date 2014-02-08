/**********************************************************************
 *
 * msg/obj.js
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
		"../base/obj",
		"kWStat/validate"
	], 
	function
	(
		base,
		validate
	)
	{
		
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function msg() 
		{
			this.m_sKWID		= "ID";

			this.m_kWInfo		= null;

			this.m_nKWMode		= NaN;
			this.m_sKWMode		= null;

			this.m_sKWClass		= null;
			this.m_sKWMethod	= null;
			this.m_sKWMsg		= null;
			this.m_sKWText		= null;

			//this.bLogCtor();
		}

		msg.prototype = new base();
		msg.prototype.constructor = msg;
		msg.constructor = base.prototype.constructor;
		
		msg.prototype.check = function()
		{
			this.bLogCheck();

			if (!this.m_sKWClass)
			{
				console.error(this.bLogInvalid("m_sKWClass"));
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.bLogInvalid("m_sKWClass"));
			}

			if (!validate.isString(this.m_sKWMethod))
			{
				console.error(this.bLogInvalid("m_sKWMethod"));
			}

			if (!validate.isString(this.m_sKWMode))
			{
				console.error(this.bLogInvalid("m_sKWMode"));
			}

			base.prototype.check.call(this);
		};

		msg.prototype.init = function()
		{
			//this.bLogInit();
			base.prototype.init.call(this);
			this.msgInit();
		};

	//*******************************************************************//
	//***																	   
	//***				public accessors
	//***
	//*******************************************************************//

		msg.prototype.getKWClass =
			function()
		{
			return this.m_sKWClass;
		};

		msg.prototype.getKWID =
			function()
		{
			return this.m_sKWID;
		};

		msg.prototype.getKWMethodName =
			function()
		{
			return this.m_sKWMethod;
		};

		msg.prototype.getKWMsg =
			function()
		{
			return this.m_sKWMsg;
		};

		msg.prototype.setKWClass =
			function(sVal)
		{
			this.m_sKWClass = sVal;
		};

		msg.prototype.setKWID =
			function(sVal)
		{
			this.m_sKWID = sVal;
		};

		msg.prototype.setKWInfo =
			function(obj)
		{
			this.m_kWInfo = obj;
		};

		msg.prototype.setKWMethodName =
			function(sVal)
		{
			this.m_sKWMethod = sVal;
		};

		msg.prototype.setKWMode =
			function(nVal)
		{
			this.m_nKWMode = nVal;
		};

	//*******************************************************************//
	//***																	   
	//***				public methods
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***				protected (accessible)
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***				protected (non-overridable)
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***				protected (overridable)
	//***
	//*******************************************************************//

		msg.prototype.msgCreateTextImpl = function()
		{
			//this.bLogNotImpl("msgCreateTextImpl");
		};

	//*******************************************************************//
	//***																	   
	//***				private
	//***
	//*******************************************************************//

		msg.prototype.msgBuildMsg = function()
		{
			var sID = null;
			var sCM = null;
			var sT  = null;

			//this.bLogCalled("msgBuildMsg");

			if (this.m_sKWMsg)
			{
				this.bLogRepeated("msgBuildMsg");
			}

			if (!this.m_sKWClass)
			{
				this.bLogInvalid("msgBuildMsg", "m_sKWClass");
			}

			if (!this.m_sKWID)
			{
				this.bLogInvalid("msgBuildMsg", "m_sKWID");
			}

			if (!this.m_sKWMethod)
			{
				this.bLogInvalid("msgBuildMsg", "m_sKWMethod");
			}

			if (!this.m_sKWText)
			{
				this.bLogInvalid("msgBuildMsg", "m_sKWText");
			}

			sID = "[" + this.m_sKWID + "]";
			sCM = "[" + this.m_sKWClass + "::" + this.m_sKWMethod + "()]";
			sT  = "[" + this.m_sKWText + "]";

			this.m_sKWMsg = sID + sCM + sT;
		};

		msg.prototype.msgCreateText = function()
		{
			//this.bLogCalled("msgCreateText");
			this.msgCreateTextImpl();
		};

		msg.prototype.msgInit = function()
		{
			//this.bLogCalled("msgInit");
			this.msgCreateText();
			this.msgBuildMsg();
			//this.bLogExit("msgInit");
		};

		return msg;

	}
)