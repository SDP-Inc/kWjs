/**********************************************************************
 *
 * command/obj.js
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
		"../../value/icon/obj",
		"../../value/label/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		disabled,
		icon,
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

		function command()
		{
			//console.log("command::constructor");
			
			this.m_kWDisabled	= null;
			this.m_kWIcon		= null;
			this.m_kWLabel	    = null;
		}

		command.prototype = new base();
		command.prototype.constructor = command;
		command.constructor = base.prototype.constructor;

		command.prototype.check =
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		command.prototype.init =
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

		command.prototype.getKWDisabled =
			function()
		{
			return this.m_kWDisabled;
		};

		command.prototype.getKWIcon =
			function()
		{
			return this.m_kWIcon;
		};

		command.prototype.getKWLabel =
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
	
		command.prototype.baseCreateOR = 
			function()
		{
			this.commandCreate();
		};

		command.prototype.baseDeleteOR =
			function()
		{
			this.commandDelete();
		};

		command.prototype.baseInitOR =
			function()
		{
			this.commandInit();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		command.prototype.commandCreateOR = 
			function commandCreateOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
		command.prototype.commandInitOR = 
			function commandInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		command.prototype.commandCreate = 
			function commandCreate() 
		{
			//console.log(this.kWLogCalled());

			this.commandCreateDisabled();
			this.commandCreateIcon();
			this.commandCreateLabel();
			
			this.commandCreateOR();
		};
		
		command.prototype.commandCreateDisabled = 
			function commandCreateDisabled() 
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
		
		command.prototype.commandCreateIcon = 
			function commandCreateIcon() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWIcon))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWIcon = new icon();
			
			this.m_kWIcon.setKWView(this);
			this.m_kWIcon.setKWIDParent(this.m_sKWID);
			
			this.m_kWIcon.check();
			this.m_kWIcon.init();

			this.kWAddValue(this.m_kWIcon);
		};
		
		command.prototype.commandCreateLabel = 
			function commandCreateLabel() 
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

		command.prototype.commandDelete =
			function commandDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWDisabled	= null;
			this.m_kWIcon		= null;
			this.m_kWLabel	    = null;
		};

		command.prototype.commandInit =
			function commandInit()
		{
			//console.log(this.kWLogCalled());
			this.commandInitOR();
		};

		return command;

	}
);
