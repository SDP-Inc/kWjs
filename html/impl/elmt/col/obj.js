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
		"../../attrs/col/obj",
		"../../view/col/obj",
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

		function col()
		{
			//console.log("col::constructor");
			
			this.m_sKWTag	= "col";
			
			this.m_nKWSpan	= null;
		}

		col.prototype = new elmt();
		col.prototype.constructor = col;
		col.constructor = elmt.prototype.constructor;

		col.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		col.prototype.init = 
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
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		col.prototype.colInitOR = 
			function colInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		col.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.colCreateAttrs(); 
		};
		
		col.prototype.elmtCreateViewOR = 
			function()
		{
			return this.colCreateView();
		};
		
		col.prototype.elmtInitOR = 
			function()
		{
			this.colInit();
		};
		
		col.prototype.elmtRetrieveOR = 
			function()
		{
			this.colRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		col.prototype.colCreateAttrs = 
			function colCreateAttrs()
		{
			theAttrs = null;
			
			//console.log(this.kWLogCalled());
			theAttrs = new attrs();
			
			theAttrs.setKWSpan(this.m_nKWSpan);
			
			return theAttrs;
		};

		col.prototype.colCreateView = 
			function colCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		col.prototype.colInit = 
			function colInit()
		{
			//console.log(this.kWLogCalled());
			this.colInitOR();
		};
		
		col.prototype.colRetrieve = 
			function colRetrieve()
		{
			//console.log(this.kWLogCalled());
			this.colRetrieveSpan();
		};
		
		col.prototype.colRetrieveSpan = 
			function colRetrieveSpan()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberPos(this.m_nKWSpan))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWSpan();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_nKWSpan = value.getKWValue();
			if (validate.isNumberPos(this.m_nKWSpan))
			{
				//console.debug(this.kWLogDisplay("m_nKWSpan", this.m_nKWSpan));
			}
		};
		
		return col;

	}
);
