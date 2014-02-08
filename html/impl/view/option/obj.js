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
		"../../value/disabled/obj",
		"../../value/label/obj",
		"../../value/selected/obj",
		"../../value/value/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		disabled,
		label,
		selected,
		value,
		base,
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
			
			this.m_kWDisabled   = null;
			this.m_kWLabel	    = null;
			this.m_kWSelected	= null;
			this.m_kWValue	    = null;
		}

		option.prototype = new base();
		option.prototype.constructor = option;
		option.constructor = base.prototype.constructor;

		option.prototype.check =
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		option.prototype.init =
			function init()
		{
			//console.log(this.kWLogCalled());
			base.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		option.prototype.getKWDisabled =
			function()
		{
			return this.m_kWDisabled;
		};

		option.prototype.getKWLabel =
			function()
		{
			return this.m_kWLabel;
		};

		option.prototype.getKWSelected =
			function()
		{
			return this.m_kWSelected;
		};

		option.prototype.getKWValue =
			function()
		{
			return this.m_kWValue;
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
	
		option.prototype.baseCreateOR =
			function()
		{
			this.optionCreate();
		};

		option.prototype.baseDeleteOR =
			function()
			{
				this.optionDelete();
			};

		option.prototype.baseInitOR =
			function()
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
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWDisabled))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWDisabled = new disabled();
			
			this.m_kWDisabled.setKWView(this);
			this.m_kWDisabled.setKWIDParent(this.m_sKWID);
			
			this.m_kWDisabled.check();
			this.m_kWDisabled.init();

			this.kWAddValue(this.m_kWDisabled);
		};
		
		option.prototype.optionCreateLabel = 
			function optionCreateLabel() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWLabel))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWLabel = new label();
			
			this.m_kWLabel.setKWView(this);
			this.m_kWLabel.setKWIDParent(this.m_sKWID);
			
			this.m_kWLabel.check();
			this.m_kWLabel.init();

			this.kWAddValue(this.m_kWLabel);
		};
		
		option.prototype.optionCreateSelected = 
			function optionCreateSelected() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWSelected))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWSelected = new selected();
			
			this.m_kWSelected.setKWView(this);
			this.m_kWSelected.setKWIDParent(this.m_sKWID);
			
			this.m_kWSelected.check();
			this.m_kWSelected.init();

			this.kWAddValue(this.m_kWSelected);
		};
		
		option.prototype.optionCreateValue = 
			function optionCreateValue() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWValue))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWValue = new value();
			
			this.m_kWValue.setKWView(this);
			this.m_kWValue.setKWIDParent(this.m_sKWID);
			
			this.m_kWValue.check();
			this.m_kWValue.init();

			this.kWAddValue(this.m_kWValue);
		};

		option.prototype.optionDelete =
			function optionDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWDisabled   = null;
			this.m_kWLabel	    = null;
			this.m_kWSelected	= null;
			this.m_kWValue	    = null;
		};

		option.prototype.optionInit =
			function optionInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return option;

	}
);
