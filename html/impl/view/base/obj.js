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
		"../../value/hRef/obj",
		"../../value/target/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		hRef,
		target,
		view,
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
			//console.log("base(view)::constructor");
			
			this.m_kWHRef	= null;
			this.m_kWTarget	= null;
		}

		base.prototype = new view();
		base.prototype.constructor = base;
		base.constructor = view.prototype.constructor;

		base.prototype.check =
			function check()
		{
			view.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
		};

		base.prototype.init =
			function init()
		{
			//console.log(this.kWLogCalled());
			view.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		base.prototype.getKWHRef =
			function()
		{
			return this.m_kWHRef;
		};

		base.prototype.getKWTarget =
			function()
		{
			return this.m_kWTarget;
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
	
		base.prototype.baseCreateOR = 
			function()
		{
			this.baseCreate();
		};

		base.prototype.baseDeleteOR =
			function()
		{
			this.baseDelete();
		};

		base.prototype.baseInitOR =
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
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWHRef))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWHRef = new hRef();
			
			this.m_kWHRef.setKWView(this);
			this.m_kWHRef.setKWIDParent(this.m_sKWID);
			
			this.m_kWHRef.check();
			this.m_kWHRef.init();

			this.kWAddValue(this.m_kWHRef);
		};
		
		base.prototype.baseCreateTarget = 
			function baseCreateTarget() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWTarget))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWTarget = new target();
			
			this.m_kWTarget.setKWView(this);
			this.m_kWTarget.setKWIDParent(this.m_sKWID);
			
			this.m_kWTarget.check();
			this.m_kWTarget.init();

			this.kWAddValue(this.m_kWTarget);
		};

		base.prototype.baseDelete =
			function baseDelete()
			{
				//console.log(this.kWLogCalled());

				this.m_kWHRef	= null;
				this.m_kWTarget	= null;
			};

		base.prototype.baseInit =
			function baseInit()
		{
			//console.log(this.kWLogCalled());
		};

		return base;

	}
);
