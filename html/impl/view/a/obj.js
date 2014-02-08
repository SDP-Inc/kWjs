/**********************************************************************
 *
 * a/obj.js
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
		"../../value/hRefLang/obj",
		"../../value/hRefRaw/obj",
		"../../value/isClickHandled/obj",
		"../../value/media/obj",
		"../../value/rel/obj",
		"../../value/target/obj",
		"../../value/type/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		hRef,
		hRefLang,
		hRefRaw,
		isClickHandled,
		media,
		rel,
		target,
		type,
		base,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function a()
		{
			//console.log("a::constructor");
			
			this.m_kWHRef			= null;
			this.m_kWHRefLang		= null;
			this.m_kWHRefRaw		= null;
			this.m_kWIsClickHandled	= null;
			this.m_kWMedia			= null;
			this.m_kWRel			= null;
			this.m_kWTarget			= null;
		}

		a.prototype = new base();
		a.prototype.constructor = a;
		a.constructor = base.prototype.constructor;

		a.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		a.prototype.init = 
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

		a.prototype.getKWHRef =
			function()
		{
			return this.m_kWHRef;
		};

		a.prototype.getKWHRefLang =
			function()
		{
			return this.m_kWHRefLang;
		};

		a.prototype.getKWHRefRaw =
			function()
		{
			return this.m_kWHRefRaw;
		};

		a.prototype.getKWIsClickHandled =
			function()
		{
			return this.m_kWIsClickHandled;
		};

		a.prototype.getKWMedia =
			function()
		{
			return this.m_kWMedia;
		};

		a.prototype.getKWRel =
			function()
		{
			return this.m_kWRel;
		};

		a.prototype.getKWTarget =
			function()
		{
			return this.m_kWTarget;
		};

		a.prototype.getKWType =
			function()
		{
			return this.m_kWType;
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

		a.prototype.baseCreateOR =
			function()
			{
				this.aCreate();
			};

		a.prototype.baseDeleteOR =
			function()
		{
			this.aDelete();
		};

		a.prototype.baseInitOR =
			function()
		{
			this.aInit();
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

		a.prototype.aCreate = 
			function aCreate() 
		{
			//console.log(this.kWLogCalled());
			
			this.aCreateHRef();
			this.aCreateHRefLang();
			this.aCreateHRefRaw();
			this.aCreateIsClickHandled();
			this.aCreateMedia();
			this.aCreateRel();
			this.aCreateTarget();
			this.aCreateType();
		};
		
		a.prototype.aCreateIsClickHandled = 
			function aCreateIsClickHandled() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWIsClickHandled))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWIsClickHandled = new isClickHandled();
			
			this.m_kWIsClickHandled.setKWView(this);
			this.m_kWIsClickHandled.setKWIDParent(this.m_sKWID);
			
			this.m_kWIsClickHandled.check();
			this.m_kWIsClickHandled.init();

			this.kWAddValue(this.m_kWIsClickHandled);
		};
		
		a.prototype.aCreateHRef = 
			function aCreateHRef() 
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
		
		a.prototype.aCreateHRefLang = 
			function aCreateHRefLang() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWHRefLang))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWHRefLang = new hRefLang();
			
			this.m_kWHRefLang.setKWView(this);
			this.m_kWHRefLang.setKWIDParent(this.m_sKWID);
			
			this.m_kWHRefLang.check();
			this.m_kWHRefLang.init();

			this.kWAddValue(this.m_kWHRefLang);
		};
		
		a.prototype.aCreateHRefRaw = 
			function aCreateHRefRaw() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWHRefRaw))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWHRefRaw = new hRefRaw();
			
			this.m_kWHRefRaw.setKWView(this);
			this.m_kWHRefRaw.setKWIDParent(this.m_sKWID);
			
			this.m_kWHRefRaw.check();
			this.m_kWHRefRaw.init();

			this.kWAddValue(this.m_kWHRefRaw);
		};
		
		a.prototype.aCreateMedia = 
			function aCreateMedia() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWMedia))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWMedia = new media();
			
			this.m_kWMedia.setKWView(this);
			this.m_kWMedia.setKWIDParent(this.m_sKWID);
			
			this.m_kWMedia.check();
			this.m_kWMedia.init();

			this.kWAddValue(this.m_kWMedia);
		};
		
		a.prototype.aCreateRel = 
			function aCreateRel() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWRel))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWRel = new rel();
			
			this.m_kWRel.setKWView(this);
			this.m_kWRel.setKWIDParent(this.m_sKWID);
			
			this.m_kWRel.check();
			this.m_kWRel.init();

			this.kWAddValue(this.m_kWRel);
		};
		
		a.prototype.aCreateTarget = 
			function aCreateTarget() 
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
		
		a.prototype.aCreateType = 
			function aCreateType() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWType))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWType = new type();
			
			this.m_kWType.setKWView(this);
			this.m_kWType.setKWIDParent(this.m_sKWID);
			
			this.m_kWType.check();
			this.m_kWType.init();

			this.kWAddValue(this.m_kWType);
		};

		a.prototype.aDelete =
			function aDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWHRef			= null;
			this.m_kWHRefLang		= null;
			this.m_kWHRefRaw		= null;
			this.m_kWIsClickHandled	= null;
			this.m_kWMedia			= null;
			this.m_kWRel			= null;
			this.m_kWTarget			= null;
		};

		a.prototype.aInit =
			function aInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return a;

	}
);
