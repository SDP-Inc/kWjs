/**********************************************************************
 *
 * button/obj.js
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
		"../../attr/autoFocus/obj",
		"../../attr/disabled/obj",
		"../../attr/form/obj",
		"../../attr/name/obj",
		"../../attr/type/obj",
		"../../attr/value/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		autoFocus,
		disabled,
		form,
		name,
		type,
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

		function button()
		{
			//console.log("button::constructor");
			
			this.m_kWAutoFocus	= null;
			this.m_kWDisabled	= null;
			this.m_kWForm		= null;
			this.m_kWName		= null;
			this.m_kWType		= null;
			this.m_kWValue		= null;
			
			this.m_sKWForm		= null;
			this.m_sKWName		= null;
			this.m_sKWType		= null;
			this.m_sKWValue		= null;
			
			this.m_bKWAutofocus	= false;
			this.m_bKWDisabled	= false;
		}

		button.prototype = new html();
		button.prototype.constructor = button;
		button.constructor = html.prototype.constructor;

		button.prototype.check =
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		button.prototype.init =
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

		button.prototype.setKWAutoFocus =
			function(bVal)
		{
			this.buttonSetAutoFocus(bVal);
		};

		button.prototype.setKWDisabled =
			function(bVal)
		{
			this.buttonSetDisabled(bVal);
		};

		button.prototype.setKWForm =
			function(sVal)
		{
			this.buttonSetForm(sVal);
		};

		button.prototype.setKWName =
			function(sVal)
		{
			this.buttonSetName(sVal);
		};

		button.prototype.setKWType =
			function(sVal)
		{
			this.buttonSetType(sVal);
		};

		button.prototype.setKWValue =
			function(sVal)
		{
			this.buttonSetValue(sVal);
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
	
		button.prototype.htmlCreateOR = 
			function()
		{
			this.buttonCreate();
		};

		button.prototype.htmlDeleteOR =
			function()
		{
			this.buttonDelete();
		};

		button.prototype.htmlInitOR = 
			function()
		{
			this.buttonInit();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		button.prototype.buttonCreateOR = 
			function buttonCreateOR()
		{
			console.error(this.kWLogNotImpl());
		};

		button.prototype.buttonDeleteOR =
			function buttonDeleteOR()
		{
			console.error(this.kWLogNotImpl());
		};

		button.prototype.buttonInitOR =
			function buttonInitOR()
		{
			console.error(this.kWLogNotImpl());
		};

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		button.prototype.buttonCreate = 
			function buttonCreate()
		{
			//console.log(this.kWLogCalled());
			
			this.buttonCreateAutoFocus();
			this.buttonCreateDisabled();
			this.buttonCreateForm();
			this.buttonCreateName();
			this.buttonCreateType();
			this.buttonCreateValue();
			
			this.buttonCreateOR();
		};
		
		button.prototype.buttonCreateAutoFocus =
			function buttonCreateAutoFocus()
		{

			var value   = null;

			var bValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWAutoFocus))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWAutoFocus();
			if (validate.isNotNull(value))
			{
				bValue = value.getKWValue();
			}

			if (!validate.isBool(bValue))
			{
				bValue = this.m_sKWAutoFocus;
			}

			if (!validate.isBool(bValue))
			{
				return;
			}

			this.buttonCreateAutoFocusImpl();

			this.m_kWAutoFocus.setKWValue(bValue);
		};

		button.prototype.buttonCreateAutoFocusImpl =
			function buttonCreateAutoFocusImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWAutoFocus))
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

			this.m_kWAutoFocus = new autoFocus();

			this.m_kWAutoFocus.setKWIDParent(this.m_sKWID);
			this.m_kWAutoFocus.setKWDom(this.m_kWDom);

			this.m_kWAutoFocus.check();
			this.m_kWAutoFocus.init();

			this.kWAddAttr(this.m_kWAutoFocus);
		};

		button.prototype.buttonCreateDisabled =
			function buttonCreateDisabled()
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
				bValue = this.m_sKWDisabled;
			}

			if (!validate.isBool(bValue))
			{
				return;
			}

			this.buttonCreateDisabledImpl();

			this.m_kWDisabled.setKWValue(bValue);
		};

		button.prototype.buttonCreateDisabledImpl =
			function buttonCreateDisabledImpl()
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

		button.prototype.buttonCreateForm =
			function buttonCreateForm()
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

			this.buttonCreateFormImpl();

			this.m_kWForm.setKWValue(sValue);
		};

		button.prototype.buttonCreateFormImpl =
			function buttonCreateFormImpl()
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

		button.prototype.buttonCreateName =
			function buttonCreateName()
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

			this.buttonCreateNameImpl();

			this.m_kWName.setKWValue(sValue);
		};

		button.prototype.buttonCreateNameImpl =
			function buttonCreateNameImpl()
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

		button.prototype.buttonCreateType =
			function buttonCreateType()
		{

			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWType))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWType();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWType;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.buttonCreateTypeImpl();

			this.m_kWType.setKWValue(sValue);
		};

		button.prototype.buttonCreateTypeImpl =
			function buttonCreateTypeImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWType))
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

			this.m_kWType = new type();

			this.m_kWType.setKWIDParent(this.m_sKWID);
			this.m_kWType.setKWDom(this.m_kWDom);

			this.m_kWType.check();
			this.m_kWType.init();

			this.kWAddAttr(this.m_kWType);
		};

		button.prototype.buttonCreateValue =
			function buttonCreateValue()
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

			this.buttonCreateValueImpl();

			this.m_kWValue.setKWValue(sValue);
		};

		button.prototype.buttonCreateValueImpl =
			function buttonCreateValueImpl()
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

		button.prototype.buttonDelete =
			function buttonDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWAutoFocus	= null;
			this.m_kWDisabled	= null;
			this.m_kWForm		= null;
			this.m_kWName		= null;
			this.m_kWType		= null;
			this.m_kWValue		= null;

			this.buttonDeleteOR();
		};

		button.prototype.buttonInit =
			function buttonInit()
		{
			//console.log(this.kWLogCalled());
			this.buttonInitOR();
		};

		button.prototype.buttonSetAutoFocus =
			function buttonSetAutoFocus(bVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isBool(bVal))
			{
				return;
			}

			this.m_bKWAutoFocus = bVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWAutoFocus))
			{
				this.buttonCreateAutoFocusImpl();
			}

			this.m_kWAutoFocus.setKWValue(this.m_bKWAutoFocus);
		};

		button.prototype.buttonSetDisabled =
			function buttonSetDisabled(bVal)
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
				this.buttonCreateDisabledImpl();
			}

			this.m_kWDisabled.setKWValue(this.m_bKWDisabled);
		};

		button.prototype.buttonSetForm =
			function buttonSetForm(sVal)
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
				this.buttonCreateFormImpl();
			}

			this.m_kWForm.setKWValue(this.m_sKWForm);
		};

		button.prototype.buttonSetName =
			function buttonSetName(sVal)
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
				this.buttonCreateNameImpl();
			}

			this.m_kWName.setKWValue(this.m_sKWName);
		};

		button.prototype.buttonSetType =
			function buttonSetType(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWType = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWType))
			{
				this.buttonCreateTypeImpl();
			}

			this.m_kWType.setKWValue(this.m_sKWType);
		};

		button.prototype.buttonSetValue =
			function buttonSetValue(sVal)
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
				this.buttonCreateValueImpl();
			}

			this.m_kWValue.setKWValue(this.m_sKWValue);
		};

		return button;

	}
);
