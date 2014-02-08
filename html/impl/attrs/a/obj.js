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
		"../../attr/hRef/obj",
		"../../attr/hRefLang/obj",
		"../../attr/media/obj",
		"../../attr/rel/obj",
		"../../attr/target/obj",
		"../../attr/type/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		hRef,
		hRefLang,
		media,
		rel,
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

		function a()
		{
			//console.log("a::constructor");

			this.m_kWHRef		= null;
			this.m_kWHRefLang	= null;
			this.m_kWMedia		= null;
			this.m_kWRel		= null;
			this.m_kWTarget		= null;
			this.m_kWType		= null;
			
			this.m_sKWHRef		= null;
			this.m_sKWHRefLang	= null;
			this.m_sKWMedia		= null;
			this.m_sKWRel		= null;
			this.m_sKWTarget	= null;
			this.m_sKWType		= null;
		}

		a.prototype = new html();
		a.prototype.constructor = a;
		a.constructor = html.prototype.constructor;

		a.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		a.prototype.init = 
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

		a.prototype.setKWHRef =
			function(sVal)
		{
			this.aSetHRef(sVal);
		};

		a.prototype.setKWHRefLang =
			function(sVal)
		{
			this.aSetHRefLang(sVal);
		};

		a.prototype.setKWMedia =
			function(sVal)
		{
			this.aSetMedia(sVal);
		};

		a.prototype.setKWRel =
			function(sVal)
		{
			this.aSetRel(sVal);
		};

		a.prototype.setKWTarget =
			function(sVal)
		{
			this.aSetTarget(sVal);
		};

		a.prototype.setKWType =
			function(sVal)
		{
			this.aSetType(sVal);
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

		a.prototype.htmlCreateOR =
			function()
		{
			this.aCreate();
		};

		a.prototype.htmlDeleteOR =
			function()
		{
			this.aDelete();
		};

		a.prototype.htmlInitOR =
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
			this.aCreateMedia();
			this.aCreateRel();
			this.aCreateTarget();
			this.aCreateType();
		};

		a.prototype.aCreateHRef =
			function aCreateHRef()
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

			this.aCreateHRefImpl();

			this.m_kWHRef.setKWValue(sValue);
		};

		a.prototype.aCreateHRefImpl =
			function aCreateHRefImpl()
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

		a.prototype.aCreateHRefLang =
			function aCreateHRefLang()
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

			this.aCreateHRefLangImpl();

			this.m_kWHRefLang.setKWValue(sValue);
		};

		a.prototype.aCreateHRefLangImpl =
			function aCreateHRefLangImpl()
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

		a.prototype.aCreateMedia =
			function aCreateMedia()
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

			this.aCreateMediaImpl();

			this.m_kWMedia.setKWValue(sValue);
		};

		a.prototype.aCreateMediaImpl =
			function aCreateMediaImpl()
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

		a.prototype.aCreateRel =
			function aCreateRel()
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

			this.aCreateRelImpl();

			this.m_kWRel.setKWValue(sValue);
		};

		a.prototype.aCreateRelImpl =
			function aCreateRelImpl()
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

		a.prototype.aCreateTarget =
			function aCreateTarget()
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

			this.aCreateTargetImpl();

			this.m_kWTarget.setKWValue(sValue);
		};

		a.prototype.aCreateTargetImpl =
			function aCreateTargetImpl()
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

		a.prototype.aCreateType =
			function aCreateType()
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

			this.aCreateTypeImpl();

			this.m_kWType.setKWValue(sValue);
		};

		a.prototype.aCreateTypeImpl =
			function aCreateTypeImpl()
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

		a.prototype.aDelete =
			function aDelete()
		{
			//console.log("a::constructor");

			this.m_kWHRef		= null;
			this.m_kWHRefLang	= null;
			this.m_kWMedia		= null;
			this.m_kWRel		= null;
			this.m_kWTarget		= null;
			this.m_kWType		= null;
		};

		a.prototype.aInit =
			function aInit()
		{
			//console.log(this.kWLogCalled());
		};

		a.prototype.aSetHRef =
			function aSetHRef(sVal)
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

		a.prototype.aSetHRefLang =
			function aSetHRefLang(sVal)
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

		a.prototype.aSetMedia =
			function aSetMedia(sVal)
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

		a.prototype.aSetRel =
			function aSetRel(sVal)
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

		a.prototype.aSetTarget =
			function aSetTarget(sVal)
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

		a.prototype.aSetType =
			function aSetType(sVal)
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

		return a;

	}
);
