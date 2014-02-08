/**********************************************************************
 *
 * select/obj.js
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
		"../../value/multiple/obj",
		"../../value/name/obj",
		"../../value/required/obj",
		"../../value/size/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		autoFocus,
		disabled,
		form,
		multiple,
		name,
		required,
		size,
		base,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function select()
		{
			//console.log("select::constructor");
			
			this.m_kWAutoFocus	    = null;
			this.m_kWDisabled		= null;
			this.m_kWForm			= null;
			this.m_kWMultiple		= null;
			this.m_kWName			= null;
			this.m_kWRequired		= null;
			this.m_kWSize			= null;
		}

		select.prototype = new base();
		select.prototype.constructor = select;
		select.constructor = base.prototype.constructor;

		select.prototype.check =
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		select.prototype.init = 
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

		select.prototype.getKWAutoFocus =
			function()
		{
			return this.m_kWAutoFocus;
		};

		select.prototype.getKWDisabled =
			function()
		{
			return this.m_kWDisabled;
		};

		select.prototype.getKWForm =
			function()
		{
			return this.m_kWForm;
		};

		select.prototype.getKWMultiple =
			function()
		{
			return this.m_kWMultiple;
		};

		select.prototype.getKWName =
			function()
		{
			return this.m_kWName;
		};

		select.prototype.getKWRequired =
			function()
		{
			return this.m_kWRequired;
		};

		select.prototype.getKWSize =
			function()
		{
			return this.m_kWSize;
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
	
		select.prototype.baseCreateOR = 
			function()
		{
			this.selectCreate();
		};

		select.prototype.baseDeleteOR =
			function()
			{
				this.selectDelete();
			};

		select.prototype.baseInitOR =
			function()
		{
			this.selectInit();
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

		select.prototype.selectCreate = 
			function selectCreate() 
		{
			//console.log(this.kWLogCalled());
			
			this.selectCreateAutoFocus();
			this.selectCreateDisabled();
			this.selectCreateForm();
			this.selectCreateMultiple();
			this.selectCreateName();
			this.selectCreateRequired();
			this.selectCreateSize();
		};
		
		select.prototype.selectCreateAutoFocus = 
			function selectCreateAutoFocus() 
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
		
		select.prototype.selectCreateDisabled = 
			function selectCreateDisabled() 
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
		
		select.prototype.selectCreateForm = 
			function selectCreateForm() 
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
		
		select.prototype.selectCreateMultiple = 
			function selectCreateMultiple() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWMultiple))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWMultiple = new multiple();
			
			this.m_kWMultiple.setKWView(this);
			this.m_kWMultiple.setKWIDParent(this.m_sKWID);
			
			this.m_kWMultiple.check();
			this.m_kWMultiple.init();

			this.kWAddValue(this.m_kWMultiple);
		};
		
		select.prototype.selectCreateName = 
			function selectCreateName() 
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
		
		select.prototype.selectCreateRequired = 
			function selectCreateRequired() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWRequired))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWRequired = new required();
			
			this.m_kWRequired.setKWView(this);
			this.m_kWRequired.setKWIDParent(this.m_sKWID);
			
			this.m_kWRequired.check();
			this.m_kWRequired.init();

			this.kWAddValue(this.m_kWRequired);
		};
		
		select.prototype.selectCreateSize = 
			function selectCreateSize() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWSize))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWSize = new size();
			
			this.m_kWSize.setKWView(this);
			this.m_kWSize.setKWIDParent(this.m_sKWID);
			
			this.m_kWSize.check();
			this.m_kWSize.init();

			this.kWAddValue(this.m_kWSize);
		};

		select.prototype.selectDelete =
			function selectDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWAutoFocus	    = null;
			this.m_kWDisabled		= null;
			this.m_kWForm			= null;
			this.m_kWMultiple		= null;
			this.m_kWName			= null;
			this.m_kWRequired		= null;
			this.m_kWSize			= null;
		};

		select.prototype.selectInit =
			function selectInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return select;

	}
);
