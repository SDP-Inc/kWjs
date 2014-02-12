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
		"../../attr/hRef/obj",
		"../../attr/target/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		hRef,
		target,
		html,
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
			//console.log("base (attrs)::constructor");
			
			this.m_kWHRef		= null;
			this.m_kWTarget	    = null;
			
			this.m_sKWHRef	    = true;
			this.m_sKWTarget	= true;
		}

		base.prototype = new html();
		base.prototype.constructor = base;
		base.constructor = html.prototype.constructor;

		base.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		base.prototype.init = 
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

		base.prototype.setKWHRef =
			function(sVal)
		{
			this.m_sKWHRef = sVal;
			if (this.m_kWHRef)
			{
				this.m_kWHRef.setKWVal(sVal);
			}
		};
		
		base.prototype.setKWTarget =
			function(sVal)
		{
			this.m_sKWTarget = sVal;
			if (this.m_kWTarget)
			{
				this.m_kWTarget.setKWVal(sVal);
			}
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
	
		base.prototype.htmlCreateOR = 
			function()
		{
			this.baseCreate();
		};
		
		base.prototype.htmlDeleteOR =
			function()
		{
			this.baseDelete();
		};

		base.prototype.htmlInitOR =
			function()
		{
			this.baseInit();
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

		base.prototype.baseCreate = 
			function baseCreate()
		{
			//console.log(this.kWLogCalled());
			this.baseCreateHRef();
			this.baseCreateTarget();
		};
		
		base.prototype.baseCreateHRef =
			function baseCreateHRef()
		{

			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWHRef))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWHRef();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWHRef;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.baseCreateHRefImpl();

			this.m_kWHRef.setKWValue(sValue);
		};

		base.prototype.baseCreateHRefImpl =
			function baseCreateHRefImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWHRef))
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

			this.m_kWHRef = new hRef();

			this.m_kWHRef.setKWIDParent(this.m_sKWID);
			this.m_kWHRef.setKWDom(this.m_kWDom);

			this.m_kWHRef.check();
			this.m_kWHRef.init();

			this.kWAddAttr(this.m_kWHRef);
		};

		base.prototype.baseCreateTarget =
			function baseCreateTarget()
		{

			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWTarget))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWTarget();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWTarget;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.baseCreateTargetImpl();

			this.m_kWTarget.setKWValue(sValue);
		};

		base.prototype.baseCreateTargetImpl =
			function baseCreateTargetImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWTarget))
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

			this.m_kWTarget = new target();

			this.m_kWTarget.setKWIDParent(this.m_sKWID);
			this.m_kWTarget.setKWDom(this.m_kWDom);

			this.m_kWTarget.check();
			this.m_kWTarget.init();

			this.kWAddAttr(this.m_kWTarget);
		};

		base.prototype.baseDelete =
			function baseDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kwTarget = null;
		};

		base.prototype.baseInit =
			function baseInit()
		{
			//console.log(this.kWLogCalled());
		};

		base.prototype.baseSetAutoHRef =
			function baseSetAutoHRef(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWAutoHRef = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWAutoHRef))
			{
				this.kWCreateAutoHRefImpl();
			}

			this.m_kWAutoHRef.setKWValue(this.m_sKWAutoHRef);
		};

		base.prototype.baseSetAutoTarget =
			function baseSetAutoTarget(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWAutoTarget = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWAutoTarget))
			{
				this.kWCreateAutoTargetImpl();
			}

			this.m_kWAutoTarget.setKWValue(this.m_sKWAutoTarget);
		};

		return base;

	}
);
