/**********************************************************************
 *
 * output/obj.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[	
		"../../value/for/obj",
		"../../value/form/obj",
		"../../value/name/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		for_,
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

		function output()
		{
			//console.log("output::constructor");
			
			this.m_kWFor	= null;
			this.m_kWForm	= null;
			this.m_kWName	= null;
		}

		output.prototype = new base();
		output.prototype.constructor = output;
		output.constructor = base.prototype.constructor;

		output.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		output.prototype.init = 
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

		output.prototype.getKWFor =
			function()
		{
			return this.m_kWFor;
		};

		output.prototype.getKWForm =
			function()
		{
			return this.m_kWForm;
		};

		output.prototype.getKWName =
			function()
		{
			return this.m_kWName;
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
	
		output.prototype.baseCreateOR = 
			function()
		{
			this.outputCreate();
		};

		output.prototype.baseDeleteOR =
			function()
			{
				this.outputDelete();
			};

		output.prototype.baseInitOR =
			function()
		{
			this.outputInit();
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

		output.prototype.outputCreate = 
			function outputCreate() 
		{
			//console.log(this.kWLogCalled());
			
			this.outputCreateFor();
			this.outputCreateForm();
			this.outputCreateName();
		};
		
		output.prototype.outputCreateFor = 
			function outputCreateFor() 
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
		
		output.prototype.outputCreateForm = 
			function outputCreateForm() 
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
		
		output.prototype.outputCreateName = 
			function outputCreateName() 
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

		output.prototype.outputDelete =
			function outputDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWFor	= null;
			this.m_kWForm	= null;
			this.m_kWName	= null;
		};

		output.prototype.outputInit =
			function outputInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return output;

	}
);
