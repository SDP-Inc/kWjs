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
		"../../../value/formTarget/obj",
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

		submit.prototype.getKWFormAction =
			function()
		{
			return this.m_kWFormAction;
		};

		submit.prototype.getKWFormEncType =
			function()
		{
			return this.m_kWFormEncType;
		};

		submit.prototype.getKWFormMethod =
			function()
		{
			return this.m_kWFormMethod;
		};

		submit.prototype.getKWFormTarget =
			function()
		{
			return this.m_kWFormTarget;
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

		return submit;

	}
);
