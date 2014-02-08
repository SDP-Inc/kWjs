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
		"../../value/colSpan/obj",
		"../../value/headers/obj",
		"../../value/rowSpan/obj",
		"../../value/scope/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		colSpan,
		headers,
		rowSpan,
		scope,
		base,
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
		}

		th.prototype = new base();
		th.prototype.constructor = th;
		th.constructor = base.prototype.constructor;

		th.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		th.prototype.init =
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

		th.prototype.getKWColSpan =
			function()
		{
			return this.m_kWColSpan;
		};
	
		th.prototype.getKWHeaders =
			function()
		{
			return this.m_kWHeaders;
		};
	
		th.prototype.getKWRowSpan =
			function()
		{
			return this.m_kWRowSpan;
		};
	
		th.prototype.getKWScope =
			function()
		{
			return this.m_kWScope;
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
	
		th.prototype.baseCreateOR =
			function()
		{
			this.thCreate();
		};

		th.prototype.baseDeleteOR =
			function()
			{
				this.thDelete();
			};

		th.prototype.baseInitOR =
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
			
			this.thCreateColsSpan();
			this.thCreateHeaders();
			this.thCreateRowSpan();
			this.thCreateScope();
		};
		
		th.prototype.thCreateColsSpan = 
			function thCreateColsSpan() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWColSpan))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWColSpan = new colSpan();
			
			this.m_kWColSpan.setKWView(this);
			this.m_kWColSpan.setKWIDParent(this.m_sKWID);
			
			this.m_kWColSpan.check();
			this.m_kWColSpan.init();

			this.kWAddValue(this.m_kWColSpan);
		};
		
		th.prototype.thCreateHeaders = 
			function thCreateHeaders() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWHeaders))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWHeaders = new headers();
			
			this.m_kWHeaders.setKWView(this);
			this.m_kWHeaders.setKWIDParent(this.m_sKWID);
			
			this.m_kWHeaders.check();
			this.m_kWHeaders.init();

			this.kWAddValue(this.m_kWHeaders);
		};
		
		th.prototype.thCreateRowSpan = 
			function thCreateRowSpan() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWRowSpan))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWRowSpan = new rowSpan();
			
			this.m_kWRowSpan.setKWView(this);
			this.m_kWRowSpan.setKWIDParent(this.m_sKWID);
			
			this.m_kWRowSpan.check();
			this.m_kWRowSpan.init();

			this.kWAddValue(this.m_kWRowSpan);
		};
		
		th.prototype.thCreateScope = 
			function thCreateScope() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWScope))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWScope = new scope();
			
			this.m_kWScope.setKWView(this);
			this.m_kWScope.setKWIDParent(this.m_sKWID);
			
			this.m_kWScope.check();
			this.m_kWScope.init();

			this.kWAddValue(this.m_kWScope);
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
		
		return th;
	}
);
