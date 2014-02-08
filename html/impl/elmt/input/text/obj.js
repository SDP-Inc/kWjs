/**********************************************************************
 *
 * text/obj.js
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
		"../../../attrs/input/simple/obj",
		"../../../view/input/simple/obj",
		"../obj",
		"jquery",
		"kWStat/validate"
	], 
	function
	(
		attrs,
		view,
		input,
		$,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function text()
		{
			//console.log("text::constructor");
			this.m_sKWType = "text";
		}

		text.prototype = new input();
		text.prototype.constructor = text;
		text.constructor = input.prototype.constructor;

		text.prototype.check = 
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		text.prototype.init = 
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

		text.prototype.callbackFocus = 
			function callbackFocus(e)
		{
			var self = null;
			
			//console.log("text::callbackFocus() called");

			e.preventDefault();
		
			self = $.data(this, "ctlr");
			if (!self)
			{
			   throw new Error("text::callbackFocus() [self] invalid"); 
			}

			self.textHandleFocus(e);
		};

		text.prototype.callbackFocusOut = 
			function callbackFocusOut(e)
		{
			var self = null;
			
			//console.log("text::callbackFocusOut() called");

			e.preventDefault();
		
			self = $.data(this, "ctlr");
			if (!self)
			{
			   throw new Error("text::callbackFocusOut() [self] invalid"); 
			}

			self.textHandleFocusOut(e);
		};

		text.prototype.callbackKeyUp = 
			function callbackKeyUp(e)
		{
			var self = null;

			//console.log("text::callbackKeyUp() called");

			e.preventDefault();
		
			self = $.data(this, "ctlr");
			if (!self)
			{
			    throw new Error("text::callbackKeyUp() [self] invalid");
			}

			self.textHandleKeyUp(e);
		};

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

		text.prototype.inputCreateAttrsOR = 
			function()
		{
			return this.textCreateAttrs(); 
		};
		
		text.prototype.elmtCreateViewOR = 
			function()
		{
			return this.textCreateView();
		};
		
		text.prototype.inputInitOR = 
			function()
		{
			this.textInit();
		};
		
		text.prototype.inputRetrieveOR = 
			function()
		{
			this.textRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		text.prototype.textHandleFocusOR =
			function textHandleFocusOR(e)
		{
			console.error(this.kWLogNotImpl());
		};

		text.prototype.textHandleFocusOutOR =
			function textHandleFocusOutOR(e)
		{
			console.error(this.kWLogNotImpl());
		};

		text.prototype.textHandleKeyUpOR =
			function textHandleKeyUpOR(e)
		{
			console.error(this.kWLogNotImpl());
		};

		text.prototype.textInitOR = function textInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		text.prototype.textCreateAttrs = 
			function textCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
	
			theAttrs = new attrs();
			
			return theAttrs;
		};

		text.prototype.textCreateView = 
			function textCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		text.prototype.textHandleEnter = 
			function textHandleEnter(e)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}
			
			this.m_sKWValue = this.m_kWDom.val();
			
			if (!validate.isString(this.m_sKWValue))
			{
				return;
			}
			
			this.textHandleEnterOR();
		};

		text.prototype.textHandleFocus =
			function textHandleFocus(e)
		{
			//console.log(this.kWLogCalled());
			this.textHandleFocusOR(e);
		};
		
		text.prototype.textHandleFocusOut =
			function textHandleFocusOut(e)
		{
			//console.log(this.kWLogCalled());
			this.textHandleFocusOutOR(e);
		};
		
		text.prototype.textHandleKeyUp =
			function textHandleKeyUp(e)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(e))
			{
				console.error(this.kWLogInvalid("e"));
			}

			//console.debug(this.kWLogDisplay("key", e.keyCode))

			if (e.keyCode == "13")
			{
				this.textHandleEnter();
			}
			else
			{
				this.textHandleKeyUpOR(e);
			}
		};

		text.prototype.textInit =
			function textInit()
		{
			//console.log(this.kWLogCalled());
			
			this.textSubscribeFocus();
			this.textSubscribeFocusOut();
			this.textSubscribeKeyUp();
			this.textInitOR();
		};


		text.prototype.textRetrieve =
			function textRetrieve()
		{
			//console.log(this.kWLogCalled());
		};

		text.prototype.textSubscribeFocus =
			function textSubscribeFocus()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}

			if (!validate.isFunction(this.callbackFocus))
			{
				console.error(this.kWLogInvalid("callbackFocus"));
			}

			this.m_kWDom.focus(this.callbackFocus);
		};

		text.prototype.textSubscribeFocusOut = 
			function textSubscribeDoubleClick()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}

			if (!validate.isFunction(this.callbackFocusOut))
			{
				console.error(this.kWLogInvalid("callbackFocusOut"));
			}

			this.m_kWDom.focusout(this.callbackFocusOut);
		};

		text.prototype.textSubscribeKeyUp =
			function textSubscribeKeyUp()
			{
				//console.log(this.kWLogCalled());

				if (!validate.isDom(this.m_kWDom))
				{
					console.error(this.kWLogInvalid("m_kWDom"));
				}

				if (!validate.isFunction(this.callbackKeyUp))
				{
					console.error(this.kWLogInvalid("m_kWDom"));
				}

				this.m_kWDom.keyup(this.callbackKeyUp);
			};

		return text;

	}
);
