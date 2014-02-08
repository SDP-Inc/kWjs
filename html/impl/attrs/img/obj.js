/**********************************************************************
 *
 * img/obj.js
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
		"../../attr/crossOrigin/obj",
		"../../attr/height/obj",
		"../../attr/isMap/obj",
		"../../attr/src/obj",
		"../../attr/useMap/obj",
		"../../attr/width/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		crossOrigin,
		height,
		isMap,
		src,
		useMap,
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

		function img()
		{
			//console.log("img::constructor");

			this.m_kWCrossOrigin	= null;
			this.m_kWHeight		    = null;
			this.m_kWIsMap		    = null;
			this.m_kWSrc			= null;
			this.m_kWUseMap		    = null;
			this.m_kWWidth		    = null;
			
			this.m_sKWCrossOrigin	= null;
			this.m_sKWSrc			= null;
			this.m_sKWUseMap		= null;
			
			this.m_bKWIsMap		    = false;
			
			this.m_nKWHeight		= -1;
			this.m_nKWWidth		    = -1;
		}

		img.prototype = new html();
		img.prototype.constructor = img;
		img.constructor = html.prototype.constructor;

		img.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		img.prototype.init = 
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

		img.prototype.setKWCrossOrigin =
			function(sVal)
		{
			this.imgSetCrossOrigin(sVal);
		};

		img.prototype.setKWHeight =
			function(nVal)
		{
			this.imgSetHeight(nVal);
		};

		img.prototype.setKWIsMap =
			function(bVal)
		{
			this.imgSetIsMap(bVal);
		};

		img.prototype.setKWSrc =
			function(sVal)
		{
			this.imgSetSrc(sVal);
		};

		img.prototype.setKWUseMap =
			function(sVal)
		{
			this.imgSetUseMap(sVal);
		};

		img.prototype.setKWWidth =
			function(nVal)
		{
			this.imgSetWidth(nVal);
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
	
		img.prototype.htmlCreateOR = 
			function()
		{
			this.imgCreate();
		};

		img.prototype.htmlDeleteOR =
			function()
		{
			this.imgDelete();
		};

		img.prototype.htmlInitOR =
			function()
		{
			this.imgInit();
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

		img.prototype.imgCreate = 
			function imgCreate()
		{
			//console.log(this.kWLogCalled());
			
			this.imgCreateCrossOrigin();
			this.imgCreateHeight();
			this.imgCreateIsMap();
			this.imgCreateSrc();
			this.imgCreateUseMap();
			this.imgCreateWidth();
		};

		img.prototype.imgCreateCrossOrigin =
			function imgCreateCrossOrigin()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWCrossOrigin))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWCrossOrigin();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWCrossOrigin;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.imgCreateCrossOriginImpl();

			this.m_kWCrossOrigin.setKWValue(sValue);
		};

		img.prototype.imgCreateCrossOriginImpl =
			function imgCreateCrossOriginImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWCrossOrigin))
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

			this.m_kWCrossOrigin = new crossOrigin();

			this.m_kWCrossOrigin.setKWIDParent(this.m_sKWID);
			this.m_kWCrossOrigin.setKWDom(this.m_kWDom);

			this.m_kWCrossOrigin.check();
			this.m_kWCrossOrigin.init();
		};

		img.prototype.imgCreateHeight =
			function imgCreateHeight()
		{
			var value   = null;

			var nValue  = -1;

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

			this.imgCreateHeightImpl();

			this.m_kWHeight.setKWValue(nValue);
		};

		img.prototype.imgCreateHeightImpl =
			function imgCreateHeightImpl()
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
		};

		img.prototype.imgCreateIsMap =
			function imgCreateIsMap()
		{
			var value   = null;

			var bValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWIsMap))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWIsMap();
			if (validate.isNotNull(value))
			{
				bValue = value.getKWValue();
			}

			if (!validate.isBool(bValue))
			{
				bValue = this.m_bKWIsMap;
			}

			if (!validate.isBool(bValue))
			{
				return;
			}

			this.imgCreateIsMapImpl();

			this.m_kWIsMap.setKWValue(bValue);
		};

		img.prototype.imgCreateIsMapImpl =
			function imgCreateIsMapImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWIsMap))
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

			this.m_kWIsMap = new isMap();

			this.m_kWIsMap.setKWIDParent(this.m_sKWID);
			this.m_kWIsMap.setKWDom(this.m_kWDom);

			this.m_kWIsMap.check();
			this.m_kWIsMap.init();
		};

		img.prototype.imgCreateSrc =
			function imgCreateSrc()
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

			this.imgCreateSrcImpl();

			this.m_kWSrc.setKWValue(sValue);
		};

		img.prototype.imgCreateSrcImpl =
			function imgCreateSrcImpl()
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
		};

		img.prototype.imgCreateUseMap =
			function imgCreateUseMap()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWUseMap))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWUseMap();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWUseMap;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.imgCreateUseMapImpl();

			this.m_kWUseMap.setKWValue(sValue);
		};

		img.prototype.imgCreateUseMapImpl =
			function imgCreateUseMapImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWUseMap))
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

			this.m_kWUseMap = new useMap();

			this.m_kWUseMap.setKWIDParent(this.m_sKWID);
			this.m_kWUseMap.setKWDom(this.m_kWDom);

			this.m_kWUseMap.check();
			this.m_kWUseMap.init();
		};

		img.prototype.imgCreateWidth =
			function imgCreateWidth()
		{
			var value   = null;

			var nValue  = -1;

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

			this.imgCreateWidthImpl();

			this.m_kWWidth.setKWValue(nValue);
		};

		img.prototype.imgCreateWidthImpl =
			function imgCreateWidthImpl()
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
		};

		img.prototype.imgDelete =
			function imgDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWCrossOrigin	= null;
			this.m_kWHeight		    = null;
			this.m_kWIsMap		    = null;
			this.m_kWSrc			= null;
			this.m_kWUseMap		    = null;
			this.m_kWWidth		    = null;
		};

		img.prototype.imgInit =
			function imgInit()
		{
			//console.log(this.kWLogCalled());
		};

		img.prototype.imgSetCrossOrigin =
			function imgSetCrossOrigin(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWCrossOrigin = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWCrossOrigin))
			{
				this.kWCreateCrossOriginImpl();
			}

			this.m_kWCrossOrigin.setKWValue(this.m_sKWCrossOrigin);
		};

		img.prototype.imgSetHeight =
			function imgSetHeight(nVal)
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
				this.kWCreateHeightImpl();
			}

			this.m_kWHeight.setKWValue(this.m_nKWHeight);
		};

		img.prototype.imgSetIsMap =
			function imgSetIsMap(bVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isBool(bVal))
			{
				return;
			}

			this.m_bKWIsMap = bVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWIsMap))
			{
				this.kWCreateIsMapImpl();
			}

			this.m_kWIsMap.setKWValue(this.m_bKWIsMap);
		};

		img.prototype.imgSetSrc =
			function imgSetSrc(sVal)
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
				this.kWCreateSrcImpl();
			}

			this.m_kWSrc.setKWValue(this.m_sKWSrc);
		};

		img.prototype.imgSetUseMap =
			function imgSetUseMap(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWUseMap = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWUseMap))
			{
				this.kWCreateUseMapImpl();
			}

			this.m_kWUseMap.setKWValue(this.m_sKWUseMap);
		};

		img.prototype.imgSetWidth =
			function imgSetWidth(nVal)
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
				this.kWCreateWidthImpl();
			}

			this.m_kWWidth.setKWValue(this.m_nKWWidth);
		};

		return img;

	}
);
