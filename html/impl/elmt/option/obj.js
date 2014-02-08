/**********************************************************************
 *
 * option/obj.js
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
		"../../attrs/option/obj",
		"../../view/option/obj",
		"../../../base/elmt/obj",
		"kWStat/validate"
	], 
	function
	(
		attrs,
		view,
		elmt,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function option()
		{
			//console.log("option::constructor");
			this.m_sKWTag		= "option";
			
			this.m_sKWLabel		= null;
			this.m_sKWValue		= null;
			
			this.m_bKWDisabled	= false;
			this.m_bKWSelected	= false;
		}

		option.prototype = new elmt();
		option.prototype.constructor = option;
		option.constructor = elmt.prototype.constructor;

		option.prototype.check =
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		option.prototype.init = 
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

		option.prototype.getKWValue =
			function()
		{
			return this.m_sKWValue;
		};

		option.prototype.setKWSelected =
			function(bVal)
		{
			this.m_bKWSelected = bVal;
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
		
		option.prototype.disable = 
			function() 
		{
			this.elmtDisable();
		};

		elmt.prototype.enable =
			function() 
		{
			this.elmtEnable();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		option.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.optionCreateAttrs(); 
		};
		
		option.prototype.elmtCreateViewOR =
			function()
		{
			return this.optionCreateView();
		};
		
		option.prototype.elmtInitOR = 
			function()
		{
			this.optionInit();
		};
		
		option.prototype.elmtRetrieveOR = 
			function()
		{
			this.optionRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		option.prototype.optionInitOR = 
			function optionInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		option.prototype.optionCreateAttrs = 
			function optionCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWDisabled(this.m_bKWDisabled);
			theAttrs.setKWLabel(this.m_sKWLabel);
			theAttrs.setKWSelected(this.m_bKWSelected);
			theAttrs.setKWValue(this.m_sKWValue);
			
			return theAttrs;
		};

		option.prototype.optionCreateView = 
			function optionCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		option.prototype.optionDisable = 
			function optionDisable()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWAttrs))
			{
				console.error(this.kWLogInvalid("m_kWAttrs"));
			}
			
			this.m_kWAttrs.disable();
		};
		
		option.prototype.optionEnable = 
			function optionEnable()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWAttrs))
			{
				console.error(this.kWLogInvalid("m_kWAttrs"));
			}
			
			this.m_kWAttrs.enable();
		};
		
		option.prototype.optionInit = 
			function optionInit()
		{
			this.optionInitOR();
		};
		
		option.prototype.optionRetrieve = 
			function optionRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.optionRetrieveDisabled();
			this.optionRetrieveLabel();
			this.optionRetrieveSelected();
			this.optionRetrieveValue();
		};

		option.prototype.optionRetrieveDisabled = 
			function optionRetrieveDisabled()
		{
			var value = null;
			
			var bValue = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWDisabled();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bValue = value.getKWValue();
			if (validate.isBool(bValue))
			{
				this.m_bKWDisabled = bValue;
				//console.debug(this.kWLogDisplay("m_bKWDisabled", this.m_bKWDisabled));
			}
		};
		
		option.prototype.optionRetrieveLabel = 
			function optionRetrieveLabel()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWLabel))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWLabel();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWLabel = value.getKWValue();
			if (validate.isString(this.m_sKWLabel))
			{
				//console.debug(this.kWLogDisplay("m_sKWLabel", this.m_sKWLabel));
			}
		};
		
		option.prototype.optionRetrieveSelected = 
			function optionRetrieveSelected()
		{
			var value = null;
			
			var bValue = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWSelected();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bValue = value.getKWValue();
			if (validate.isBool(bValue))
			{
				this.m_bKWSelected = bValue;
				//console.debug(this.kWLogDisplay("m_bKWSelected", this.m_bKWSelected));
			}
		};
		
		option.prototype.optionRetrieveValue = 
			function optionRetrieveValue()
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
			if (!validate.isString(this.m_sKWValue))
			{
				console.error(this.kWLogErrRetrieve("m_sKWValue"));
			}
			
			//console.debug(this.kWLogDisplay("m_sKWValue", this.m_sKWValue))
		};

		return option;

	}
);
