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
		"../../attr/alt/obj",
		"../../attr/coords/obj",
		"../../attr/hRef/obj",
		"../../attr/hRefLang/obj",
		"../../attr/media/obj",
		"../../attr/rel/obj",
		"../../attr/shape/obj",
		"../../attr/target/obj",
		"../../attr/type/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		alt,
		coords,
		hRef,
		hRefLang,
		media,
		rel,
		shape,
		target,
		type,
		html,
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
			//console.log("a::constructor");

			this.m_kWAlt		= null;
			this.m_kWCoords		= null;
			this.m_kWHRef		= null;
			this.m_kWHRefLang	= null;
			this.m_kWMedia		= null;
			this.m_kWRel		= null;
			this.m_kWShape		= null;
			this.m_kWTarget		= null;
			this.m_kWType		= null;
			
			this.m_sKWAlt		= null;
			this.m_sKWCoords	= null;
			this.m_sKWHRef		= null;
			this.m_sKWHRefLang	= null;
			this.m_sKWMedia		= null;
			this.m_sKWRel		= null;
			this.m_sKWShape		= null;
			this.m_sKWTarget	= null;
			this.m_sKWType		= null;
		}

		area.prototype = new html();
		area.prototype.constructor = area;
		area.constructor = html.prototype.constructor;

		area.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		area.prototype.init = 
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

		area.prototype.setKWAlt =
			function(sVal)
		{
			this.areaSetAlt(sVal);
		};

		area.prototype.setKWCoords =
			function(sVal)
		{
			this.areaSetCoords(sVal);
		};

		area.prototype.setKWHRef =
			function(sVal)
		{
			this.areaSetHRef(sVal);
		};

		area.prototype.setKWHRefLang =
			function(sVal)
		{
			this.areaSetHRefLang(sVal);
		};

		area.prototype.setKWMedia =
			function(sVal)
		{
			this.areaSetMedia(sVal);
		};

		area.prototype.setKWRel =
			function(sVal)
		{
			this.areaSetRel(sVal);
		};

		area.prototype.setKWShape =
			function(sVal)
		{
			this.areaSetShape(sVal);
		};

		area.prototype.setKWTarget =
			function(sVal)
		{
			this.areaSetTarget(sVal);
		};

		area.prototype.setKWType =
			function(sVal)
		{
			this.areaSetType(sVal);
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
	
		area.prototype.htmlCreateOR = 
			function()
		{
			this.areaCreate();
		};
		
		area.prototype.htmlDeleteOR =
			function()
		{
			this.areaDelete();
		};

		area.prototype.htmlInitOR =
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
			this.areaCreateMedia();
			this.areaCreateRel();
			this.areaCreateShape();
			this.areaCreateTarget();
			this.areaCreateType();
		};

		area.prototype.areaCreateAlt =
			function areaCreateAlt()
		{

			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWAlt))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWAlt();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWAlt;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.areaCreateAltImpl();

			this.m_kWAlt.setKWValue(sValue);
		};

		area.prototype.areaCreateAltImpl =
			function areaCreateAltImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWAlt))
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

			this.m_kWAlt = new alt();

			this.m_kWAlt.setKWIDParent(this.m_sKWID);
			this.m_kWAlt.setKWDom(this.m_kWDom);

			this.m_kWAlt.check();
			this.m_kWAlt.init();

			this.kWAddAttr(this.m_kWAlt);
		};

		area.prototype.areaCreateCoords =
			function areaCreateCoords()
		{

			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWCoords))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWCoords();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWCoords;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.areaCreateCoordsImpl();

			this.m_kWCoords.setKWValue(sValue);
		};

		area.prototype.areaCreateCoordsImpl =
			function areaCreateCoordsImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWCoords))
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

			this.m_kWCoords = new coords();

			this.m_kWCoords.setKWIDParent(this.m_sKWID);
			this.m_kWCoords.setKWDom(this.m_kWDom);

			this.m_kWCoords.check();
			this.m_kWCoords.init();

			this.kWAddAttr(this.m_kWCoords);
		};

		area.prototype.areaCreateHRef =
			function areaCreateHRef()
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

			this.areaCreateHRefImpl();

			this.m_kWHRef.setKWValue(sValue);
		};

		area.prototype.areaCreateHRefImpl =
			function areaCreateHRefImpl()
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

		area.prototype.areaCreateHRefLang =
			function areaCreateHRefLang()
		{

			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWHRefLang))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWHRefLang();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWHRefLang;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.areaCreateHRefLangImpl();

			this.m_kWHRefLang.setKWValue(sValue);
		};

		area.prototype.areaCreateHRefLangImpl =
			function areaCreateHRefLangImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWHRefLang))
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

			this.m_kWHRefLang = new hRefLang();

			this.m_kWHRefLang.setKWIDParent(this.m_sKWID);
			this.m_kWHRefLang.setKWDom(this.m_kWDom);

			this.m_kWHRefLang.check();
			this.m_kWHRefLang.init();

			this.kWAddAttr(this.m_kWHRefLang);
		};

		area.prototype.areaCreateMedia =
			function areaCreateMedia()
		{

			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWMedia))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWMedia();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWMedia;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.areaCreateMediaImpl();

			this.m_kWMedia.setKWValue(sValue);
		};

		area.prototype.areaCreateMediaImpl =
			function areaCreateMediaImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWMedia))
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

			this.m_kWMedia = new media();

			this.m_kWMedia.setKWIDParent(this.m_sKWID);
			this.m_kWMedia.setKWDom(this.m_kWDom);

			this.m_kWMedia.check();
			this.m_kWMedia.init();

			this.kWAddAttr(this.m_kWMedia);
		};

		area.prototype.areaCreateRel =
			function areaCreateRel()
		{

			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWRel))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWRel();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWRel;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.areaCreateRelImpl();

			this.m_kWRel.setKWValue(sValue);
		};

		area.prototype.areaCreateRelImpl =
			function areaCreateRelImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWRel))
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

			this.m_kWRel = new rel();

			this.m_kWRel.setKWIDParent(this.m_sKWID);
			this.m_kWRel.setKWDom(this.m_kWDom);

			this.m_kWRel.check();
			this.m_kWRel.init();

			this.kWAddAttr(this.m_kWRel);
		};

		area.prototype.areaCreateShape =
			function areaCreateShape()
		{

			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWShape))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWShape();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWShape;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.areaCreateShapeImpl();

			this.m_kWShape.setKWValue(sValue);
		};

		area.prototype.areaCreateShapeImpl =
			function areaCreateShapeImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWShape))
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

			this.m_kWShape = new shape();

			this.m_kWShape.setKWIDParent(this.m_sKWID);
			this.m_kWShape.setKWDom(this.m_kWDom);

			this.m_kWShape.check();
			this.m_kWShape.init();

			this.kWAddAttr(this.m_kWShape);
		};

		area.prototype.areaCreateTarget =
			function areaCreateTarget()
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

			this.areaCreateTargetImpl();

			this.m_kWTarget.setKWValue(sValue);
		};

		area.prototype.areaCreateTargetImpl =
			function areaCreateTargetImpl()
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

		area.prototype.areaCreateType =
			function areaCreateType()
		{

			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWType))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWType();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWType;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.areaCreateTypeImpl();

			this.m_kWType.setKWValue(sValue);
		};

		area.prototype.areaCreateTypeImpl =
			function areaCreateTypeImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWType))
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

			this.m_kWType = new type();

			this.m_kWType.setKWIDParent(this.m_sKWID);
			this.m_kWType.setKWDom(this.m_kWDom);

			this.m_kWType.check();
			this.m_kWType.init();

			this.kWAddAttr(this.m_kWType);
		};

		area.prototype.areaDelete =
			function areaDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWAlt		= null;
			this.m_kWCoords		= null;
			this.m_kWHRef		= null;
			this.m_kWHRefLang	= null;
			this.m_kWMedia		= null;
			this.m_kWRel		= null;
			this.m_kWShape		= null;
			this.m_kWTarget		= null;
			this.m_kWType		= null;
		};

		area.prototype.areaInit =
			function areaInit()
		{
			//console.log(this.kWLogCalled());
		};

		area.prototype.areaSetAlt =
			function areaSetAlt(sVal)
		{
			console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWAlt = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWAlt))
			{
				this.kWCreateAltImpl();
			}

			this.m_kWAlt.setKWValue(this.m_sKWAlt);
		};

		area.prototype.areaSetCoords =
			function areaSetCoords(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWCoords = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWCoords))
			{
				this.kWCreateCoordsImpl();
			}

			this.m_kWCoords.setKWValue(this.m_sKWCoords);
		};

		area.prototype.areaSetHRef =
			function areaSetHRef(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWHRef = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWHRef))
			{
				this.kWCreateHRefImpl();
			}

			this.m_kWHRef.setKWValue(this.m_sKWHRef);
		};

		area.prototype.areaSetHRefLang =
			function areaSetHRefLang(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWHRefLang = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWHRefLang))
			{
				this.kWCreateHRefLangImpl();
			}

			this.m_kWHRefLang.setKWValue(this.m_sKWHRefLang);
		};

		area.prototype.areaSetMedia =
			function areaSetMedia(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWMedia = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWMedia))
			{
				this.kWCreateMediaImpl();
			}

			this.m_kWMedia.setKWValue(this.m_sKWMedia);
		};

		area.prototype.areaSetRel =
			function areaSetRel(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWRel = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWRel))
			{
				this.kWCreateRelImpl();
			}

			this.m_kWRel.setKWValue(this.m_sKWRel);
		};

		area.prototype.areaSetShape =
			function areaSetShape(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWShape = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWShape))
			{
				this.kWCreateShapeImpl();
			}

			this.m_kWShape.setKWValue(this.m_sKWShape);
		};

		area.prototype.areaSetTarget =
			function areaSetTarget(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWTarget = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWTarget))
			{
				this.kWCreateTargetImpl();
			}

			this.m_kWTarget.setKWValue(this.m_sKWTarget);
		};

		area.prototype.areaSetType =
			function areaSetType(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWType = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWType))
			{
				this.kWCreateTypeImpl();
			}

			this.m_kWType.setKWValue(this.m_sKWType);
		};

		return area;

	}
);
