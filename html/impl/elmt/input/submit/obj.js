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
		"../../../attrs/input/submit/obj",
		"../../../view/input/submit/obj",
		"../obj",
		"kWStat/validate",
		"jquery"
	], 
	function
	(
		attrs,
		view,
		input,
		validate,
		$
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
			this.m_sKWType			= "submit";
			
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
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		submit.prototype.submitInitOR = 
			function submitInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		submit.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.submitCreateAttrs(); 
		};
		
		submit.prototype.elmtCreateViewOR = 
			function()
		{
			return this.submitCreateView();
		};
		
		submit.prototype.inputInitOR = 
			function()
		{
			this.submitInit();
		};
		
		submit.prototype.inputRetrieveOR = 
			function()
		{
			this.submitRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		submit.prototype.submitCreateAttrs = 
			function submitCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWFormAction(this.m_sKWFormAction);
			theAttrs.setKWFormEncType(this.m_sKWFormEncType);
			theAttrs.setKWFormMethod(this.m_sKWFormMethod);
			theAttrs.setKWFormTarget(this.m_sKWFormTarget);
			
			return theAttrs;
		};

		submit.prototype.submitCreateView = 
			function submitCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		submit.prototype.submitInit = 
			function submitInit()
		{
			//console.log(this.kWLogCalled());
			this.submitInitOR();
		};
		
		submit.prototype.submitRetrieve = 
			function submitRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.submitRetrieveFormAction();
			this.submitRetrieveFormEncType();
			this.submitRetrieveFormMethod();
			this.submitRetrieveFormTarget();
		};
		
		submit.prototype.submitRetrieveFormAction = 
			function submitRetrieveFormAction()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWFormAction))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWFormAction();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWFormAction = value.getKWValue();
			if (validate.isString(this.m_sKWFormAction))
			{
				//console.debug(this.kWLogDisplay("m_sKWFormAction", this.m_sKWFormAction));
			}
		};		
		
		submit.prototype.submitRetrieveFormEncType = 
			function submitRetrieveFormEncType()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWFormEncType))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWFormEncType();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWFormEncType = value.getKWValue();
			if (validate.isString(this.m_sKWFormEncType))
			{
				//console.debug(this.kWLogDisplay("m_sKWFormEncType", this.m_sKWFormEncType));
			}
		};		
		
		submit.prototype.submitRetrieveFormMethod = 
			function submitRetrieveFormMethod()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWFormMethod))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWFormMethod();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWFormMethod = value.getKWValue();
			if (validate.isString(this.m_sKWFormMethod))
			{
				//console.debug(this.kWLogDisplay("m_sKWFormMethod", this.m_sKWFormMethod));
			}
		};	
		
		submit.prototype.submitRetrieveFormTarget = 
			function submitRetrieveFormTarget()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWFormTarget))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWFormTarget();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWFormTarget = value.getKWValue();
			if (validate.isString(this.m_sKWFormTarget))
			{
				//console.debug(this.kWLogDisplay("m_sKWFormTarget", this.m_sKWFormTarget));
			}
		};		
		
		return submit;

	}
);
