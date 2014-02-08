/**********************************************************************
 *
 * radio/obj.js
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
		"../../../attrs/input/radio/obj",
		"../../../view/input/radio/obj",
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

		function radio()
		{
			//console.log("radio::constructor");
			
			this.m_sKWType	    = "radio";
			
			this.m_bKWChecked	= false;
		}

		radio.prototype = new input();
		radio.prototype.constructor = radio;
		radio.constructor = input.prototype.constructor;

		radio.prototype.check = 
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		radio.prototype.init = 
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

		radio.prototype.radioCallbackClick = function(e) 
		{
			var self = null;
			
			//console.log("radio::radioCallbackClick");

			//e.preventDefault();
		
			self = $.data(this, "ctlr");
			if (!self)
			{
			   throw new Error("radio::radioCallbackClick() [self] invalid"); 
			}

			self.radioClick(e);
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

		radio.prototype.radioClickOR = 
			function radioClickOR()
		{
			console.error(this.kWLogNotImpl());
		};

		radio.prototype.radioInitOR = 
			function radioInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		radio.prototype.inputCreateAttrsOR = 
			function()
		{
			return this.radioCreateAttrs(); 
		};
		
		radio.prototype.elmtCreateViewOR = 
			function()
		{
			return this.radioCreateView();
		};
		
		radio.prototype.inputInitOR = 
			function()
		{
			this.radioInit();
		};
		
		radio.prototype.inputRetrieveOR = 
			function()
		{
			this.radioRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		radio.prototype.radioClick = 
			function radioClick()
		{
			//console.log(this.kWLogCalled());
			this.radioClickOR();
		};
		
		radio.prototype.radioCreateAttrs = 
			function radioCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
	
			theAttrs = new attrs();
			
			theAttrs.setKWChecked(this.m_bKWChecked);
			
			return theAttrs;
		};

		radio.prototype.radioCreateView = 
			function radioCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		radio.prototype.radioInit = 
			function radioInit()
		{
			//console.log(this.kWLogCalled());
			this.radioSubscribeClick();
			this.radioInitOR();
		};

		radio.prototype.radioRemoveChecked =
			function radioRemoveChecked()
		{
			//console.log(this.kWLogCalled());
		
			if (!validate.isNotNull(this.m_kWAttrs))
			{
				console.error(this.kWLogInvalid("m_kWAttrs"));
			}

			this.m_kWAttrs.setKWChecked(false);
		};
		
		radio.prototype.radioRetrieve = 
			function radioRetrieve()
		{
			//console.log(this.kWLogCalled());
			this.radioRetrieveChecked();
		};

		radio.prototype.radioRetrieveChecked =
			function radioRetrieveChecked()
		{
			var value	= null;
			
			var bValue	= false;
			
			//console.log(this.kWLogCalled());
		
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWChecked();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bValue = value.getKWValue();
			if (validate.isBool(bValue))
			{
				this.m_bKWChecked = bValue;
				//console.debug(this.kWLogDisplay("m_bKWChecked", this.m_bKWChecked));
			}
		};
		
		radio.prototype.radioSetChecked =
			function radioSetChecked()
		{
			//console.log(this.kWLogCalled());
		
			if (!validate.isNotNull(this.m_kWAttrs))
			{
				console.error(this.kWLogInvalid("m_kWAttrs"));
			}

			this.m_kWAttrs.setKWChecked(true);
		};
		
		radio.prototype.radioSubscribeClick = 
			function radioSubscribeClick()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}

			if (!validate.isFunction(this.radioCallbackClick))
			{
				console.error(this.kWLogInvalid("radioCallbackClick"));
			}

			this.m_kWDom.click(this.radioCallbackClick);
		};

		return radio;

	}
);
