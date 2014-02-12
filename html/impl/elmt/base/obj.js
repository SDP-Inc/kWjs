/**********************************************************************
 *
 * base/obj.js
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
		"../../attrs/base/obj",
		"../../view/base/obj",
		"../../../base/elmt/obj",
		"kWStat/validate"
	], 
	function
	(
		attrs,
		view,
		elmt,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function base()
		{
			//console.log("base(elmt)::constructor");

			this.m_sKWTag		= "base";
			
			this.m_sKWHRef	    = null;
			this.m_sKWTarget	= null;
		}

		base.prototype = new elmt();
		base.prototype.constructor = base;
		base.constructor = elmt.prototype.constructor;

		base.prototype.check =
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		base.prototype.init =
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
	
		base.prototype.elmtCreateAttrsOR =
			function()
		{
			return this.baseCreateAttrs(); 
		};
		
		base.prototype.elmtCreateViewOR =
			function()
		{
			return this.baseCreateView();
		};
		
		base.prototype.elmtInitOR =
			function()
		{
			this.baseInit();
		};
		
		base.prototype.elmtRetrieveOR =
			function()
		{
			this.baseRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		base.prototype.baseInitOR =
			function baseInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		base.prototype.baseCreateAttrs =
			function baseCreateAttrs()
		{
			theAttrs = null;
			
			//console.log(this.kWLogCalled());
			theAttrs = new attrs();
			
			theAttrs.setKWHRef(this.m_sKWHRef);
			theAttrs.setKWTarget(this.m_sKWTarget);
			
			return theAttrs;
		};

		base.prototype.baseCreateView =
			function baseCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		base.prototype.baseInit =
			function baseInit()
		{
			//console.log(this.kWLogCalled());
			this.baseInitOR();
		};

		base.prototype.baseRetrieve =
			function baseRetrieve()
		{
			//console.log(this.kWLogCalled());
			this.baseRetrieveHRef();
			this.baseRetrieveTarget();
		};

		base.prototype.baseRetrieveHRef =
			function baseRetrieveHRef()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWHRef();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWHRef = value.getKWValue();
			if (validate.isString(this.m_sKWHRef))
			{
				//console.debug(this.kWLogDisplay("m_sKWHRef", this.m_sKWHRef));
			}
		};
		
		base.prototype.baseRetrieveTarget =
			function baseRetrieveTarget()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWTarget();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWTarget = value.getKWValue();
			if (validate.isString(this.m_sKWTarget))
			{
				//console.debug(this.kWLogDisplay("m_sKWTarget", this.m_sKWTarget));
			}
		};
		
		return base;

	}
);
