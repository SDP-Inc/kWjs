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
 **********************************************************************/

define
(
	[	
		"../../../value/checked/obj",
		"../obj",
		"kWStat/validate"
	], 
	function
	(
		checked,
		command,
		validate
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
			this.m_kWChecked = null;
		}

		checkbox.prototype = new command();
		checkbox.prototype.constructor = checkbox;
		checkbox.constructor = command.prototype.constructor;

		checkbox.prototype.check = 
			function check()
		{
			command.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		checkbox.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			command.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		checkbox.prototype.getKWChecked =
			function()
		{
			return this.m_kWChecked;
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
	
		checkbox.prototype.commandCreateOR = 
			function()
		{
			this.cbCreate();
		};

		checkbox.prototype.baseDeleteOR =
			function()
		{
			this.cbDelete();
		};

		checkbox.prototype.commandInitOR =
			function()
		{
			this.cbInit();
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

		checkbox.prototype.cbCreate = 
			function cbCreate() 
		{
			//console.log(this.kWLogCalled());
			this.cbCreateChecked();
		};
		
		checkbox.prototype.cbCreateChecked = 
			function cbCreateChecked() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWChecked))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWChecked = new checked();
			
			this.m_kWChecked.setKWView(this);
			this.m_kWChecked.setKWIDParent(this.m_sKWID);
			
			this.m_kWChecked.check();
			this.m_kWChecked.init();

			this.kWAddValue(this.m_kWChecked);
		};

		checkbox.prototype.cbDelete =
			function cbDelete()
		{
			//console.log(this.kWLogCalled());
			this.m_kWChecked = null;
		};

		checkbox.prototype.cbInit =
			function cbInit()
		{
			//console.log(this.kWLogCalled());
		};

		return checkbox;

	}
);
