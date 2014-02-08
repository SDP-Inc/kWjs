/**********************************************************************
 *
 * link/obj.js
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
		"../../value/sizes/obj",
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
		sizes,
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

		function link()
		{
			//console.log("a::constructor");
			
			this.m_kWHRef			= null;
			this.m_kWHRefLang		= null;
			this.m_kWHRefRaw		= null;
			this.m_kWIsClickHandled	= null;
			this.m_kWMedia			= null;
			this.m_kWRel			= null;
			this.m_kWSizes			= null;
			this.m_kWTarget			= null;
			this.m_kWType			= null;
		}

		link.prototype = new base();
		link.prototype.constructor = link;
		link.constructor = base.prototype.constructor;

		link.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		link.prototype.init = 
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

		link.prototype.getKWHRef =
			function()
		{
			return this.m_kWHRef;
		};

		link.prototype.getKWHRefLang =
			function()
		{
			return this.m_kWHRefLang;
		};

		link.prototype.getKWHRefRaw =
			function()
		{
			return this.m_kWHRefRaw;
		};

		link.prototype.getKWIsClickHandled =
			function()
		{
			return this.m_kWIsClickHandled;
		};

		link.prototype.getKWMedia =
			function()
		{
			return this.m_kWMedia;
		};

		link.prototype.getKWRel =
			function()
		{
			return this.m_kWRel;
		};

		link.prototype.getKWSizes =
			function()
		{
			return this.m_kWSizes;
		};

		link.prototype.getKWTarget =
			function()
		{
			return this.m_kWTarget;
		};

		link.prototype.getKWType =
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
	
		link.prototype.baseCreateOR =
			function()
		{
			this.linkCreate();
		};

		link.prototype.baseDeleteOR =
			function()
		{
			this.linkDelete();
		};

		link.prototype.baseInitOR =
			function()
		{
			this.linkInit();
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

		link.prototype.linkCreate = 
			function linkCreate() 
		{
			//console.log(this.kWLogCalled());
			
			this.linkCreateHRef();
			this.linkCreateHRefLang();
			this.linkCreateHRefRaw();
			this.linkCreateIsClickHandled();
			this.linkCreateMedia();
			this.linkCreateRel();
			this.linkCreateSizes();
			this.linkCreateTarget();
			this.linkCreateType();
		};
		
		link.prototype.linkCreateHRef = 
			function linkCreateHRef() 
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
		
		link.prototype.linkCreateHRefLang = 
			function linkCreateHRefLang() 
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
		
		link.prototype.linkCreateHRefRaw = 
			function linkCreateHRefRaw() 
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
		
		link.prototype.linkCreateIsClickHandled = 
			function linkCreateIsClickHandled() 
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
		
		link.prototype.linkCreateMedia = 
			function linkCreateMedia() 
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
		
		link.prototype.linkCreateRel = 
			function linkCreateRel() 
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
		
		link.prototype.linkCreateSizes = 
			function linkCreateSizes() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWSizes))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWSizes = new sizes();
			
			this.m_kWSizes.setKWView(this);
			this.m_kWSizes.setKWIDParent(this.m_sKWID);
			
			this.m_kWSizes.check();
			this.m_kWSizes.init();

			this.kWAddValue(this.m_kWSizes);
		};
		
		link.prototype.linkCreateTarget = 
			function linkCreateTarget() 
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
		
		link.prototype.linkCreateType = 
			function linkCreateType() 
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

		link.prototype.linkDelete =
			function linkDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWHRef			= null;
			this.m_kWHRefLang		= null;
			this.m_kWHRefRaw		= null;
			this.m_kWIsClickHandled	= null;
			this.m_kWMedia			= null;
			this.m_kWRel			= null;
			this.m_kWSizes			= null;
			this.m_kWTarget			= null;
			this.m_kWType			= null;
		};

		link.prototype.linkInit =
			function linkInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return link;

	}
);
