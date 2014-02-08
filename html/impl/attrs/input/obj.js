/**********************************************************************
 *
 * input/obj.js
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
		"../../attr/autoComplete/obj",
		"../../attr/autoFocus/obj",
		"../../attr/disabled/obj",
		"../../attr/form/obj",
		"../../attr/formNoValidate/obj",
		"../../attr/list/obj",
		"../../attr/max/obj",
		"../../attr/maxLength/obj",
		"../../attr/min/obj",
		"../../attr/multiple/obj",
		"../../attr/name/obj",
		"../../attr/pattern/obj",
		"../../attr/placeHolder/obj",
		"../../attr/readOnly/obj",
		"../../attr/required/obj",
		"../../attr/size/obj",
		"../../attr/step/obj",
		"../../attr/type/obj",
		"../../attr/value/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		autoComplete,
		autoFocus,
		disabled,
		form,
		formNoValidate,
		list,
		max,
		maxLength,
		min,
		multiple,
		name,
		pattern,
		placeHolder,
		readOnly,
		required,
		size,
		step,
		type,
		value,
		html,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function input()
		{
			//console.log("input::constructor");

			this.m_kWAutoComplete	= null;
			this.m_kWAutoFocus		= null;
			this.m_kWDisabled		= null;
			this.m_kWForm			= null;
			this.m_kWFormNoValidate	= null;
			this.m_kWList			= null;
			this.m_kWMax			= null;
			this.m_kWMaxLength		= null;
			this.m_kWMin			= null;
			this.m_kWMultiple		= null;
			this.m_kWName			= null;
			this.m_kWPattern		= null;
			this.m_kWPlaceHolder	= null;
			this.m_kWReadOnly		= null;
			this.m_kWRequired		= null;
			this.m_kWSize			= null;
			this.m_kWStep			= null;
			this.m_kWValue			= null;

			this.m_sKWAutoComplete	    = null;
			this.m_sKWForm			    = null;
			this.m_sKWFormNoValidate    = null;
			this.m_sKWList			    = null;
			this.m_sKWName			    = null;
			this.m_sKWPattern		    = null;
			this.m_sKWPlaceHolder	    = null;
			this.m_sKWType			    = null;
			this.m_sKWValue			    = null;
			
			this.m_bKWAutoFocus		= false;
			this.m_bKWDisabled		= false;
			this.m_bKWMultiple		= false;
			this.m_bKWReadOnly		= false;
			this.m_bKWRequired		= false;
			
			this.m_nKWMax			= -1;
			this.m_nKWMaxLength		= -1;
			this.m_nKWMin			= -1;
			this.m_nKWSize			= -1;
			this.m_nKWStep			= -1;
		}

		input.prototype = new html();
		input.prototype.constructor = input;
		input.constructor = html.prototype.constructor;

		input.prototype.check =
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		input.prototype.init =
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

		input.prototype.setKWAutoComplete =
			function(sVal)
		{
			this.inputSetAutoComplete(sVal);
		};
		
		input.prototype.setKWAutoFocus =
			function(bVal)
		{
			this.inputSetAutoFocus(bVal);
		};
		
		input.prototype.setKWDisabled =
			function(bVal)
		{
			this.inputSetDisabled(bVal);
		};
		
		input.prototype.setKWForm =
			function(sVal)
		{
			this.inputSetForm(sVal);
		};
		
		input.prototype.setKWFormNoValidate =
			function(sVal)
		{
			this.inputSetFormNoValidate(sVal);
		};
		
		input.prototype.setKWList =
			function(sVal)
		{
			this.inputSetList(sVal);
		};
		
		input.prototype.setKWMax =
			function(nVal)
		{
			this.inputSetMax(nVal);
		};
		
		input.prototype.setKWMaxLength =
			function(nVal)
		{
			this.inputSetMaxLength(nVal);
		};
		
		input.prototype.setKWMin =
			function(nVal)
		{
			this.inputSetMin(nVal);
		};
		
		input.prototype.setKWMultiple =
			function(bVal)
		{
			this.inputSetMultiple(bVal);
		};
		
		input.prototype.setKWName =
			function(sVal)
		{
			this.inputSetName(sVal);
		};
		
		input.prototype.setKWPattern =
			function(sVal)
		{
			this.inputSetPattern(sVal);
		};
		
		input.prototype.setKWPlaceHolder =
			function(sVal)
		{
			this.inputSetPlaceHolder(sVal);
		};
		
		input.prototype.setKWReadOnly =
			function(bVal)
		{
			this.inputSetReadOnly(bVal);
		};

		input.prototype.setKWRequired =
			function(bVal)
		{
			this.inputSetRequired(bVal);
		};

		input.prototype.setKWSize =
			function(nVal)
		{
			this.inputSetSize(nVal);
		};

		input.prototype.setKWStep =
			function(nVal)
		{
			this.inputSetStep(nVal);
		};

		input.prototype.setKWType =
			function(sVal)
		{
			this.inputSetType(sVal);
		};

		input.prototype.setKWValue =
			function(sVal)
		{
			this.inputSetValue(sVal);
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

		input.prototype.clearValue = 
			function()
		{
			this.m_sKWValue = "";
			if (!this.m_kWValue)
			{
				this.inputCreateValueImpl();
			}
			this.m_kWValue.kWClear();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		input.prototype.htmlCreateOR =
			function()
		{
			this.inputCreate();
		};

		input.prototype.htmlDeleteOR =
			function()
		{
			this.inputDelete();
		};

		input.prototype.htmlInitOR =
			function()
		{
			this.inputInit();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		input.prototype.inputCreateOR =
			function inputCreateOR()
		{
			console.error(this.kWLogNotImpl());
		};

		input.prototype.inputDeleteOR =
			function inputDeleteOR()
		{
			console.error(this.kWLogNotImpl());
		};

		input.prototype.inputInitOR =
			function inputInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		input.prototype.inputCreate = 
			function inputCreate()
		{
			//console.log(this.kWLogCalled());
			
			this.inputCreateAutoComplete();
			this.inputCreateAutoFocus();
			this.inputCreateForm();
			this.inputCreateFormNoValidate();
			this.inputCreateList();
			this.inputCreateMax();
			this.inputCreateMaxLength();
			this.inputCreateMin();
			this.inputCreateMultiple();
			this.inputCreateName();
			this.inputCreatePattern();
			this.inputCreatePlaceHolder();
			this.inputCreateReadOnly();
			this.inputCreateRequired();
			this.inputCreateSize();
			this.inputCreateStep();
			this.inputCreateType();
			this.inputCreateValue();
			
			this.inputCreateOR();
		};

		input.prototype.inputCreateAutoComplete =
			function inputCreateAutoComplete()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWAutoComplete))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWAutoComplete();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWAutoComplete;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.inputCreateAutoCompleteImpl();

			this.m_kWAutoComplete.setKWValue(sValue);
		};

		input.prototype.inputCreateAutoCompleteImpl =
			function inputCreateAutoCompleteImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWAutoComplete))
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

			this.m_kWAutoComplete = new autoComplete();

			this.m_kWAutoComplete.setKWIDParent(this.m_sKWID);
			this.m_kWAutoComplete.setKWDom(this.m_kWDom);

			this.m_kWAutoComplete.check();
			this.m_kWAutoComplete.init();

			this.kWAddAttr(this.m_kWAutoComplete);
		};

		input.prototype.inputCreateAutoFocus =
			function inputCreateAutoFocus()
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

			this.inputCreateAutoFocusImpl();

			this.m_kWAutoFocus.setKWValue(bValue);
		};

		input.prototype.inputCreateAutoFocusImpl =
			function inputCreateAutoFocusImpl()
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

		input.prototype.inputCreateDisabled =
			function inputCreateDisabled()
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

			this.inputCreateDisabledImpl();

			this.m_kWDisabled.setKWValue(bValue);
		};

		input.prototype.inputCreateDisabledImpl =
			function inputCreateDisabledImpl()
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

		input.prototype.inputCreateForm =
			function inputCreateForm()
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

			this.inputCreateFormImpl();

			this.m_kWForm.setKWValue(sValue);
		};

		input.prototype.inputCreateFormImpl =
			function inputCreateFormImpl()
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

		input.prototype.inputCreateFormNoValidate =
			function inputCreateFormNoValidate()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWFormNoValidate))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWFormNoValidate();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWFormNoValidate;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.inputCreateFormNoValidateImpl();

			this.m_kWFormNoValidate.setKWValue(sValue);
		};

		input.prototype.inputCreateFormNoValidateImpl =
			function inputCreateFormNoValidateImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWFormNoValidate))
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

			this.m_kWFormNoValidate = new formNoValidate();

			this.m_kWFormNoValidate.setKWIDParent(this.m_sKWID);
			this.m_kWFormNoValidate.setKWDom(this.m_kWDom);

			this.m_kWFormNoValidate.check();
			this.m_kWFormNoValidate.init();

			this.kWAddAttr(this.m_kWFormNoValidate);
		};

		input.prototype.inputCreateList =
			function inputCreateList()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWList))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWList();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWList;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.inputCreateListImpl();

			this.m_kWList.setKWValue(sValue);
		};

		input.prototype.inputCreateListImpl =
			function inputCreateListImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWList))
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

			this.m_kWList = new list();

			this.m_kWList.setKWIDParent(this.m_sKWID);
			this.m_kWList.setKWDom(this.m_kWDom);

			this.m_kWList.check();
			this.m_kWList.init();

			this.kWAddAttr(this.m_kWList);
		};

		input.prototype.inputCreateMax =
			function inputCreateMax()
		{
			var value   = null;

			var nValue  = -1;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWMax))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWMax();
			if (validate.isNotNull(value))
			{
				nValue = value.getKWValue();
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				nValue = this.m_nKWMax;
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				return;
			}

			this.inputCreateMaxImpl();

			this.m_kWMax.setKWValue(nValue);
		};

		input.prototype.inputCreateMaxImpl =
			function inputCreateMaxImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWMax))
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

			this.m_kWMax = new max();

			this.m_kWMax.setKWIDParent(this.m_sKWID);
			this.m_kWMax.setKWDom(this.m_kWDom);

			this.m_kWMax.check();
			this.m_kWMax.init();

			this.kWAddAttr(this.m_kWMax);
		};

		input.prototype.inputCreateMaxLength =
			function inputCreateMaxLength()
		{
			var value   = null;

			var sValue  = null;

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

			this.inputCreateMaxLengthImpl();

			this.m_kWMaxLength.setKWValue(nValue);
		};

		input.prototype.inputCreateMaxLengthImpl =
			function inputCreateMaxLengthImpl()
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

		input.prototype.inputCreateMin =
			function inputCreateMin()
		{
			var value   = null;

			var nValue  = -1;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWMin))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWMin();
			if (validate.isNotNull(value))
			{
				nValue = value.getKWValue();
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				nValue = this.m_nKWMin;
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				return;
			}

			this.inputCreateMinImpl();

			this.m_kWMin.setKWValue(nValue);
		};

		input.prototype.inputCreateMinImpl =
			function inputCreateMinImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWMin))
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

			this.m_kWMin = new min();

			this.m_kWMin.setKWIDParent(this.m_sKWID);
			this.m_kWMin.setKWDom(this.m_kWDom);

			this.m_kWMin.check();
			this.m_kWMin.init();

			this.kWAddAttr(this.m_kWMin);
		};

		input.prototype.inputCreateMultiple =
			function inputCreateMultiple()
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

			this.inputCreateMultipleImpl();

			this.m_kWMultiple.setKWValue(bValue);
		};

		input.prototype.inputCreateMultipleImpl =
			function inputCreateMultipleImpl()
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

		input.prototype.inputCreateName =
			function inputCreateName()
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

			this.inputCreateNameImpl();

			this.m_kWName.setKWValue(sValue);
		};

		input.prototype.inputCreateNameImpl =
			function inputCreateNameImpl()
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

		input.prototype.inputCreatePattern =
			function inputCreatePattern()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWPattern))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWPattern();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWPattern;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.inputCreatePatternImpl();

			this.m_kWPattern.setKWValue(sValue);
		};

		input.prototype.inputCreatePatternImpl =
			function inputCreatePatternImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWPattern))
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

			this.m_kWPattern = new pattern();

			this.m_kWPattern.setKWIDParent(this.m_sKWID);
			this.m_kWPattern.setKWDom(this.m_kWDom);

			this.m_kWPattern.check();
			this.m_kWPattern.init();

			this.kWAddAttr(this.m_kWPattern);
		};

		input.prototype.inputCreatePlaceHolder =
			function inputCreatePlaceHolder()
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

			this.inputCreatePlaceHolderImpl();

			this.m_kWPlaceHolder.setKWValue(sValue);
		};

		input.prototype.inputCreatePlaceHolderImpl =
			function inputCreatePlaceHolderImpl()
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

		input.prototype.inputCreateReadOnly =
			function inputCreateReadOnly()
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

			this.inputCreateReadOnlyImpl();

			this.m_kWReadOnly.setKWValue(bValue);
		};

		input.prototype.inputCreateReadOnlyImpl =
			function inputCreateReadOnlyImpl()
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

		input.prototype.inputCreateRequired =
			function inputCreateRequired()
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

			this.inputCreateRequiredImpl();

			this.m_kWRequired.setKWValue(bValue);
		};

		input.prototype.inputCreateRequiredImpl =
			function inputCreateRequiredImpl()
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

		input.prototype.inputCreateSize =
			function inputCreateSize()
		{
			var value   = null;

			var nValue  = -1;

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
				nValue = this.m_nKWSize;
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				return;
			}

			this.inputCreateSizeImpl();

			this.m_kWSize.setKWValue(nValue);
		};

		input.prototype.inputCreateSizeImpl =
			function inputCreateSizeImpl()
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

		input.prototype.inputCreateStep =
			function inputCreateStep()
		{
			var value   = null;

			var nValue  = -1;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWStep))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWStep();
			if (validate.isNotNull(value))
			{
				nValue = value.getKWValue();
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				nValue = this.m_nKWStep;
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				return;
			}

			this.inputCreateStepImpl();

			this.m_kWStep.setKWValue(nValue);
		};

		input.prototype.inputCreateStepImpl =
			function inputCreateStepImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWStep))
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

			this.m_kWStep = new step();

			this.m_kWStep.setKWIDParent(this.m_sKWID);
			this.m_kWStep.setKWDom(this.m_kWDom);

			this.m_kWStep.check();
			this.m_kWStep.init();

			this.kWAddAttr(this.m_kWStep);
		};

		input.prototype.inputCreateType =
			function inputCreateType()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWType))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWType();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWType;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.inputCreateTypeImpl();

			this.m_kWType.setKWValue(sValue);
		};

		input.prototype.inputCreateTypeImpl =
			function inputCreateTypeImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWType))
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

			this.m_kWType = new type();

			this.m_kWType.setKWIDParent(this.m_sKWID);
			this.m_kWType.setKWDom(this.m_kWDom);

			this.m_kWType.check();
			this.m_kWType.init();

			this.kWAddAttr(this.m_kWType);
		};

		input.prototype.inputCreateValue =
			function inputCreateValue()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWValue))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWValue();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWValue;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.inputCreateValueImpl();

			this.m_kWValue.setKWValue(sValue);
		};

		input.prototype.inputCreateValueImpl =
			function inputCreateValueImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWValue))
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

			this.m_kWValue = new value();

			this.m_kWValue.setKWIDParent(this.m_sKWID);
			this.m_kWValue.setKWDom(this.m_kWDom);

			this.m_kWValue.check();
			this.m_kWValue.init();

			this.kWAddAttr(this.m_kWValue);
		};

		input.prototype.inputDelete =
			function inputDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWAutoComplete	= null;
			this.m_kWAutoFocus		= null;
			this.m_kWDisabled		= null;
			this.m_kWForm			= null;
			this.m_kWFormNoValidate	= null;
			this.m_kWList			= null;
			this.m_kWMax			= null;
			this.m_kWMaxLength		= null;
			this.m_kWMin			= null;
			this.m_kWMultiple		= null;
			this.m_kWName			= null;
			this.m_kWPattern		= null;
			this.m_kWPlaceHolder	= null;
			this.m_kWReadOnly		= null;
			this.m_kWRequired		= null;
			this.m_kWSize			= null;
			this.m_kWStep			= null;
			this.m_kWValue			= null;

			this.inputDeleteOR();
		};

		input.prototype.inputInit =
			function inputInit()
		{
			//console.log(this.kWLogCalled());
			this.inputInitOR();
		};

		input.prototype.inputSetAutoComplete =
			function inputSetAutoComplete(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWAutoComplete = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWAutoComplete))
			{
				this.inputCreateAutoCompleteImpl();
			}

			this.m_kWAutoComplete.setKWValue(this.m_sKWAutoComplete);
		};

		input.prototype.inputSetAutoFocus =
			function inputSetAutoFocus(bVal)
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
				this.inputCreateAutoFocusImpl();
			}

			this.m_kWAutoFocus.setKWValue(this.m_bKWAutoFocus);
		};

		input.prototype.inputSetDisabled =
			function inputSetDisabled(bVal)
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
				this.inputCreateDisabledImpl();
			}

			this.m_kWDisabled.setKWValue(this.m_bKWDisabled);
		};

		input.prototype.inputSetForm =
			function inputSetForm(sVal)
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
				this.inputCreateFormImpl();
			}

			this.m_kWForm.setKWValue(this.m_sKWForm);
		};

		input.prototype.inputSetFormNoValidate =
			function inputSetFormNoValidate(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWFormNoValidate = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWFormNoValidate))
			{
				this.inputCreateFormNoValidateImpl();
			}

			this.m_kWFormNoValidate.setKWValue(this.m_sKWFormNoValidate);
		};

		input.prototype.inputSetList =
			function inputSetList(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWList = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWList))
			{
				this.inputCreateListImpl();
			}

			this.m_kWList.setKWValue(this.m_sKWList);
		};

		input.prototype.inputSetMax =
			function inputSetMax(nVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNumberNotNeg(nVal))
			{
				return;
			}

			this.m_nKWMax = nVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWMax))
			{
				this.inputCreateMaxImpl();
			}

			this.m_kWMax.setKWValue(this.m_nKWMax);
		};

		input.prototype.inputSetMaxLength =
			function inputSetMaxLength(nVal)
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
				this.inputCreateMaxLengthImpl();
			}

			this.m_kWMaxLength.setKWValue(this.m_nKWMaxLength);
		};

		input.prototype.inputSetMin =
			function inputSetMin(nVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNumberNotNeg(nVal))
			{
				return;
			}

			this.m_nKWMin = nVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWMin))
			{
				this.inputCreateMinImpl();
			}

			this.m_kWMin.setKWValue(this.m_nKWMin);
		};

		input.prototype.inputSetMultiple =
			function inputSetMultiple(bVal)
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
				this.inputCreateMultipleImpl();
			}

			this.m_kWMultiple.setKWValue(this.m_bKWMultiple);
		};

		input.prototype.inputSetName =
			function inputSetName(sVal)
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
				this.inputCreateNameImpl();
			}

			this.m_kWName.setKWValue(this.m_sKWName);
		};

		input.prototype.inputSetPattern =
			function inputSetPattern(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWPattern = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWPattern))
			{
				this.inputCreatePatternImpl();
			}

			this.m_kWPattern.setKWValue(this.m_sKWPattern);
		};

		input.prototype.inputSetPlaceHolder =
			function inputSetPlaceHolder(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWPlaceHolder = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWPlaceHolder))
			{
				this.inputCreatePlaceHolderImpl();
			}

			this.m_kWPlaceHolder.setKWValue(this.m_sKWPlaceHolder);
		};

		input.prototype.inputSetReadOnly =
			function inputSetReadOnly(bVal)
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
				this.inputCreateReadOnlyImpl();
			}

			this.m_kWReadOnly.setKWValue(this.m_bKWReadOnly);
		};

		input.prototype.inputSetRequired =
			function inputSetRequired(bVal)
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
				this.inputCreateRequiredImpl();
			}

			this.m_kWRequired.setKWValue(this.m_bKWRequired);
		};

		input.prototype.inputSetSize =
			function inputSetSize(nVal)
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
				this.inputCreateSizeImpl();
			}

			this.m_kWSize.setKWValue(this.m_nKWSize);
		};

		input.prototype.inputSetStep =
			function inputSetStep(nVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNumberNotNeg(nVal))
			{
				return;
			}

			this.m_nKWStep = nVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWStep))
			{
				this.inputCreateStepImpl();
			}

			this.m_kWStep.setKWValue(this.m_nKWStep);
		};

		input.prototype.inputSetType =
			function inputSetType(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWType = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWType))
			{
				this.inputCreateTypeImpl();
			}

			this.m_kWType.setKWValue(this.m_sKWType);
		};

		input.prototype.inputSetValue =
			function inputSetValue(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWValue = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWValue))
			{
				this.inputCreateValueImpl();
			}

			this.m_kWValue.setKWValue(this.m_sKWValue);
		};

		return input;

	}
);
