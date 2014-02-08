/**********************************************************************
 *
 * fieldset/obj.js
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
		"../../value/form/obj",
		"../../value/name/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		disabled,
		form,
		name,
		base,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function fieldset()
		{
			//console.log("fieldset::constructor");
			
			this.m_kWDisabled	= null;
			this.m_kWForm		= null;
			this.m_kWName		= null;
		}

		fieldset.prototype = new base();
		fieldset.prototype.constructor = fieldset;
		fieldset.constructor = base.prototype.constructor;

		fieldset.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		fieldset.prototype.init = 
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

		fieldset.prototype.getKWDisabled =
			function()
		{
			return this.m_kWDisabled;
		};

		fieldset.prototype.getKWForm =
			function()
		{
			return this.m_kWForm;
		};

		fieldset.prototype.getKWName =
			function()
		{
			return this.m_kWName;
		};

	//*******************************************************************//
	//***																	   
	//***		public callfieldsetacks
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
	
		fieldset.prototype.baseCreateOR = 
			function()
		{
			this.fsCreate();
		};

		fieldset.prototype.baseDeleteOR =
			function()
		{
			this.fsDelete();
		};

		fieldset.prototype.baseInitOR =
			function()
		{
			this.fsInit();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private formMethods (overrides)
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private formMethods
	//***
	//*******************************************************************//

		fieldset.prototype.fsCreate = 
			function fsCreate()
		{
			//console.log(this.kWLogCalled());
			
			this.fsCreateDisabled();
			this.fsCreateForm();
			this.fsCreateName();
		};
		
		fieldset.prototype.fsCreateDisabled = 
			function fsCreateDisabled() 
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
		
		fieldset.prototype.fsCreateForm = 
			function fsCreateForm() 
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
		
		fieldset.prototype.fsCreateName = 
			function fsCreateName() 
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

		fieldset.prototype.fsDelete =
			function fsDelete()
		{
			//console.log(this.kWLogCalled());
			this.m_kWDisabled	= null;
			this.m_kWForm		= null;
			this.m_kWName		= null;
		};

		fieldset.prototype.fsInit =
			function fsInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return fieldset;

	}
);
