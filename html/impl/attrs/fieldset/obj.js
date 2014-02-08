/**********************************************************************
 *
 * fieldset/obj.js
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
		"../../attr/disabled/obj",
		"../../attr/form/obj",
		"../../attr/name/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		disabled,
		form,
		name,
		html,
		validate
	)
	{
		
	//*******************************************************************//
	//***												   
	//***		public initializors
	//***
	//*******************************************************************//

		function fieldset()
		{
			//console.log("fieldset::constructor");
		
			this.m_kWDisabled	= null;
			this.m_kWForm		= null;
			this.m_kWName		= null;
		
			this.m_sKWForm		= null;
			this.m_sKWName		= null;
		
			this.m_bKWDisabled	= false;
		}

		fieldset.prototype = new html();
		fieldset.prototype.constructor = fieldset;
		fieldset.constructor = html.prototype.constructor;

		fieldset.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		fieldset.prototype.init = 
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

		fieldset.prototype.setKWDisabled =
			function(bVal)
		{
			this.fsSetDisabled(bVal);
		};

		fieldset.prototype.setKWForm =
			function(sVal)
		{
			this.fsSetForm(sVal);
		};

		fieldset.prototype.setKWName =
			function(sVal)
		{
			this.fsSetName(sVal);
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
	
		fieldset.prototype.htmlCreateOR = 
			function()
		{
			this.fsCreate();
		};

		fieldset.prototype.htmlDeleteOR =
			function()
		{
			this.fsDelete();
		};

		fieldset.prototype.htmlInitOR =
			function()
		{
			this.fsInit();
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

		fieldset.prototype.fsCreate = 
		function fsCreate()
		{
			//console.log(this.kWLogCalled());

			this.fsCreateDisabled();
			this.fsCreateForm();
			this.fsCreateName();
		};

		fieldset.prototype.fsCreateDisabled =
			function fsCreateDisabled()
		{
			var value   = null;

			var bValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWDisabled))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWDisabled();
			if (validate.isNotNull(value))
			{
				bValue = value.getKWValue();
			}

			if (!validate.isBool(bValue))
			{
				bValue = this.m_bKWDisabled;
			}

			if (!validate.isBool(bValue))
			{
				return;
			}

			this.fsCreateDisabledImpl();

			this.m_kWDisabled.setKWValue(bValue);
		};

		fieldset.prototype.fsCreateDisabledImpl =
			function fsCreateDisabledImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWDisabled))
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

			this.m_kWDisabled = new disabled();

			this.m_kWDisabled.setKWIDParent(this.m_sKWID);
			this.m_kWDisabled.setKWDom(this.m_kWDom);

			this.m_kWDisabled.check();
			this.m_kWDisabled.init();

			this.kWAddAttr(this.m_kWDisabled);
		};

		fieldset.prototype.fsCreateForm =
			function fsCreateForm()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWForm))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWForm();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWForm;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.fsCreateFormImpl();

			this.m_kWForm.setKWValue(sValue);
		};

		fieldset.prototype.fsCreateFormImpl =
			function fsCreateFormImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWForm))
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

			this.m_kWForm = new form();

			this.m_kWForm.setKWIDParent(this.m_sKWID);
			this.m_kWForm.setKWDom(this.m_kWDom);

			this.m_kWForm.check();
			this.m_kWForm.init();

			this.kWAddAttr(this.m_kWForm);
		};

		fieldset.prototype.fsCreateName =
			function fsCreateName()
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

			this.fsCreateNameImpl();

			this.m_kWName.setKWValue(sValue);
		};

		fieldset.prototype.fsCreateNameImpl =
			function fsCreateNameImpl()
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

		fieldset.prototype.fsDelete =
			function fsDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWDisabled	= null;
			this.m_kWForm		= null;
			this.m_kWName		= null;
		};

		fieldset.prototype.fsInit =
			function fieldsetInit()
		{
			//console.log(this.kWLogCalled());
		};

		fieldset.prototype.fsSetDisabled =
			function fsSetDisabled(bVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isBool(bVal))
			{
				return;
			}

			this.m_bKWDisabled = bVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWDisabled))
			{
				this.fsCreateDisabledImpl();
			}

			this.m_kWDisabled.setKWValue(this.m_bKWDisabled);
		};

		fieldset.prototype.fsSetForm =
			function fsSetForm(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWForm = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWForm))
			{
				this.fsCreateFormImpl();
			}

			this.m_kWForm.setKWValue(this.m_sKWForm);
		};

		fieldset.prototype.fsSetName =
			function fsSetName(sVal)
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
				this.fsCreateNameImpl();
			}

			this.m_kWName.setKWValue(this.m_sKWName);
		};

		return fieldset;

	}
);
