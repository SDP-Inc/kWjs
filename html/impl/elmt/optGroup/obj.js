/**********************************************************************
 *
 * optGroup/obj.js
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
		"../../attrs/optGroup/obj",
		"../../view/optGroup/obj",
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

		function optGroup()
		{
			//console.log("optGroup::constructor");
			this.m_sKWTag		= "optGroup";
			
			this.m_sKWLabel		= null;
			
			this.m_bKWDisabled	= false;
		}

		optGroup.prototype = new elmt();
		optGroup.prototype.constructor = optGroup;
		optGroup.constructor = elmt.prototype.constructor;

		optGroup.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		optGroup.prototype.init = 
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

		optGroup.prototype.setKWDisabled =
			function(bVal)
		{
			this.m_bKWDisabled = bVal;
			this.ogSetDisabled(bVal)
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

		optGroup.prototype.elmtCreateAttrsOR =
			function()
		{
			return this.ogCreateAttrs(); 
		};
		
		optGroup.prototype.elmtCreateViewOR =
			function()
		{
			return this.ogCreateView();
		};
		
		optGroup.prototype.elmtInitOR =
			function()
		{
			this.ogInit();
		};
		
		optGroup.prototype.elmtRetrieveOR = 
			function()
		{
			this.ogRetrieve();
		};
		
		optGroup.prototype.mvcEnableOR =
			function()
		{
			this.ogEnable();
		};

		optGroup.prototype.mvcDisableOR =
			function()
		{
			this.ogDisable();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		optGroup.prototype.ogDisableOR =
			function ogDisableOR(sValue)
		{
			//console.error(this.kWLogNotImpl());
		};

		optGroup.prototype.ogEnableOR =
			function ogEnableOR(sValue)
		{
			//console.error(this.kWLogNotImpl());
		};

		optGroup.prototype.ogInitOR =
			function ogInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		optGroup.prototype.ogCreateAttrs = 
			function ogCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWDisabled(this.m_bKWDisabled);
			theAttrs.setKWLabel(this.m_sKWLabel);
			
			return theAttrs;
		};

		optGroup.prototype.ogCreateView = 
			function ogCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		optGroup.prototype.optGroupDisable =
			function optGroupDisable()
		{
			//console.log(this.kWLogCalled());
			this.setKWDisabled(true);
			this.optGroupDisableOR();
		};

		optGroup.prototype.optGroupEnable =
			function optGroupEnable()
		{
			//console.log(this.kWLogCalled());
			this.setKWDisabled(false);
			this.optGroupEnableOR();
		};

		optGroup.prototype.ogInit = 
			function ogInit()
		{
			//console.log(this.kWLogCalled());
			this.ogInitOR();
		};

		optGroup.prototype.ogRetrieve = 
			function ogRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.ogRetrieveDisabled();
			this.ogRetrieveLabel();
		};
	
		optGroup.prototype.ogRetrieveDisabled = 
			function ogRetrieveDisabled()
		{
			var value	= null;
			
			var bVal	= false;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWDisabled();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value", value));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWDisabled = bVal;
				//console.log(this.kWLogDisplay("m_bKWDisabled", this.m_bKWDisabled));
			}
		};
		
		optGroup.prototype.ogRetrieveLabel = 
			function ogRetrieveLabel()
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
				console.error(this.kWLogErrRetrieve("value", value));
			}
			
			this.m_sKWLabel = value.getKWValue();
			if (validate.isString(this.m_sKWLabel))
			{
				//console.debug(this.kWLogDisplay("m_sKWLabel", this.m_sKWLabel));
			}
		};
		
		optGroup.prototype.ogSetDisabled =
			function ogSetDisabled()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWAttrs))
			{
				return
			}

			this.m_kWAttrs.setKWDisabled(this.m_bKWDisabled);
		};

		return optGroup;

	}
);
