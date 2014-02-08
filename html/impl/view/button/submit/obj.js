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
		"../../../value/formAction/obj",
		"../../../value/formEncType/obj",
		"../../../value/formMethod/obj",
		"../../../value/formNoValidate/obj",
		"../../../value/formTarget/obj",
		"../obj",
		"kWStat/validate"
	], 
	function
	(
		formAction,
		formEncType,
		formMethod,
		formNoValidate,
		formTarget,
		button,
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
			
			this.m_kWFormAction		= null;
			this.m_kWFormEncType	= null;
			this.m_kWFormMethod		= null;
			this.m_kWFormTarget		= null;
			this.m_kWFormNoValiate	= null;
		}

		submit.prototype = new button();
		submit.prototype.constructor = submit;
		submit.constructor = button.prototype.constructor;

		submit.prototype.check = function check()
		{
			button.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		submit.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			button.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		submit.prototype.getKWFormAction = function()
		{
			return this.m_kWFormAction;
		};

		submit.prototype.getKWFormEncType = function()
		{
			return this.m_kWFormEncType;
		};

		submit.prototype.getKWFormMethod = function()
		{
			return this.m_kWFormMethod;
		};

		submit.prototype.getKWFormNoValidate = function()
		{
			return this.m_kWFormNoValidate;
		};

		submit.prototype.getKWFormTarget = function()
		{
			return this.m_kWFormTarget;
		};

	//*******************************************************************//
	//***																	   
	//***		public callsubmitacks
	//***
	//*******************************************************************//
	
	//*******************************************************************//
	//***																	   
	//***		public formMethods
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private formMethods (non-overrides)
	//***
	//*******************************************************************//
	
		submit.prototype.buttonCreateOR = function()
		{
			this.submitCreate();
		};

		submit.prototype.baseDeleteOR =
			function()
			{
				this.submitDelete();
			};

		submit.prototype.buttonInitOR = function()
		{
			this.submitInit();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private formMethods (overrides)
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private formMethods
	//***
	//*******************************************************************//

		submit.prototype.submitCreate = 
			function submitCreate()
		{
			//console.log(this.kWLogCalled());
			this.submitCreateFormAction();
			this.submitCreateFormEncType();
			this.submitCreateFormMethod();
			this.submitCreateFormNoValidate();
			this.submitCreateFormTarget();
		};
		
		submit.prototype.submitCreateFormAction = 
			function submitCreateFormAction() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWFormAction))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWFormAction = new formAction();
			
			this.m_kWFormAction.setKWView(this);
			this.m_kWFormAction.setKWIDParent(this.m_sKWID);
			
			this.m_kWFormAction.check();
			this.m_kWFormAction.init();

			this.kWAddValue(this.m_kWFormAction);
		};
		
		submit.prototype.submitCreateFormEncType = 
			function submitCreateFormEncType() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWFormEncType))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWFormEncType = new formEncType();
			
			this.m_kWFormEncType.setKWView(this);
			this.m_kWFormEncType.setKWIDParent(this.m_sKWID);
			
			this.m_kWFormEncType.check();
			this.m_kWFormEncType.init();

			this.kWAddValue(this.m_kWFormEncType);
		};

		submit.prototype.submitCreateFormMethod = 
			function submitCreateFormMethod() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWFormMethod))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWFormMethod = new formMethod();
			
			this.m_kWFormMethod.setKWView(this);
			this.m_kWFormMethod.setKWIDParent(this.m_sKWID);
			
			this.m_kWFormMethod.check();
			this.m_kWFormMethod.init();

			this.kWAddValue(this.m_kWFormMethod);
		};
		
		submit.prototype.submitCreateFormNoValidate = 
			function submitCreateFormNoValidate() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWFormNoValidate))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWFormNoValidate = new formNoValidate();
			
			this.m_kWFormNoValidate.setKWView(this);
			this.m_kWFormNoValidate.setKWIDParent(this.m_sKWID);
			
			this.m_kWFormNoValidate.check();
			this.m_kWFormNoValidate.init();

			this.kWAddValue(this.m_kWFormNoValidate);
		};
		
		submit.prototype.submitCreateFormTarget = 
			function submitCreateFormTarget() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWFormTarget))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWFormTarget = new formTarget();
			
			this.m_kWFormTarget.setKWView(this);
			this.m_kWFormTarget.setKWIDParent(this.m_sKWID);
			
			this.m_kWFormTarget.check();
			this.m_kWFormTarget.init();

			this.kWAddValue(this.m_kWFormTarget);
		};

		submit.prototype.submitDelete =
			function submitDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWFormAction		= null;
			this.m_kWFormEncType	= null;
			this.m_kWFormMethod		= null;
			this.m_kWFormTarget		= null;
			this.m_kWFormNoValiate	= null;
		};

		submit.prototype.submitInit =
			function submitInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return submit;

	}
);
