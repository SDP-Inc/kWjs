/**********************************************************************
 *
 * area/obj.js
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
		"../../value/alt/obj",
		"../../value/coords/obj",
		"../../value/hRef/obj",
		"../../value/hRefLang/obj",
		"../../value/hRefRaw/obj",
		"../../value/media/obj",
		"../../value/rel/obj",
		"../../value/shape/obj",
		"../../value/target/obj",
		"../../value/type/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		alt,
		coords,
		hRef,
		hRefLang,
		hRefRaw,
		media,
		rel,
		shape,
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

		function area()
		{
			//console.log("area::constructor");
			
			this.m_kWAlt		= null;
			this.m_kWCoords	    = null;
			this.m_kWHRef		= null;
			this.m_kWHRefLang   = null;
			this.m_kWHRefRaw	= null;
			this.m_kWMedia	    = null;
			this.m_kWRel		= null;
			this.m_kWShape	    = null;
			this.m_kWTarget	    = null;
			this.m_kWType		= null;
		}

		area.prototype = new base();
		area.prototype.constructor = area;
		area.constructor = base.prototype.constructor;

		area.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		area.prototype.init = 
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

		area.prototype.getKWAlt =
			function()
		{
			return this.m_kWAlt;
		};

		area.prototype.getKWCoords =
			function()
		{
			return this.m_kWCoords;
		};

		area.prototype.getKWHRef =
			function()
		{
			return this.m_kWHRef;
		};

		area.prototype.getKWHRefLang =
			function()
		{
			return this.m_kWHRefLang;
		};

		area.prototype.getKWHRefRaw =
			function()
		{
			return this.m_kWHRefRaw;
		};

		area.prototype.getKWMedia =
			function()
		{
			return this.m_kWMedia;
		};

		area.prototype.getKWRel =
			function()
		{
			return this.m_kWRel;
		};

		area.prototype.getKWShape =
			function()
		{
			return this.m_kWShape;
		};

		area.prototype.getKWTarget =
			function()
		{
			return this.m_kWTarget;
		};

		area.prototype.getKWType =
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
	
		area.prototype.baseCreateOR =
			function()
		{
			this.areaCreate();
		};

		area.prototype.baseDeleteOR =
			function()
			{
				this.areaDelete();
			};

		area.prototype.baseInitOR =
			function()
		{
			this.areaInit();
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

		area.prototype.areaCreate = 
			function areaCreate() 
		{
			//console.log(this.kWLogCalled());
			this.areaCreateAlt();
			this.areaCreateCoords();
			this.areaCreateHRef();
			this.areaCreateHRefLang();
			this.areaCreateHRefRaw();
			this.areaCreateMedia();
			this.areaCreateRel();
			this.areaCreateShape();
			this.areaCreateTarget();
			this.areaCreateType();
		};
		
		area.prototype.areaCreateAlt = 
			function areaCreateAlt() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWAlt))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWAlt = new alt();
			
			this.m_kWAlt.setKWView(this);
			this.m_kWAlt.setKWIDParent(this.m_sKWID);
			
			this.m_kWAlt.check();
			this.m_kWAlt.init();

			this.kWAddValue(this.m_kWAlt);
		};
		
		area.prototype.areaCreateCoords = 
			function areaCreateCoords() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWCoords))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWCoords = new coords();
			
			this.m_kWCoords.setKWView(this);
			this.m_kWCoords.setKWIDParent(this.m_sKWID);
			
			this.m_kWCoords.check();
			this.m_kWCoords.init();

			this.kWAddValue(this.m_kWCoords);
		};
		
		area.prototype.areaCreateHRef = 
			function areaCreateHRef() 
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
		
		area.prototype.areaCreateHRefLang = 
			function areaCreateHRefLang() 
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
		
		area.prototype.areaCreateHRefRaw = 
			function areaCreateHRefRaw() 
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
		
		area.prototype.areaCreateMedia = 
			function areaCreateMedia() 
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
		
		area.prototype.areaCreateRel = 
			function areaCreateRel() 
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
		
		area.prototype.areaCreateShape = 
			function areaCreateShape() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWShape))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWShape = new shape();
			
			this.m_kWShape.setKWView(this);
			this.m_kWShape.setKWIDParent(this.m_sKWID);
			
			this.m_kWShape.check();
			this.m_kWShape.init();

			this.kWAddValue(this.m_kWShape);
		};
		
		area.prototype.areaCreateTarget = 
			function areaCreateTarget() 
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
		
		area.prototype.areaCreateType = 
			function areaCreateType() 
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

		area.prototype.areaDelete =
			function areaDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWAlt		= null;
			this.m_kWCoords	    = null;
			this.m_kWHRef		= null;
			this.m_kWHRefLang   = null;
			this.m_kWHRefRaw	= null;
			this.m_kWMedia	    = null;
			this.m_kWRel		= null;
			this.m_kWShape	    = null;
			this.m_kWTarget	    = null;
			this.m_kWType		= null;
		};

		area.prototype.areaInit =
			function areaInit()
		{
			//console.log(this.kWLogCalled());
		};

		return area;

	}
);
