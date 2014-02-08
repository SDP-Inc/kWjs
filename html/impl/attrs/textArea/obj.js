/**********************************************************************
 *
 * textArea/obj.js
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
		"../../attr/cols/obj",
		"../../attr/disabled/obj",
		"../../attr/form/obj",
		"../../attr/maxLength/obj",
		"../../attr/name/obj",
		"../../attr/placeHolder/obj",
		"../../attr/readOnly/obj",
		"../../attr/required/obj",
		"../../attr/rows/obj",
		"../../attr/wrap/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		autoFocus,
		cols,
		disabled,
		form,
		maxLength,
		name,
		placeHolder,
		readOnly,
		required,
		rows,
		wrap,
		html,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function textArea()
		{
			//console.log("textArea::constructor");
			
			this.m_kWAutoFocus	    = null;
			this.m_kWCols			= null;
			this.m_kWDisabled		= null;
			this.m_kWForm			= null;
			this.m_kWMaxLength	    = null;
			this.m_kWName			= null;
			this.m_kWPlaceHolder	= null;
			this.m_kWReadOnly		= null;
			this.m_kWRequired		= null;
			this.m_kWRows			= null;
			this.m_kWWrap			= null;
			
			this.m_sKWForm		    = null;
			this.m_sKWName		    = null;
			this.m_sKWPlaceHolder	= null;
			this.m_sKWWrap		    = null;
			
			this.m_bKWAutoFocus	    = false;
			this.m_bKWDisabled	    = false;
			this.m_bKWReadOnly	    = false;
			this.m_bKWRequired	    = false;

			this.m_nKWCols		    = -1;
			this.m_nKWMaxLength	    = -1;
			this.m_nKWRows		    = -1;
		}

		textArea.prototype = new html();
		textArea.prototype.constructor = textArea;
		textArea.constructor = html.prototype.constructor;

		textArea.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		textArea.prototype.init =
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

		textArea.prototype.setKWAutoFocus =
			function(bVal)
		{
			this.taSetAutoFocus(bVal);
		};

		textArea.prototype.setKWCols =
			function(nVal)
		{
			this.taSetCols(nVal);
		};

		textArea.prototype.setKWDisabled =
			function(bVal)
		{
			this.taSetDisabled(bVal);
		};

		textArea.prototype.setKWMaxLength =
			function(nVal)
		{
			this.taSetMaxLength(nVal);
		};

		textArea.prototype.setKWForm =
			function(sVal)
		{
			this.taSetForm(sVal);
		};

		textArea.prototype.setKWName =
			function(sVal)
		{
			this.taSetName(sVal);
		};

		textArea.prototype.setKWPlaceHolder =
			function(sVal)
		{
			this.taSetPlaceHolder(sVal);
		};

		textArea.prototype.setKWReadOnly =
			function(bVal)
		{
			this.taSetReadOnly(bVal);
		};

		textArea.prototype.setKWRequired =
			function(bVal)
		{
			this.taSetRequired(bVal);
		};

		textArea.prototype.setKWRows =
			function(nVal)
		{
			this.taSetRows(nVal);
		};

		textArea.prototype.setKWWrap =
			function(sVal)
		{
			this.taSetWrap(sVal);
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
	
		textArea.prototype.htmlCreateOR =
			function()
		{
			this.taCreate();
		};
		
		textArea.prototype.htmlDeleteOR =
			function()
		{
			this.taDelete();
		};

		textArea.prototype.htmlInitOR =
			function()
		{
			this.taInit();
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

		textArea.prototype.taCreate = 
			function taCreate()
		{
			//console.log(this.kWLogCalled());

			this.taCreateAutoFocus();
			this.taCreateCols();
			this.taCreateDisabled();
			this.taCreateForm();
			this.taCreateMaxLength();
			this.taCreateName();
			this.taCreatePlaceHolder();
			this.taCreateReadOnly();
			this.taCreateRequired();
			this.taCreateRows();
			this.taCreateWrap();
		};
		
		textArea.prototype.taCreateAutoFocus =
			function taCreateAutoFocus()
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

			this.taCreateAutoFocusImpl();

			this.m_kWAutoFocus.setKWValue(bValue);
		};

		textArea.prototype.taCreateAutoFocusImpl =
			function taCreateAutoFocusImpl()
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

		textArea.prototype.taCreateCols =
			function taCreateCols()
		{
			var value   = null;

			var nValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWCols))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWCols();
			if (validate.isNotNull(value))
			{
				nValue = value.getKWValue();
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				nValue = this.m_nKWCols;
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				return;
			}

			this.taCreateColsImpl();

			this.m_kWCols.setKWValue(nValue);
		};

		textArea.prototype.taCreateColsImpl =
			function taCreateColsImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWCols))
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

			this.m_kWCols = new cols();

			this.m_kWCols.setKWIDParent(this.m_sKWID);
			this.m_kWCols.setKWDom(this.m_kWDom);

			this.m_kWCols.check();
			this.m_kWCols.init();

			this.kWAddAttr(this.m_kWCols);
		};

		textArea.prototype.taCreateDisabled =
			function taCreateDisabled()
		{
			var value   = null;

			var bValue  = null;

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

			this.taCreateDisabledImpl();

			this.m_kWDisabled.setKWValue(bValue);
		};

		textArea.prototype.taCreateDisabledImpl =
			function taCreateDisabledImpl()
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

		textArea.prototype.taCreateForm =
			function taCreateForm()
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

			this.taCreateFormImpl();

			this.m_kWForm.setKWValue(sValue);
		};

		textArea.prototype.taCreateFormImpl =
			function taCreateFormImpl()
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

		textArea.prototype.taCreateMaxLength =
			function taCreateMaxLength()
		{
			var value   = null;

			var nValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWMaxLength))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWMaxLength();
			if (validate.isNotNull(value))
			{
				nValue = value.getKWValue();
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				nValue = this.m_nKWMaxLength;
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				return;
			}

			this.taCreateMaxLengthImpl();

			this.m_kWMaxLength.setKWValue(nValue);
		};

		textArea.prototype.taCreateMaxLengthImpl =
			function taCreateMaxLengthImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWMaxLength))
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

			this.m_kWMaxLength = new maxLength();

			this.m_kWMaxLength.setKWIDParent(this.m_sKWID);
			this.m_kWMaxLength.setKWDom(this.m_kWDom);

			this.m_kWMaxLength.check();
			this.m_kWMaxLength.init();

			this.kWAddAttr(this.m_kWMaxLength);
		};

		textArea.prototype.taCreateName =
			function taCreateName()
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

			this.taCreateNameImpl();

			this.m_kWName.setKWValue(sValue);
		};

		textArea.prototype.taCreateNameImpl =
			function taCreateNameImpl()
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

		textArea.prototype.taCreatePlaceHolder =
			function taCreatePlaceHolder()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWPlaceHolder))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWPlaceHolder();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWPlaceHolder;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.taCreatePlaceHolderImpl();

			this.m_kWPlaceHolder.setKWValue(sValue);
		};

		textArea.prototype.taCreatePlaceHolderImpl =
			function taCreatePlaceHolderImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWPlaceHolder))
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

			this.m_kWPlaceHolder = new placeHolder();

			this.m_kWPlaceHolder.setKWIDParent(this.m_sKWID);
			this.m_kWPlaceHolder.setKWDom(this.m_kWDom);

			this.m_kWPlaceHolder.check();
			this.m_kWPlaceHolder.init();

			this.kWAddAttr(this.m_kWPlaceHolder);
		};

		textArea.prototype.taCreateReadOnly =
			function taCreateReadOnly()
		{
			var value   = null;

			var bValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWReadOnly))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWReadOnly();
			if (validate.isNotNull(value))
			{
				bValue = value.getKWValue();
			}

			if (!validate.isBool(bValue))
			{
				bValue = this.m_bKWReadOnly;
			}

			if (!validate.isBool(bValue))
			{
				return;
			}

			this.taCreateReadOnlyImpl();

			this.m_kWReadOnly.setKWValue(bValue);
		};

		textArea.prototype.taCreateReadOnlyImpl =
			function taCreateReadOnlyImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWReadOnly))
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

			this.m_kWReadOnly = new readOnly();

			this.m_kWReadOnly.setKWIDParent(this.m_sKWID);
			this.m_kWReadOnly.setKWDom(this.m_kWDom);

			this.m_kWReadOnly.check();
			this.m_kWReadOnly.init();

			this.kWAddAttr(this.m_kWReadOnly);
		};

		textArea.prototype.taCreateRequired =
			function taCreateRequired()
		{
			var value   = null;

			var bValue  = null;

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
				bValue = this.m_bKWRequired;
			}

			if (!validate.isBool(bValue))
			{
				return;
			}

			this.taCreateRequiredImpl();

			this.m_kWRequired.setKWValue(bValue);
		};

		textArea.prototype.taCreateRequiredImpl =
			function taCreateRequiredImpl()
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

		textArea.prototype.taCreateRows =
			function taCreateRows()
		{
			var value   = null;

			var nValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWRows))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWRows();
			if (validate.isNotNull(value))
			{
				nValue = value.getKWValue();
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				nValue = this.m_nKWRows;
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				return;
			}

			this.taCreateRowsImpl();

			this.m_kWRows.setKWValue(nValue);
		};

		textArea.prototype.taCreateRowsImpl =
			function taCreateRowsImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWRows))
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

			this.m_kWRows = new rows();

			this.m_kWRows.setKWIDParent(this.m_sKWID);
			this.m_kWRows.setKWDom(this.m_kWDom);

			this.m_kWRows.check();
			this.m_kWRows.init();

			this.kWAddAttr(this.m_kWRows);
		};

		textArea.prototype.taCreateWrap =
			function taCreateWrap()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWWrap))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWWrap();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWWrap;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.taCreateWrapImpl();

			this.m_kWWrap.setKWValue(sValue);
		};

		textArea.prototype.taCreateWrapImpl =
			function taCreateWrapImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWWrap))
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

			this.m_kWWrap = new wrap();

			this.m_kWWrap.setKWIDParent(this.m_sKWID);
			this.m_kWWrap.setKWDom(this.m_kWDom);

			this.m_kWWrap.check();
			this.m_kWWrap.init();

			this.kWAddAttr(this.m_kWWrap);
		};

		textArea.prototype.taDelete =
			function taDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWAutoFocus	    = null;
			this.m_kWCols			= null;
			this.m_kWDisabled		= null;
			this.m_kWForm			= null;
			this.m_kWMaxLength	    = null;
			this.m_kWName			= null;
			this.m_kWPlaceHolder	= null;
			this.m_kWReadOnly		= null;
			this.m_kWRequired		= null;
			this.m_kWRows			= null;
			this.m_kWWrap			= null;
		};

		textArea.prototype.taInit =
			function taInit()
		{
			//console.log(this.kWLogCalled());
		};

		textArea.prototype.taSetAutoFocus =
			function taSetAutoFocus(bVal)
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
				this.taCreateAutoFocusImpl();
			}

			this.m_kWAutoFocus.setKWValue(this.m_bKWAutoFocus);
		};

		textArea.prototype.taSetCols =
			function taSetCols(nVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNumberNotNeg(nVal))
			{
				return;
			}

			this.m_nKWCols = nVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWCols))
			{
				this.taCreateColsImpl();
			}

			this.m_kWCols.setKWValue(this.m_nKWCols);
		};

		textArea.prototype.taSetDisabled =
			function taSetDisabled(bVal)
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
				this.taCreateDisabledImpl();
			}

			this.m_kWDisabled.setKWValue(this.m_bKWDisabled);
		};

		textArea.prototype.taSetForm =
			function taSetForm(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNumberNotNeg(sVal))
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
				this.taCreateFormImpl();
			}

			this.m_kWForm.setKWValue(this.m_sKWForm);
		};

		textArea.prototype.taSetMaxLength =
			function taSetMaxLength(nVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNumberNotNeg(nVal))
			{
				return;
			}

			this.m_nKWMaxLength = nVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWMaxLength))
			{
				this.taCreateMaxLengthImpl();
			}

			this.m_kWMaxLength.setKWValue(this.m_nKWMaxLength);
		};

		textArea.prototype.taSetName =
			function taSetName(nVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNumberNotNeg(nVal))
			{
				return;
			}

			this.m_nKWName = nVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWName))
			{
				this.taCreateNameImpl();
			}

			this.m_kWName.setKWValue(this.m_nKWName);
		};

		textArea.prototype.taSetPlaceHolder =
			function taSetPlaceHolder(nVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNumberNotNeg(nVal))
			{
				return;
			}

			this.m_nKWPlaceHolder = nVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWPlaceHolder))
			{
				this.taCreatePlaceHolderImpl();
			}

			this.m_kWPlaceHolder.setKWValue(this.m_nKWPlaceHolder);
		};

		textArea.prototype.taSetReadOnly =
			function taSetReadOnly(bVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isBool(bVal))
			{
				return;
			}

			this.m_bKWReadOnly = bVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWReadOnly))
			{
				this.taCreateReadOnlyImpl();
			}

			this.m_kWReadOnly.setKWValue(this.m_bKWReadOnly);
		};

		textArea.prototype.taSetRequired =
			function taSetRequired(bVal)
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
				this.taCreateRequiredImpl();
			}

			this.m_kWRequired.setKWValue(this.m_bKWRequired);
		};

		textArea.prototype.taSetRows =
			function taSetRows(nVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNumberNotNeg(nVal))
			{
				return;
			}

			this.m_nKWRows = nVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWRows))
			{
				this.taCreateRowsImpl();
			}

			this.m_kWRows.setKWValue(this.m_nKWRows);
		};

		textArea.prototype.taSetWrap =
			function taSetWrap(nVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNumberNotNeg(nVal))
			{
				return;
			}

			this.m_nKWWrap = nVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWWrap))
			{
				this.taCreateWrapImpl();
			}

			this.m_kWWrap.setKWValue(this.m_nKWWrap);
		};

		return textArea;

	}
);
