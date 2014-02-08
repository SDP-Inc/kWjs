/**********************************************************************
 *
 * progress/obj.js
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
		"../../attr/max/obj",
		"../../attr/valueNumeric/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		max,
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

		function progress()
		{
			//console.log("progress::constructor");

			this.m_kWMax	= null;
			this.m_kWValue	= null;
			
			this.m_nKWMax	= -1;
			this.m_nKWValue	= -1;
		}

		progress.prototype = new html();
		progress.prototype.constructor = progress;
		progress.constructor = html.prototype.constructor;

		progress.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		progress.prototype.init = 
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

		progress.prototype.setKWMax =
			function(nVal)
		{
			this.progressSetMax(nVal);
		};

		progress.prototype.setKWValue =
			function(nVal)
		{
			this.progressSetValue(nVal);
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
	
		progress.prototype.htmlCreateOR = 
			function()
		{
			this.progressCreate();
		};
		
		progress.prototype.htmlDeleteOR =
			function()
		{
			this.progressDelete();
		};

		progress.prototype.htmlInitOR =
			function()
		{
			this.progressInit();
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

		progress.prototype.progressCreate = 
			function progressCreate()
		{
			//console.log(this.kWLogCalled());
			
			this.progressCreateMax();
			this.progressCreateValue();
		};
		
		progress.prototype.progressCreateMax =
			function progressCreateMax()
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
				sValue = value.getKWValue();
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				nValue = this.m_nKWMax;
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				return;
			}

			this.progressCreateMaxImpl();

			this.m_kWMax.setKWValue(nValue);
		};

		progress.prototype.progressCreateMaxImpl =
			function progressCreateMaxImpl()
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

		progress.prototype.progressCreateValue =
			function progressCreateValue()
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
				nValue = this.m_nKWValue;
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				return;
			}

			this.progressCreateValueImpl();

			this.m_kWValue.setKWValue(nValue);
		};

		progress.prototype.progressCreateValueImpl =
			function progressCreateValueImpl()
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

		progress.prototype.progressDelete =
			function progressDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWMax = null;
			this.m_kWValue = null;
		};

		progress.prototype.progressInit =
			function progressInit()
		{
			//console.log(this.kWLogCalled());
		};

		progress.prototype.progressSetMax =
			function progressSetMax(nVal)
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
				this.progressCreateMaxImpl();
			}

			this.m_kWMax.setKWValue(this.m_nKWMax);
		};

		progress.prototype.progressSetValue =
			function progressSetValue(nVal)
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
				this.progressCreateValueImpl();
			}

			this.m_kWValue.setKWValue(this.m_nKWValue);
		};

		return progress;

	}
);
