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
		"../../attrs/td/obj",
		"../../view/td/obj",
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

		function td()
		{
			//console.log("td::constructor");

			this.m_sKWTag		= "td";
			
			this.m_sKWHeaders	= null;
			
			this.m_nKWColSpan	= -1;
			this.m_nKWRowSpan	= -1;
		}

		td.prototype = new elmt();
		td.prototype.constructor = td;
		td.constructor = elmt.prototype.constructor;

		td.prototype.check =
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		td.prototype.init =
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

		td.prototype.elmtCreateAttrsOR =
			function()
		{
			return this.tdCreateAttrs(); 
		};
		
		td.prototype.elmtCreateViewOR =
			function()
		{
			return this.tdCreateView();
		};
		
		td.prototype.elmtInitOR =
			function()
		{
			this.tdInit();
		};
		
		td.prototype.elmtRetrieveOR = 
			function()
		{
			this.tdRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		td.prototype.tdInitOR = 
			function tdInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		td.prototype.tdCreateAttrs = 
			function tdCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWColSpan(this.m_nKWColSpan);
			theAttrs.setKWHeaders(this.m_sKWHeaders);
			theAttrs.setKWRowSpan(this.m_nKWRowSpan);
			
			return theAttrs;
		};

		td.prototype.tdCreateView = 
			function tdCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		td.prototype.tdInit = 
			function tdInit()
		{
			//console.log(this.kWLogCalled());
			this.tdInitOR();
		};

		td.prototype.tdRetrieve = 
			function tdRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.tdRetrieveColSpan();
			this.tdRetrieveHeaders();
			this.tdRetrieveRowSpan();
		};
		
		td.prototype.tdRetrieveColSpan = 
			function tdRetrieveColSpan()
		{
			var value	= null;
			
			var nVal	= -1;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberNotNeg(this.m_nKWColSpan))
			{
				console.error(this.logDuplicated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWColSpan();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			nVal = value.getKWValue();
			if (validate.isNumberNotNeg(nVal))
			{
				this.m_nKWColSpan = nVal;
				//console.debug(this.kWLogDisplay("m_nKWColSpan", this.m_nKWColSpan));
			}
		};
		
		td.prototype.tdRetrieveHeaders = 
			function tdRetrieveHeaders()
		{
			var value	= null;
			
			var nVal	= -1;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWHeaders))
			{
				console.error(this.logDuplicated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWHeaders();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWHeaders = value.getKWValue();
			if (validate.isString(this.m_sKWHeaders))
			{
				//console.debug(this.kWLogDisplay("m_sKWHeaders", this.m_sKWHeaders));
			}
		};
		
		td.prototype.tdRetrieveRowSpan = 
			function tdRetrieveRowSpan()
		{
			var value	= null;
			
			var nVal	= -1;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberNotNeg(this.m_nKWRowSpan))
			{
				console.error(this.logDuplicated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWRowSpan();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			nVal = value.getKWValue();
			if (validate.isNumberNotNeg(nVal))
			{
				this.m_nKWRowSpan = nVal;
				//console.debug(this.kWLogDisplay("m_nKWRowSpan", this.m_nKWRowSpan));
			}
		};
		
		return td;
		
	}
);
