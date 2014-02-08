/**********************************************************************
 *
 * time/obj.js
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
		"../../attr/dateTime/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
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

		function time()
		{
			//console.log("time::constructor");
			
			this.m_kWDateTime	= null;
			
			this.m_sKWDateTime	= null;
		}

		time.prototype = new html();
		time.prototype.constructor = time;
		time.constructor = html.prototype.constructor;

		time.prototype.check =
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		time.prototype.init =
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

		time.prototype.setKWDateTime =
			function(sVal)
		{
			this.timeSetDateTime(sVal);
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
	
		time.prototype.htmlCreateOR =
			function()
		{
			this.timeCreate();
		};

		time.prototype.htmlDeleteOR =
			function()
		{
			this.timeDelete();
		};

		time.prototype.htmlInitOR =
			function()
		{
			this.timeInit();
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

		time.prototype.timeCreate = 
			function timeCreate()
		{
			//console.log(this.kWLogCalled());
			this.timeCreateDateTime();
		};
		
		time.prototype.timeCreateDateTime = 
			function timeCreateDateTime()
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
			
			this.timeCreateDateTimeImpl();
			
			this.m_kWDateTime.setKWValue(sValue);
		};

		time.prototype.timeCreateDateTimeImpl =
			function timeCreateDateTimeImpl()
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

		time.prototype.timeDelete =
			function timeDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWDateTime = null;
		};

		time.prototype.timeInit = 
			function timeInit()
		{
			//console.log(this.kWLogCalled());
		};

		time.prototype.timeSetDateTime =
			function timeSetDateTime(sVal)
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
				this.timeCreateDateTimeImpl();
			}

			this.m_kWDateTime.setKWValue(this.m_sKWDateTime);
		};

		return time;

	}
);
