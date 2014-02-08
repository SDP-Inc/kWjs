/**********************************************************************
 *
 * base_/obj.js
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
		base,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function base_()
		{
			//console.log("base_::constructor");
			
			this.m_kWHRef	= null;
			this.m_kWTarget	= null;
		}

		base_.prototype = new base();
		base_.prototype.constructor = base_;
		base_.constructor = base.prototype.constructor;

		base_.prototype.check =
			function check()
		{
			base.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
		};

		base_.prototype.init =
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

		base_.prototype.getKWHRef =
			function()
		{
			return this.m_kWHRef;
		};

		base_.prototype.getKWTarget =
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
	
		base_.prototype.baseCreateOR = 
			function()
		{
			this.base_Create();
		};

		base_.prototype.baseDeleteOR =
			function()
			{
				this.base_Delete();
			};

		base_.prototype.baseInitOR =
			function()
		{
			this.base_Init();
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

		base_.prototype.base_Create = 
			function base_Create() 
		{
			//console.log(this.kWLogCalled());
			this.base_CreateHRef();
			this.base_CreateTarget();
		};
		
		base_.prototype.base_CreateHRef = 
			function base_CreateHRef() 
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
		
		base_.prototype.base_CreateTarget = 
			function base_CreateTarget() 
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

			this.kWAddValue(this.m_kwIsClickHandled);
		};

		base_.prototype.base_Delete =
			function base_Delete()
			{
				//console.log(this.kWLogCalled());

				this.m_kWHRef	= null;
				this.m_kWTarget	= null;
			};

		base_.prototype.base_Init =
			function base_Init()
		{
			//console.log(this.kWLogCalled());
		};

		return base;

	}
);
