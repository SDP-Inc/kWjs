/**********************************************************************
 *
 * submit/obj.js
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
		"../../../attr/formAction/obj",
		"../../../attr/formEncType/obj",
		"../../../attr/formMethod/obj",
		"../../../attr/formTarget/obj",
		"../obj",
		"kWStat/validate"
	], 
	function
	(
		formAction,
		formEncType,
		formMethod,
		formTarget,
		input,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function submit()
		{
			//console.log("submit::constructor");
			
			this.m_kWFormAction	    = null;
			this.m_kWFormEncType	= null;
			this.m_kWFormMethod	    = null;
			this.m_kWFormTarget	    = null;
			
			this.m_sKWFormAction	= null;
			this.m_sKWFormEncType	= null;
			this.m_sKWFormMethod	= null;
			this.m_sKWFormTarget	= null;
		}

		submit.prototype = new input();
		submit.prototype.constructor = submit;
		submit.constructor = input.prototype.constructor;

		submit.prototype.check = 
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		submit.prototype.init =
			function init()
		{
			//console.log(this.kWLogCalled());
			input.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		submit.prototype.setKWFormAction =
			function(sVal)
		{
			this.submitSetFormAction(sVal);
		};
		
		submit.prototype.setKWFormEncType =
			function(sVal)
		{
			this.submitSetFormEncType(sVal);
		};
		
		submit.prototype.setKWFormMethod =
			function(sVal)
		{
			this.submitSetFormMethod(sVal);
		};
		
		submit.prototype.setKWFormTarget =
			function(sVal)
		{
			this.submitSetFormTarget(sVal);
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

		submit.prototype.inputCreateOR =
			function()
		{
			this.submitCreate();
		};

		submit.prototype.inputDeleteOR =
			function()
		{
			this.submitDelete();
		};

		submit.prototype.inputInitOR =
			function()
		{
			this.submitInit();
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

		submit.prototype.submitCreate = 
			function submitCreate() 
		{
			//console.log(this.kWLogCalled());
			
			this.submitCreateFormAction();
			this.submitCreateFormEncType();
			this.submitCreateFormMethod();
			this.submitCreateFormTarget();
		};

		submit.prototype.submitCreateFormAction =
			function submitCreateFormAction()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWFormAction))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWFormAction();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWFormAction;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.submitCreateFormActionImpl();

			this.m_kWFormAction.setKWValue(sValue);
		};

		submit.prototype.submitCreateFormActionImpl =
			function submitCreateFormActionImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWFormAction))
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

			this.m_kWFormAction = new formAction();

			this.m_kWFormAction.setKWIDParent(this.m_sKWID);
			this.m_kWFormAction.setKWDom(this.m_kWDom);

			this.m_kWFormAction.check();
			this.m_kWFormAction.init();

			this.kWAddAttr(this.m_kWFormAction);
		};

		submit.prototype.submitCreateFormEncType =
			function submitCreateFormEncType()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWFormEncType))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWFormEncType();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWFormEncType;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.submitCreateFormEncTypeImpl();

			this.m_kWFormEncType.setKWValue(sValue);
		};

		submit.prototype.submitCreateFormEncTypeImpl =
			function submitCreateFormEncTypeImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWFormEncType))
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

			this.m_kWFormEncType = new formEncType();

			this.m_kWFormEncType.setKWIDParent(this.m_sKWID);
			this.m_kWFormEncType.setKWDom(this.m_kWDom);

			this.m_kWFormEncType.check();
			this.m_kWFormEncType.init();

			this.kWAddAttr(this.m_kWFormEncType);
		};

		submit.prototype.submitCreateFormMethod =
			function submitCreateFormMethod()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWFormMethod))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWFormMethod();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWFormMethod;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.submitCreateFormMethodImpl();

			this.m_kWFormMethod.setKWValue(sValue);
		};

		submit.prototype.submitCreateFormMethodImpl =
			function submitCreateFormMethodImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWFormMethod))
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

			this.m_kWFormMethod = new formMethod();

			this.m_kWFormMethod.setKWIDParent(this.m_sKWID);
			this.m_kWFormMethod.setKWDom(this.m_kWDom);

			this.m_kWFormMethod.check();
			this.m_kWFormMethod.init();

			this.kWAddAttr(this.m_kWFormMethod);
		};

		submit.prototype.submitCreateFormTarget =
			function submitCreateFormTarget()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWFormTarget))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWFormTarget();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWFormTarget;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.submitCreateFormTargetImpl();

			this.m_kWFormTarget.setKWValue(sValue);
		};

		submit.prototype.submitCreateFormTargetImpl =
			function submitCreateFormTargetImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWFormTarget))
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

			this.m_kWFormTarget = new formTarget();

			this.m_kWFormTarget.setKWIDParent(this.m_sKWID);
			this.m_kWFormTarget.setKWDom(this.m_kWDom);

			this.m_kWFormTarget.check();
			this.m_kWFormTarget.init();

			this.kWAddAttr(this.m_kWFormTarget);
		};

		submit.prototype.submitDelete =
			function submitDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWFormAction	    = null;
			this.m_kWFormEncType	= null;
			this.m_kWFormMethod	    = null;
			this.m_kWFormTarget	    = null;

		};

		submit.prototype.submitInit =
			function submitInit()
		{
			//console.log(this.kWLogCalled());
		};

		submit.prototype.submitSetFormAction =
			function submitSetFormAction(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWFormAction = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWFormAction))
			{
				this.submitCreateFormActionImpl();
			}

			this.m_kWFormAction.setKWValue(this.m_sKWFormAction);
		};

		submit.prototype.submitSetFormEncType =
			function submitSetFormEncType(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWFormEncType = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWFormEncType))
			{
				this.submitCreateFormEncTypeImpl();
			}

			this.m_kWFormEncType.setKWValue(this.m_sKWFormEncType);
		};

		submit.prototype.submitSetFormMethod =
			function submitSetFormMethod(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWFormMethod = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWFormMethod))
			{
				this.submitCreateFormMethodImpl();
			}

			this.m_kWFormMethod.setKWValue(this.m_sKWFormMethod);
		};

		submit.prototype.submitSetFormTarget =
			function submitSetFormTarget(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWFormTarget = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWFormTarget))
			{
				this.submitCreateFormTargetImpl();
			}

			this.m_kWFormTarget.setKWValue(this.m_sKWFormTarget);
		};

		return submit;

	}
);
