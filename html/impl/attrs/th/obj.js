/**********************************************************************
 *
 * th/obj.js
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
		"../../attr/scope/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		colSpan,
		headers,
		rowSpan,
		scope,
		html,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function th()
		{
			//console.log("th::constructor");
			
			this.m_kWColSpan	= null;
			this.m_kWHeaders	= null;
			this.m_kWRowSpan	= null;
			this.m_kWScope	    = null;
			
			this.m_sKWHeaders	= null;
			this.m_sKWScope	    = null;

			this.m_nKWColSpan	= -1;
			this.m_nKWRowSpan	= -1;
		}

		th.prototype = new html();
		th.prototype.constructor = th;
		th.constructor = html.prototype.constructor;

		th.prototype.check =
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		th.prototype.init =
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

		th.prototype.setKWColSpan =
			function(nVal)
		{
			this.thSetColSpan(sVal);
		};

		th.prototype.setKWHeaders =
			function(sVal)
		{
			this.thSetHeaders(sVal);
		};

		th.prototype.setKWRowSpan =
			function(nVal)
		{
			this.thSetRowSpan(sVal);
		};

		th.prototype.setKWScope =
			function(sVal)
		{
			this.thSetScope(sVal);
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
	
		th.prototype.htmlCreateOR =
			function()
		{
			this.thCreate();
		};
		
		th.prototype.htmlDeleteOR =
			function()
		{
			this.thDelete();
		};

		th.prototype.htmlInitOR =
			function()
		{
			this.thInit();
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

		th.prototype.thCreate = 
			function thCreate()
		{
			//console.log(this.kWLogCalled());
			this.thCreateColSpan();
			this.thCreateHeaders();
			this.thCreateRowSpan();
			this.thCreateScope();
		};
		
		th.prototype.thCreateColSpan =
			function thCreateColSpan()
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

			this.thCreateColSpanImpl();

			this.m_kWColSpan.setKWValue(nValue);
		};

		th.prototype.thCreateColSpanImpl =
			function thCreateColSpanImpl()
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

		th.prototype.thCreateHeaders =
			function thCreateHeaders()
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

			this.thCreateHeadersImpl();

			this.m_kWHeaders.setKWValue(sValue);
		};

		th.prototype.thCreateHeadersImpl =
			function thCreateHeadersImpl()
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

		th.prototype.thCreateRowSpan =
			function thCreateRowSpan()
		{
			var value   = null;

			var nValue  = null;

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

			this.thCreateRowSpanImpl();

			this.m_kWRowSpan.setKWValue(nValue);
		};

		th.prototype.thCreateRowSpanImpl =
			function thCreateRowSpanImpl()
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

		th.prototype.thCreateScope =
			function thCreateScope()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWScope))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWScope();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWScope;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.thCreateScopeImpl();

			this.m_kWScope.setKWValue(sValue);
		};

		th.prototype.thCreateScopeImpl =
			function thCreateScopeImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWScope))
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

			this.m_kWScope = new scope();

			this.m_kWScope.setKWIDParent(this.m_sKWID);
			this.m_kWScope.setKWDom(this.m_kWDom);

			this.m_kWScope.check();
			this.m_kWScope.init();

			this.kWAddAttr(this.m_kWScope);
		};

		th.prototype.thDelete =
			function thDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWColSpan	= null;
			this.m_kWHeaders	= null;
			this.m_kWRowSpan	= null;
			this.m_kWScope	    = null;
		};

		th.prototype.thInit =
			function thInit()
		{
			//console.log(this.kWLogCalled());
		};

		th.prototype.thSetColSpan =
			function thSetColSpan(nVal)
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
				this.thCreateColSpanImpl();
			}

			this.m_kWColSpan.setKWValue(this.m_nKWColSpan);
		};

		th.prototype.thSetHeaders =
			function thSetHeaders(sVal)
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
				this.thCreateHeadersImpl();
			}

			this.m_kWHeaders.setKWValue(this.m_sKWHeaders);
		};

		th.prototype.thSetRowSpan =
			function thSetRowSpan(nVal)
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
				this.thCreateRowSpanImpl();
			}

			this.m_kWRowSpan.setKWValue(this.m_nKWRowSpan);
		};

		th.prototype.thSetScope =
			function thSetScope(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWScope = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWScope))
			{
				this.thCreateScopeImpl();
			}

			this.m_kWScope.setKWValue(this.m_sKWScope);
		};

		return th;

	}
);
