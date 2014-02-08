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
		"../../attrs/th/obj",
		"../../view/th/obj",
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

		function th()
		{
			//console.log("th::constructor");

			this.m_sKWTag		= "th";
			
			this.m_sKWHeaders	= null;
			this.m_sKWScope	    = null;
			
			this.m_nKWColSpan	= -1;
			this.m_nKWRowSpan	= -1;
		}

		th.prototype = new elmt();
		th.prototype.constructor = th;
		th.constructor = elmt.prototype.constructor;

		th.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		th.prototype.init = 
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

		th.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.thCreateAttrs(); 
		};
		
		th.prototype.elmtCreateViewOR = 
			function()
		{
			return this.thCreateView();
		};
		
		th.prototype.elmtInitOR = 
			function()
		{
			this.thInit();
		};
		
		th.prototype.elmtRetrieveOR = 
			function()
		{
			this.thRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		th.prototype.thInitOR = 
			function thInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		th.prototype.thCreateAttrs = 
			function thCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWColSpan(this.m_nKWColSpan);
			theAttrs.setKWHeaders(this.m_sKWHeaders);
			theAttrs.setKWRowSpan(this.m_nKWRowSpan);
			theAttrs.setKWScope(this.m_sKWScope);
			
			return theAttrs;
		};

		th.prototype.thCreateView = 
			function thCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		th.prototype.thInit = 
			function thInit()
		{
			//console.log(this.kWLogCalled());
			this.thInitOR();
		};

		th.prototype.thRetrieve = 
			function thRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.thRetrieveColSpan();
			this.thRetrieveHeaders();
			this.thRetrieveRowSpan();
			this.thRetrieveScope();
		};
		
		th.prototype.thRetrieveColSpan = 
			function thRetrieveColSpan()
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
		
		th.prototype.thRetrieveHeaders = 
			function thRetrieveHeaders()
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
		
		th.prototype.thRetrieveRowSpan = 
			function thRetrieveRowSpan()
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
		
		th.prototype.thRetrieveScope = 
			function thRetrieveScope()
		{
			var value	= null;
			
			var nVal	= -1;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWScope))
			{
				console.error(this.logDuplicated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWScope();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWScope = value.getKWValue();
			if (validate.isString(this.m_sKWScope))
			{
				//console.debug(this.kWLogDisplay("m_sKWScope", this.m_sKWScope));
			}
		};
		
		return th;
		
	}
);
