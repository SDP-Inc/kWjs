/**********************************************************************
 *
 * form/obj.js
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
		"../../attr/acceptCharset/obj",
		"../../attr/action/obj",
		"../../attr/autoComplete/obj",
		"../../attr/encType/obj",
		"../../attr/method/obj",
		"../../attr/name/obj",
		"../../attr/noValidate/obj",
		"../../attr/target/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		acceptCharset,
		action,
		autoComplete,
		encType,
		method,
		name,
		noValidate,
		target,
		html,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function form()
		{
			//console.log("form::constructor");

			this.m_kWAcceptCharset	= null;
			this.m_kWAction			= null;
			this.m_kWAutoComplete	= null;
			this.m_kWEncType		= null;
			this.m_kWMethod			= null;
			this.m_kWName			= null;
			this.m_kWNoValidate		= null;
			this.m_kWTarget			= null;
			
			this.m_sKWAcceptCharset	= null;
			this.m_sKWAction		= null;
			this.m_sKWAutoComplete	= null;
			this.m_sKWEncType		= null;
			this.m_sKWMethod		= null;
			this.m_sKWName			= null;
			this.m_sKWTarget		= null;
			
			this.m_bKWNoValidate	= false;
		}

		form.prototype = new html();
		form.prototype.constructor = form;
		form.constructor = html.prototype.constructor;

		form.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		form.prototype.init =
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

		form.prototype.setKWAcceptCharset =
			function(sVal)
		{
			this.formSetAcceptCharset(sVal);
		};

		form.prototype.setKWAction =
			function(sVal)
		{
			this.formSetAction(sVal);
		};

		form.prototype.setKWAutoComplete =
			function(sVal)
		{
			this.formSetAutoComplete(sVal);
		};

		form.prototype.setKWEncType =
			function(sVal)
		{
			this.formSetEncType(sVal);
		};

		form.prototype.setKWMethod =
			function(sVal)
		{
			this.formSetMethod(sVal);
		};

		form.prototype.setKWName =
			function(sVal)
		{
			this.formSetName(sVal);
		};

		form.prototype.setKWNoValidate =
			function(bVal)
		{
			this.formSetNoValidate(bVal);
		};

		form.prototype.setKWTarget =
			function(sVal)
		{
			this.formSetTarget(sVal);
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
	
		form.prototype.htmlCreateOR =
			function()
		{
			this.formCreate();
		};

		form.prototype.htmlDeleteOR =
			function()
		{
			this.formDelete();
		};

		form.prototype.htmlInitOR = 
			function()
		{
			this.formInit();
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

		form.prototype.formCreate = 
			function formCreate()
		{
			//console.log(this.kWLogCalled());
			
			this.formCreateAcceptCharset();
			this.formCreateAutoComplete();
			this.formCreateAction();
			this.formCreateEncType();
			this.formCreateMethod();
			this.formCreateName();
			this.formCreateNoValidate();
			this.formCreateTarget();
		};

		form.prototype.formCreateAcceptCharset =
			function formCreateAcceptCharset()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWAcceptCharset))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWAcceptCharset();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWAcceptCharset;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.formCreateAcceptCharsetImpl();

			this.m_kWAcceptCharset.setKWValue(sValue);
		};

		form.prototype.formCreateAcceptCharsetImpl =
			function formCreateAcceptCharsetImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWAcceptCharset))
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

			this.m_kWAcceptCharset = new acceptCharset();

			this.m_kWAcceptCharset.setKWIDParent(this.m_sKWID);
			this.m_kWAcceptCharset.setKWDom(this.m_kWDom);

			this.m_kWAcceptCharset.check();
			this.m_kWAcceptCharset.init();

			this.kWAddAttr(this.m_kWAcceptCharset);
		};

		form.prototype.formCreateAction =
			function formCreateAction()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWAction))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWAction();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWAction;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.formCreateActionImpl();

			this.m_kWAction.setKWValue(sValue);
		};

		form.prototype.formCreateActionImpl =
			function formCreateActionImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWAction))
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

			this.m_kWAction = new action();

			this.m_kWAction.setKWIDParent(this.m_sKWID);
			this.m_kWAction.setKWDom(this.m_kWDom);

			this.m_kWAction.check();
			this.m_kWAction.init();

			this.kWAddAttr(this.m_kWAction);
		};

		form.prototype.formCreateAutoComplete =
			function formCreateAutoComplete()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWAutoComplete))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWAutoComplete();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWAutoComplete;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.formCreateAutoCompleteImpl();

			this.m_kWAutoComplete.setKWValue(sValue);
		};

		form.prototype.formCreateAutoCompleteImpl =
			function formCreateAutoCompleteImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWAutoComplete))
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

			this.m_kWAutoComplete = new autoComplete();

			this.m_kWAutoComplete.setKWIDParent(this.m_sKWID);
			this.m_kWAutoComplete.setKWDom(this.m_kWDom);

			this.m_kWAutoComplete.check();
			this.m_kWAutoComplete.init();

			this.kWAddAttr(this.m_kWAutoComplete);
		};

		form.prototype.formCreateEncType =
			function formCreateEncType()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWEncType))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWEncType();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWEncType;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.formCreateEncTypeImpl();

			this.m_kWEncType.setKWValue(sValue);
		};

		form.prototype.formCreateEncTypeImpl =
			function formCreateEncTypeImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWEncType))
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

			this.m_kWEncType = new encType();

			this.m_kWEncType.setKWIDParent(this.m_sKWID);
			this.m_kWEncType.setKWDom(this.m_kWDom);

			this.m_kWEncType.check();
			this.m_kWEncType.init();

			this.kWAddAttr(this.m_kWEncType);
		};

		form.prototype.formCreateMethod =
			function formCreateMethod()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWMethod))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWMethod();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWMethod;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.formCreateMethodImpl();

			this.m_kWMethod.setKWValue(sValue);
		};

		form.prototype.formCreateMethodImpl =
			function formCreateMethodImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWMethod))
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

			this.m_kWMethod = new method();

			this.m_kWMethod.setKWIDParent(this.m_sKWID);
			this.m_kWMethod.setKWDom(this.m_kWDom);

			this.m_kWMethod.check();
			this.m_kWMethod.init();

			this.kWAddAttr(this.m_kWMethod);
		};

		form.prototype.formCreateName =
			function formCreateName()
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

			this.formCreateNameImpl();

			this.m_kWName.setKWValue(sValue);
		};

		form.prototype.formCreateNameImpl =
			function formCreateNameImpl()
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

		form.prototype.formCreateNoValidate =
			function formCreateNoValidate()
		{
			var value   = null;

			var bValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWNoValidate))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWNoValidate();
			if (validate.isNotNull(value))
			{
				bValue = value.getKWValue();
			}

			if (!validate.isString(bValue))
			{
				bValue = this.m_bKWNoValidate;
			}

			if (!validate.isString(bValue))
			{
				return;
			}

			this.formCreateNoValidateImpl();

			this.m_kWNoValidate.setKWValue(bValue);
		};

		form.prototype.formCreateNoValidateImpl =
			function formCreateNoValidateImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWNoValidate))
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

			this.m_kWNoValidate = new noValidate();

			this.m_kWNoValidate.setKWIDParent(this.m_sKWID);
			this.m_kWNoValidate.setKWDom(this.m_kWDom);

			this.m_kWNoValidate.check();
			this.m_kWNoValidate.init();

			this.kWAddAttr(this.m_kWNoValidate);
		};

		form.prototype.formCreateTarget =
			function formCreateTarget()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWTarget))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWTarget();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWTarget;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.formCreateTargetImpl();

			this.m_kWTarget.setKWValue(sValue);
		};

		form.prototype.formCreateTargetImpl =
			function formCreateTargetImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWTarget))
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

			this.m_kWTarget = new target();

			this.m_kWTarget.setKWIDParent(this.m_sKWID);
			this.m_kWTarget.setKWDom(this.m_kWDom);

			this.m_kWTarget.check();
			this.m_kWTarget.init();

			this.kWAddAttr(this.m_kWTarget);
		};

		form.prototype.formDelete =
			function formDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWAcceptCharset	= null;
			this.m_kWAction			= null;
			this.m_kWAutoComplete	= null;
			this.m_kWEncType		= null;
			this.m_kWMethod			= null;
			this.m_kWName			= null;
			this.m_kWNoValidate		= null;
			this.m_kWTarget			= null;
		};

		form.prototype.formInit =
			function formInit()
		{
			//console.log(this.kWLogCalled());
		};


		form.prototype.formSetAcceptCharset =
			function formSetAcceptCharset(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWAcceptCharset = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWAcceptCharset))
			{
				this.formCreateAcceptCharsetImpl();
			}

			this.m_kWAcceptCharset.setKWValue(this.m_sKWAcceptCharset);
		};

	form.prototype.formSetAction =
		function formSetAction(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWAction = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWAction))
			{
				this.formCreateActionImpl();
			}

			this.m_kWAction.setKWValue(this.m_sKWAction);
		};

	form.prototype.formSetAutoComplete =
		function formSetAutoComplete(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWAutoComplete = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWAutoComplete))
			{
				this.formCreateAutoCompleteImpl();
			}

			this.m_kWAutoComplete.setKWValue(this.m_sKWAutoComplete);
		};

	form.prototype.formSetEncType =
		function formSetEncType(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWEncType = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWEncType))
			{
				this.formCreateEncTypeImpl();
			}

			this.m_kWEncType.setKWValue(this.m_sKWEncType);
		};

	form.prototype.formSetMethod =
		function formSetMethod(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWMethod = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWMethod))
			{
				this.formCreateMethodImpl();
			}

			this.m_kWMethod.setKWValue(this.m_sKWMethod);
		};

	form.prototype.formSetName =
		function formSetName(sVal)
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
				this.formCreateNameImpl();
			}

			this.m_kWName.setKWValue(this.m_sKWName);
		};

	form.prototype.formSetNoValidate =
		function formSetNoValidate(bVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isBool(bVal))
			{
				return;
			}

			this.m_bKWNoValidate = bVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWNoValidate))
			{
				this.formCreateNoValidateImpl();
			}

			this.m_kWNoValidate.setKWValue(this.m_bKWNoValidate);
		};

	form.prototype.formSetTarget =
		function formSetTarget(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWTarget = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWTarget))
			{
				this.formCreateTargetImpl();
			}

			this.m_kWTarget.setKWValue(this.m_sKWTarget);
		};

		return form;

	}
);
