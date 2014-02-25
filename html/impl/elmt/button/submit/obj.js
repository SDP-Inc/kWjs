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
		"../../../attrs/button/submit/obj",
		"../../../view/button/submit/obj",
		"../obj",
		"kWStat/validate",
		"jquery"
	], 
	function
	(
		attrs,
		view,
		button,
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
			this.m_sKWType			    = "submit";
			
			this.m_sKWFormAction		= null;
			this.m_sKWFormEncType		= null;
			this.m_sKWFormMethod		= null;
			this.m_sKWFormTarget		= null;
			
			this.m_bKWFormNoValidate	= true;
		}

		submit.prototype = new button();
		submit.prototype.constructor = submit;
		submit.constructor = button.prototype.constructor;

		submit.prototype.check = 
			function check()
		{
			button.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		submit.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			button.prototype.init.call(this);
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
	
		submit.prototype.buttonCreateAttrsOR =
			function()
		{
			return this.submitCreateAttrs(); 
		};
		
		submit.prototype.elmtCreateViewOR = 
			function()
		{
			return this.submitCreateView();
		};
		
		submit.prototype.buttonInitOR = 
			function()
		{
			this.submitInit();
		};
		
		submit.prototype.buttonRetrieveOR = 
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
			theAttrs = null;
			
			//console.log(this.kWLogCalled());
			theAttrs = new attrs();
			
			theAttrs.setKWFormAction(this.m_sKWFormAction);
			theAttrs.setKWFormEncType(this.m_sKWFormEncType);
			theAttrs.setKWFormMethod(this.m_sKWFormMethod);
			theAttrs.setKWFormTarget(this.m_sKWFormTarget);
			theAttrs.setKWFormNoValidate(this.m_bKWFormNoValidate);
			
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
			this.submitRetrieveFormNoValidate();
			this.submitRetrieveFormTarget();
		};
		
		submit.prototype.submitRetrieveFormAction = 
			function submitRetrieveFormAction()
		{
			var value = null;
			
			var sValue  = null;

			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWFormAction();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			sValue = value.getKWValue();
			if (!validate.isString(sValue))
			{
				return;
			}

			this.m_sKWFormAction = sValue;
    		//console.debug(this.kWLogDisplay("m_sKWFormAction", this.m_sKWFormAction));
		};
		
		submit.prototype.submitRetrieveFormEncType = 
			function submitRetrieveFormEncType()
		{
			var value = null;
			
			var sValue  = null;

			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWFormEncType();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			sValue = value.getKWValue();
			if (!validate.isString(sValue))
			{
				return;
			}

			this.m_sKWFormEncType = sValue;
    		//console.debug(this.kWLogDisplay("m_sKWFormEncType", this.m_sKWFormEncType));
		};
		
		submit.prototype.submitRetrieveFormMethod = 
			function submitRetrieveFormMethod()
		{
			var value = null;
			
			var sValue  = null;

			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWFormMethod();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			sValue = value.getKWValue();
			if (!validate.isString(sValue))
			{
				return;
			}

			this.m_sKWFormMethod = sValue;
    		//console.debug(this.kWLogDisplay("m_sKWFormMethod", this.m_sKWFormMethod));
		};
		
		submit.prototype.submitRetrieveFormNoValidate = 
			function submitRetrieveFormNoValidate()
		{
			var value	= null;
			
			var bVal	= true;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWFormNoValidate();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (!validate.isBool(bVal))
			{
				return;
			}

			this.m_bKWFormNoValidate = bVal;
			//console.debug(this.kWLogDisplay("m_bKWFormNoValidate", this.m_bKWFormNoValidate));
		};
		
		submit.prototype.submitRetrieveFormTarget = 
			function submitRetrieveFormTarget()
		{
			var value = null;
			
			var sValue  = null;

			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWFormTarget();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			sValue = value.getKWValue();
			if (!validate.isString(sValue))
			{
				return;
			}

			this.m_sKWFormTarget = sValue;
    		//console.debug(this.kWLogDisplay("m_sKWFormTarget", this.m_sKWFormTarget));
		};
		
		return submit;

	}
);
