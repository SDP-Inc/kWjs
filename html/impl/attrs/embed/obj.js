/**********************************************************************
 *
 * embed/obj.js
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
		"../../attr/height/obj",
		"../../attr/src/obj",
		"../../attr/type/obj",
		"../../attr/width/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		height,
		src,
		type,
		width,
		html,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function embed()
		{
			//console.log("embed::constructor");

			this.m_kWHeight	    = null;
			this.m_kWSrc		= null;
			this.m_kWType		= null;
			this.m_kWWidth	    = null;
			
			this.m_sKWSrc		= null;
			this.m_sKWType	    = null;
			
			this.m_nKWHeight	= -1;
			this.m_nKWWidth	    = -1;
		}

		embed.prototype = new html();
		embed.prototype.constructor = embed;
		embed.constructor = html.prototype.constructor;

		embed.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		embed.prototype.init =
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

		embed.prototype.setKWHeight =
			function(nVal)
		{
			this.embedSetHeight(sVal);
		};

		embed.prototype.setKWSrc =
			function(sVal)
		{
			this.embedSetSrc(sVal);
		};

		embed.prototype.setKWType =
			function(sVal)
		{
			this.embedSetType(sVal);
		};

		embed.prototype.setKWWidth =
			function(nVal)
		{
			this.embedSetWidth(sVal);
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
	
		embed.prototype.htmlCreateOR = function()
		{
			this.embedCreate();
		};

		embed.prototype.htmlDeleteOR =
			function()
		{
			this.embedDelete();
		};

		embed.prototype.htmlInitOR = function()
		{
			this.embedInit();
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

		embed.prototype.embedCreate = 
			function embedCreate()
		{
			//console.log(this.kWLogCalled());
			
			this.embedCreateHeight();
			this.embedCreateSrc();
			this.embedCreateType();
			this.embedCreateWidth();
		};
		
		embed.prototype.embedCreateHeight =
			function embedCreateHeight()
		{
			var value   = null;
			
			var nValue  = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWHeight))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWHeight();
			if (validate.isNotNull(value))
			{
				nValue = value.getKWValue();
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				nValue = this.m_nKWHeight;
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				return;
			}
			
			this.embedCreateHeightImpl();
			
			this.m_kWHeight.setKWValue(nValue);
		};

		embed.prototype.embedCreateHeightImpl =
			function embedCreateHeightImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWHeight))
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

			this.m_kWHeight = new height();

			this.m_kWHeight.setKWIDParent(this.m_sKWID);
			this.m_kWHeight.setKWDom(this.m_kWDom);

			this.m_kWHeight.check();
			this.m_kWHeight.init();

			this.kWAddAttr(this.m_kWHeight);
		};

		embed.prototype.embedCreateSrc =
			function embedCreateSrc()
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
			
			this.embedCreateSrcImpl();
			
			this.m_kWSrc.setKWValue(sValue);
		};

		embed.prototype.embedCreateSrcImpl =
			function embedCreateSrcImpl()
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

		embed.prototype.embedCreateType =
			function embedCreateType()
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
			
			this.embedCreateTypeImpl();
			
			this.m_kWType.setKWValue(sValue);
		};

		embed.prototype.embedCreateTypeImpl =
			function embedCreateTypeImpl()
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

		embed.prototype.embedCreateWidth =
			function embedCreateWidth()
		{
			var value   = null;
			
			var sValue  = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWWidth))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWWidth();
			if (validate.isNotNull(value))
			{
				nValue = value.getKWValue();
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				nValue = this.m_nKWWidth;
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				return;
			}
			
			this.embedCreateWidthImpl();
			
			this.m_kWWidth.setKWValue(nValue);
		};

		embed.prototype.embedCreateWidthImpl =
			function embedCreateWidthImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWWidth))
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

			this.m_kWWidth = new width();

			this.m_kWWidth.setKWIDParent(this.m_sKWID);
			this.m_kWWidth.setKWDom(this.m_kWDom);

			this.m_kWWidth.check();
			this.m_kWWidth.init();

			this.kWAddAttr(this.m_kWWidth);
		};

		embed.prototype.embedDelete =
			function embedDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWHeight	    = null;
			this.m_kWSrc		= null;
			this.m_kWType		= null;
			this.m_kWWidth	    = null;
		};

		embed.prototype.embedInit = 
			function embedInit()
		{
			//console.log(this.kWLogCalled());
		};

		embed.prototype.embedSetHeight =
			function embedSetHeight(nVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNumberNotNeg(nVal))
			{
				return;
			}

			this.m_nKWHeight = nVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWHeight))
			{
				this.embedCreateHeightImpl();
			}

			this.m_kWHeight.setKWValue(this.m_nKWHeight);
		};

		embed.prototype.embedSetSrc =
			function embedSetSrc(sVal)
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
				this.embedCreateSrcImpl();
			}

			this.m_kWSrc.setKWValue(this.m_sKWSrc);
		};

		embed.prototype.embedSetType =
			function embedSetType(sVal)
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
				this.embedCreateTypeImpl();
			}

			this.m_kWType.setKWValue(this.m_sKWType);
		};

		embed.prototype.embedSetWidth =
			function embedSetWidth(nVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNumberNotNeg(nVal))
			{
				return;
			}

			this.m_nKWWidth = nVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWWidth))
			{
				this.embedCreateWidthImpl();
			}

			this.m_kWWidth.setKWValue(this.m_nKWWidth);
		};

		return embed;

	}
);
