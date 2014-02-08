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
		"../../attr/border/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		border,
		html,
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
			
			this.m_kWBorder	    = null;
			
			this.m_nKWBorder	= -1;
		}

		table.prototype = new html();
		table.prototype.constructor = table;
		table.constructor = html.prototype.constructor;

		table.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		table.prototype.init =
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

		table.prototype.setKWBorder =
			function(nVal)
		{
			this.tableSetBorder(nVal);
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
	
		table.prototype.htmlCreateOR = 
			function()
		{
			this.tableCreate();
		};
		
		table.prototype.htmlDeleteOR =
			function()
		{
			this.tableDelete();
		};

		table.prototype.htmlInitOR =
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
			var value   = null;
			
			var nValue  = -1;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWBorder))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWBorder();
			if (validate.isNotNull(value))
			{
				nValue = value.getKWValue();
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				nValue = this.m_nKWBorder;
			}

			if (!validate.isString(nValue))
			{
				return;
			}
			
			this.tableCreateBorderImpl();
			
			this.m_kWBorder.setKWValue(sValue);
		};

		table.prototype.tableCreateBorderImpl =
			function tableCreateBorderImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWBorder))
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

			this.m_kWBorder = new role();

			this.m_kWBorder.setKWIDParent(this.m_sKWID);
			this.m_kWBorder.setKWDom(this.m_kWDom);

			this.m_kWBorder.check();
			this.m_kWBorder.init();

			this.kWAddAttr(this.m_kWBorder);
		};

		table.prototype.tableDelete =
			function tableDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWBorder = null;
		};

		table.prototype.tableInit =
			function tableInit()
		{
			//console.log(this.kWLogCalled());
		};

		table.prototype.tableSetBorder =
			function tableSetBorder(nVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNumberNotNeg(nVal))
			{
				return;
			}

			this.m_nKWBorder = nVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWBorder))
			{
				this.tableCreateBorderImpl();
			}

			this.m_kWBorder.setKWValue(this.m_nKWBorder);
		};

		return table;

	}
);
