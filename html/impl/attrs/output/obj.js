/**********************************************************************
 *
 * output/obj.js
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
		"../../attr/for/obj",
		"../../attr/form/obj",
		"../../attr/name/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		for_,
		form,
		name,
		html,
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
			
			this.m_sKWFor	= null;
			this.m_sKWForm	= null;
			this.m_sKWName	= null;
		}

		output.prototype = new html();
		output.prototype.constructor = output;
		output.constructor = html.prototype.constructor;

		output.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		output.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			html.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		output.prototype.setKWFor =
			function(sVal)
		{
			this.m_sKWFor = sVal;
			if (this.m_kWFor)
			{
				this.m_kWFor.setKWVal(sVal);
			}
		};
		
		output.prototype.setKWForm =
			function(sVal)
		{
			this.m_sKWForm = sVal;
			if (this.m_kWForm)
			{
				this.m_kWForm.setKWVal(sVal);
			}
		};
		
		output.prototype.setKWName =
			function(sVal)
		{
			this.m_sKWName = sVal;
			if (this.m_kWName)
			{
				this.m_kWName.setKWVal(sVal);
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
	
		output.prototype.htmlCreateOR = 
			function()
		{
			this.outputCreate();
		};

		output.prototype.htmlDeleteOR =
			function()
		{
			this.outputDelete();
		};

		output.prototype.htmlInitOR = 
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
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWFor))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWFor();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWFor;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.outputCreateForImpl();

			this.m_kWFor.setKWValue(sValue);
		};

		output.prototype.outputCreateForImpl =
			function outputCreateForImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWFor))
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

			this.m_kWFor = new for_();

			this.m_kWFor.setKWIDParent(this.m_sKWID);
			this.m_kWFor.setKWDom(this.m_kWDom);

			this.m_kWFor.check();
			this.m_kWFor.init();

			this.kWAddAttr(this.m_kWFor);
		};

		output.prototype.outputCreateForm =
			function outputCreateForm()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWForm))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWForm();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWForm;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.outputCreateFormImpl();

			this.m_kWForm.setKWValue(sValue);
		};

		output.prototype.outputCreateFormImpl =
			function outputCreateFormImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWForm))
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

			this.m_kWForm = new form();

			this.m_kWForm.setKWIDParent(this.m_sKWID);
			this.m_kWForm.setKWDom(this.m_kWDom);

			this.m_kWForm.check();
			this.m_kWForm.init();

			this.kWAddAttr(this.m_kWForm);
		};

		output.prototype.outputCreateName =
			function outputCreateName()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWName))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWName();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWName;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.outputCreateNameImpl();

			this.m_kWName.setKWValue(sValue);
		};

		output.prototype.outputCreateNameImpl =
			function outputCreateNameImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWName))
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

			this.m_kWName = new name();

			this.m_kWName.setKWIDParent(this.m_sKWID);
			this.m_kWName.setKWDom(this.m_kWDom);

			this.m_kWName.check();
			this.m_kWName.init();

			this.kWAddAttr(this.m_kWName);
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

		output.prototype.outputSetFor =
			function outputSetFor(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWFor = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWFor))
			{
				this.outputCreateForImpl();
			}

			this.m_kWFor.setKWValue(this.m_sKWFor);
		};

		output.prototype.outputSetForm =
			function outputSetForm(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWForm = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWForm))
			{
				this.outputCreateFormImpl();
			}

			this.m_kWForm.setKWValue(this.m_sKWForm);
		};

		output.prototype.outputSetName =
			function outputSetName(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWName = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWName))
			{
				this.outputCreateNameImpl();
			}

			this.m_kWName.setKWValue(this.m_sKWName);
		};

		return output;

	}
);
