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

		function checkbox()
		{
			//console.log("checkbox::constructor");

			this.m_kWChecked		= null;
			
			this.m_bKWChecked		= false;
		}

		checkbox.prototype = new input();
		checkbox.prototype.constructor = checkbox;
		checkbox.constructor = input.prototype.constructor;

		checkbox.prototype.check =
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		checkbox.prototype.init =
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

		checkbox.prototype.setKWChecked =
			function(bVal)
		{
			this.cbSetChecked(bVal);
		};
		
		checkbox.prototype.isKWChecked =
			function()
		{
			if (this.m_kWChecked)
			{
				return this.m_kWChecked.getKWValue();
			}
			else
			{
				return this.m_bKWChecked;
			}
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

		checkbox.prototype.inputCreateOR =
			function()
		{
			this.cbCreate();
		};

		checkbox.prototype.inputDeleteOR =
			function()
		{
			this.cbDelete();
		};

		checkbox.prototype.inputInitOR =
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

			this.cbCreateCheckedImpl();

			this.m_kWChecked.setKWValue(bValue);
		};

		checkbox.prototype.cbCreateCheckedImpl =
			function cbCreateCheckedImpl()
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

		checkbox.prototype.cbSetChecked =
			function cbSetChecked(bVal)
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
				this.cbCreateCheckedImpl();
			}

			this.m_kWChecked.setKWValue(this.m_bKWChecked);
		};

		return checkbox;

	}
);
