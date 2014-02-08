/**********************************************************************
 *
 * col/obj.js
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
		"../../value/span/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		span,
		base,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function col()
		{
			//console.log("col::constructor");
			this.m_kWSpan = null;
		}

		col.prototype = new base();
		col.prototype.constructor = col;
		col.constructor = base.prototype.constructor;

		col.prototype.check =
			function check()
		{
			base.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
		};

		col.prototype.init = 
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

		col.prototype.getKWSpan =
			function()
		{
			return this.m_kWSpan;
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
	
		col.prototype.baseCreateOR = 
			function()
		{
			this.colCreate();
		};

		col.prototype.baseDeleteOR =
			function()
			{
				this.colDelete();
			};

		col.prototype.baseInitOR =
			function()
		{
			this.colInit();
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

		col.prototype.colCreate = 
			function colCreate() 
		{
			//console.log(this.kWLogCalled());
			this.colCreateSpan();
		};
		
		col.prototype.colCreateSpan = 
			function colCreateSpan() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWSpan))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWSpan = new span();
			
			this.m_kWSpan.setKWView(this);
			this.m_kWSpan.setKWIDParent(this.m_sKWID);
			
			this.m_kWSpan.check();
			this.m_kWSpan.init();

			this.kWAddValue(this.m_kWSpan);
		};

		col.prototype.colDelete =
			function colDelete()
			{
				//console.log(this.kWLogCalled());

				this.m_kWSpan = null;
			};

		col.prototype.colInit =
			function colInit()
		{
			//console.log(this.kWLogCalled());
		};

		return col;

	}
);
