/**********************************************************************
 *
 * track/obj.js
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
		"../../attr/default/obj",
		"../../attr/kind/obj",
		"../../attr/label/obj",
		"../../attr/src/obj",
		"../../attr/srcLang/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		default_,
		kind,
		label,
		src,
		srcLang,
		html,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function track()
		{
			//console.log("track::constructor");
			
			this.m_kWDefault	= null;
			this.m_kWKind		= null;
			this.m_kWLabel		= null;
			this.m_kWSrc		= null;
			this.m_kWSrcLang	= null;
			
			this.m_sKWKind		= null;
			this.m_sKWLabel		= null;
			this.m_sKWSrc		= null;
			this.m_sKWSrcLang	= null;
			
			this.m_bKWDefault	= false;
		}

		track.prototype = new html();
		track.prototype.constructor = track;
		track.constructor = html.prototype.constructor;

		track.prototype.check =
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		track.prototype.init =
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

		track.prototype.setKWDefault =
			function(bVal)
		{
			this.trackSetDefault(bVal);
		};

		track.prototype.setKWKind =
			function(sVal)
		{
			this.trackSetKind(sVal);
		};

		track.prototype.setKWLabel =
			function(sVal)
		{
			this.trackSetLabel(sVal);
		};

		track.prototype.setKWSrc =
			function(sVal)
		{
			this.trackSetSrc(sVal);
		};

		track.prototype.setKWSrcLang =
			function(sVal)
		{
			this.trackSetSrcLang(sVal);
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
	
		track.prototype.htmlCreateOR = 
			function()
		{
			this.trackCreate();
		};
		
		track.prototype.htmlDeleteOR =
			function()
		{
			this.trackDelete();
		};

		track.prototype.htmlInitOR =
			function()
		{
			this.trackInit();
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

		track.prototype.trackCreate = 
			function trackCreate()
		{
			//console.log(this.kWLogCalled());
			
			this.trackCreateDefault();
			this.trackCreateKind();
			this.trackCreateLabel();
			this.trackCreateSrc();
			this.trackCreateSrcLang();
		};
		
		track.prototype.trackCreateDefault =
			function trackCreateDefault()
		{
			var value   = null;

			var bValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWDefault))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWDefault();
			if (validate.isNotNull(value))
			{
				bValue = value.getKWValue();
			}

			if (!validate.isBool(bValue))
			{
				bValue = this.m_sKWDefault;
			}

			if (!validate.isBool(bValue))
			{
				return;
			}

			this.trackCreateDefaultImpl();

			this.m_kWDefault.setKWValue(bValue);
		};

		track.prototype.trackCreateDefaultImpl =
			function trackCreateDefaultImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWDefault))
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

			this.m_kWDefault = new default_();

			this.m_kWDefault.setKWIDParent(this.m_sKWID);
			this.m_kWDefault.setKWDom(this.m_kWDom);

			this.m_kWDefault.check();
			this.m_kWDefault.init();

			this.kWAddAttr(this.m_kWDefault);
		};

		track.prototype.trackCreateKind =
			function trackCreateKind()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWKind))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWKind();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWKind;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.trackCreateKindImpl();

			this.m_kWKind.setKWValue(sValue);
		};

		track.prototype.trackCreateKindImpl =
			function trackCreateKindImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWKind))
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

			this.m_kWKind = new kind();

			this.m_kWKind.setKWIDParent(this.m_sKWID);
			this.m_kWKind.setKWDom(this.m_kWDom);

			this.m_kWKind.check();
			this.m_kWKind.init();

			this.kWAddAttr(this.m_kWKind);
		};

		track.prototype.trackCreateLabel =
			function trackCreateLabel()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWLabel))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWLabel();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWLabel;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.trackCreateLabelImpl();

			this.m_kWLabel.setKWValue(sValue);
		};

		track.prototype.trackCreateLabelImpl =
			function trackCreateLabelImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWLabel))
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

			this.m_kWLabel = new label();

			this.m_kWLabel.setKWIDParent(this.m_sKWID);
			this.m_kWLabel.setKWDom(this.m_kWDom);

			this.m_kWLabel.check();
			this.m_kWLabel.init();

			this.kWAddAttr(this.m_kWLabel);
		};

		track.prototype.trackCreateSrc =
			function trackCreateSrc()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWSrc))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWSrc();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWSrc;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.trackCreateSrcImpl();

			this.m_kWSrc.setKWValue(sValue);
		};

		track.prototype.trackCreateSrcImpl =
			function trackCreateSrcImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWSrc))
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

			this.m_kWSrc = new src();

			this.m_kWSrc.setKWIDParent(this.m_sKWID);
			this.m_kWSrc.setKWDom(this.m_kWDom);

			this.m_kWSrc.check();
			this.m_kWSrc.init();

			this.kWAddAttr(this.m_kWSrc);
		};

		track.prototype.trackCreateSrcLang =
			function trackCreateSrcLang()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWSrcLang))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWSrcLang();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWSrcLang;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.trackCreateSrcLangImpl();

			this.m_kWSrcLang.setKWValue(sValue);
		};

		track.prototype.trackCreateSrcLangImpl =
			function trackCreateSrcLangImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWSrcLang))
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

			this.m_kWSrcLang = new srcLang();

			this.m_kWSrcLang.setKWIDParent(this.m_sKWID);
			this.m_kWSrcLang.setKWDom(this.m_kWDom);

			this.m_kWSrcLang.check();
			this.m_kWSrcLang.init();

			this.kWAddAttr(this.m_kWSrcLang);
		};

		track.prototype.trackDelete =
			function trackDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWDefault	= null;
			this.m_kWKind		= null;
			this.m_kWLabel		= null;
			this.m_kWSrc		= null;
			this.m_kWSrcLang	= null;
		};

		track.prototype.trackInit =
			function trackInit()
		{
			//console.log(this.kWLogCalled());
		};

		track.prototype.trackSetDefault =
			function trackSetDefault(bVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isBool(bVal))
			{
				return;
			}

			this.m_bKWDefault = bVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWDefault))
			{
				this.trackCreateDefaultImpl();
			}

			this.m_kWDefault.setKWValue(this.m_bKWDefault);
		};

		track.prototype.trackSetKind =
			function trackSetKind(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWKind = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWKind))
			{
				this.trackCreateKindImpl();
			}

			this.m_kWKind.setKWValue(this.m_sKWKind);
		};

		track.prototype.trackSetLabel =
			function trackSetLabel(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWLabel = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWLabel))
			{
				this.trackCreateLabelImpl();
			}

			this.m_kWLabel.setKWValue(this.m_sKWLabel);
		};

		track.prototype.trackSetSrc =
			function trackSetSrc(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWSrc = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWSrc))
			{
				this.trackCreateSrcImpl();
			}

			this.m_kWSrc.setKWValue(this.m_sKWSrc);
		};

		track.prototype.trackSetSrcLang =
			function trackSetSrcLang(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWSrcLang = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWSrcLang))
			{
				this.trackCreateSrcLangImpl();
			}

			this.m_kWSrcLang.setKWValue(this.m_sKWSrcLang);
		};

		return track;

	}
);
