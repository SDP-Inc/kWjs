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
		"../../value/acceptCharset/obj",
		"../../value/action/obj",
		"../../value/autoComplete/obj",
		"../../value/encType/obj",
		"../../value/method/obj",
		"../../value/name/obj",
		"../../value/noValidate/obj",
		"../../value/target/obj",
		"../../../base/view/obj",
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
		base,
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
			this.m_kWTarget			= null;
			this.m_kWName			= null;
			this.m_kWNoValidate		= null;
		}

		form.prototype = new base();
		form.prototype.constructor = form;
		form.constructor = base.prototype.constructor;

		form.prototype.check =
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};
		
		form.prototype.init =
			function init()
		{
			//console.log(this.kWLogCalled());
			base.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		form.prototype.getKWAcceptCharset =
			function()
		{
			return this.m_kWAcceptCharset;
		};

		form.prototype.getKWAction =
			function()
		{
			return this.m_kWAction;
		};

		form.prototype.getKWAutoComplete =
			function()
		{
			return this.m_kWAutoComplete;
		};

		form.prototype.getKWEncType =
			function()
		{
			return this.m_kWEncType;
		};

		form.prototype.getKWMethod =
			function()
		{
			return this.m_kWMethod;
		};
		
		form.prototype.getKWName =
			function()
		{
			return this.m_kWName;
		};
		
		form.prototype.getKWNoValidate =
			function()
		{
			return this.m_kWNoValidate;
		};
		
		form.prototype.getKWTarget =
			function()
		{
			return this.m_kWTarget;
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
	
		form.prototype.baseCreateOR =
			function()
		{
			this.formCreate();
		};

		form.prototype.baseDeleteOR =
			function()
			{
				this.formDelete();
			};

		form.prototype.baseInitOR =
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
			this.formCreateAction();
			this.formCreateAutoComplete();
			this.formCreateEncType();
			this.formCreateMethod();
			this.formCreateName();
			this.formCreateNoValidate();
			this.formCreateTarget();
		};
		
		form.prototype.formCreateAcceptCharset = 
			function formCreateAcceptCharset() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.acceptCharset))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWAcceptCharset = new acceptCharset();
			
			this.m_kWAcceptCharset.setKWView(this);
			this.m_kWAcceptCharset.setKWIDParent(this.m_sKWID);
			
			this.m_kWAcceptCharset.check();
			this.m_kWAcceptCharset.init();

			this.kWAddValue(this.m_kWAcceptCharset);
		};
		
		form.prototype.formCreateAction = 
			function formCreateAction() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWAction))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWAction = new action();
			
			this.m_kWAction.setKWView(this);
			this.m_kWAction.setKWIDParent(this.m_sKWID);
			
			this.m_kWAction.check();
			this.m_kWAction.init();

			this.kWAddValue(this.m_kWAction);
		};
		
		form.prototype.formCreateAutoComplete = 
			function formCreateAutoComplete() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWAutoComplete))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWAutoComplete = new autoComplete();
			
			this.m_kWAutoComplete.setKWView(this);
			this.m_kWAutoComplete.setKWIDParent(this.m_sKWID);
			
			this.m_kWAutoComplete.check();
			this.m_kWAutoComplete.init();

			this.kWAddValue(this.m_kWAutoComplete);
		};
		
		form.prototype.formCreateEncType = 
			function formCreateEncType() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWEncType))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWEncType = new encType();
			
			this.m_kWEncType.setKWView(this);
			this.m_kWEncType.setKWIDParent(this.m_sKWID);
			
			this.m_kWEncType.check();
			this.m_kWEncType.init();

			this.kWAddValue(this.m_kWEncType);
		};
		
		form.prototype.formCreateMethod = 
			function formCreateMethod() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWMethod))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWMethod = new method();
			
			this.m_kWMethod.setKWView(this);
			this.m_kWMethod.setKWIDParent(this.m_sKWID);
			
			this.m_kWMethod.check();
			this.m_kWMethod.init();

			this.kWAddValue(this.m_kWMethod);
		};
		
		form.prototype.formCreateName = 
			function formCreateName() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWName))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWName = new name();
			
			this.m_kWName.setKWView(this);
			this.m_kWName.setKWIDParent(this.m_sKWID);
			
			this.m_kWName.check();
			this.m_kWName.init();

			this.kWAddValue(this.m_kWName);
		};
		
		form.prototype.formCreateNoValidate = 
			function formCreateNoValidate() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWNoValidate))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWNoValidate = new noValidate();
			
			this.m_kWNoValidate.setKWView(this);
			this.m_kWNoValidate.setKWIDParent(this.m_sKWID);
			
			this.m_kWNoValidate.check();
			this.m_kWNoValidate.init();

			this.kWAddValue(this.m_kWNoValidate);
		};
		
		form.prototype.formCreateTarget = 
			function formCreateTarget() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWTarget))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWTarget = new target();
			
			this.m_kWTarget.setKWView(this);
			this.m_kWTarget.setKWIDParent(this.m_sKWID);
			
			this.m_kWTarget.check();
			this.m_kWTarget.init();

			this.kWAddValue(this.m_kWTarget);
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
			this.m_kWTarget			= null;
			this.m_kWName			= null;
			this.m_kWNoValidate		= null;
		};

		form.prototype.formInit =
			function formInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return form;

	}
);
