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
		"../../attr/hRef/obj",
		"../../attr/hRefLang/obj",
		"../../attr/media/obj",
		"../../attr/rel/obj",
		"../../attr/sizes/obj",
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
		sizes,
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

		function link()
		{
			//console.log("link::constructor");

			this.m_kWHRef		= null;
			this.m_kWHRefLang	= null;
			this.m_kWMedia		= null;
			this.m_kWRel		= null;
			this.m_kWSizes		= null;
			this.m_kWType		= null;
			
			this.m_sKWHRef		= null;
			this.m_sKWHRefLang	= null;
			this.m_sKWMedia		= null;
			this.m_sKWRel		= null;
			this.m_sKWSizes		= null;
			this.m_sKWType		= null;
		}

		link.prototype = new html();
		link.prototype.constructor = link;
		link.constructor = html.prototype.constructor;

		link.prototype.check =
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		link.prototype.init =
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

		link.prototype.setKWHRef =
			function(sVal)
		{
			this.linkSetHRef(sVal);
		};

		link.prototype.setKWHRefLang =
			function(sVal)
		{
			this.linkSetHRefLang(sVal);
		};

		link.prototype.setKWMedia =
			function(sVal)
		{
			this.linkSetMedia(sVal);
		};

		link.prototype.setKWRel =
			function(sVal)
		{
			this.linkSetRel(sVal);
		};

		link.prototype.setKWSizes =
			function(sVal)
		{
			this.linkSetSizes(sVal);
		};

		link.prototype.setKWType =
			function(sVal)
		{
			this.linkSetType(sVal);
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
	
		link.prototype.htmlCreateOR =
			function()
		{
			this.linkCreate();
		};
		
		link.prototype.htmlDeleteOR =
			function()
		{
			this.linkDelete();
		};
		
		link.prototype.htmlInitOR =
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
			this.linkCreateMedia();
			this.linkCreateRel();
			this.linkCreateSizes();
			this.linkCreateType();
		};

		link.prototype.linkCreateHRef =
			function linkCreateHRef()
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

			this.linkCreateHRefImpl();

			this.m_kWHRef.setKWValue(sValue);
		};

		link.prototype.linkCreateHRefImpl =
			function linkCreateHRefImpl()
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

		link.prototype.linkCreateHRefLang =
			function linkCreateHRefLang()
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

			this.linkCreateHRefLangImpl();

			this.m_kWHRefLang.setKWValue(sValue);
		};

		link.prototype.linkCreateHRefLangImpl =
			function linkCreateHRefLangImpl()
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


		link.prototype.linkCreateMedia =
			function linkCreateMedia()
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

			this.linkCreateMediaImpl();

			this.m_kWMedia.setKWValue(sValue);
		};

		link.prototype.linkCreateMediaImpl =
			function linkCreateMediaImpl()
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

		link.prototype.linkCreateRel =
			function linkCreateRel()
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

			this.linkCreateRelImpl();

			this.m_kWRel.setKWValue(sValue);
		};

		link.prototype.linkCreateRelImpl =
			function linkCreateRelImpl()
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

		link.prototype.linkCreateSizes =
			function linkCreateSizes()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWSizes))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWSizes();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWSizes;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.linkCreateSizesImpl();

			this.m_kWSizes.setKWValue(sValue);
		};

		link.prototype.linkCreateSizesImpl =
			function linkCreateSizesImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWSizes))
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

			this.m_kWSizes = new sizes();

			this.m_kWSizes.setKWIDParent(this.m_sKWID);
			this.m_kWSizes.setKWDom(this.m_kWDom);

			this.m_kWSizes.check();
			this.m_kWSizes.init();

			this.kWAddAttr(this.m_kWSizes);
		};

		link.prototype.linkCreateType =
			function linkCreateType()
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

			this.linkCreateTypeImpl();

			this.m_kWType.setKWValue(sValue);
		};

		link.prototype.linkCreateTypeImpl =
			function linkCreateTypeImpl()
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

		link.prototype.linkDelete =
			function linkDelete()
		{
			//console.log(this.kWLogCalled());
		};
	
		link.prototype.linkInit =
			function linkInit()
		{
			//console.log(this.kWLogCalled());
		};
	
		link.prototype.linkSetHRef =
			function linkSetHRef(sVal)
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
				this.linkCreateHRefImpl();
			}

			this.m_kWHRef.setKWValue(this.m_sKWHRef);
		};

		link.prototype.linkSetHRefLang =
			function linkSetHRefLang(sVal)
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
				this.linkCreateHRefLangImpl();
			}

			this.m_kWHRefLang.setKWValue(this.m_sKWHRefLang);
		};

		link.prototype.linkSetMedia =
			function linkSetMedia(sVal)
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
				this.linkCreateMediaImpl();
			}

			this.m_kWMedia.setKWValue(this.m_sKWMedia);
		};

		link.prototype.linkSetRel =
			function linkSetRel(sVal)
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
				this.linkCreateRelImpl();
			}

			this.m_kWRel.setKWValue(this.m_sKWRel);
		};

		link.prototype.linkSetSizes =
			function linkSetSizes(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWSizes = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWSizes))
			{
				this.linkCreateSizesImpl();
			}

			this.m_kWSizes.setKWValue(this.m_sKWSizes);
		};

		link.prototype.linkSetType =
			function linkSetType(sVal)
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
				this.linkCreateTypeImpl();
			}

			this.m_kWType.setKWValue(this.m_sKWType);
		};

		return link;

	}
);
