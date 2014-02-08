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
		"../../attrs/button/obj",
		"../../view/button/obj",
		"../../../base/elmt/obj",
		"kWStat/validate",
		"jquery"
	], 
	function
	(
		attrs,
		view,
		elmt,
		validate,
		$
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
			this.m_sKWTag	= "button";
			
			this.m_sKWForm	= null;
			this.m_sKWType	= null;
			this.m_sKWName	= null;
			this.m_sKWValue	= null;
		}

		button.prototype = new elmt();
		button.prototype.constructor = button;
		button.constructor = elmt.prototype.constructor;

		button.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
		
			if (!validate.isString(this.m_sKWType))
			{
				//console.error(this.kWLogInvalid("m_sKWType"));
			}
		};

		button.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			elmt.prototype.init.call(this);
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
	
		button.prototype.buttonCallback = 
			function(e) 
		{
			var self = null;
			
			console.log("button::buttonCallback");

			e.preventDefault();
		
			self = $.data(this, "ctlr");
			if (!self)
			{
			   throw new Error("imgBtn::callback() [self] invalid"); 
			}

			self.buttonClick(e);
		};
		
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

		button.prototype.buttonCreateAttrsOR = 
			function buttonCreateAttrsOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
		button.prototype.buttonInitOR = 
			function buttonInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
		button.prototype.buttonRetrieveOR = 
			function buttonRetrieveOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		button.prototype.elmtCreateAttrsOR =
			function()
		{
			var attrs = null
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sKWType))
			{
				//console.error(this.kWLogInvalid("m_sKWType"));
			}
			
			attrs = this.buttonCreateAttrsOR();
			if (!validate.isNotNull(attrs))
			{
				console.error(this.kWLogErrCreate("attrs"));
			}
			
			attrs.setKWAutoFocus(this.m_bKWAutoFocus);
			attrs.setKWDisabled(this.m_bKWDisabled);
			attrs.setKWForm(this.m_sKWForm);
			attrs.setKWName(this.m_sKWName);
			attrs.setKWType(this.m_sKWType);
			attrs.setKWValue(this.m_sKWValue);
			
			return attrs;
		};
		
		button.prototype.elmtInitOR = 
			function()
		{
			this.buttonInit();
		};
		
		button.prototype.elmtRetrieveOR =
			function()
		{
			this.buttonRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		button.prototype.buttonClick = 
			function buttonClick()
		{
			//console.log(this.kWLogCalled());
			this.buttonClickOR();
		};

		button.prototype.buttonCreateAttrs = 
			function buttonCreateAttrs()
		{
			theAttrs = null;
			
			//console.log(this.kWLogCalled());
			theAttrs = this.buttonCreateAttrsOR();
			if (!validate.isNotNull(theAttrs))
			{
				console.error(this.kWLogInvalid("theAttrs"));
			}
			
			theAttrs.setKWForm(this.m_sKWForm);
			theAttrs.setKWType(this.m_sKWType);
			theAttrs.setKWName(this.m_sKWName);
			theAttrs.setKWValue(this.m_sKWValue);
			
			return theAttrs;
		};

		button.prototype.buttonInit = 
			function buttonInit()
		{
			//console.log(this.kWLogCalled());
			
			this.kWSubscribeClick();
			this.buttonInitOR();
		};
		
		button.prototype.buttonRetrieve = 
			function buttonRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.buttonRetrieveForm();
			this.buttonRetrieveName();
			this.buttonRetrieveValue();
			
			this.buttonRetrieveOR();
		};
			
		button.prototype.buttonRetrieveForm = 
			function buttonRetrieveForm()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberPos(this.m_nForm))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWForm();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWForm = value.getKWValue();
			if (validate.isString(this.m_sKWForm))
			{
				//console.debug(this.kWLogDisplay("m_sKWForm", this.m_sKWForm));
			}
		};		
		
		button.prototype.buttonRetrieveName = 
			function buttonRetrieveName()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWName))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWName();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWName = value.getKWValue();
			if (validate.isString(this.m_sKWName))
			{
				//console.debug(this.kWLogDisplay("m_sKWName", this.m_sKWName));
			}
		};		
		
		button.prototype.buttonRetrieveValue = 
			function buttonRetrieveValue()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWValue))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWValue();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWValue = value.getKWValue();
			if (validate.isString(this.m_sKWValue))
			{
				//console.debug(this.kWLogDisplay("m_sKWValue", this.m_sKWValue));
			}
		};		
		
		return button;

	}
);
