/**********************************************************************
 *
 * button/obj.js
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
		"../../value/autoFocus/obj",
		"../../value/disabled/obj",
		"../../value/form/obj",
		"../../value/name/obj",
		"../../value/type/obj",
		"../../value/value/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		autoFocus,
		disabled,
		form,
		name,
		type,
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

		function button()
		{
			//console.log("button::constructor");
			
			this.m_kWAutoFocus	= null;
			this.m_kWDisabled	= null;
			this.m_kWForm		= null;
			this.m_kWName		= null;
			this.m_kWValue		= null;
			this.m_kWType		= null;
		}

		button.prototype = new base();
		button.prototype.constructor = button;
		button.constructor = base.prototype.constructor;

		button.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		button.prototype.init = 
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

		button.prototype.getKWAutoFocus =
			function()
		{
			return this.m_kWAutoFocus;
		};

		button.prototype.getKWDisabled =
			function()
		{
			return this.m_kWDisabled;
		};

		button.prototype.getKWForm =
			function()
		{
			return this.m_kWForm;
		};

		button.prototype.getKWName =
			function()
		{
			return this.m_kWName;
		};

		button.prototype.getKWValue =
			function()
		{
			return this.m_kWValue;
		};

		button.prototype.getKWType =
			function()
		{
			return this.m_kWType;
		};

	//*******************************************************************//
	//***																	   
	//***		public callbuttonacks
	//***
	//*******************************************************************//
	
	//*******************************************************************//
	//***																	   
	//***		public formMethods
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private formMethods (non-overrides)
	//***
	//*******************************************************************//
	
		button.prototype.baseCreateOR = 
			function()
		{
			this.buttonCreate();
		};

		button.prototype.baseDeleteOR =
			function()
			{
				this.buttonDelete();
			};

		button.prototype.baseInitOR =
			function()
		{
			this.buttonInit();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private formMethods (overrides)
	//***
	//*******************************************************************//

		button.prototype.buttonCreateOR = 
			function buttonCreateOR()
		{
			//console.error(this.kWLogNotImpl());
		};
		
		button.prototype.buttonInitOR = 
			function buttonInitOR()
		{
			//console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private formMethods
	//***
	//*******************************************************************//

		button.prototype.buttonCreate = 
			function buttonCreate()
		{
			//console.log(this.kWLogCalled());
			
			this.buttonCreateAutoFocus();
			this.buttonCreateDisabled();
			this.buttonCreateForm();
			this.buttonCreateName();
			this.buttonCreateType();
			this.buttonCreateValue();
			
			this.buttonCreateOR();
		};
		
		button.prototype.buttonCreateAutoFocus = 
			function buttonCreateAutoFocus() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWAutoFocus))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWAutoFocus = new autoFocus();
			
			this.m_kWAutoFocus.setKWView(this);
			this.m_kWAutoFocus.setKWIDParent(this.m_sKWID);
			
			this.m_kWAutoFocus.check();
			this.m_kWAutoFocus.init();

			this.kWAddValue(this.m_kWAutoFocus);
		};
		
		button.prototype.buttonCreateDisabled = 
			function buttonCreateDisabled() 
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
		
		button.prototype.buttonCreateForm = 
			function buttonCreateForm() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWForm))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWForm = new form();
			
			this.m_kWForm.setKWView(this);
			this.m_kWForm.setKWIDParent(this.m_sKWID);
			
			this.m_kWForm.check();
			this.m_kWForm.init();

			this.kWAddValue(this.m_kWForm);
		};
		
		button.prototype.buttonCreateName = 
			function buttonCreateName() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWName))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWName = new name();
			
			this.m_kWName.setKWView(this);
			this.m_kWName.setKWIDParent(this.m_sKWID);
			
			this.m_kWName.check();
			this.m_kWName.init();

			this.kWAddValue(this.m_kWName);
		};
		
		button.prototype.buttonCreateType = 
			function buttonCreateType() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWType))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWType = new type();
			
			this.m_kWType.setKWView(this);
			this.m_kWType.setKWIDParent(this.m_sKWID);
			
			this.m_kWType.check();
			this.m_kWType.init();

			this.kWAddValue(this.m_kWType);
		};
		
		button.prototype.buttonCreateValue = 
			function buttonCreateValue() 
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

		button.prototype.buttonDelete =
			function buttonDelete()
			{
				//console.log(this.kWLogCalled());

				this.m_kWAutoFocus	= null;
				this.m_kWDisabled	= null;
				this.m_kWForm		= null;
				this.m_kWName		= null;
				this.m_kWValue		= null;
				this.m_kWType		= null;
			};

		button.prototype.buttonInit =
			function buttonInit()
		{
			//console.log(this.kWLogCalled());
			this.buttonInitOR();
		};
		
		return button;

	}
);
