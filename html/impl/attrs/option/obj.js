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
		"../../attr/disabled/obj",
		"../../attr/label/obj",
		"../../attr/selected/obj",
		"../../attr/value/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		disabled,
		label,
		selected,
		value,
		html,
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

			this.m_kWDisabled	= null;
			this.m_kWLabel		= null;
			this.m_kWSelected	= null;
			this.m_kWValue		= null;
			
			this.m_sKWLabel		= null;
			this.m_sKWValue		= null;
			
			this.m_bKWDisabled	= false;
			this.m_bKWSelected	= false;
		}

		option.prototype = new html();
		option.prototype.constructor = option;
		option.constructor = html.prototype.constructor;

		option.prototype.check =
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		option.prototype.init = 
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

		option.prototype.setKWDisabled =
			function(bVal)
		{
			this.optionSetDisabled(bVal);
		};

		option.prototype.setKWSelected =
			function(bVal)
		{
			this.optionSetSelected(bVal);
		};

		option.prototype.setKWLabel =
			function(sVal)
		{
			this.optionSetLabel(sVal);
		};

		option.prototype.setKWValue =
			function(sVal)
		{
			this.optionSetValue(sVal);
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
	
		option.prototype.htmlCreateOR = function()
		{
			this.optionCreate();
		};
		
		option.prototype.htmlDeleteOR = function()
		{
			this.optionDelete();
		};

		option.prototype.htmlInitOR = function()
		{
			this.optionInit();
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

		option.prototype.optionCreate = 
			function optionCreate()
		{
			//console.log(this.kWLogCalled());
			
			this.optionCreateDisabled();
			this.optionCreateLabel();
			this.optionCreateSelected();
			this.optionCreateValue();
		};

		option.prototype.optionCreateDisabled =
			function optionCreateDisabled()
			{
				var value   = null;

				var bValue  = null;

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
					bValue = value.getKWValue();
				}

				if (!validate.isBool(bValue))
				{
					bValue = this.m_sKWDisabled;
				}

				if (!validate.isBool(bValue))
				{
					return;
				}

				this.optionCreateDisabledImpl();

				this.m_kWDisabled.setKWValue(bValue);
			};

		option.prototype.optionCreateDisabledImpl =
			function optionCreateDisabledImpl()
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

		option.prototype.optionCreateLabel =
			function optionCreateLabel()
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

				this.optionCreateLabelImpl();

				this.m_kWLabel.setKWValue(sValue);
			};

		option.prototype.optionCreateLabelImpl =
			function optionCreateLabelImpl()
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

		option.prototype.optionCreateSelected =
			function optionCreateSelected()
			{
				var value   = null;

				var bValue  = null;

				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWSelected))
				{
					console.error(this.kWLogRepeated());
				}

				if (!validate.isNotNull(this.m_kWView))
				{
					console.error(this.kWLogInvalid("m_kWView"));
				}

				value = this.m_kWView.getKWSelected();
				if (validate.isNotNull(value))
				{
					bValue = value.getKWValue();
				}

				if (!validate.isBool(bValue))
				{
					bValue = this.m_sKWSelected;
				}

				if (!validate.isBool(bValue))
				{
					return;
				}

				this.optionCreateSelectedImpl();

				this.m_kWSelected.setKWValue(bValue);
			};

		option.prototype.optionCreateSelectedImpl =
			function optionCreateSelectedImpl()
			{
				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWSelected))
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

				this.m_kWSelected = new selected();

				this.m_kWSelected.setKWIDParent(this.m_sKWID);
				this.m_kWSelected.setKWDom(this.m_kWDom);

				this.m_kWSelected.check();
				this.m_kWSelected.init();

				this.kWAddAttr(this.m_kWSelected);
			};

		option.prototype.optionCreateValue =
			function optionCreateValue()
			{
				var value   = null;

				var sValue  = null;

				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWValue))
				{
					console.error(this.kWLogRepeated());
				}

				if (!validate.isNotNull(this.m_kWView))
				{
					console.error(this.kWLogInvalid("m_kWView"));
				}

				value = this.m_kWView.getKWValue();
				if (validate.isNotNull(value))
				{
					sValue = value.getKWValue();
				}

				if (!validate.isString(sValue))
				{
					sValue = this.m_sKWValue;
				}

				if (!validate.isString(sValue))
				{
					return;
				}

				this.optionCreateValueImpl();

				this.m_kWValue.setKWValue(sValue);
			};

		option.prototype.optionCreateValueImpl =
			function optionCreateValueImpl()
			{
				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWValue))
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

				this.m_kWValue = new value();

				this.m_kWValue.setKWIDParent(this.m_sKWID);
				this.m_kWValue.setKWDom(this.m_kWDom);

				this.m_kWValue.check();
				this.m_kWValue.init();

				this.kWAddAttr(this.m_kWValue);
			};

		option.prototype.optionDelete =
			function optionDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWDisabled	= null;
			this.m_kWLabel		= null;
			this.m_kWSelected	= null;
			this.m_kWValue		= null;
		};

		option.prototype.optionInit =
			function optionInit()
		{
			//console.log(this.kWLogCalled());
		};

		option.prototype.optionSetDisabled =
			function optionSetDisabled(bVal)
			{
				//console.log(this.kWLogCalled());

				if (!validate.isBool(bVal))
				{
					return;
				}

				this.m_bKWDisabled = bVal;

				if (!this.m_bKWInit)
				{
					return;
				}

				if (!validate.isNotNull(this.m_kWDisabled))
				{
					this.optionCreateDisabledImpl();
				}

				this.m_kWDisabled.setKWValue(this.m_bKWDisabled);
			};

		option.prototype.optionSetLabel =
			function optionSetLabel(sVal)
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
					this.optionCreateLabelImpl();
				}

				this.m_kWLabel.setKWValue(this.m_sKWLabel);
			};

		option.prototype.optionSetSelected =
			function optionSetSelected(bVal)
			{
				//console.log(this.kWLogCalled());

				if (!validate.isBool(bVal))
				{
					return;
				}

				this.m_bKWSelected = bVal;

				if (!this.m_bKWInit)
				{
					return;
				}

				if (!validate.isNotNull(this.m_kWSelected))
				{
					this.optionCreateSelectedImpl();
				}

				this.m_kWSelected.setKWValue(this.m_bKWSelected);
			};

		option.prototype.optionSetValue =
			function optionSetValue(sVal)
			{
				//console.log(this.kWLogCalled());

				if (!validate.isString(sVal))
				{
					return;
				}

				this.m_sKWValue = sVal;

				if (!this.m_bKWInit)
				{
					return;
				}

				if (!validate.isNotNull(this.m_kWValue))
				{
					this.optionCreateValueImpl();
				}

				this.m_kWValue.setKWValue(this.m_sKWValue);
			};

		return option;

	}
);
