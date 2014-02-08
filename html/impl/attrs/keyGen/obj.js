/**********************************************************************
 *
 * keyGen/obj.js
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
		"../../attr/challenge/obj",
		"../../attr/disabled/obj",
		"../../attr/form/obj",
		"../../attr/keyType/obj",
		"../../attr/name/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		autoFocus,
		challenge,
		disabled,
		form,
		keyType,
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

		function keyGen()
		{
			//console.log("keyGen::constructor");
			
			this.m_kWAutoFocus	= null;
			this.m_kWChallenge	= null;
			this.m_kWDisabled	= null;
			this.m_kWForm		= null;
			this.m_kWKeyType	= null;
			this.m_kWName		= null;
			
			this.m_sKWForm		= null;
			this.m_sKWKeyType	= null;
			this.m_sKWName		= null;
			
			this.m_bKWAutoFocus	= false;
			this.m_bKWChallenge	= false;
			this.m_bKWDisabled	= false;
		}

		keyGen.prototype = new html();
		keyGen.prototype.constructor = keyGen;
		keyGen.constructor = html.prototype.constructor;

		keyGen.prototype.check =
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		keyGen.prototype.init =
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

		keyGen.prototype.setKWAutoFocus =
			function(bVal)
		{
			this.kgSetAutoFocus(bVal);
		};

		keyGen.prototype.setKWChallenge =
			function(bVal)
		{
			this.kgSetChallenge(bVal);
		};

		keyGen.prototype.setKWDisabled =
			function(bVal)
		{
			this.kgSetDisabled(bVal);
		};

		keyGen.prototype.setKWForm =
			function(sVal)
		{
			this.kgSetForm(sVal);
		};

		keyGen.prototype.setKWKeyType =
			function(sVal)
		{
			this.kgSetKeyType(sVal);
		};

		keyGen.prototype.setKWName =
			function(sVal)
		{
			this.kgSetName(sVal);
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
	
		keyGen.prototype.htmlCreateOR =
			function()
		{
			this.kgCreate();
		};

		keyGen.prototype.htmlDeleteOR =
			function()
		{
			this.kgDelete();
		};

		keyGen.prototype.htmlInitOR =
			function()
		{
			this.kgInit();
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

		keyGen.prototype.kgCreate = 
			function keyGenCreate()
		{
			//console.log(this.kWLogCalled());
			this.kgCreateAutoFocus();
			this.kgCreateChallenge();
			this.kgCreateDisabled();
			this.kgCreateForm();
			this.kgCreateKeyType();
			this.kgCreateName();
		};

		keyGen.prototype.kgCreateAutoFocus =
			function kgCreateAutoFocus()
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
				bValue = this.m_bKWAutoFocus;
			}

			if (!validate.isBool(bValue))
			{
				return;
			}

			this.kgCreateAutoFocusImpl();

			this.m_kWAutoFocus.setKWValue(bValue);
		};

		keyGen.prototype.kgCreateAutoFocusImpl =
			function kgCreateAutoFocusImpl()
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

		keyGen.prototype.kgCreateChallenge =
			function kgCreateChallenge()
		{
			var value   = null;

			var bValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWChallenge))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWChallenge();
			if (validate.isNotNull(value))
			{
				bValue = value.getKWValue();
			}

			if (!validate.isBool(bValue))
			{
				bValue = this.m_bKWChallenge;
			}

			if (!validate.isBool(bValue))
			{
				return;
			}

			this.kgCreateChallengeImpl();

			this.m_kWChallenge.setKWValue(bValue);
		};

		keyGen.prototype.kgCreateChallengeImpl =
			function kgCreateChallengeImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWChallenge))
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

			this.m_kWChallenge = new challenge();

			this.m_kWChallenge.setKWIDParent(this.m_sKWID);
			this.m_kWChallenge.setKWDom(this.m_kWDom);

			this.m_kWChallenge.check();
			this.m_kWChallenge.init();

			this.kWAddAttr(this.m_kWChallenge);
		};

		keyGen.prototype.kgCreateDisabled =
			function kgCreateDisabled()
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

			this.kgCreateDisabledImpl();

			this.m_kWDisabled.setKWValue(bValue);
		};

		keyGen.prototype.kgCreateDisabledImpl =
			function kgCreateDisabledImpl()
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

		keyGen.prototype.kgCreateForm =
			function kgCreateForm()
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

			this.kgCreateFormImpl();

			this.m_kWForm.setKWValue(sValue);
		};

		keyGen.prototype.kgCreateFormImpl =
			function kgCreateFormImpl()
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

		keyGen.prototype.kgCreateKeyType =
			function kgCreateKeyType()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWKeyType))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWKeyType();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWKeyType;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.kgCreateKeyTypeImpl();

			this.m_kWKeyType.setKWValue(sValue);
		};

		keyGen.prototype.kgCreateKeyTypeImpl =
			function kgCreateKeyTypeImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWKeyType))
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

			this.m_kWKeyType = new keyType();

			this.m_kWKeyType.setKWIDParent(this.m_sKWID);
			this.m_kWKeyType.setKWDom(this.m_kWDom);

			this.m_kWKeyType.check();
			this.m_kWKeyType.init();

			this.kWAddAttr(this.m_kWKeyType);
		};

		keyGen.prototype.kgCreateName =
			function kgCreateName()
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

			this.kgCreateNameImpl();

			this.m_kWName.setKWValue(sValue);
		};

		keyGen.prototype.kgCreateNameImpl =
			function kgCreateNameImpl()
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

		keyGen.prototype.kgDelete =
			function kgDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWAutoFocus	= null;
			this.m_kWChallenge	= null;
			this.m_kWDisabled	= null;
			this.m_kWForm		= null;
			this.m_kWKeyType	= null;
			this.m_kWName		= null;
		};

		keyGen.prototype.kgInit =
			function kgInit()
		{
			//console.log(this.kWLogCalled());
		};

		keyGen.prototype.kgSetAutoFocus =
			function kgSetAutoFocus(bVal)
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
				this.kgCreateAutoFocusImpl();
			}

			this.m_kWAutoFocus.setKWValue(this.m_bKWAutoFocus);
		};

		keyGen.prototype.kgSetChallenge =
			function kgSetChallenge(bVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isBool(bVal))
			{
				return;
			}

			this.m_bKWChallenge = bVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWChallenge))
			{
				this.kgCreateChallengeImpl();
			}

			this.m_kWChallenge.setKWValue(this.m_bKWChallenge);
		};

		keyGen.prototype.kgSetDisabled =
			function kgSetDisabled(bVal)
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
				this.kgCreateDisabledImpl();
			}

			this.m_kWDisabled.setKWValue(this.m_bKWDisabled);
		};

		keyGen.prototype.kgSetForm =
			function kgSetForm(sVal)
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
				this.kgCreateFormImpl();
			}

			this.m_kWForm.setKWValue(this.m_sKWForm);
		};

		keyGen.prototype.kgSetKeyType =
			function kgSetKeyType(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWKeyType = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWKeyType))
			{
				this.kgCreateKeyTypeImpl();
			}

			this.m_kWKeyType.setKWValue(this.m_sKWKeyType);
		};

		keyGen.prototype.kgSetName =
			function kgSetName(sVal)
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
				this.kgCreateNameImpl();
			}

			this.m_kWName.setKWValue(this.m_sKWName);
		};

		return keyGen;

	}
);
