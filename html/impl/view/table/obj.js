/**********************************************************************
 *
 * table/obj.js
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
		"../../value/border/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		border,
		base,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function table()
		{
			//console.log("table::constructor");
			
			this.m_kWBorder	= null;
		}

		table.prototype = new base();
		table.prototype.constructor = table;
		table.constructor = base.prototype.constructor;

		table.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		table.prototype.init = 
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

		table.prototype.getKWBorder =
			function()
		{
			return this.m_kWBorder;
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
	
		table.prototype.baseCreateOR = 
			function()
		{
			this.tableCreate();
		};

		table.prototype.baseDeleteOR =
			function()
			{
				this.tableDelete();
			};

		table.prototype.baseInitOR =
			function()
		{
			this.tableInit();
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

		table.prototype.tableCreate = 
			function tableCreate() 
		{
			//console.log(this.kWLogCalled());
			
			this.tableCreateBorder();
		};
		
		table.prototype.tableCreateBorder = 
			function tableCreateBorder() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWBorder))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWBorder = new border();
			
			this.m_kWBorder.setKWView(this);
			this.m_kWBorder.setKWIDParent(this.m_sKWID);
			
			this.m_kWBorder.check();
			this.m_kWBorder.init();

			this.kWAddValue(this.m_kWBorder);
		};

		table.prototype.tableDelete =
			function tableDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWBorder	= null;
		};

		table.prototype.tableInit =
			function tableInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return table;
	}
);
