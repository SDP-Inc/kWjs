/**********************************************************************
 *
 * param/obj.js
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
		"../../attr/name/obj",
		"../../attr/value/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		name,
		value,
		html,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function param()
		{
			//console.log("param::constructor");

			this.m_kWName	= null;
			this.m_kWValue	= null;
			
			this.m_sKWName	= null;
			this.m_sKWValue	= null;
		}

		param.prototype = new html();
		param.prototype.constructor = param;
		param.constructor = html.prototype.constructor;

		param.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		param.prototype.init = 
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

		param.prototype.setKWName =
			function(sVal)
		{
			this.paramSetName(sVal);
		};
		
		param.prototype.setKWValue =
			function(sVal)
		{
			this.paramSetName(sVal);
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
	
		param.prototype.htmlCreateOR =
			function()
		{
			this.paramCreate();
		};

		param.prototype.htmlDeleteOR =
			function()
		{
			this.paramDelete();
		};

		param.prototype.htmlInitOR =
			function()
		{
			this.paramInit();
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

		param.prototype.paramCreate = 
			function paramCreate()
		{
			//console.log(this.kWLogCalled());
			
			this.paramCreateName();
			this.paramCreateValue();
		};
		
		param.prototype.paramCreateName =
			function paramCreateName()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWName))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWName();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWName;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.paramCreateNameImpl();

			this.m_kWName.setKWValue(sValue);
		};

		param.prototype.paramCreateNameImpl =
			function paramCreateNameImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWName))
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

			this.m_kWName = new name();

			this.m_kWName.setKWIDParent(this.m_sKWID);
			this.m_kWName.setKWDom(this.m_kWDom);

			this.m_kWName.check();
			this.m_kWName.init();

			this.kWAddAttr(this.m_kWName);
		};

		param.prototype.paramCreateValue =
			function paramCreateValue()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWValue))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWValue();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWValue;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.paramCreateValueImpl();

			this.m_kWValue.setKWValue(sValue);
		};

		param.prototype.paramCreateValueImpl =
			function paramCreateValueImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWValue))
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

			this.m_kWValue = new value();

			this.m_kWValue.setKWIDParent(this.m_sKWID);
			this.m_kWValue.setKWDom(this.m_kWDom);

			this.m_kWValue.check();
			this.m_kWValue.init();

			this.kWAddAttr(this.m_kWValue);
		};

		param.prototype.paramDelete =
			function paramDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWName = null;
		};

		param.prototype.paramInit =
			function paramInit()
		{
			//console.log(this.kWLogCalled());
		};

		param.prototype.paramSetName =
			function paramSetName(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWName = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWName))
			{
				this.paramCreateNameImpl();
			}

			this.m_kWName.setKWValue(this.m_sKWName);
		};

		param.prototype.paramSetValue =
			function paramSetValue(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWValue = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWValue))
			{
				this.paramCreateValueImpl();
			}

			this.m_kWValue.setKWValue(this.m_sKWValue);
		};

		return param;

	}
);
