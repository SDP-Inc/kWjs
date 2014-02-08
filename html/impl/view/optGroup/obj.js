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
		"../../value/disabled/obj",
		"../../value/label/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		disabled,
		label,
		base,
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
		}

		optGroup.prototype = new base();
		optGroup.prototype.constructor = optGroup;
		optGroup.constructor = base.prototype.constructor;

		optGroup.prototype.check =
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		optGroup.prototype.init =
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

		optGroup.prototype.getKWDisabled =
			function()
		{
			return this.m_kWDisabled;
		};

		optGroup.prototype.getKWLabel =
			function()
		{
			return this.m_kWLabel;
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
	
		optGroup.prototype.baseCreateOR =
			function()
		{
			this.ogCreate();
		};

		optGroup.prototype.baseDeleteOR =
			function()
			{
				this.ogDelete();
			};

		optGroup.prototype.baseInitOR =
			function()
		{
			this.ogInit();
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

		optGroup.prototype.ogCreate = 
			function ogCreate() 
		{
			//console.log(this.kWLogCalled());

			this.ogCreateDisabled();
			this.ogCreateLabel();
		};
		
		optGroup.prototype.ogCreateDisabled = 
			function ogCreateDisabled() 
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
	
		optGroup.prototype.ogCreateLabel = 
			function ogCreateLabel() 
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

		optGroup.prototype.ogDelete =
			function ogDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWDisabled	= null;
			this.m_kWLabel		= null;
		};

		optGroup.prototype.ogInit =
			function ogInit()
		{
			//console.log(this.kWLogCalled());
		};

		return optGroup;

	}
);
