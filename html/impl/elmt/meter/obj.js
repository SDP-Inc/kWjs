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
		"../../attrs/meter/obj",
		"../../view/meter/obj",
		"../../../base/elmt/obj",
		"kWStat/validate"
	], 
	function
	(
		attrs,
		view,
		elmt,
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
			this.m_sKWTag		= "meter";
			
			this.m_sKWForm	    = null;
			
			this.m_nKWHigh	    = -1;
			this.m_nKWLow		= -1;
			this.m_nKWMax		= -1;
			this.m_nKWMin		= -1;
			this.m_nKWOptimum	= -1;
			this.m_nKWValue	    = -1;
		}

		meter.prototype = new elmt();
		meter.prototype.constructor = meter;
		meter.constructor = elmt.prototype.constructor;

		meter.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		meter.prototype.init = 
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

		meter.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.meterCreateAttrs(); 
		};
		
		meter.prototype.elmtCreateViewOR = 
			function()
		{
			return this.meterCreateView();
		};
		
		meter.prototype.elmtInitOR = 
			function()
		{
			this.meterInit();
		};
		
		meter.prototype.elmtRetrieveOR = 
			function()
		{
			this.meterRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		meter.prototype.meterInitOR = 
			function meterInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		meter.prototype.meterCreateAttrs = 
			function meterCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWForm(this.m_sKWForm);
			theAttrs.setKWHigh(this.m_nKWHigh);
			theAttrs.setKWLow(this.m_nKWLow);
			theAttrs.setKWMax(this.m_nKWMax);
			theAttrs.setKWMin(this.m_nKWMin);
			theAttrs.setKWOptimum(this.m_nKWOptimum);
			theAttrs.setKWValue(this.m_nKWValue);
			
			return theAttrs;
		};

		meter.prototype.meterCreateView = 
			function meterCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		meter.prototype.meterInit = 
			function meterInit()
		{
			//console.log(this.kWLogCalled());
			this.meterInitOR();
		};

		meter.prototype.meterRetrieve = 
			function meterRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.meterRetrieveForm();
			this.meterRetrieveHigh();
			this.meterRetrieveLow();
			this.meterRetrieveMax();
			this.meterRetrieveMin();
			this.meterRetrieveOptimum();
			this.meterRetrieveValue();
		};
	
		meter.prototype.meterRetrieveForm = 
			function meterRetrieveForm()
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
				console.error(this.kWLogErrRetrieve("value", value));
			}
			
			this.m_sKWForm = value.getKWValue();
			if (validate.isString(this.m_sKWForm))
			{
				//console.log(this.kWLogDisplay("m_sImgForm", this.m_sImgForm));
			}
		};
		
		meter.prototype.meterRetrieveHigh = 
			function meterRetrieveHigh()
		{
			var value = null;
			
			var nVal	= null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberPos(this.m_nKWHigh))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWHigh();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value", value));
			}
			
			nVal = value.getKWValue();
			if (validate.isNumberPos(nVal))
			{
				this.m_nKWHigh = nVal;
				//console.debug(this.kWLogDisplay("m_nKWHigh", this.m_nKWHigh));
			}
		};
		
		meter.prototype.meterRetrieveLow = 
			function meterRetrieveLow()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberPos(this.m_nKWLow))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWLow();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value", value));
			}
			
			this.m_nKWLow = value.getKWValue();
			if (validate.isString(this.m_nKWLow))
			{
				//console.debug(this.kWLogDisplay("m_nKWLow", this.m_nKWLow));
			}
		};
		
		meter.prototype.meterRetrieveMax = 
			function meterRetrieveMax()
		{
			var value	= null;
			
			var nVal	= null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberPos(this.m_nKWMax))
			{
				console.error(this.kWLogRepeated());
			}

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
		
		meter.prototype.meterRetrieveMin = 
			function meterRetrieveMin()
		{
			var value	= null;
			
			var nVal	= null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberPos(this.m_nKWMin))
			{
				console.error(this.kWLogRepeated());
			}

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
		
		meter.prototype.meterRetrieveOptimum = 
			function meterRetrieveOptimum()
		{
			var value	= null;
			
			var nVal	= null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberPos(this.m_nKWOptimum))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWOptimum();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			nVal = value.getKWValue();
			if (validate.isNumberPos(nVal))
			{
				this.m_nKWOptimum = nVal;
				//console.debug(this.kWLogDisplay("m_nKWOptimum", this.m_nKWOptimum));
			}
		};
		
		meter.prototype.meterRetrieveValue = 
			function meterRetrieveValue()
		{
			var value	= null;
			
			var nVal	= -1;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberPos(this.m_nKWValue))
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
			
			nVal = value.getKWValue();
			if (validate.isNumberPos(nVal))
			{
				this.m_nKWValue = nVal;
				//console.debug(this.kWLogDisplay("m_nKWValue", this.m_nKWValue));
			}
		};		
		
		return meter;

	}
);
