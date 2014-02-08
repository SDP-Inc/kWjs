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
		"../../value/colSpan/obj",
		"../../value/headers/obj",
		"../../value/rowSpan/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		colSpan,
		headers,
		rowSpan,
		base,
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
		}

		td.prototype = new base();
		td.prototype.constructor = td;
		td.constructor = base.prototype.constructor;

		td.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		td.prototype.init =
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

		td.prototype.getKWColSpan =
			function()
		{
			return this.m_kWColSpan;
		};
	
		td.prototype.getKWHeaders =
			function()
		{
			return this.m_kWHeaders;
		};
	
		td.prototype.getKWRowSpan =
			function()
		{
			return this.m_kWRowSpan;
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
	
		td.prototype.baseCreateOR =
			function()
		{
			this.tdCreate();
		};

		td.prototype.baseDeleteOR =
			function()
			{
				this.tdDelete();
			};

		td.prototype.baseInitOR =
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
			
			this.tdCreateColsSpan();
			this.tdCreateHeaders();
			this.tdCreateRowSpan();
		};
		
		td.prototype.tdCreateColsSpan = 
			function tdCreateColsSpan() 
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
		
		td.prototype.tdCreateHeaders = 
			function tdCreateHeaders() 
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
		
		td.prototype.tdCreateRowSpan = 
			function tdCreateRowSpan() 
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
		
		return td;
	}
);
