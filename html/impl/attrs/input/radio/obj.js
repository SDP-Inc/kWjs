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
		"../../../attr/checked/obj",
		"../obj",
		"kWStat/validate"
	], 
	function
	(
		checked,
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

			this.m_kWChecked		= null;
			
			this.m_bKWChecked		= false;
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

		radio.prototype.setKWChecked =
			function(bVal)
		{
			this.radioSetChecked(bVal);
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
		
		radio.prototype.inputCreateOR = 
			function()
		{
			this.radioCreate();
		};

		radio.prototype.inputDeleteOR =
			function()
		{
			this.radioDelete();
		};

		radio.prototype.inputInitOR =
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
		};
		
		radio.prototype.radioCreateChecked = 
			function radioCreateChecked()
		{
			var value   = null;
			
			var bValue  = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWChecked))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWChecked();
			if (validate.isNotNull(value))
			{
				bValue = value.getKWValue();
			}

			if (!validate.isBool(bValue))
			{
				bValue = this.m_bKWChecked;
			}

			if (!validate.isBool(bValue))
			{
				return;
			}
			
			this.radioCreateCheckedImpl();
			
			this.m_kWChecked.setKWValue(bValue);
		};

		radio.prototype.radioCreateCheckedImpl =
			function radioCreateCheckedImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWChecked))
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

			this.m_kWChecked = new checked();

			this.m_kWChecked.setKWIDParent(this.m_sKWID);
			this.m_kWChecked.setKWDom(this.m_kWDom);

			this.m_kWChecked.check();
			this.m_kWChecked.init();

			this.kWAddAttr(this.m_kWChecked);
		};

		radio.prototype.radioDelete =
			function radioDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWChecked		= null;
		};

		radio.prototype.radioInit =
			function radioInit()
		{
			//console.log(this.kWLogCalled());
		};

		radio.prototype.radioSetChecked =
			function radioSetChecked(bVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isBool(bVal))
			{
				return;
			}

			this.m_bKWChecked = bVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWChecked))
			{
				this.radioCreateCheckedImpl();
			}

			this.m_kWChecked.setKWValue(this.m_bKWChecked);
		};

		return radio;

	}
);
