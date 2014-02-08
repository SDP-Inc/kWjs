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
		"../../attr/for/obj",
		"../../attr/form/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		for_,
		form,
		html,
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

			this.m_kWFor		= null;
			this.m_kWForm		= null;
			
			this.m_sKWFor		= null;
			this.m_sKWForm	    = null;
		}

		label.prototype = new html();
		label.prototype.constructor = label;
		label.constructor = html.prototype.constructor;

		label.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		label.prototype.init =
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

		label.prototype.setKWFor =
			function(sVal)
		{
			this.labelSetFor(sVal);
		};

		label.prototype.setKWForm =
			function(sVal)
		{
			this.labelSetForm(sVal);
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

		label.prototype.htmlCreateOR =
			function()
		{
			this.labelCreate();
		};

		label.prototype.htmlDeleteOR =
			function()
		{
			this.labelDelete();
		};

		label.prototype.htmlInitOR =
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

			this.labelCreateForImpl();

			this.m_kWFor.setKWValue(sValue);
		};

		label.prototype.labelCreateForImpl =
			function labelCreateForImpl()
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

		label.prototype.labelCreateForm =
			function labelCreateForm()
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

			this.labelCreateFormImpl();

			this.m_kWForm.setKWValue(sValue);
		};

		label.prototype.labelCreateFormImpl =
			function labelCreateFormImpl()
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

		label.prototype.labelDelete =
			function labelDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWFor    = null;
			this.m_kwForm   = null;
		};

		label.prototype.labelInit =
			function labelInit()
		{
			//console.log(this.kWLogCalled());
		};

		label.prototype.labelSetFor =
			function labelSetFor(sVal)
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
				this.labelCreateForImpl();
			}

			this.m_kWFor.setKWValue(this.m_sKWFor);
		};

		label.prototype.labelSetForm =
			function labelSetForm(sVal)
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
				this.labelCreateFormImpl();
			}

			this.m_kWForm.setKWValue(this.m_sKWForm);
		};

		return label;

	}
);
