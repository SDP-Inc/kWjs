/**********************************************************************
 *
 * ins/obj.js
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
		"../../attr/cite/obj",
		"../../attr/dateTime/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		cite,
		dateTime,
		html,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function ins()
		{
			//console.log("ins::constructor");
			
			this.m_kWCite		= null;
			this.m_kWDateTime	= null;
			
			this.m_sKWCite		= null;
			this.m_sKWDateTime	= null;
		}

		ins.prototype = new html();
		ins.prototype.constructor = ins;
		ins.constructor = html.prototype.constructor;

		ins.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		ins.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			html.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		ins.prototype.setKWCite =
			function(sVal)
		{
			this.insSetCite(sVal);
		};

		ins.prototype.setKWDateTime =
			function(sVal)
		{
			this.insSetDateTime(sVal);
		};

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
	
		ins.prototype.htmlCreateOR =
			function()
		{
			this.insCreate();
		};

		ins.prototype.htmlDeleteOR =
			function()
		{
			this.insDelete();
		};

		ins.prototype.htmlInitOR = 
			function()
		{
			this.insInit();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		ins.prototype.insCreate = 
			function insCreate()
		{
			//console.log(this.kWLogCalled());
			this.insCreateCite();
			this.insCreateDateTime();
		};

		ins.prototype.insCreateCite =
			function insCreateCite()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWCite))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWCite();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWCite;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.insCreateCiteImpl();

			this.m_kWCite.setKWValue(sValue);
		};

		ins.prototype.insCreateCiteImpl =
			function insCreateCiteImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWCite))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			this.m_kWCite = new cite();

			this.m_kWCite.setKWIDParent(this.m_sKWID);
			this.m_kWCite.setKWDom(this.m_kWDom);

			this.m_kWCite.check();
			this.m_kWCite.init();

			this.kWAddAttr(this.m_kWCite);
		};

		ins.prototype.insCreateDateTime =
			function insCreateDateTime()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWDateTime))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWDateTime();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWDateTime;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.insCreateDateTimeImpl();

			this.m_kWDateTime.setKWValue(sValue);
		};

		ins.prototype.insCreateDateTimeImpl =
			function insCreateDateTimeImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWDateTime))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			this.m_kWDateTime = new dateTime();

			this.m_kWDateTime.setKWIDParent(this.m_sKWID);
			this.m_kWDateTime.setKWDom(this.m_kWDom);

			this.m_kWDateTime.check();
			this.m_kWDateTime.init();

			this.kWAddAttr(this.m_kWDateTime);
		};

		ins.prototype.insDelete =
			function insDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWCite		    = null;
			this.m_kWDateTime		= null;
		};

		ins.prototype.insInit =
			function insInit()
		{
			//console.log(this.kWLogCalled());
		};

		ins.prototype.insSetCite =
			function insSetCite(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWCite = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWCite))
			{
				this.insCreateCiteImpl();
			}

			this.m_kWCite.setKWValue(this.m_sKWCite);
		};

		ins.prototype.insSetDateTime =
			function insSetDateTime(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWDateTime = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWDateTime))
			{
				this.insCreateDateTimeImpl();
			}

			this.m_kWDateTime.setKWValue(this.m_sKWDateTime);
		};

		return ins;

	}
);
