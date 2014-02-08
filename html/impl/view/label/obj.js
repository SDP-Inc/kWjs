/**********************************************************************
 *
 * label/obj.js
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
		"../../value/for/obj",
		"../../value/form/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		for_,
		form,
		base,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function label()
		{
			//console.log("label::constructor");
			this.m_kWFor	= null;
			this.m_kWForm	= null;
		}

		label.prototype = new base();
		label.prototype.constructor = label;
		label.constructor = base.prototype.constructor;

		label.prototype.check =
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		label.prototype.init = 
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

		label.prototype.getKWFor =
			function()
		{
			return this.m_kWFor;
		};

		label.prototype.getKWForm =
			function()
		{
			return this.m_kWForm;
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
	
		label.prototype.baseCreateOR = 
			function()
		{
			this.labelCreate();
		};

		label.prototype.baseDeleteOR =
			function()
		{
			this.labelDelete();
		};

		label.prototype.baseInitOR =
			function()
		{
			this.labelInit();
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

		label.prototype.labelCreate = 
			function labelCreate() 
		{
			//console.log(this.kWLogCalled());
			this.labelCreateFor();
			this.labelCreateForm();
		};
		
		label.prototype.labelCreateFor = 
			function labelCreateFor() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWFor))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWFor = new for_();
			
			this.m_kWFor.setKWView(this);
			this.m_kWFor.setKWIDParent(this.m_sKWID);
			
			this.m_kWFor.check();
			this.m_kWFor.init();

			this.kWAddValue(this.m_kWFor);
		};
		
		label.prototype.labelCreateForm = 
			function labelCreateForm() 
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

		label.prototype.labelDelete =
			function labelDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWFor	= null;
			this.m_kWForm	= null;
		};

		label.prototype.labelInit =
			function labelInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return label;

	}
);
