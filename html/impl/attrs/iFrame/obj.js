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
		"../../attr/height/obj",
		"../../attr/name/obj",
		"../../attr/sandbox/obj",
		"../../attr/seamless/obj",
		"../../attr/src/obj",
		"../../attr/srcDoc/obj",
		"../../attr/width/obj",
		"../../../base/attrs/html/obj",
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
		html,
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

			this.m_kWHeight		= null;
			this.m_kWName		= null;
			this.m_kWSandbox	= null;
			this.m_kWSeamless	= null;
			this.m_kWSrc		= null;
			this.m_kWSrcDoc		= null;
			this.m_kWWidth		= null;
			
			this.m_sKWName		= null;
			this.m_sKWSandbox	= null;
			this.m_sKWSeamless	= null;
			this.m_sKWSrc		= null;
			this.m_sKWSrcDoc	= null;
			
			this.m_nKWHeight	= -1;
			this.m_nKWWidth		= -1;
		}

		iFrame.prototype = new html();
		iFrame.prototype.constructor = iFrame;
		iFrame.constructor = html.prototype.constructor;

		iFrame.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		iFrame.prototype.init =
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

		iFrame.prototype.setKWHeight =
			function(nVal)
		{
			this.ifSetHeight(nVal);
		};

		iFrame.prototype.setKWName =
			function(sVal)
		{
			this.ifSetName(sVal);
		};

		iFrame.prototype.setKWSandbox =
			function(sVal)
		{
			this.ifSetSandbox(sVal);
		};

		iFrame.prototype.setKWSeamless =
			function(sVal)
		{
			this.ifSetSeamless(sVal);
		};

		iFrame.prototype.setKWSrc =
			function(sVal)
		{
			this.ifSetSrc(sVal);
		};

		iFrame.prototype.setKWSrcDoc =
			function(sVal)
		{
			this.ifSetSrcDoc(sVal);
		};

		iFrame.prototype.setKWWidth =
			function(nVal)
		{
			this.ifSetWidth(nVal);
		};

	//*******************************************************************//
	//***																	   
	//***		public callbacks
	//***
	//*******************************************************************//
	
	//*******************************************************************//
	//***																	   
	//***		public seamlesss
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private seamlesss (non-overrides)
	//***
	//*******************************************************************//
	
		iFrame.prototype.htmlCreateOR =
			function()
		{
			this.ifCreate();
		};

		iFrame.prototype.htmlDeleteOR =
			function()
		{
			this.ifDelete();
		};

		iFrame.prototype.htmlInitOR =
			function()
		{
			this.ifInit();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private seamlesss (overrides)
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private seamlesss
	//***
	//*******************************************************************//

		iFrame.prototype.ifCreate = 
			function ifCreate()
		{
			//console.log(this.kWLogCalled());
			
			this.ifCreateHeight();
			this.ifCreateName();
			this.ifCreateSandbox();
			this.ifCreateSeamless();
			this.ifCreateSrc();
			this.ifCreateSrcDoc();
			this.ifCreateWidth();
		};

		iFrame.prototype.ifCreateHeight =
			function ifCreateHeight()
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

			this.ifCreateHeightImpl();

			this.m_kWHeight.setKWValue(nValue);
		};

		iFrame.prototype.ifCreateHeightImpl =
			function ifCreateHeightImpl()
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

		iFrame.prototype.ifCreateName =
			function ifCreateName()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWName))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWName();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWName;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.ifCreateNameImpl();

			this.m_kWName.setKWValue(sValue);
		};

		iFrame.prototype.ifCreateNameImpl =
			function ifCreateNameImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWName))
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

			this.m_kWName = new name();

			this.m_kWName.setKWIDParent(this.m_sKWID);
			this.m_kWName.setKWDom(this.m_kWDom);

			this.m_kWName.check();
			this.m_kWName.init();

			this.kWAddAttr(this.m_kWName);
		};

		iFrame.prototype.ifCreateSandbox =
			function ifCreateSandbox()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWSandbox))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWSandbox();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWSandbox;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.ifCreateSandboxImpl();

			this.m_kWSandbox.setKWValue(sValue);
		};

		iFrame.prototype.ifCreateSandboxImpl =
			function ifCreateSandboxImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWSandbox))
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

			this.m_kWSandbox = new sandbox();

			this.m_kWSandbox.setKWIDParent(this.m_sKWID);
			this.m_kWSandbox.setKWDom(this.m_kWDom);

			this.m_kWSandbox.check();
			this.m_kWSandbox.init();

			this.kWAddAttr(this.m_kWSandbox);
		};

		iFrame.prototype.ifCreateSeamless =
			function ifCreateSeamless()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWSeamless))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWSeamless();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWSeamless;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.ifCreateSeamlessImpl();

			this.m_kWSeamless.setKWValue(sValue);
		};

		iFrame.prototype.ifCreateSeamlessImpl =
			function ifCreateSeamlessImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWSeamless))
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

			this.m_kWSeamless = new seamless();

			this.m_kWSeamless.setKWIDParent(this.m_sKWID);
			this.m_kWSeamless.setKWDom(this.m_kWDom);

			this.m_kWSeamless.check();
			this.m_kWSeamless.init();

			this.kWAddAttr(this.m_kWSeamless);
		};

		iFrame.prototype.ifCreateSrc =
			function ifCreateSrc()
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

			this.ifCreateSrcImpl();

			this.m_kWSrc.setKWValue(sValue);
		};

		iFrame.prototype.ifCreateSrcImpl =
			function ifCreateSrcImpl()
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

		iFrame.prototype.ifCreateSrcDoc =
			function ifCreateSrcDoc()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWSrcDoc))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWSrcDoc();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWSrcDoc;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.ifCreateSrcDocImpl();

			this.m_kWSrcDoc.setKWValue(sValue);
		};

		iFrame.prototype.ifCreateSrcDocImpl =
			function ifCreateSrcDocImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWSrcDoc))
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

			this.m_kWSrcDoc = new srcDoc();

			this.m_kWSrcDoc.setKWIDParent(this.m_sKWID);
			this.m_kWSrcDoc.setKWDom(this.m_kWDom);

			this.m_kWSrcDoc.check();
			this.m_kWSrcDoc.init();

			this.kWAddAttr(this.m_kWSrcDoc);
		};

		iFrame.prototype.ifCreateWidth =
			function ifCreateWidth()
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

			this.ifCreateWidthImpl();

			this.m_kWWidth.setKWValue(nValue);
		};

		iFrame.prototype.ifCreateWidthImpl =
			function ifCreateWidthImpl()
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

		iFrame.prototype.ifDelete =
			function ifDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWHeight		= null;
			this.m_kWName		= null;
			this.m_kWSandbox	= null;
			this.m_kWSeamless	= null;
			this.m_kWSrc		= null;
			this.m_kWSrcDoc		= null;
			this.m_kWWidth		= null;
		};

		iFrame.prototype.ifInit =
			function ifInit()
		{
			//console.log(this.kWLogCalled());
		};

		iFrame.prototype.ifSetHeight =
			function ifSetHeight(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNumberNotNeg(sVal))
			{
				return;
			}

			this.m_sKWHeight = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWHeight))
			{
				this.ifCreateHeightImpl();
			}

			this.m_kWHeight.setKWValue(this.m_sKWHeight);
		};

		iFrame.prototype.ifSetName =
			function ifSetName(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWName = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWName))
			{
				this.ifCreateNameImpl();
			}

			this.m_kWName.setKWValue(this.m_sKWName);
		};

		iFrame.prototype.ifSetSandbox =
			function ifSetSandbox(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWSandbox = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWSandbox))
			{
				this.ifCreateSandboxImpl();
			}

			this.m_kWSandbox.setKWValue(this.m_sKWSandbox);
		};

		iFrame.prototype.ifSetSeamless =
			function ifSetSeamless(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWSeamless = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWSeamless))
			{
				this.ifCreateSeamlessImpl();
			}

			this.m_kWSeamless.setKWValue(this.m_sKWSeamless);
		};

		iFrame.prototype.ifSetSrc =
			function ifSetSrc(sVal)
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
				this.ifCreateSrcImpl();
			}

			this.m_kWSrc.setKWValue(this.m_sKWSrc);
		};

		iFrame.prototype.ifSetSrcDoc =
			function ifSetSrcDoc(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWSrcDoc = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWSrcDoc))
			{
				this.ifCreateSrcDocImpl();
			}

			this.m_kWSrcDoc.setKWValue(this.m_sKWSrcDoc);
		};

		iFrame.prototype.ifSetWidth =
			function ifSetWidth(nVal)
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
				this.ifCreateWidthImpl();
			}

			this.m_kWWidth.setKWValue(this.m_nKWWidth);
		};

		return iFrame;

	}
);
