/**********************************************************************
 *
 * td/obj.js
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
		"../../attr/colSpan/obj",
		"../../attr/headers/obj",
		"../../attr/rowSpan/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		headers,
		colSpan,
		rowSpan,
		html,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function td()
		{
			//console.log("td::constructor");
			
			this.m_kWColSpan	= null;
			this.m_kWHeaders	= null;
			this.m_kWRowSpan	= null;
			
			this.m_sKWHeaders	= null;

			this.m_nKWColSpan	= -1;
			this.m_nKWRowSpan	= -1;
		}

		td.prototype = new html();
		td.prototype.constructor = td;
		td.constructor = html.prototype.constructor;

		td.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		td.prototype.init = 
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

		td.prototype.setKWColSpan =
			function(nVal)
		{
			this.tdSetColSpan(nVal);
		};

		td.prototype.setKWHeaders =
			function(sVal)
		{
			this.tdSetHeaders(sVal);
		};

		td.prototype.setKWRowSpan =
			function(nVal)
		{
			this.tdSetRowSpan(nVal);
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
	
		td.prototype.htmlCreateOR = 
			function()
		{
			this.tdCreate();
		};

		td.prototype.htmlDeleteOR =
			function()
		{
			this.tdDelete();
		};

		td.prototype.htmlInitOR =
			function()
		{
			this.tdInit();
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

		td.prototype.tdCreate = 
			function tdCreate()
		{
			//console.log(this.kWLogCalled());
			this.tdCreateColSpan();
			this.tdCreateHeaders();
			this.tdCreateRowSpan();
		};

		td.prototype.tdCreateColSpan =
			function tdCreateColSpan()
		{
			var value   = null;

			var nValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWColSpan))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWColSpan();
			if (validate.isNotNull(value))
			{
				nValue = value.getKWValue();
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				nValue = this.m_nKWColSpan;
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				return;
			}

			this.tdCreateColSpanImpl();

			this.m_kWColSpan.setKWValue(nValue);
		};

		td.prototype.tdCreateColSpanImpl =
			function tdCreateColSpanImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWColSpan))
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

			this.m_kWColSpan = new colSpan();

			this.m_kWColSpan.setKWIDParent(this.m_sKWID);
			this.m_kWColSpan.setKWDom(this.m_kWDom);

			this.m_kWColSpan.check();
			this.m_kWColSpan.init();

			this.kWAddAttr(this.m_kWColSpan);
		};

		td.prototype.tdCreateHeaders =
			function tdCreateHeaders()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWHeaders))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWHeaders();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWHeaders;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.tdCreateHeadersImpl();

			this.m_kWHeaders.setKWValue(sValue);
		};

		td.prototype.tdCreateHeadersImpl =
			function tdCreateHeadersImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWHeaders))
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

			this.m_kWHeaders = new headers();

			this.m_kWHeaders.setKWIDParent(this.m_sKWID);
			this.m_kWHeaders.setKWDom(this.m_kWDom);

			this.m_kWHeaders.check();
			this.m_kWHeaders.init();

			this.kWAddAttr(this.m_kWHeaders);
		};

		td.prototype.tdCreateRowSpan =
			function tdCreateRowSpan()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWRowSpan))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWRowSpan();
			if (validate.isNotNull(value))
			{
				nValue = value.getKWValue();
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				nValue = this.m_nKWRowSpan;
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				return;
			}

			this.tdCreateRowSpanImpl();

			this.m_kWRowSpan.setKWValue(nValue);
		};

		td.prototype.tdCreateRowSpanImpl =
			function tdCreateRowSpanImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWRowSpan))
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

			this.m_kWRowSpan = new rowSpan();

			this.m_kWRowSpan.setKWIDParent(this.m_sKWID);
			this.m_kWRowSpan.setKWDom(this.m_kWDom);

			this.m_kWRowSpan.check();
			this.m_kWRowSpan.init();

			this.kWAddAttr(this.m_kWRowSpan);
		};

		td.prototype.tdDelete =
			function tdDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWColSpan	= null;
			this.m_kWHeaders	= null;
			this.m_kWRowSpan	= null;
		};

		td.prototype.tdInit =
			function tdInit()
		{
			//console.log(this.kWLogCalled());
		};

		td.prototype.tdSetColSpan =
			function tdSetColSpan(nVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNumberNotNeg(nVal))
			{
				return;
			}

			this.m_nKWColSpan = nVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWColSpan))
			{
				this.tdCreateColSpanImpl();
			}

			this.m_kWColSpan.setKWValue(this.m_nKWColSpan);
		};

		td.prototype.tdSetHeaders =
			function tdSetHeaders(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWHeaders = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWHeaders))
			{
				this.tdCreateHeadersImpl();
			}

			this.m_kWHeaders.setKWValue(this.m_sKWHeaders);
		};

		td.prototype.tdSetRowSpan =
			function tdSetRowSpan(nVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNumberNotNeg(nVal))
			{
				return;
			}

			this.m_nKWRowSpan = nVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWRowSpan))
			{
				this.tdCreateRowSpanImpl();
			}

			this.m_kWRowSpan.setKWValue(this.m_nKWRowSpan);
		};

		return td;

	}
);
