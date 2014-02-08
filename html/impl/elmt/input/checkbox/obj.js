/**********************************************************************
 *
 * checkbox/obj.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2013 iTKunst Corporation
 *
 *
 **********************************************************************/

define
(
	[	
		"../../../attrs/input/checkbox/obj",
		"../../../view/input/checkbox/obj",
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

		function checkbox()
		{
			//console.log("checkbox::constructor");
			
			this.m_sKWType		= "checkbox";
			
			this.m_bKWChecked	= false;
		}

		checkbox.prototype = new input();
		checkbox.prototype.constructor = checkbox;
		checkbox.constructor = input.prototype.constructor;

		checkbox.prototype.check = 
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		checkbox.prototype.init = 
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

		checkbox.prototype.getKWChecked =
			function getKWChecked()
			{
				return this.cbGetChecked();
			};

		checkbox.prototype.setKWChecked =
			function setKWChecked(bVal)
			{
				this.cbSetChecked(bVal);
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
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		checkbox.prototype.cbHandleClickOR = 
			function cbHandleClickOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
		checkbox.prototype.cbInitOR = 
			function cbInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		checkbox.prototype.elmtHandleClickOR = 
			function()
		{
			this.cbHandleClick();
		};
		
		checkbox.prototype.inputCreateAttrsOR = 
			function()
		{
			return this.cbCreateAttrs(); 
		};
		
		checkbox.prototype.elmtCreateViewOR = 
			function()
		{
			return this.cbCreateView();
		};
		
		checkbox.prototype.inputInitOR = 
			function()
		{
			this.cbInit();
		};
		
		checkbox.prototype.inputRetrieveOR = 
			function()
		{
			this.cbRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		checkbox.prototype.cbCreateAttrs = 
			function cbCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
	
			theAttrs = new attrs();
			
			theAttrs.setKWChecked(this.m_bKWChecked);
			
			return theAttrs;
		};

		checkbox.prototype.cbCreateView = 
			function cbCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		checkbox.prototype.cbHandleClick = 
			function cbHandleClick()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWAttrs))
			{
				console.error(this.kWLogInvalid("m_kWAttrs"));
			}
			
			this.m_bKWChecked = this.m_kWAttrs.isKWChecked();
			
			this.cbHandleClickOR();
		};  
		
		checkbox.prototype.cbInit = 
			function cbInit()
		{
			//console.log(this.kWLogCalled());
			this.kWSubscribeClick();
			this.cbStoreField();
			this.cbInitOR();
		};

		checkbox.prototype.cbRemoveChecked =
			function cbRemoveChecked()
		{
			//console.log(this.kWLogCalled());
		
			if (!validate.isNotNull(this.m_kWAttrs))
			{
				console.error(this.kWLogInvalid("m_kWAttrs"));
			}

			this.m_kWAttrs.setKWChecked(false);
		};
		
		checkbox.prototype.cbRetrieve = 
			function cbRetrieve()
		{
			//console.log(this.kWLogCalled());
			this.cbRetrieveChecked();
		};

		checkbox.prototype.cbRetrieveChecked =
			function cbRetrieveChecked()
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
		
		checkbox.prototype.cbSetChecked =
			function cbSetChecked(bVal)
		{
			//console.log(this.kWLogCalled());
		
			if (!validate.isNotNull(this.m_kWAttrs))
			{
				console.error(this.kWLogInvalid("m_kWAttrs"));
			}

			this.m_kWAttrs.setKWChecked(bVal);
		};
		
		checkbox.prototype.cbStoreField = 
			function cbStoreField()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isBool(this.m_kWValueField))
			{
				return;
			}
			
			this.m_bKWChecked = this.m_kWValueField;
			
			this.m_kWAttrs.setKWChecked(this.m_bKWChecked);
			
		};  		
		
		return checkbox;

	}
);
