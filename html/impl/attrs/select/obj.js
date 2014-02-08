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
		"../../attr/autoFocus/obj",
		"../../attr/disabled/obj",
		"../../attr/form/obj",
		"../../attr/multiple/obj",
		"../../attr/name/obj",
		"../../attr/required/obj",
		"../../attr/size/obj",
		"../../../base/attrs/html/obj",
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
		html,
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
			
			this.m_kWAutoFocus	= null;
			this.m_kWDisabled	= null;
			this.m_kWForm		= null;
			this.m_kWMultiple	= null;
			this.m_kWName		= null;
			this.m_kWRequired	= null;
			this.m_kWSize		= null;
			
			this.m_sKWForm		= null;
			this.m_sKWName		= null;
			
			this.m_bKWAutoFocus	= false;
			this.m_bKWDisabled	= false;
			this.m_bKWMultiple	= false;
			this.m_bKWRequired	= false;
			
			this.m_nKWSize		= -1;
		}

		select.prototype = new html();
		select.prototype.constructor = select;
		select.constructor = html.prototype.constructor;

		select.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		select.prototype.init = 
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

		select.prototype.setKWAutoFocus =
			function(bVal)
		{
			this.selectSetAutoFocus(bVal);
		};

		select.prototype.setKWDisabled =
			function(bVal)
		{
			this.selectSetDisabled(bVal);
		};

		select.prototype.setKWForm =
			function(sVal)
		{
			this.selectSetForm(sVal);
		};

		select.prototype.setKWMultiple =
			function(bVal)
		{
			this.selectSetMultiple(bVal);
		};

		select.prototype.setKWName =
			function(sVal)
		{
			this.selectSetName(sVal);
		};

		select.prototype.setKWRequired =
			function(bVal)
		{
			this.selectSetRequired(bVal);
		};

		select.prototype.setKWSize =
			function(nVal)
		{
			this.selectSetSize(nVal);
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
	
		select.prototype.htmlCreateOR = 
			function()
		{
			this.selectCreate();
		};
		
		select.prototype.htmlInitOR = 
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
				var value   = null;

				var bValue  = null;

				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWAutoFocus))
				{
					console.error(this.kWLogRepeated());
				}

				if (!validate.isNotNull(this.m_kWView))
				{
					console.error(this.kWLogInvalid("m_kWView"));
				}

				value = this.m_kWView.getKWAutoFocus();
				if (validate.isNotNull(value))
				{
					bValue = value.getKWValue();
				}

				if (!validate.isBool(bValue))
				{
					bValue = this.m_bKWAutoFocus;
				}

				if (!validate.isBool(bValue))
				{
					return;
				}

				this.selectCreateAutoFocusImpl();

				this.m_kWAutoFocus.setKWValue(bValue);
			};

		select.prototype.selectCreateAutoFocusImpl =
			function selectCreateAutoFocusImpl()
			{
				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWAutoFocus))
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

				this.m_kWAutoFocus = new autoFocus();

				this.m_kWAutoFocus.setKWIDParent(this.m_sKWID);
				this.m_kWAutoFocus.setKWDom(this.m_kWDom);

				this.m_kWAutoFocus.check();
				this.m_kWAutoFocus.init();

				this.kWAddAttr(this.m_kWAutoFocus);
			};

		select.prototype.selectCreateDisabled =
			function selectCreateDisabled()
			{
				var value   = null;

				var sValue  = null;

				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWDisabled))
				{
					console.error(this.kWLogRepeated());
				}

				if (!validate.isNotNull(this.m_kWView))
				{
					console.error(this.kWLogInvalid("m_kWView"));
				}

				value = this.m_kWView.getKWDisabled();
				if (validate.isNotNull(value))
				{
					bValue = value.getKWValue();
				}

				if (!validate.isBool(bValue))
				{
					bValue = this.m_bKWDisabled;
				}

				if (!validate.isBool(bValue))
				{
					return;
				}

				this.selectCreateDisabledImpl();

				this.m_kWDisabled.setKWValue(bValue);
			};

		select.prototype.selectCreateDisabledImpl =
			function selectCreateDisabledImpl()
			{
				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWDisabled))
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

				this.m_kWDisabled = new disabled();

				this.m_kWDisabled.setKWIDParent(this.m_sKWID);
				this.m_kWDisabled.setKWDom(this.m_kWDom);

				this.m_kWDisabled.check();
				this.m_kWDisabled.init();

				this.kWAddAttr(this.m_kWDisabled);
			};

		select.prototype.selectCreateForm =
			function selectCreateForm()
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

				this.selectCreateFormImpl();

				this.m_kWForm.setKWValue(sValue);
			};

		select.prototype.selectCreateFormImpl =
			function selectCreateFormImpl()
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

		select.prototype.selectCreateMultiple =
			function selectCreateMultiple()
			{
				var value   = null;

				var bValue  = null;

				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWMultiple))
				{
					console.error(this.kWLogRepeated());
				}

				if (!validate.isNotNull(this.m_kWView))
				{
					console.error(this.kWLogInvalid("m_kWView"));
				}

				value = this.m_kWView.getKWMultiple();
				if (validate.isNotNull(value))
				{
					bValue = value.getKWValue();
				}

				if (!validate.isBool(bValue))
				{
					bValue = this.m_bKWMultiple;
				}

				if (!validate.isBool(bValue))
				{
					return;
				}

				this.selectCreateMultipleImpl();

				this.m_kWMultiple.setKWValue(bValue);
			};

		select.prototype.selectCreateMultipleImpl =
			function selectCreateMultipleImpl()
			{
				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWMultiple))
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

				this.m_kWMultiple = new multiple();

				this.m_kWMultiple.setKWIDParent(this.m_sKWID);
				this.m_kWMultiple.setKWDom(this.m_kWDom);

				this.m_kWMultiple.check();
				this.m_kWMultiple.init();

				this.kWAddAttr(this.m_kWMultiple);
			};

		select.prototype.selectCreateName =
			function selectCreateName()
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

				this.selectCreateNameImpl();

				this.m_kWName.setKWValue(sValue);
			};

		select.prototype.selectCreateNameImpl =
			function selectCreateNameImpl()
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

		select.prototype.selectCreateRequired =
			function selectCreateRequired()
			{
				var value   = null;

				var sValue  = null;

				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWRequired))
				{
					console.error(this.kWLogRepeated());
				}

				if (!validate.isNotNull(this.m_kWView))
				{
					console.error(this.kWLogInvalid("m_kWView"));
				}

				value = this.m_kWView.getKWRequired();
				if (validate.isNotNull(value))
				{
					bValue = value.getKWValue();
				}

				if (!validate.isBool(bValue))
				{
					bValue = this.m_sKWRequired;
				}

				if (!validate.isBool(bValue))
				{
					return;
				}

				this.selectCreateRequiredImpl();

				this.m_kWRequired.setKWValue(bValue);
			};

		select.prototype.selectCreateRequiredImpl =
			function selectCreateRequiredImpl()
			{
				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWRequired))
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

				this.m_kWRequired = new required();

				this.m_kWRequired.setKWIDParent(this.m_sKWID);
				this.m_kWRequired.setKWDom(this.m_kWDom);

				this.m_kWRequired.check();
				this.m_kWRequired.init();

				this.kWAddAttr(this.m_kWRequired);
			};

		select.prototype.selectCreateSize =
			function selectCreateSize()
			{
				var value   = null;

				var nValue  =-1;

				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWSize))
				{
					console.error(this.kWLogRepeated());
				}

				if (!validate.isNotNull(this.m_kWView))
				{
					console.error(this.kWLogInvalid("m_kWView"));
				}

				value = this.m_kWView.getKWSize();
				if (validate.isNotNull(value))
				{
					nValue = value.getKWValue();
				}

				if (!validate.isNumberNotNeg(nValue))
				{
					nValue = this.m_sKWSize;
				}

				if (!validate.isNumberNotNeg(nValue))
				{
					return;
				}

				this.selectCreateSizeImpl();

				this.m_kWSize.setKWValue(nValue);
			};

		select.prototype.selectCreateSizeImpl =
			function selectCreateSizeImpl()
			{
				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWSize))
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

				this.m_kWSize = new size();

				this.m_kWSize.setKWIDParent(this.m_sKWID);
				this.m_kWSize.setKWDom(this.m_kWDom);

				this.m_kWSize.check();
				this.m_kWSize.init();

				this.kWAddAttr(this.m_kWSize);
			};

		select.prototype.selectInit = 
			function selectInit()
		{
			//console.log(this.kWLogCalled());
		};

		select.prototype.selectSetAutoFocus =
			function selectSetAutoFocus(bVal)
			{
				//console.log(this.kWLogCalled());

				if (!validate.isBool(bVal))
				{
					return;
				}

				this.m_bKWAutoFocus = bVal;

				if (!this.m_bKWInit)
				{
					return;
				}

				if (!validate.isNotNull(this.m_kWAutoFocus))
				{
					this.selectCreateAutoFocusImpl();
				}

				this.m_kWAutoFocus.setKWValue(this.m_bKWAutoFocus);
			};

		select.prototype.selectSetDisabled =
			function selectSetDisabled(bVal)
			{
				//console.log(this.kWLogCalled());

				if (!validate.isBool(bVal))
				{
					return;
				}

				this.m_bKWDisabled = bVal;

				if (!this.m_bKWInit)
				{
					return;
				}

				if (!validate.isNotNull(this.m_kWDisabled))
				{
					this.selectCreateDisabledImpl();
				}

				this.m_kWDisabled.setKWValue(this.m_bKWDisabled);
			};

		select.prototype.selectSetForm =
			function selectSetForm(sVal)
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
					this.selectCreateFormImpl();
				}

				this.m_kWForm.setKWValue(this.m_sKWForm);
			};

		select.prototype.selectSetMultiple =
			function selectSetMultiple(bVal)
			{
				//console.log(this.kWLogCalled());

				if (!validate.isBool(bVal))
				{
					return;
				}

				this.m_bKWMultiple = bVal;

				if (!this.m_bKWInit)
				{
					return;
				}

				if (!validate.isNotNull(this.m_kWMultiple))
				{
					this.selectCreateMultipleImpl();
				}

				this.m_kWMultiple.setKWValue(this.m_bKWMultiple);
			};

		select.prototype.selectSetName =
			function selectSetName(sVal)
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
					this.selectCreateNameImpl();
				}

				this.m_kWName.setKWValue(this.m_sKWName);
			};

		select.prototype.selectSetRequired =
			function selectSetRequired(bVal)
			{
				//console.log(this.kWLogCalled());

				if (!validate.isBool(bVal))
				{
					return;
				}

				this.m_bKWRequired = bVal;

				if (!this.m_bKWInit)
				{
					return;
				}

				if (!validate.isNotNull(this.m_kWRequired))
				{
					this.selectCreateRequiredImpl();
				}

				this.m_kWRequired.setKWValue(this.m_bKWRequired);
			};

		select.prototype.selectSetSize =
			function selectSetSize(nVal)
			{
				//console.log(this.kWLogCalled());

				if (!validate.isNumberNotNeg(nVal))
				{
					return;
				}

				this.m_nKWSize = nVal;

				if (!this.m_bKWInit)
				{
					return;
				}

				if (!validate.isNotNull(this.m_kWSize))
				{
					this.selectCreateSizeImpl();
				}

				this.m_kWSize.setKWValue(this.m_nKWSize);
			};

		return select;

	}
);
