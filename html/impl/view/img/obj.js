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
		"../../value/alt/obj",
		"../../value/crossOrigin/obj",
		"../../value/height/obj",
		"../../value/isMap/obj",
		"../../value/src/obj",
		"../../value/srcExt/obj",
		"../../value/srcName/obj",
		"../../value/useMap/obj",
		"../../value/width/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		alt,
		crossOrigin,
		height,
		isMap,
		src,
		srcExt,
		srcName,
		useMap,
		width,
		base,
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
			
			this.m_kWAlt			= null;
			this.m_kWCrossOrigin	= null;
			this.m_kWHeight		    = null;
			this.m_kWIsMap		    = null;
			this.m_kWSrc			= null;
			this.m_kWSrcExt		    = null;
			this.m_kWSrcName		= null;
			this.m_kWUseMap		    = null;
			this.m_kWWidth		    = null;
			
			this.m_sKWSrc			= null;
		}

		img.prototype = new base();
		img.prototype.constructor = img;
		img.constructor = base.prototype.constructor;

		img.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		img.prototype.init =
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

		img.prototype.getKWAlt =
			function()
		{
			return this.m_kWAlt;
		};

		img.prototype.getKWCrossOrigin =
			function()
		{
			return this.m_kWCrossOrigin;
		};

		img.prototype.getKWHeight =
			function()
		{
			return this.m_kWHeight;
		};

		img.prototype.getKWIsMap =
			function()
		{
			return this.m_kWIsMap;
		};

		img.prototype.getKWSrc =
			function()
		{
			return this.m_kWSrc;
		};

		img.prototype.getKWSrcExt =
			function()
		{
			return this.m_kWSrcExt;
		};

		img.prototype.getKWSrcName =
			function()
		{
			return this.m_kWSrcName;
		};

		img.prototype.getKWUseMap =
			function()
		{
			return this.m_kWUseMap;
		};

		img.prototype.getKWWidth =
			function()
		{
			return this.m_kWWidth;
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

		img.prototype.baseCreateOR =
			function()
			{
				this.imgCreate();
			};

		img.prototype.baseDeleteOR =
			function()
			{
				this.imgDelete();
			};

		img.prototype.baseInitOR =
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
			
			this.imgCreateAlt();
			this.imgCreateCrossOrigin();
			this.imgCreateHeight();
			this.imgCreateIsMap();
			this.imgCreateSrc();
			this.imgCreateSrcExt();
			this.imgCreateSrcName();
			this.imgCreateUseMap();
			this.imgCreateWidth();
		};
		
		img.prototype.imgCreateAlt = 
			function imgCreateAlt() 
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
		
		img.prototype.imgCreateCrossOrigin = 
			function imgCreateCrossOrigin() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWCrossOrigin))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWCrossOrigin = new crossOrigin();
			
			this.m_kWCrossOrigin.setKWView(this);
			this.m_kWCrossOrigin.setKWIDParent(this.m_sKWID);
			
			this.m_kWCrossOrigin.check();
			this.m_kWCrossOrigin.init();

			this.kWAddValue(this.m_kWCrossOrigin);
		};
		
		img.prototype.imgCreateHeight = 
			function imgCreateHeight() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWHeight))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWHeight = new height();
			
			this.m_kWHeight.setKWView(this);
			this.m_kWHeight.setKWIDParent(this.m_sKWID);
			
			this.m_kWHeight.check();
			this.m_kWHeight.init();

			this.kWAddValue(this.m_kWHeight);
		};
		
		img.prototype.imgCreateIsMap = 
			function imgCreateIsMap() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWIsMap))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWIsMap = new isMap();
			
			this.m_kWIsMap.setKWView(this);
			this.m_kWIsMap.setKWIDParent(this.m_sKWID);
			
			this.m_kWIsMap.check();
			this.m_kWIsMap.init();

			this.kWAddValue(this.m_kWIsMap);
		};
		
		img.prototype.imgCreateSrc = 
			function imgCreateSrc() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWSrc))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWSrc = new src();
			
			this.m_kWSrc.setKWView(this);
			this.m_kWSrc.setKWIDParent(this.m_sKWID);
			
			this.m_kWSrc.check();
			this.m_kWSrc.init();

			this.kWAddValue(this.m_kWSrc);
		};
		
		img.prototype.imgCreateSrcExt = 
			function imgCreateSrcExt() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWSrcExt))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWSrcExt = new srcExt();
			
			this.m_kWSrcExt.setKWView(this);
			this.m_kWSrcExt.setKWIDParent(this.m_sKWID);
			
			this.m_kWSrcExt.check();
			this.m_kWSrcExt.init();

			this.kWAddValue(this.m_kWSrcExt);
		};
		
		img.prototype.imgCreateSrcName = 
			function imgCreateSrcName() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWSrcName))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWSrcName = new srcName();
			
			this.m_kWSrcName.setKWView(this);
			this.m_kWSrcName.setKWIDParent(this.m_sKWID);
			
			this.m_kWSrcName.check();
			this.m_kWSrcName.init();

			this.kWAddValue(this.m_kWSrcName);
		};
		
		img.prototype.imgCreateUseMap = 
			function imgCreateUseMap() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWUseMap))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWUseMap = new useMap();
			
			this.m_kWUseMap.setKWView(this);
			this.m_kWUseMap.setKWIDParent(this.m_sKWID);
			
			this.m_kWUseMap.check();
			this.m_kWUseMap.init();

			this.kWAddValue(this.m_kWUseMap);
		};
		
		img.prototype.imgCreateWidth = 
			function imgCreateWidth() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWWidth))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWWidth = new width();
			
			this.m_kWWidth.setKWView(this);
			this.m_kWWidth.setKWIDParent(this.m_sKWID);
			
			this.m_kWWidth.check();
			this.m_kWWidth.init();
			
			this.kWAddValue(this.m_kWWidth);
		};

		img.prototype.imgDelete =
			function imgDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWAlt			= null;
			this.m_kWCrossOrigin	= null;
			this.m_kWHeight		    = null;
			this.m_kWIsMap		    = null;
			this.m_kWSrc			= null;
			this.m_kWSrcExt		    = null;
			this.m_kWSrcName		= null;
			this.m_kWUseMap		    = null;
			this.m_kWWidth		    = null;
		};

		img.prototype.imgInit =
			function imgInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return img;

	}
);
