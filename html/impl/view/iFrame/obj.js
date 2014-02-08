/**********************************************************************
 *
 * iFrame/obj.js
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
		"../../value/height/obj",
		"../../value/name/obj",
		"../../value/sandbox/obj",
		"../../value/seamless/obj",
		"../../value/src/obj",
		"../../value/srcDoc/obj",
		"../../value/width/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		height,
		name,
		sandbox,
		seamless,
		src,
		srcDoc,
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

		function iFrame()
		{
			//console.log("iFrame::constructor");
			
			this.m_kWHeight	    = null;
			this.m_kWName		= null;
			this.m_kWSandbox	= null;
			this.m_kWSeamless	= null;
			this.m_kWSrc		= null;
			this.m_kWSrcDoc	    = null;
			this.m_kWWidth	    = null;
		}

		iFrame.prototype = new base();
		iFrame.prototype.constructor = iFrame;
		iFrame.constructor = base.prototype.constructor;

		iFrame.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};
		
		iFrame.prototype.init = 
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

		iFrame.prototype.getKWHeight =
			function()
		{
			return this.m_kWHeight;
		};

		iFrame.prototype.getKWName =
			function()
		{
			return this.m_kWName;
		};
		
		iFrame.prototype.getKWSandbox =
			function()
		{
			return this.m_kWSandbox;
		};

		iFrame.prototype.getKWSeamless =
			function()
		{
			return this.m_kWSeamless;
		};

		iFrame.prototype.getKWSrc =
			function()
		{
			return this.m_kWSrc;
		};

		iFrame.prototype.getKWSrcDoc =
			function()
		{
			return this.m_kWSrcDoc;
		};
		
		iFrame.prototype.getKWWidth =
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
	//***		public srcDocs
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private srcDocs (non-overrides)
	//***
	//*******************************************************************//
	
		iFrame.prototype.baseCreateOR =
			function()
		{
			this.iFrameCreate();
		};

		iFrame.prototype.baseDeleteOR =
			function()
			{
				this.iFrameDelete();
			};

		iFrame.prototype.baseInitOR =
			function()
		{
			this.iFrameInit();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private srcDocs (overrides)
	//***
	//*******************************************************************//
		
	//*******************************************************************//
	//***																	   
	//***		private srcDocs
	//***
	//*******************************************************************//

		iFrame.prototype.iFrameCreate = 
			function iFrameCreate() 
		{
			//console.log(this.kWLogCalled());
			
			this.iFrameCreateHeight();
			this.iFrameCreateName();
			this.iFrameCreateSandbox();
			this.iFrameCreateSeamless();
			this.iFrameCreateSrc();
			this.iFrameCreateSrcDoc();
			this.iFrameCreateWidth();
		};
		
		iFrame.prototype.iFrameCreateHeight = 
			function iFrameCreateHeight() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.height))
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
		
		iFrame.prototype.iFrameCreateName = 
			function iFrameCreateName() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWName))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWName = new name();
			
			this.m_kWName.setKWView(this);
			this.m_kWName.setKWIDParent(this.m_sKWID);
			
			this.m_kWName.check();
			this.m_kWName.init();

			this.kWAddValue(this.m_kWName);
		};
		
		iFrame.prototype.iFrameCreateSandbox = 
			function iFrameCreateSandbox() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWSandbox))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWSandbox = new sandbox();
			
			this.m_kWSandbox.setKWView(this);
			this.m_kWSandbox.setKWIDParent(this.m_sKWID);
			
			this.m_kWSandbox.check();
			this.m_kWSandbox.init();

			this.kWAddValue(this.m_kWSandbox);
		};
		
		iFrame.prototype.iFrameCreateSeamless = 
			function iFrameCreateSeamless() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWSeamless))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWSeamless = new seamless();
			
			this.m_kWSeamless.setKWView(this);
			this.m_kWSeamless.setKWIDParent(this.m_sKWID);
			
			this.m_kWSeamless.check();
			this.m_kWSeamless.init();

			this.kWAddValue(this.m_kWSeamless);
		};
		
		iFrame.prototype.iFrameCreateSrc = 
			function iFrameCreateSrc() 
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
		
		iFrame.prototype.iFrameCreateSrcDoc = 
			function iFrameCreateSrcDoc() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWSrcDoc))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWSrcDoc = new srcDoc();
			
			this.m_kWSrcDoc.setKWView(this);
			this.m_kWSrcDoc.setKWIDParent(this.m_sKWID);
			
			this.m_kWSrcDoc.check();
			this.m_kWSrcDoc.init();

			this.kWAddValue(this.m_kWSrcDoc);
		};
		
		iFrame.prototype.iFrameCreateWidth = 
			function iFrameCreateWidth() 
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

		iFrame.prototype.iFrameDelete =
			function iFrameDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWHeight	    = null;
			this.m_kWName		= null;
			this.m_kWSandbox	= null;
			this.m_kWSeamless	= null;
			this.m_kWSrc		= null;
			this.m_kWSrcDoc	    = null;
			this.m_kWWidth	    = null;
		};

		iFrame.prototype.iFrameInit =
			function iFrameInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return iFrame;

	}
);
