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
		"../../attrs/table/obj",
		"../../view/table/obj",
		"../../../base/elmt/obj",
		"kWStat/validate",
		"jquery"
	], 
	function
	(
		attrs,
		view,
		elmt,
		validate,
		$
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

			this.m_sKWTag		= "table";
			
			this.m_nKWBorder	= -1;
		}

		table.prototype = new elmt();
		table.prototype.constructor = table;
		table.constructor = elmt.prototype.constructor;

		table.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		table.prototype.init = 
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

		table.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.tableCreateAttrs(); 
		};
		
		table.prototype.elmtCreateViewOR =
			function()
		{
			return this.tableCreateView();
		};
		
		table.prototype.elmtInitOR =
			function()
		{
			this.tableInit();
		};
		
		table.prototype.elmtRetrieveOR =
			function()
		{
			this.tableRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		table.prototype.tableInitOR = 
			function tableInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		table.prototype.tableCreateAttrs = 
			function tableCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWBorder(this.m_nKWBorder);
			
			return theAttrs;
		};

		table.prototype.tableCreateView = 
			function tableCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		table.prototype.tableInit = 
			function tableInit()
		{
			//console.log(this.kWLogCalled());
			this.tableInitOR();
		};

		table.prototype.tableRetrieve = 
			function tableRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.tableRetrieveBorder();
		};
		
		table.prototype.tableRetrieveBorder = 
			function tableRetrieveBorder()
		{
			var value	= null;
			
			var nVal	= -1;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberNotNeg(this.m_nKWBorder))
			{
				console.error(this.logDuplicated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWBorder();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			nVal = value.getKWValue();
			if (validate.isNumberNotNeg(nVal))
			{
				this.m_nKWBorder = nVal;
				//console.debug(this.kWLogDisplay("m_nKWBorder", this.m_nKWBorder));
			}
		};
		
		return table;
		
	}
);
