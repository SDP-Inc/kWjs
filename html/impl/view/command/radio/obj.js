/**********************************************************************
 *
 * radio/obj.js
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
		"../../../value/radioGroup/obj",
		"../obj",
		"kWStat/validate"
	], 
	function
	(
		checked,
		radioGroup,
		input,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function radio()
		{
			//console.log("radio::constructor");
			
			this.m_kWChecked	= null;
			this.m_kWRadioGroup	= null;
		}

		radio.prototype = new input();
		radio.prototype.constructor = radio;
		radio.constructor = input.prototype.constructor;

		radio.prototype.check = 
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		radio.prototype.init = 
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

		radio.prototype.getKWChecked =
			function()
		{
			return this.m_kWChecked;
		};

		radio.prototype.getKWRadioGroup =
			function()
		{
			return this.m_kWRadioGroup;
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
	
		radio.prototype.commandCreateOR = 
			function()
		{
			this.radioCreate();
		};

		radio.prototype.baseDeleteOR =
			function()
		{
			this.radioDelete();
		};

		radio.prototype.commandInitOR =
			function()
		{
			this.radioInit();
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

		radio.prototype.radioCreate = 
			function radioCreate() 
		{
			//console.log(this.kWLogCalled());
			this.radioCreateChecked();
			this.radioCreateRadioGroup();
		};
		
		radio.prototype.radioCreateChecked = 
			function radioCreateChecked() 
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
		
		radio.prototype.radioCreateRadioGroup = 
			function radioCreateRadioGroup() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWRadioGroup))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWRadioGroup = new radioGroup();
			
			this.m_kWRadioGroup.setKWView(this);
			this.m_kWRadioGroup.setKWIDParent(this.m_sKWID);
			
			this.m_kWRadioGroup.check();
			this.m_kWRadioGroup.init();

			this.kWAddValue(this.m_kWRadioGroup);
		};

		radio.prototype.radioDelete =
			function radioDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWChecked	= null;
			this.m_kWRadioGroup	= null;
		};

		radio.prototype.radioInit =
			function radioInit()
		{
			//console.log(this.kWLogCalled());
		};

		return radio;

	}
);
