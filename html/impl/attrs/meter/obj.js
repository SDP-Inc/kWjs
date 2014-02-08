/**********************************************************************
 *
 * meter/obj.js
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
		"../../attr/form/obj",
		"../../attr/high/obj",
		"../../attr/low/obj",
		"../../attr/max/obj",
		"../../attr/min/obj",
		"../../attr/optimum/obj",
		"../../attr/valueNumeric/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		form,
		high,
		low,
		max,
		min,
		optimum,
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

		function meter()
		{
			//console.log("meter::constructor");

			this.m_kWForm		= null;
			this.m_kWHigh		= null;
			this.m_kWLow		= null;
			this.m_kWMax		= null;
			this.m_kWMin		= null;
			this.m_kWOptimum	= null;
			this.m_kWValue	    = null;
			
			this.m_sKWForm	    = null;
			
			this.m_nKWHigh	    = -1;
			this.m_nKWLow		= -1;
			this.m_nKWMax		= -1;
			this.m_nKWMin		= -1;
			this.m_nKWOptimum	= -1;
			this.m_nKWValue	    = -1;
		}

		meter.prototype = new html();
		meter.prototype.constructor = meter;
		meter.constructor = html.prototype.constructor;

		meter.prototype.check =
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		meter.prototype.init = 
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

		meter.prototype.setKWForm =
			function(nVal)
		{
			this.meterSetForm(nVal);
		};

		meter.prototype.setKWHigh =
			function(nVal)
		{
			this.meterSetHigh(nVal);
		};

		meter.prototype.setKWLow =
			function(nVal)
		{
			this.meterSetLow(nVal);
		};

		meter.prototype.setKWMin =
			function(nVal)
		{
			this.meterSetMin(nVal);
		};

		meter.prototype.setKWMax =
			function(nVal)
		{
			this.meterSetMax(nVal);
		};

		meter.prototype.setKWOptimum =
			function(nVal)
		{
			this.meterSetOptimum(nVal);
		};

		meter.prototype.setKWValue =
			function(nVal)
		{
			this.meterSetValue(nVal);
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
	
		meter.prototype.htmlCreateOR = 
			function()
		{
			this.meterCreate();
		};
		
		meter.prototype.htmlDeleteOR =
			function()
		{
			this.meterDelete();
		};

		meter.prototype.htmlInitOR =
			function()
		{
			this.meterInit();
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

		meter.prototype.meterCreate = 
			function meterCreate()
		{
			//console.log(this.kWLogCalled());
			
			this.meterCreateForm();
			this.meterCreateHigh();
			this.meterCreateLow();
			this.meterCreateMax();
			this.meterCreateMin();
			this.meterCreateOptimum();
			this.meterCreateValue();
		};
		
		meter.prototype.meterCreateForm =
			function meterCreateForm()
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

			this.meterCreateFormImpl();

			this.m_kWForm.setKWValue(sValue);
		};

		meter.prototype.meterCreateFormImpl =
			function meterCreateFormImpl()
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

		meter.prototype.meterCreateHigh =
			function meterCreateHigh()
		{
			var value   = null;

			var nValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWHigh))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWHigh();
			if (validate.isNotNull(value))
			{
				nValue = value.getKWValue();
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				nValue = this.m_nKWHigh;
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				return;
			}

			this.meterCreateHighImpl();

			this.m_kWHigh.setKWValue(nValue);
		};

		meter.prototype.meterCreateHighImpl =
			function meterCreateHighImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWHigh))
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

			this.m_kWHigh = new high();

			this.m_kWHigh.setKWIDParent(this.m_sKWID);
			this.m_kWHigh.setKWDom(this.m_kWDom);

			this.m_kWHigh.check();
			this.m_kWHigh.init();

			this.kWAddAttr(this.m_kWHigh);
		};

		meter.prototype.meterCreateLow =
			function meterCreateLow()
		{
			var value   = null;

			var nValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWLow))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWLow();
			if (validate.isNotNull(value))
			{
				nValue = value.getKWValue();
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				nValue = this.m_nKWLow;
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				return;
			}

			this.meterCreateLowImpl();

			this.m_kWLow.setKWValue(nValue);
		};

		meter.prototype.meterCreateLowImpl =
			function meterCreateLowImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWLow))
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

			this.m_kWLow = new low();

			this.m_kWLow.setKWIDParent(this.m_sKWID);
			this.m_kWLow.setKWDom(this.m_kWDom);

			this.m_kWLow.check();
			this.m_kWLow.init();

			this.kWAddAttr(this.m_kWLow);
		};

		meter.prototype.meterCreateMax =
			function meterCreateMax()
		{
			var value   = null;

			var nValue  = null;

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

			this.meterCreateMaxImpl();

			this.m_kWMax.setKWValue(nValue);
		};

		meter.prototype.meterCreateMaxImpl =
			function meterCreateMaxImpl()
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

		meter.prototype.meterCreateMin =
			function meterCreateMin()
		{
			var value   = null;

			var nValue  = null;

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

			this.meterCreateMinImpl();

			this.m_kWMin.setKWValue(nValue);
		};

		meter.prototype.meterCreateMinImpl =
			function meterCreateMinImpl()
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

		meter.prototype.meterCreateOptimum =
			function meterCreateOptimum()
		{
			var value   = null;

			var nValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWOptimum))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWOptimum();
			if (validate.isNotNull(value))
			{
				nValue = value.getKWValue();
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				nValue = this.m_nKWOptimum;
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				return;
			}

			this.meterCreateOptimumImpl();

			this.m_kWOptimum.setKWValue(nValue);
		};

		meter.prototype.meterCreateOptimumImpl =
			function meterCreateOptimumImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWOptimum))
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

			this.m_kWOptimum = new optimum();

			this.m_kWOptimum.setKWIDParent(this.m_sKWID);
			this.m_kWOptimum.setKWDom(this.m_kWDom);

			this.m_kWOptimum.check();
			this.m_kWOptimum.init();

			this.kWAddAttr(this.m_kWOptimum);
		};

		meter.prototype.meterCreateValue =
			function meterCreateValue()
		{
			var value   = null;

			var nValue  = null;

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
				nValue = value.getKWValue();
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				nValue = this.m_nKWvalue;
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				return;
			}

			this.meterCreateValueImpl();

			this.m_kWValue.setKWValue(nValue);
		};

		meter.prototype.meterCreateValueImpl =
			function meterCreateValueImpl()
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

		meter.prototype.meterDelete =
			function meterDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWForm		= null;
			this.m_kWHigh		= null;
			this.m_kWLow		= null;
			this.m_kWMax		= null;
			this.m_kWMin		= null;
			this.m_kWOptimum	= null;
			this.m_kWValue	    = null;
		};
		
		meter.prototype.meterInit =
			function meterInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		meter.prototype.meterSetForm =
			function meterSetForm(sVal)
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
				this.meterCreateFormImpl();
			}

			this.m_kWForm.setKWValue(this.m_sKWForm);
		};

		meter.prototype.meterSetHigh =
			function meterSetHigh(nVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNumberNotNeg(nVal))
			{
				return;
			}

			this.m_nKWHigh = nVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWHigh))
			{
				this.meterCreateHighImpl();
			}

			this.m_kWHigh.setKWValue(this.m_nKWHigh);
		};

		meter.prototype.meterSetLow =
			function meterSetLow(nVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNumberNotNeg(nVal))
			{
				return;
			}

			this.m_nKWLow = nVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWLow))
			{
				this.meterCreateLowImpl();
			}

			this.m_kWLow.setKWValue(this.m_nKWLow);
		};

		meter.prototype.meterSetMax =
			function meterSetMax(nVal)
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
				this.meterCreateMaxImpl();
			}

			this.m_kWMax.setKWValue(this.m_nKWMax);
		};

		meter.prototype.meterSetMin =
			function meterSetMin(nVal)
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
				this.meterCreateMinImpl();
			}

			this.m_kWMin.setKWValue(this.m_nKWMin);
		};

		meter.prototype.meterSetOptimum =
			function meterSetOptimum(nVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNumberNotNeg(nVal))
			{
				return;
			}

			this.m_nKWOptimum = nVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWOptimum))
			{
				this.meterCreateOptimumImpl();
			}

			this.m_kWOptimum.setKWValue(this.m_nKWOptimum);
		};

		meter.prototype.meterSetValue =
			function meterSetValue(nVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNumberNotNeg(nVal))
			{
				return;
			}

			this.m_nKWValue = nVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWValue))
			{
				this.meterCreateValueImpl();
			}

			this.m_kWValue.setKWValue(this.m_nKWValue);
		};

		return meter;

	}
);
