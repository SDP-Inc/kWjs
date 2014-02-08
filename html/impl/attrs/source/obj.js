/**********************************************************************
 *
 * source/obj.js
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
		"../../attr/src/obj",
		"../../attr/type/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		media,
		src,
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

		function source()
		{
			//console.log("source::constructor");
			
			this.m_kWMedia	= null;
			this.m_kWSrc	= null;
			this.m_kWType	= null;
			
			this.m_sKWMedia	= null;
			this.m_sKWSrc	= null;
			this.m_bKWType	= null;
		}

		source.prototype = new html();
		source.prototype.constructor = source;
		source.constructor = html.prototype.constructor;

		source.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		source.prototype.init = 
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

		source.prototype.setKWMedia =
			function(sVal)
		{
			this.sourceSetMedia(sVal);
		};

		source.prototype.setKWSrc =
			function(sVal)
		{
			this.sourceSetSrc(sVal);
		};

		source.prototype.setKWType =
			function(sVal)
		{
			this.sourceSetType(sVal);
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
	
		source.prototype.htmlCreateOR =
			function()
		{
			this.sourceCreate();
		};

		source.prototype.htmlDeleteOR =
			function()
		{
			this.sourceDelete();
		};

		source.prototype.htmlInitOR =
			function()
		{
			this.sourceInit();
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

		source.prototype.sourceCreate = 
			function sourceCreate()
		{
			//console.log(this.kWLogCalled());
			this.sourceCreateMedia();
			this.sourceCreateSrc();
			this.sourceCreateType();
		};
		
		source.prototype.sourceCreateMedia =
			function sourceCreateMedia()
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

			this.sourceCreateMediaImpl();

			this.m_kWMedia.setKWValue(sValue);
		};

		source.prototype.sourceCreateMediaImpl =
			function sourceCreateMediaImpl()
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

		source.prototype.sourceCreateSrc =
			function sourceCreateSrc()
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

			this.sourceCreateSrcImpl();

			this.m_kWSrc.setKWValue(sValue);
		};

		source.prototype.sourceCreateSrcImpl =
			function sourceCreateSrcImpl()
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

		source.prototype.sourceCreateType =
			function sourceCreateType()
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

			this.sourceCreateTypeImpl();

			this.m_kWType.setKWValue(sValue);
		};

		source.prototype.sourceCreateTypeImpl =
			function sourceCreateTypeImpl()
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

		source.prototype.sourceDelete =
			function sourceDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWMedia = null;
			this.m_kWSrc = null;
			this.m_kWType = null;
		};

		source.prototype.sourceInit =
			function sourceInit()
		{
			//console.log(this.kWLogCalled());
		};

		source.prototype.sourceSetMedia =
			function sourceSetMedia(sVal)
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
				this.sourceCreateMediaImpl();
			}

			this.m_kWMedia.setKWValue(this.m_sKWMedia);
		};

		source.prototype.sourceSetSrc =
			function sourceSetSrc(sVal)
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
				this.sourceCreateSrcImpl();
			}

			this.m_kWSrc.setKWValue(this.m_sKWSrc);
		};

		source.prototype.sourceSetType =
			function sourceSetType(sVal)
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
				this.sourceCreateTypeImpl();
			}

			this.m_kWType.setKWValue(this.m_sKWType);
		};

		return source;

	}
);
