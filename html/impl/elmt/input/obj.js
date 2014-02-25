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
		"../../../base/elmt/obj",
		"kWStat/validate",
		"jquery"
	], 
	function
	(
		elmt,
		validate,
		$
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

			this.m_sKWTag				= "input";
			
			this.m_sKWType			    = null;
			
			this.m_sKWForm			    = null;
			this.m_sKWKeyPlaceHolder	= null;
			this.m_sKWList			    = null;
			this.m_sKWName			    = null;
			this.m_sKWPattern		    = null;
			this.m_sKWPlaceHolder	    = null;
			this.m_sKWValue			    = null;
			
			this.m_bKWAutoComplete	    = false;
			this.m_bKWAutoFocus		    = false;
			this.m_bKWDisabled		    = false;
			this.m_bKWFormNoValidate	= true;
			this.m_bKWMultiple		    = false;
			this.m_bKWReadOnly		    = false;
			this.m_bKWRequired		    = false;
			
			this.m_nKWMax				= -1;
			this.m_nKWMaxLength		    = -1;
			this.m_nKWMin				= -1;
			this.m_nKWSize			    = -1;
			this.m_nKWStep			    = -1;
		}

		input.prototype = new elmt();
		input.prototype.constructor = input;
		input.constructor = elmt.prototype.constructor;

		input.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);

			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sKWType))
			{
				console.error(this.kWLogInvalid("m_sKWType"));
			}
		};

		input.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			elmt.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		input.prototype.getKWVal = function()
		{
			return this.inputGetVal();
		};

		input.prototype.setKWDisabled =
			function(bVal)
		{
			this.m_bKWDisabled = bVal;
			this.inputSetDisabled(bVal)
		};

		input.prototype.setKWName = function(sVal)
		{
			this.m_sKWName = sVal;
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

		input.prototype.reset = function()
		{
			this.inputReset(); 
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		input.prototype.elmtClearOR = 
			function()
		{
			return this.inputClear(); 
		};
		
		input.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.inputCreateAttrs(); 
		};
		
		input.prototype.elmtInitOR = 
			function()
		{
			this.inputInit();
		};
		
		input.prototype.elmtRetrieveOR = 
			function()
		{
			this.inputRetrieve();
		};
		
		input.prototype.mvcEnableOR =
			function()
		{
			this.inputEnable();
		};

		input.prototype.mvcDisableOR =
			function()
		{
			this.inputDisable();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		input.prototype.inputCreateAttrsOR = 
			function inputCreateAttrsOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
		input.prototype.inputDisableOR =
			function inputDisableOR(sValue)
		{
			//console.error(this.kWLogNotImpl());
		};

		input.prototype.inputEnableOR =
			function inputEnableOR(sValue)
		{
			//console.error(this.kWLogNotImpl());
		};

		input.prototype.inputInitOR =
			function inputInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
		input.prototype.inputRetrieveOR = 
			function inputRetrieveOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		input.prototype.inputClear = 
			function inputClear()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWAttrs))
			{
				console.error(this.kWLogInvalid("m_kWAttrs"));
			}
			
			this.m_kWAttrs.clearValue();
		};
		
		input.prototype.inputCreateAttrs = 
			function inputCreateAttrs()
		{
			var attrs = null
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sKWType))
			{
				console.error(this.kWLogInvalid("m_sKWType"));
			}
			
			attrs = this.inputCreateAttrsOR();
			if (!validate.isNotNull(attrs))
			{
				console.error(this.kWLogErrCreate("attrs"));
			}
			
			attrs.setKWAutoComplete(this.m_bKWAutoComplete);
			attrs.setKWAutoFocus(this.m_bKWAutoFocus);
			attrs.setKWDisabled(this.m_bKWDisabled);
			attrs.setKWForm(this.m_sKWForm);
			attrs.setKWFormNoValidate(this.m_bKWFormNoValidate);
			attrs.setKWList(this.m_sKWList);
			attrs.setKWMax(this.m_nKWMax);
			attrs.setKWMaxLength(this.m_nKWMaxLength);
			attrs.setKWMin(this.m_nKWMin);
			attrs.setKWMultiple(this.m_bKWMultiple);
			attrs.setKWName(this.m_sKWName);
			attrs.setKWPattern(this.m_sKWPattern);
			attrs.setKWPlaceHolder(this.m_sKWPlaceHolder);
			attrs.setKWReadOnly(this.m_bKWReadOnly);
			attrs.setKWRequired(this.m_bKWRequired);
			attrs.setKWSize(this.m_nKWSize);
			attrs.setKWStep(this.m_nKWStep);
			attrs.setKWType(this.m_sKWType);
			attrs.setKWValue(this.m_sKWValue);
			
			return attrs;
		};

		input.prototype.inputDisable =
			function inputDisable()
		{
			//console.log(this.kWLogCalled());
			this.setKWDisabled(true);
			this.inputDisableOR();
		};

		input.prototype.inputEnable =
			function inputEnable()
		{
			//console.log(this.kWLogCalled());
			this.setKWDisabled(false);
			this.inputEnableOR();
		};

		input.prototype.inputGetVal =
			function inputGetVal()
		{
			var sVal = null;
			
			//console.log(this.kWLogCalled());

			if (!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}

			sVal = this.m_kWDom.val();
			if (!validate.isString(sVal))
			{
				console.error(log.errRetrieve("sVal")); 
			}

			return sVal;
		};

		input.prototype.inputInit = 
			function inputInit()
		{
			//console.log(this.kWLogCalled());

			this.inputInitOR();
		};

		input.prototype.inputPublish = 
			function inputPublish()
		{
			var data = null;
			
			//console.log(this.kWLogCalled());

			if (!validate.isString(this.m_sKWTopicPub))
			{
				console.error(this.kWLogInvalid("m_sKWTopicPub"));
			}
			
			data = {};

			//console.log("input::inputPublish() topic [" + this.m_sKWTopicPub + "]");
			
			this.mvcPublish(this.m_sKWTopicPub, data);
		};

		input.prototype.inputReset = 
			function inputReset()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}
			
			this.m_sVal = "";
			this.m_kWDom.elmt("value", this.m_sVal);
		};

		input.prototype.inputRetrieve = 
			function inputRetrieve()
		{
			//console.log(this.kWLogCalled());
			this.inputRetrieveAutoComplete();
			this.inputRetrieveAutoFocus();
			this.inputRetrieveDisabled();
			this.inputRetrieveForm();
			this.inputRetrieveFormNoValidate();
			this.inputRetrieveList();
			this.inputRetrieveMax();
			this.inputRetrieveMaxLength();
			this.inputRetrieveMin();
			this.inputRetrieveMultiple();
			this.inputRetrieveReadOnly();
			this.inputRetrieveRequired();
			this.inputRetrieveName();
			this.inputRetrievePattern();
			this.inputRetrievePlaceHolder();
			this.inputRetrieveSize();
			this.inputRetrieveStep();
			this.inputRetrieveValue();
			
			this.inputRetrieveOR();
		};

		input.prototype.inputRetrieveAutoComplete = 
			function inputRetrieveAutoComplete()
		{
			var value	= null;
			
			var bVal	= false;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWAutoComplete();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWAutoComplete = bVal;
				//console.debug(this.kWLogDisplay("m_bKWAutoComplete", this.m_bKWAutoComplete));
			}
		};		
		
		input.prototype.inputRetrieveAutoFocus = 
			function inputRetrieveAutoFocus()
		{
			var value	= null;
			
			var bVal	= false;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWAutoFocus();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWAutoFocus = bVal;
				//console.debug(this.kWLogDisplay("m_bKWAutoFocus", this.m_bKWAutoFocus));
			}
		};		
		
		input.prototype.inputRetrieveDisabled = 
			function inputRetrieveDisabled()
		{
			var value	= null;
			
			var bVal	= false;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWDisabled();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWDisabled = bVal;
				//console.debug(this.kWLogDisplay("m_bKWDisabled", this.m_bKWDisabled));
			}
		};		
		
		input.prototype.inputRetrieveForm = 
			function inputRetrieveForm()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWForm))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWForm();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWForm = value.getKWValue();
			if (validate.isString(this.m_sKWForm))
			{
				//console.debug(this.kWLogDisplay("m_sKWForm", this.m_sKWForm));
			}
		};		
		
		input.prototype.inputRetrieveFormNoValidate = 
			function inputRetrieveFormNoValidate()
		{
			var value	= null;
			
			var bVal	= true;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWFormNoValidate();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWFormNoValidate = bVal;
				//console.debug(this.kWLogDisplay("m_bKWFormNoValidate", this.m_bKWFormNoValidate));
			}
		};
		
		input.prototype.inputRetrieveList = 
			function inputRetrieveList()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWList))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWList();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWList = value.getKWValue();
			if (validate.isString(this.m_sKWList))
			{
				//console.debug(this.kWLogDisplay("m_sKWList", this.m_sKWList));
			}
		};
		
		input.prototype.inputRetrieveMax = 
			function inputRetrieveMax()
		{
			var value	= null;
			
			var nVal	= -1;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWMax();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			nVal = value.getKWValue();
			if (validate.isNumberPos(nVal))
			{
				this.m_nKWMax = nVal;
				//console.debug(this.kWLogDisplay("m_nKWMax", this.m_nKWMax));
			}
		};		
		
		input.prototype.inputRetrieveMaxLength = 
			function inputRetrieveMaxLength()
		{
			var value	= null;
			
			var nVal	= -1;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWMaxLength();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			nVal = value.getKWValue();
			if (validate.isNumberPos(nVal))
			{
				this.m_nKWMaxLength = nVal;
				//console.debug(this.kWLogDisplay("m_nKWMaxLength", this.m_nKWMaxLength));
			}
		};		
		
		input.prototype.inputRetrieveMin = 
			function inputRetrieveMin()
		{
			var value	= null;
			
			var nVal	= -1;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWMin();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			nVal = value.getKWValue();
			if (validate.isNumberPos(nVal))
			{
				this.m_nKWMin = nVal;
				//console.debug(this.kWLogDisplay("m_nKWMin", this.m_nKWMin));
			}
		};		
		
		input.prototype.inputRetrieveMultiple = 
			function inputRetrieveMultiple()
		{
			var value	= null;
			
			var bVal	= false;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWMultiple();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWMultiple = bVal;
				//console.debug(this.kWLogDisplay("m_bKWMultiple", this.m_bKWMultiple));
			}
		};		
		
		input.prototype.inputRetrieveName = 
			function inputRetrieveName()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWName))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWName();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWName = value.getKWValue();
			if (validate.isString(this.m_sKWName))
			{
				//console.debug(this.kWLogDisplay("m_sKWName", this.m_sKWName));
			}
		};
		
		input.prototype.inputRetrievePattern = 
			function inputRetrievePattern()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWPattern))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWPattern();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWPattern = value.getKWValue();
			if (validate.isString(this.m_sKWPattern))
			{
				//console.debug(this.kWLogDisplay("m_sKWPattern", this.m_sKWPattern));
			}
		};
		
		input.prototype.inputRetrievePlaceHolder = 
			function inputRetrievePlaceHolder()
		{
			//console.log(this.kWLogCalled());
			
			this.inputRetrievePlaceHolderText();
			
			if (!validate.isString(this.m_sKWPlaceHolder))
			{
				this.inputRetrievePlaceHolderRaw();
			}
		};
		
		input.prototype.inputRetrievePlaceHolderRaw = 
			function inputRetrievePlaceHolderRaw()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWPlaceHolder))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWPlaceHolder();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWPlaceHolder = value.getKWValue();
			if (validate.isString(this.m_sKWPlaceHolder))
			{
				//console.debug(this.kWLogDisplay("m_sKWPlaceHolder", this.m_sKWPlaceHolder));
			}
		};
		
		input.prototype.inputRetrievePlaceHolderText = 
			function inputRetrievePlaceHolderText()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWPlaceHolder))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWKeyPlaceHolder();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWPlaceHolder = value.getKWValue();
			if (validate.isString(this.m_sKWPlaceHolder))
			{
				//console.debug(this.kWLogDisplay("m_sKWPlaceHolder", this.m_sKWPlaceHolder));
			}
		};
		
		input.prototype.inputRetrieveReadOnly = 
			function inputRetrieveReadOnly()
		{
			var value	= null;
			
			var bVal	= false;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWReadOnly();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWReadOnly = bVal;
				//console.debug(this.kWLogDisplay("m_bKWReadOnly", this.m_bKWReadOnly));
			}
		};		
		
		input.prototype.inputRetrieveRequired = 
			function inputRetrieveRequired()
		{
			var value	= null;
			
			var bVal	= false;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWRequired();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWRequired = bVal;
				//console.debug(this.kWLogDisplay("m_bKWRequired", this.m_bKWRequired));
			}
		};		
		
		input.prototype.inputRetrieveSize = 
			function inputRetrieveSize()
		{
			var value	= null;
			
			var nVal	= -1;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWSize();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			nVal = value.getKWValue();
			if (validate.isNumberPos(nVal))
			{
				this.m_nKWSize = nVal;
				//console.debug(this.kWLogDisplay("m_nKWSize", this.m_nKWSize));
			}
		};		
		
		input.prototype.inputRetrieveStep = 
			function inputRetrieveStep()
		{
			var value	= null;
			
			var nVal	= -1;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWStep();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			nVal = value.getKWValue();
			if (validate.isNumberPos(nVal))
			{
				this.m_nKWStep = nVal;
				//console.debug(this.kWLogDisplay("m_nKWStep", this.m_nKWStep));
			}
		};		
		
		input.prototype.inputRetrieveValue = 
			function inputRetrieveValue()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWValue))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWValue();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWValue = value.getKWValue();
			if (validate.isString(this.m_sKWValue))
			{
				//console.debug(this.kWLogDisplay("m_sKWValue", this.m_sKWValue));
			}
		};
		
		input.prototype.inputSetDisabled =
			function inputSetDisabled()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWAttrs))
			{
				return
			}

			this.m_kWAttrs.setKWDisabled(this.m_bKWDisabled);
		};

		return input;

	}
);
