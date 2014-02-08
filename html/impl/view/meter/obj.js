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
		"../../value/form/obj",
		"../../value/high/obj",
		"../../value/low/obj",
		"../../value/max/obj",
		"../../value/min/obj",
		"../../value/optimum/obj",
		"../../value/valueNumeric/obj",
		"../../../base/view/obj",
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
		base,
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
		}

		meter.prototype = new base();
		meter.prototype.constructor = meter;
		meter.constructor = base.prototype.constructor;

		meter.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		meter.prototype.init =
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

		meter.prototype.getKWForm =
			function()
		{
			return this.m_kWForm;
		};

		meter.prototype.getKWHigh =
			function()
		{
			return this.m_kWHigh;
		};

		meter.prototype.getKWLow =
			function()
		{
			return this.m_kWLow;
		};

		meter.prototype.getKWMax =
			function()
		{
			return this.m_kWMax;
		};

		meter.prototype.getKWMin =
			function()
		{
			return this.m_kWMin;
		};

		meter.prototype.getKWOptimum =
			function()
		{
			return this.m_kWOptimum;
		};

		meter.prototype.getKWValue =
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
	
		meter.prototype.baseCreateOR =
			function()
		{
			this.meterCreate();
		};

		meter.prototype.baseDeleteOR =
			function()
			{
				this.meterDelete();
			};

		meter.prototype.baseInitOR =
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
		
		meter.prototype.meterCreateHigh = 
			function meterCreateHigh() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWHigh))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWHigh = new high();
			
			this.m_kWHigh.setKWView(this);
			this.m_kWHigh.setKWIDParent(this.m_sKWID);
			
			this.m_kWHigh.check();
			this.m_kWHigh.init();

			this.kWAddValue(this.m_kWHigh);
		};
		
		meter.prototype.meterCreateLow = 
			function meterCreateLow() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWLow))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWLow = new low();
			
			this.m_kWLow.setKWView(this);
			this.m_kWLow.setKWIDParent(this.m_sKWID);
			
			this.m_kWLow.check();
			this.m_kWLow.init();

			this.kWAddValue(this.m_kWLow);
		};
		
		meter.prototype.meterCreateMax = 
			function meterCreateMax() 
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
		
		meter.prototype.meterCreateMin = 
			function meterCreateMin() 
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
		
		meter.prototype.meterCreateOptimum = 
			function meterCreateOptimum() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWOptimum))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWOptimum = new optimum();
			
			this.m_kWOptimum.setKWView(this);
			this.m_kWOptimum.setKWIDParent(this.m_sKWID);
			
			this.m_kWOptimum.check();
			this.m_kWOptimum.init();

			this.kWAddValue(this.m_kWOptimum);
		};
		
		meter.prototype.meterCreateValue = 
			function meterCreateValue() 
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
		
		return meter;

	}
);
