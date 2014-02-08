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
		"../../attr/disabled/obj",
		"../../attr/label/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		disabled,
		label,
		html,
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
			
			this.m_kWDisabled	= null;
			this.m_kWLabel		= null;
			
			this.m_sKWLabel		= null;
			
			this.m_bKWDisabled	= false;
		}

		optGroup.prototype = new html();
		optGroup.prototype.constructor = optGroup;
		optGroup.constructor = html.prototype.constructor;

		optGroup.prototype.check =
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		optGroup.prototype.init =
			function init()
		{
			//console.log(this.kWLogCalled());
			html.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		optGroup.prototype.setKWDisabled =
			function(bVal)
		{
			this.optGroupSetDisabled(bVal);
		};
		
		optGroup.prototype.setKWLabel =
			function(sVal)
		{
			this.optGroupSetLabel(sVal);
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
	
		optGroup.prototype.htmlCreateOR = 
			function()
		{
			this.optGroupCreate();
		};

		optGroup.prototype.htmlDeleteOR =
			function()
		{
			this.optGroupDelete();
		};

		optGroup.prototype.htmlInitOR = 
			function()
		{
			this.optGroupInit();
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

		optGroup.prototype.optGroupCreate = 
			function optGroupCreate()
		{
			//console.log(this.kWLogCalled());
			
			this.optGroupCreateDisabled();
			this.optGroupCreateLabel();
		};
		
		optGroup.prototype.optGroupCreateDisabled =
			function optGroupCreateDisabled()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWDisabled))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWDisabled();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWDisabled;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.optGroupCreateDisabledImpl();

			this.m_kWDisabled.setKWValue(sValue);
		};

		optGroup.prototype.optGroupCreateDisabledImpl =
			function optGroupCreateDisabledImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWDisabled))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			this.m_kWDisabled = new disabled();

			this.m_kWDisabled.setKWIDParent(this.m_sKWID);
			this.m_kWDisabled.setKWDom(this.m_kWDom);

			this.m_kWDisabled.check();
			this.m_kWDisabled.init();

			this.kWAddAttr(this.m_kWDisabled);
		};

		optGroup.prototype.optGroupCreateLabel =
			function optGroupCreateLabel()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWLabel))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWLabel();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWLabel;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.optGroupCreateLabelImpl();

			this.m_kWLabel.setKWValue(sValue);
		};

		optGroup.prototype.optGroupCreateLabelImpl =
			function optGroupCreateLabelImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWLabel))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			this.m_kWLabel = new label();

			this.m_kWLabel.setKWIDParent(this.m_sKWID);
			this.m_kWLabel.setKWDom(this.m_kWDom);

			this.m_kWLabel.check();
			this.m_kWLabel.init();

			this.kWAddAttr(this.m_kWLabel);
		};

		optGroup.prototype.optGroupDelete =
			function optGroupDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWDisabled	= null;
			this.m_kWLabel		= null;
		};

		optGroup.prototype.optGroupInit =
			function optGroupInit()
		{
			//console.log(this.kWLogCalled());
		};

		optGroup.prototype.optGroupSetDisabled =
			function optGroupSetDisabled(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWDisabled = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWDisabled))
			{
				this.optGroupCreateDisabledImpl();
			}

			this.m_kWDisabled.setKWValue(this.m_sKWDisabled);
		};

		optGroup.prototype.optGroupSetLabel =
			function optGroupSetLabel(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWLabel = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWLabel))
			{
				this.optGroupCreateLabelImpl();
			}

			this.m_kWLabel.setKWValue(this.m_sKWLabel);
		};

		return optGroup;

	}
);
