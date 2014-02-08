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
		"../../value/autoComplete/obj",
		"../../value/autoFocus/obj",
		"../../value/disabled/obj",
		"../../value/form/obj",
		"../../value/formNoValidate/obj",
		"../../value/keyPlaceHolder/obj",
		"../../value/list/obj",
		"../../value/max/obj",
		"../../value/maxLength/obj",
		"../../value/min/obj",
		"../../value/multiple/obj",
		"../../value/name/obj",
		"../../value/pattern/obj",
		"../../value/placeHolder/obj",
		"../../value/readOnly/obj",
		"../../value/required/obj",
		"../../value/size/obj",
		"../../value/step/obj",
		"../../value/type/obj",
		"../../value/value/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		autoComplete,
		autoFocus,
		disabled,
		form,
		formNoValidate,
		keyPlaceHolder,
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
		base,
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
			this.m_kWKeyPlaceHolder	= null;
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
		}

		input.prototype = new base();
		input.prototype.constructor = input;
		input.constructor = base.prototype.constructor;

		input.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		input.prototype.init = 
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

		input.prototype.getKWAutoComplete =
			function()
		{
			return this.m_kWAutoComplete;
		};

		input.prototype.getKWAutoFocus =
			function()
		{
			return this.m_kWAutoFocus;
		};

		input.prototype.getKWDisabled =
			function()
		{
			return this.m_kWDisabled;
		};

		input.prototype.getKWForm =
			function()
		{
			return this.m_kWForm;
		};

		input.prototype.getKWFormNoValidate =
			function()
		{
			return this.m_kWFormNoValidate;
		};

		input.prototype.getKWKeyPlaceHolder =
			function()
		{
			return this.m_kWKeyPlaceHolder;
		};

		input.prototype.getKWList =
			function()
		{
			return this.m_kWList;
		};

		input.prototype.getKWMax =
			function()
		{
			return this.m_kWMax;
		};

		input.prototype.getKWMaxLength =
			function()
		{
			return this.m_kWMaxLength;
		};

		input.prototype.getKWMin =
			function()
		{
			return this.m_kWMin;
		};

		input.prototype.getKWMultiple =
			function()
		{
			return this.m_kWMultiple;
		};

		input.prototype.getKWName =
			function()
		{
			return this.m_kWName;
		};

		input.prototype.getKWPattern =
			function()
		{
			return this.m_kWPattern;
		};

		input.prototype.getKWPlaceHolder =
			function()
		{
			return this.m_kWPlaceHolder;
		};

		input.prototype.getKWReadOnly =
			function()
		{
			return this.m_kWReadOnly;
		};
		
		input.prototype.getKWRequired =
			function()
		{
			return this.m_kWRequired;
		};

		input.prototype.getKWSize =
			function()
		{
			return this.m_kWSize;
		};

		input.prototype.getKWStep =
			function()
		{
			return this.m_kWStep;
		};

		input.prototype.getKWType =
			function()
		{
			return this.m_kWType;
		};

		input.prototype.getKWValue =
			function()
		{
			return this.m_kWValue;
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
	
		input.prototype.baseCreateOR =
			function()
		{
			this.inputCreate();
		};

		input.prototype.baseDeleteOR =
			function()
		{
			this.inputDelete();
		};

		input.prototype.baseInitOR =
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
			this.inputCreateDisabled();
			this.inputCreateForm();
			this.inputCreateFormNoValidate();
			this.inputCreateKeyPlaceHolder();
			this.inputCreateList();
			this.inputCreateMultiple();
			this.inputCreateMax();
			this.inputCreateMaxLength();
			this.inputCreateMin();
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
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWAutoComplete))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWAutoComplete = new autoComplete();
			
			this.m_kWAutoComplete.setKWView(this);
			this.m_kWAutoComplete.setKWIDParent(this.m_sKWID);
			
			this.m_kWAutoComplete.check();
			this.m_kWAutoComplete.init();

			this.kWAddValue(this.m_kWAutoComplete);
		};
		
		input.prototype.inputCreateAutoFocus = 
			function inputCreateAutoFocus() 
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
		
		input.prototype.inputCreateDisabled = 
			function inputCreateDisabled() 
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
		
		input.prototype.inputCreateForm = 
			function inputCreateForm() 
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
		
		input.prototype.inputCreateFormNoValidate = 
			function inputCreateFormNoValidate() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWFormNoValidate))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWFormNoValidate = new formNoValidate();
			
			this.m_kWFormNoValidate.setKWView(this);
			this.m_kWFormNoValidate.setKWIDParent(this.m_sKWID);
			
			this.m_kWFormNoValidate.check();
			this.m_kWFormNoValidate.init();

			this.kWAddValue(this.m_kWFormNoValidate);
		};
		
		input.prototype.inputCreateKeyPlaceHolder = 
			function inputCreateKeyPlaceHolder() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWKeyPlaceHolder))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWKeyPlaceHolder = new keyPlaceHolder();
			
			this.m_kWKeyPlaceHolder.setKWView(this);
			this.m_kWKeyPlaceHolder.setKWIDParent(this.m_sKWID);
			
			this.m_kWKeyPlaceHolder.check();
			this.m_kWKeyPlaceHolder.init();

			this.kWAddValue(this.m_kWKeyPlaceHolder);
		};
		
		input.prototype.inputCreateList = 
			function inputCreateList() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWList))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWList = new list();
			
			this.m_kWList.setKWView(this);
			this.m_kWList.setKWIDParent(this.m_sKWID);
			
			this.m_kWList.check();
			this.m_kWList.init();

			this.kWAddValue(this.m_kWList);
		};
		
		input.prototype.inputCreateMax = 
			function inputCreateMax() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWMax))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWMax = new max();
			
			this.m_kWMax.setKWView(this);
			this.m_kWMax.setKWIDParent(this.m_sKWID);
			
			this.m_kWMax.check();
			this.m_kWMax.init();

			this.kWAddValue(this.m_kWMax);
		};
		
		input.prototype.inputCreateMaxLength = 
			function inputCreateMaxLength() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWMaxLength))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWMaxLength = new maxLength();
			
			this.m_kWMaxLength.setKWView(this);
			this.m_kWMaxLength.setKWIDParent(this.m_sKWID);
			
			this.m_kWMaxLength.check();
			this.m_kWMaxLength.init();

			this.kWAddValue(this.m_kWMaxLength);
		};
		
		input.prototype.inputCreateMin = 
			function inputCreateMin() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWMin))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWMin = new min();
			
			this.m_kWMin.setKWView(this);
			this.m_kWMin.setKWIDParent(this.m_sKWID);
			
			this.m_kWMin.check();
			this.m_kWMin.init();

			this.kWAddValue(this.m_kWMin);
		};
		
		input.prototype.inputCreateMultiple = 
			function inputCreateMultiple() 
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
		
		input.prototype.inputCreateName = 
			function inputCreateName() 
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
		
		input.prototype.inputCreatePattern = 
			function inputCreatePattern() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWPattern))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWPattern = new pattern();
			
			this.m_kWPattern.setKWView(this);
			this.m_kWPattern.setKWIDParent(this.m_sKWID);
			
			this.m_kWPattern.check();
			this.m_kWPattern.init();

			this.kWAddValue(this.m_kWPattern);
		};
		
		input.prototype.inputCreatePlaceHolder = 
			function inputCreatePlaceHolder() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWPlaceHolder))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWPlaceHolder = new placeHolder();
			
			this.m_kWPlaceHolder.setKWView(this);
			this.m_kWPlaceHolder.setKWIDParent(this.m_sKWID);
			
			this.m_kWPlaceHolder.check();
			this.m_kWPlaceHolder.init();

			this.kWAddValue(this.m_kWPlaceHolder);
		};
		
		input.prototype.inputCreateReadOnly = 
			function inputCreateReadOnly() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWReadOnly))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWReadOnly = new readOnly();
			
			this.m_kWReadOnly.setKWView(this);
			this.m_kWReadOnly.setKWIDParent(this.m_sKWID);
			
			this.m_kWReadOnly.check();
			this.m_kWReadOnly.init();

			this.kWAddValue(this.m_kWReadOnly);
		};
		
		input.prototype.inputCreateRequired = 
			function inputCreateRequired() 
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
		
		input.prototype.inputCreateSize = 
			function inputCreateSize() 
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
		
		input.prototype.inputCreateStep = 
			function inputCreateStep() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWStep))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWStep = new step();
			
			this.m_kWStep.setKWView(this);
			this.m_kWStep.setKWIDParent(this.m_sKWID);
			
			this.m_kWStep.check();
			this.m_kWStep.init();

			this.kWAddValue(this.m_kWStep);
		};
		
		input.prototype.inputCreateType = 
			function inputCreateType() 
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
		
		input.prototype.inputCreateValue = 
			function inputCreateValue() 
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

		input.prototype.inputDelete =
			function inputDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWAutoComplete	= null;
			this.m_kWAutoFocus		= null;
			this.m_kWDisabled		= null;
			this.m_kWForm			= null;
			this.m_kWFormNoValidate	= null;
			this.m_kWKeyPlaceHolder	= null;
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
		};

		input.prototype.inputInit =
			function inputInit()
		{
			//console.log(this.kWLogCalled());
			this.inputInitOR();
		};

		return input;

	}
);
