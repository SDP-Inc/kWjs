/**********************************************************************
 *
 * style/obj.js
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
		"../../attr/media/obj",
		"../../attr/scoped/obj",
		"../../attr/type/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		media,
		scoped,
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

		function style()
		{
			//console.log("style::constructor");
			
			this.m_kWMedia	    = null;
			this.m_kWScoped	    = null;
			this.m_kWType	    = null;
			
			this.m_sKWMedia	    = null;
			this.m_sKWType	    = null;
			
			this.m_bKWScoped	= false;
		}

		style.prototype = new html();
		style.prototype.constructor = style;
		style.constructor = html.prototype.constructor;

		style.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		style.prototype.init = 
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

		style.prototype.setKWMedia =
			function(sVal)
		{
			this.styleSetMedia(sVal);
		};

		style.prototype.setKWScoped =
			function(bVal)
		{
			this.styleSetScoped(bVal);
		};

		style.prototype.setKWType =
			function(sVal)
		{
			this.styleSetType(sVal);
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
	
		style.prototype.htmlCreateOR = 
			function()
		{
			this.styleCreate();
		};
		
		style.prototype.htmlInitOR = 
			function()
		{
			this.styleInit();
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

		style.prototype.styleCreate = 
			function styleCreate()
		{
			//console.log(this.kWLogCalled());
			this.styleCreateMedia();
			this.styleCreateScoped();
			this.styleCreateType();
		};
		
		style.prototype.styleCreateMedia =
			function styleCreateMedia()
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

			this.styleCreateMediaImpl();

			this.m_kWMedia.setKWValue(sValue);
		};

		style.prototype.styleCreateMediaImpl =
			function styleCreateMediaImpl()
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

		style.prototype.styleCreateScoped =
			function styleCreateScoped()
		{
			var value   = null;

			var bValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWScoped))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWScoped();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isBool(bValue))
			{
				bValue = this.m_bKWScoped;
			}

			if (!validate.isBool(bValue))
			{
				return;
			}

			this.styleCreateScopedImpl();

			this.m_kWScoped.setKWValue(bValue);
		};

		style.prototype.styleCreateScopedImpl =
			function styleCreateScopedImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWScoped))
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

			this.m_kWScoped = new scoped();

			this.m_kWScoped.setKWIDParent(this.m_sKWID);
			this.m_kWScoped.setKWDom(this.m_kWDom);

			this.m_kWScoped.check();
			this.m_kWScoped.init();

			this.kWAddAttr(this.m_kWScoped);
		};

		style.prototype.styleCreateType =
			function styleCreateType()
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

			this.styleCreateTypeImpl();

			this.m_kWType.setKWValue(sValue);
		};

		style.prototype.styleCreateTypeImpl =
			function styleCreateTypeImpl()
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

		style.prototype.styleDelete =
			function styleDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWType = null;
		};

		style.prototype.styleInit =
			function styleInit()
		{
			//console.log(this.kWLogCalled());
		};

		style.prototype.styleSetMedia =
			function styleSetMedia(sVal)
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
				this.styleCreateMediaImpl();
			}

			this.m_kWMedia.setKWValue(this.m_sKWMedia);
		};

		style.prototype.styleSetScoped =
			function styleSetScoped(bVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(bVal))
			{
				return;
			}

			this.m_bKWScoped = bVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWScoped))
			{
				this.styleCreateScopedImpl();
			}

			this.m_kWScoped.setKWValue(this.m_bKWScoped);
		};

		style.prototype.styleSetType =
			function styleSetType(sVal)
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
				this.styleCreateTypeImpl();
			}

			this.m_kWType.setKWValue(this.m_sKWType);
		};

		return style;

	}
);
