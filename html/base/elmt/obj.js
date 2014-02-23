/**********************************************************************
 *
 * elmt/obj.js
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
		"../css/obj",
		"kWMVC/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
		css,
		mvc,
		validate,
		$
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function elmt() 
		{
			//console.log("elmt::constructor");
			
			this.m_sKWAttrCtlr			= "ctlr";

			this.m_kWAttrs				= null;
			this.m_kWCSS				= null;
			this.m_kWDom				= null;
			this.m_kWDomTemp			= null;
			this.m_kWDomParent			= null;

			this.m_sKWAccessKey			= null;
			this.m_sKWClass				= null;
			this.m_sKWClassOff			= null;
			this.m_sKWClassOn			= null;
			this.m_sKWClassParent		= null;
			this.m_sKWContextMenu		= null;
			this.m_sKWDir				= null;
			this.m_sKWDropZone			= null;
			this.m_sKWHtml				= null;
			this.m_sKWKeyHtml			= null;
			this.m_sKWTag				= null;
			this.m_sKWText				= null;
			this.m_sKWTitle				= null;
			
			this.m_bKWContentEditable	= null;
			this.m_bKWDraggable			= null;
			this.m_bKWHidden			= null;
			this.m_bKWIsVisible			= true;
			this.m_bKWSpellCheck		= null;
			
			this.m_nKWTabIndex			= -1;

			this.m_bKWHtmlRetrieved     = false;
			this.m_bKWTitleRetrieved    = false;
		}

		elmt.prototype = new mvc();
		elmt.prototype.constructor = elmt;
		elmt.constructor = mvc.prototype.constructor;

		elmt.prototype.check = 
			function check() 
		{
			mvc.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());

			if (!validate.isString(this.m_sKWAttrCtlr))
			{
				console.error(this.kWLogInvalid("m_sKWAttrCtlr"));
			}
			
			if (!validate.isString(this.m_sKWTag))
			{
				console.error(this.kWLogInvalid("m_sKWTag"));
			}
		};

		elmt.prototype.init = 
			function init() 
		{
			//console.log(this.kWLogCalled());
			mvc.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		elmt.prototype.getKWHeight =
			function()
		{
			return this.elmtGetHeight();
		};

		elmt.prototype.getKWHtml =
			function()
		{
			return this.elmtGetHtml();
		};

		elmt.prototype.getKWWidth =
			function()
		{
			return this.elmtGetWidth();
		};

		elmt.prototype.setKWClass =
			function(sVal)
		{
			this.m_sKWClass = sVal;
			this.elmtSetClass();
		};

		elmt.prototype.setKWHtml =
			function(sVal)
		{
			this.m_sKWHtml = sVal;
			this.elmtSetHtml();
		};

		elmt.prototype.setKWAttr =
			function(sKey, sVal)
		{
			this.elmtSetAttr(sKey, sVal);
		};

		elmt.prototype.setKWHeight =
			function(nVal)
		{
			this.elmtSetHeight(nVal);
		};

		elmt.prototype.setKWParent =
			function(obj)
		{
			this.m_kWDomParent = obj;
		};

		elmt.prototype.setKWText =
			function(sVal)
		{
			this.m_sKWText = sVal;
			this.elmtSetText(sVal);
		};

		elmt.prototype.setKWWidth =
			function(nVal)
		{
			this.elmtSetWidth(nVal);
		};

	//*******************************************************************//
	//***																	   
	//***		public callbacks
	//***
	//*******************************************************************//

		elmt.prototype.elmtCallbackClick = 
			function(e) 
		{
			var self = null;
			
			//console.log("checkbox::elmtCallbackClick");

			//e.preventDefault();
		
			self = $.data(this, "ctlr");
			if (!self)
			{
			   throw new Error("elmt::elmtCallbackClick() [self] invalid"); 
			}

			self.elmtHandleClick();
		};
		
		elmt.prototype.elmtCallbackDoubleClick =
			function(e) 
		{
			var self = null;
			
			//console.log("checkbox::elmtCallbackDoubleClick");

			//e.preventDefault();
		
			self = $.data(this, "ctlr");
			if (!self)
			{
			   throw new Error("elmt::elmtCallbackDoubleClick() [self] invalid"); 
			}

			self.elmtHandleDoubleClick();
		};
		
	//*******************************************************************//
	//***																	   
	//***		public methods
	//***
	//*******************************************************************//

		elmt.prototype.kWClear =
			function()
		{
			this.elmtClear();
		};

		elmt.prototype.kWClearClass =
			function()
		{
			this.elmtClearClass();
		};

		elmt.prototype.kWClassOff =
			function()
		{
			this.elmtClassOff();
		};

		elmt.prototype.kWClassOn =
			function()
		{
			this.elmtClassOn();
		};

		elmt.prototype.kWEmptyDom =
			function()
		{
			this.elmtEmptyDom();
		};

		elmt.prototype.kWHide =
			function()
		{
			this.elmtHide();
		};

		elmt.prototype.kWRemove =
			function()
		{
			this.elmtRemove();
		};

		elmt.prototype.kWSubscribeClick =
			function() 
		{
			this.elmtSubscribeClick();
		};

		elmt.prototype.kWSubscribeDoubleClick =
			function() 
		{
			this.elmtSubscribeDoubleClick();
		};

		elmt.prototype.kWShow =
			function() 
		{
			this.elmtShow();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		elmt.prototype.mvcCreateViewOR =
			function()
		{
			return this.elmtCreateView();
		};

		elmt.prototype.mvcDeleteOR =
			function()
		{
			this.elmtDelete();
		};

		elmt.prototype.mvcEmptyOR =
			function()
		{
			this.elmtEmpty();
		};

		elmt.prototype.mvcInitOR =
			function()
		{
			this.elmtInit(); 
		};
		
		elmt.prototype.mvcRetrieveOR = 
			function()
		{
			this.elmtRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		elmt.prototype.elmtClearOR = 
			function elmtClearOR()
		{
			//console.error(this.kWLogNotImpl());
		};
		
		elmt.prototype.elmtCreateAttrsOR = 
			function elmtCreateAttrsOR()
		{
			console.error(this.kWLogNotImpl());
		};

		elmt.prototype.elmtCreateViewOR =
			function elmtCreateViewOR()
		{
			console.error(this.kWLogNotImpl());
		};

		elmt.prototype.elmtDeleteOR =
			function elmtDeleteOR()
		{
			//console.error(this.kWLogNotImpl());
		};

		elmt.prototype.elmtEmptyOR =
			function elmtEmptyOR()
		{
			//console.error(this.kWLogNotImpl());
		};

		elmt.prototype.elmtHandleClickOR =
			function elmtHandleClickOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
		elmt.prototype.elmtHandleDoubleClickOR = 
			function elmtHandleDoubleClickOR()
		{
			console.error(this.kWLogNotImpl());
		};

		elmt.prototype.elmtInitOR =
			function elmtInitOR()
		{
			console.error(this.kWLogNotImpl());
		};

		elmt.prototype.elmtRetrieveOR =
			function elmtRetrieveOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		elmt.prototype.elmtAppendDom =
			function elmtAppendDom()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}

			if (!validate.isDom(this.m_kWDomTemp))
			{
				console.error(this.kWLogInvalid("m_kWDomTemp"));
			}

			this.m_kWDomTemp.before(this.m_kWDom);
		};

		elmt.prototype.elmtClassOff =
			function elmtClassOff()
		{
			var sClass = null;

			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWAttrs))
			{
				console.error(this.kWLogInvalid("m_kWAttrs"));
			}

			if (!validate.isString(this.m_sKWClass))
			{
				console.error(this.kWLogInvalid("m_sKWClass"));
			}

			if (!validate.isString(this.m_sKWClassOff))
			{
				console.error(this.kWLogInvalid("m_sKWClassOff"));
			}

			sClass = this.m_sKWClass + " " + this.m_sKWClassOff;

			//console.debug(this.kWLogDisplay("sClass", sClass));

			this.m_kWAttrs.setKWClass(sClass);
		};

		elmt.prototype.elmtClassOn = 
			function elmtClassOn()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWAttrs))
			{
				console.error(this.kWLogInvalid("m_kWAttrs"));
			}

			if (!validate.isString(this.m_sKWClass))
			{
				console.error(this.kWLogInvalid("m_sKWClass"));
			}

			if (!validate.isString(this.m_sKWClassOn))
			{
				console.error(this.kWLogInvalid("m_sKWClassOn"));
			}

			sClass = this.m_sKWClass + " " + this.m_sKWClassOn;

			//console.debug(this.kWLogDisplay("sClass", sClass));

			this.m_kWAttrs.setKWClass(sClass);
		};

		elmt.prototype.elmtClear =
			function elmtClear()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWAttrs))
			{
				console.error(this.kWLogInvalid());
			}

			this.m_kWAttrs.clearText();

			this.elmtClearOR();
		};

		elmt.prototype.elmtClearClass =
			function elmtClearClass()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWAttrs))
			{
				console.error(this.kWLogInvalid());
			}

			this.m_kWAttrs.clearClass();
		};

		elmt.prototype.elmtCreateAttrs =
			function elmtCreateAttrs()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWAttrs))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			if (!validate.isString(this.m_sKWClass))
			{
				console.error(this.kWLogInvalid("m_sKWClass"));
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			this.m_kWAttrs = this.elmtCreateAttrsOR();
			if (!validate.isNotNull(this.m_kWAttrs))
			{
				console.error(this.kWLogErrCreate("m_kWAttrs"));
			}

			this.m_kWAttrs.setKWClass(this.m_sKWClass);
			this.m_kWAttrs.setKWDom(this.m_kWDom);
			this.m_kWAttrs.setKWID(this.m_sKWID);

			if (validate.isString(this.m_sKWAccessKey))
			{
				this.m_kWAttrs.setKWAccessKey(this.m_sKWAccessKey);
			}

			if (validate.isString(this.m_sKWContextMenu))
			{
				this.m_kWAttrs.setKWContextMenu(this.m_sKWContextMenu);
			}

			if (validate.isString(this.m_sKWDir))
			{
				this.m_kWAttrs.setKWDir(this.m_sKWDir);
			}

			if (validate.isString(this.m_sKWDir))
			{
				this.m_kWAttrs.setKWDraggable(this.m_bKWDraggable);
			}

			if (validate.isString(this.m_sKWDir))
			{
				this.m_kWAttrs.setKWDropZone(this.m_sKWDropZone);
			}

			if (validate.isString(this.m_sKWHtml))
			{
				this.m_kWAttrs.setKWHtml(this.m_sKWHtml);
			}

			if (validate.isBool(this.m_bKWContentEditable))
			{
				this.m_kWAttrs.setKWContentEditable(this.m_bKWContentEditable);
			}

			if (validate.isBool(this.m_bKWSpellCheck))
			{
				this.m_kWAttrs.setKWSpellCheck(this.m_bKWSpellCheck);
			}

			if (validate.isNumberNotNeg(this.m_nKWTabIndex))
			{
				this.m_kWAttrs.setKWTabIndex(this.m_nKWTabIndex);
			}

			this.m_kWAttrs.setKWText(this.m_sKWText);
			this.m_kWAttrs.setKWTitle(this.m_sKWTitle);
			this.m_kWAttrs.setKWView(this.m_kWView);

			this.m_kWAttrs.check();
			this.m_kWAttrs.init();
		};

		elmt.prototype.elmtCreateClass =
			function elmtCreateClass()
		{
			//console.log(this.kWLogCalled());

			if (validate.isString(this.m_sKWClass))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isString(this.m_sKWExt))
			{
				console.error(this.kWLogInvalid("m_sKWExt"));
			}

			if (!validate.isString(this.m_sKWClassParent))
			{
				this.m_sKWClass = "";
			}
			else
			{
				this.m_sKWClass = this.m_sKWClassParent + "_" + this.m_sKWExt;
			}

			//console.debug(this.kWLogDisplay("m_sKWClass", this.m_sKWClass));
		};

		elmt.prototype.elmtCreateCss = 
			function elmtCreateCss()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWCSS))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			this.m_kWCSS = new css();
			
			this.m_kWCSS.setKWDom(this.m_kWDom);
			this.m_kWCSS.setKWID(this.m_sKWID);
			this.m_kWCSS.setKWView(this.m_kWView);
			
			this.m_kWCSS.check();
			this.m_kWCSS.init();
		};
		
		elmt.prototype.elmtCreateDom = 
			function elmtCreateDom()
		{
			//console.log(this.kWLogCalled());

			if (validate.isDom(this.m_kWDom))
			{
				console.error(this.LogRepeated());
			}

			if (!validate.isString(this.m_sKWTag))
			{
				console.error(this.kWLogInvalid("m_sKWTag"));
			}
			
			if (!validate.isString(this.m_sKWAttrCtlr))
			{
				console.error(this.kWLogInvalid("m_sKWAttrCtlr"));
			}
			
			this.m_kWDom = $("<" + this.m_sKWTag + "/>");
			
			this.m_kWDom.data(this.m_sKWAttrCtlr, this);
		};
		
		elmt.prototype.elmtCreateDomTemp = 
			function elmtCreateDomTemp()
		{
			//console.log(this.kWLogCalled());

			if (validate.isDom(this.m_kWDomTemp))
			{
				console.error(this.LogRepeated()); 
			}

			if (!validate.isDom(this.m_kWDomParent))
			{
				console.error(this.kWLogInvalid("m_kWDomParent"));
			}

			if (!validate.isString(this.m_sKWTag))
			{
				console.error(this.kWLogInvalid("m_sKWTag"));
			}
			
			if (!validate.isString(this.m_sKWExt))
			{
				console.error(this.kWLogInvalid("m_sKWExt"));
			}
			
			this.m_kWDomTemp = $("<" + this.m_sKWTag + "/>");
			this.m_kWDomTemp.attr("id", this.m_sKWExt + "_temp");
			
			this.m_kWDomParent.append(this.m_kWDomTemp);
		};
		
		elmt.prototype.elmtCreateID = 
			function elmtCreateID()
		{
			//console.log(this.bLogCalled());
			
			if (this.m_sKWID)
			{
				return;
			}
			
			if (!validate.isString(this.m_sKWIDParent))
			{
				console.error(this.bLogInvalid("m_sKWIDParent"));
			}
			
			if (!validate.isString(this.m_sKWExt))
			{
				console.error(this.bLogInvalid("m_sKWExt"));
			}
			
			this.m_sKWID = this.m_sKWIDParent + "_" + this.m_sKWExt;
		};

		elmt.prototype.elmtCreateView = 
			function elmtCreateView()
		{
			//console.log(this.bLogCalled());
			
			this.elmtCreateDomTemp();
			
			return this.elmtCreateViewOR();
		};

		elmt.prototype.elmtDelete =
			function elmtDelete()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(this.m_sKWAttrCtlr))
			{
				console.error(this.kWLogInvalid("m_sKWAttrCtlr"));
			}

			if (validate.isNotNull(this.m_kWAttrs))
			{
				this.m_kWAttrs.kWDelete();
			}

			this.m_kWAttrs = null;

			this.m_kWDom.removeData(this.m_sKWAttrCtlr);
			this.kWRemove();
			this.elmtDeleteOR();

			if (validate.isNotNull(this.m_kWCSS))
			{
				this.m_kWCSS.kWDelete();
			}

			this.m_kWCSS				= null;
			this.m_kWDom				= null;
			this.m_kWDomTemp			= null;
			this.m_kWDomParent			= null;
		};

		elmt.prototype.elmtEmpty =
			function elmtEmpty()
		{
			//console.log(this.kWLogCalled());
			this.kWEmptyDom();
			this.elmtEmptyOR();
		};

		elmt.prototype.elmtEmptyDom =
			function elmtEmptyDom()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isDom(this.m_kWDom))
			{
				return;
			}

			this.m_kWDom.empty();
		};

		elmt.prototype.elmtHandleClick =
			function elmtHandleClick()
		{
			//console.log(this.kWLogCalled());
			this.elmtHandleClickOR();
		};
		
		elmt.prototype.elmtHandleDoubleClick = 
			function elmtHandleDoubleClick()
		{
			//console.log(this.kWLogCalled());
			this.elmtHandleDoubleClickOR();
		};

		elmt.prototype.elmtGetHeight =
			function elmtGetHeight()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}

			return this.m_kWDom.height();
		};

		elmt.prototype.elmtGetWidth =
			function elmtGetWidth()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}

			return this.m_kWDom.width();
		};

		elmt.prototype.elmtGetHtml =
			function elmtGetHtml()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWAttrs))
			{
				console.error(this.kWLogInvalid("m_kWAttrs"));
			}

			return this.m_kWAttrs.getKWHtml();
		};

		elmt.prototype.elmtHide =
			function elmtHide()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWCSS))
			{
				console.error(this.kWLogInvalid("m_kWCSS"));
			}

			this.m_kWCSS.hide();
		};

		elmt.prototype.elmtInit =
			function elmtInit()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(this.m_sKWID))
			{
				this.elmtRetrieveParentID();
				this.elmtCreateID();
			}

			if (!this.elmtVerifyDomNotPresent())
			{
				return;
			}

			if (!validate.isString(this.m_sKWClass))
			{
				this.elmtRetrieveParentClass();
				this.elmtCreateClass();
			}

			//console.log(this.kWLogDisplay("m_sKWClass", this.m_sKWClass));

			this.elmtCreateDom();
			this.elmtCreateAttrs();
			this.elmtCreateCss();
			this.elmtAppendDom();
			this.elmtLoadValue();

			this.elmtRemoveDomTemp();
			this.elmtSetVisibility();
			
			this.elmtInitOR();
		};

		elmt.prototype.elmtLoadValue =
			function elmtLoadValue()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(this.m_sMVCValue))
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWAttrs))
			{
				console.error(this.kWLogInvalid("m_kWAttrs"));
			}

			this.m_kWAttrs.setBase(this.m_sMVCValue);
		};

		elmt.prototype.elmtRemove =
			function elmtRemove()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isDom(this.m_kWDom))
			{
				return;
			}

			this.m_kWDom.remove();
		};

		elmt.prototype.elmtRemoveAttrib =
			function elmtRemoveAttrib(sKey)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isDom(this.m_kWAttrs))
			{
				console.error(this.kWLogInvalid("m_kWAttrs"));
			}
			
			if (!validate.isString(sKey))
			{
				console.error(this.kWLogInvalid("sKey"));
			}

			this.m_kWAttrs.kWRemove(sKey);
		};

		elmt.prototype.elmtRemoveDomTemp = 
			function elmtRemoveDomTemp()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isDom(this.m_kWDomTemp))
			{
				console.error(this.kWLogInvalid("m_kWDomTemp"));
			}

			this.m_kWDomTemp.remove();
		};
		
		elmt.prototype.elmtRemoveStyle = 
			function elmtRemoveStyle(sKey)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isDom(this.m_kWCSS))
			{
				console.error(this.kWLogInvalid("m_kWCSS"));
			}
			
			if (!validate.isString(sKey))
			{
				console.error(this.kWLogInvalid("sKey"));
			}

			this.m_kWCSS.setKWVal(sKey, "");
		};

		elmt.prototype.elmtRetrieve = 
			function elmtRetrieve() 
		{
			//console.log(this.kWLogCalled());

			this.elmtRetrieveAccessKey();
			this.elmtRetrieveClass();
			this.elmtRetrieveClassOff();
			this.elmtRetrieveClassOn();
			this.elmtRetrieveContentEditable();
			this.elmtRetrieveContextMenu();
			this.elmtRetrieveDir();
			this.elmtRetrieveDraggable();
			this.elmtRetrieveDropZone();
			this.elmtRetrieveHidden();
			this.elmtRetrieveIsVisible();
			this.elmtRetrieveHtml();
			//this.elmtRetrieveLang();
			this.elmtRetrieveSpellCheck();
			this.elmtRetrieveStyle();
			this.elmtRetrieveTabIndex();
			this.elmtRetrieveText();
			this.elmtRetrieveTitle();
			
			this.elmtRetrieveOR();
		};
		
		elmt.prototype.elmtRetrieveAccessKey = 
			function elmtRetrieveAccessKey() 
		{
			var value	= null;
			
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWAccessKey();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			this.m_sKWAccessKey = value.getKWValue();
			if (validate.isString(this.m_sKWAccessKey))
			{
				//console.debug(this.kWLogDisplay("m_sKWAccessKey", this.m_sKWAccessKey));
			}
		};
		
		elmt.prototype.elmtRetrieveClass = 
			function elmtRetrieveClass() 
		{
			var value = null;
			
			var sClass = null;
			
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWClass();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			sClass = value.getKWValue();
			if (validate.isString(sClass))
			{
				this.m_sKWClass = sClass;
				//console.debug(this.kWLogDisplay("m_sKWClass", this.m_sKWClass));
			}
		};
		
		elmt.prototype.elmtRetrieveClassOff = 
			function elmtRetrieveClassOff() 
		{
			var value = null;
			
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWClassOff();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			this.m_sKWClassOff = value.getKWValue();
			if (validate.isString(this.m_sKWClassOff))
			{
				//console.debug(this.kWLogDisplay("m_sKWClassOff", this.m_sKWClassOff));
			}
		};
		
		elmt.prototype.elmtRetrieveClassOn = 
			function elmtRetrieveClassOn() 
		{
			var value = null;
			
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWClassOn();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			this.m_sKWClassOn = value.getKWValue();
			if (validate.isString(this.m_sKWClassOn))
			{
				//console.debug(this.kWLogDisplay("m_sKWClassOn", this.m_sKWClassOn));
			}
		};
		
		elmt.prototype.elmtRetrieveContentEditable = 
			function elmtRetrieveContentEditable() 
		{
			var value	= null;
			
			var bVal	= false;
			
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWContentEditable();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWContentEditable = bVal;
				//console.debug(this.kWLogDisplay("m_bKWContentEditable", this.m_bKWContentEditable));
			}
		};
		
		elmt.prototype.elmtRetrieveContextMenu = 
			function elmtRetrieveContextMenu() 
		{
			var value = null;
			
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWContextMenu();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			this.m_sKWContextMenu = value.getKWValue();
			if (validate.isString(this.m_sKWContextMenu))
			{
				//console.debug(this.kWLogDisplay("m_sKWContextMenu", this.m_sKWContextMenu));
			}
		};
		
		elmt.prototype.elmtRetrieveDir = 
			function elmtRetrieveDir() 
		{
			var value = null;
			
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWDir();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			this.m_sKWDir = value.getKWValue();
			if (validate.isString(this.m_sKWDir))
			{
				//console.debug(this.kWLogDisplay("m_sKWDir", this.m_sKWDir));
			}
		};
		
		elmt.prototype.elmtRetrieveDraggable = 
			function elmtRetrieveDraggable() 
		{
			var value = null;
			
			var bVal = false;
			
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWDraggable();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWDraggable = bVal;
				//console.debug(this.kWLogDisplay("m_bKWDraggable", this.m_bKWDraggable));
			}
		};
		
		elmt.prototype.elmtRetrieveDropZone = 
			function elmtRetrieveDropZone() 
		{
			var value = null;
			
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWDropZone();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			this.m_sKWDropZone = value.getKWValue();
			if (validate.isString(this.m_sKWDropZone))
			{
				//console.debug(this.kWLogDisplay("m_sKWDropZone", this.m_sKWDropZone));
			}
		};
		
		elmt.prototype.elmtRetrieveHidden =
			function elmtRetrieveHidden() 
		{
			var value	= null;
			
			var bVal	= false;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWHidden();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWHidden = bVal;
				//console.debug(this.kWLogDisplay("m_bKWHidden", this.m_bKWHidden));
			}
		};
		
		elmt.prototype.elmtRetrieveHtml = 
			function elmtRetrieveHtml() 
		{
			//console.log(this.kWLogCalled());

			this.elmtRetrieveHtmlField();
			this.elmtRetrieveHtmlKey();
			this.elmtRetrieveHtmlView();
		};	
		
		elmt.prototype.elmtRetrieveHtmlField = 
			function elmtRetrieveHtmlField() 
		{
			//console.log(this.kWLogCalled());

			if (this.m_bKWHtmlRetrieved)
			{
			 	return;
			}

			if (this.m_bKWHasModel)
			{
				//console.debug(this.kWLogDisplay("m_bKWHasModel", this.m_bKWHasModel));
				if (validate.isString(this.m_kWValueField))
				{
					this.m_sKWHtml = this.m_kWValueField;
					//console.debug(this.kWLogDisplay("m_sKWHtml", this.m_sKWHtml));
					this.m_bKWHtmlRetrieved = true;
				}
			}
		};	
		
		elmt.prototype.elmtRetrieveHtmlKey = 
			function elmtRetrieveHtmlKey() 
		{
			var value	= null;
			
			var sKey	= null;
			
			//console.log(this.kWLogCalled());

			if (this.m_bKWHtmlRetrieved)
			{
			 	return;
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWKeyHtml();
			if (!validate.isNotNull(value))
			{
				return;
			}

			this.m_sKWHtml = value.getKWValue();
			if (validate.isString(this.m_sKWHtml))
			{
				//console.debug(this.kWLogDisplay("m_sKWHtml", this.m_sKWHtml));
				this.m_bKWHtmlRetrieved = true;
			}
		};
		
		elmt.prototype.elmtRetrieveHtmlView = 
			function elmtRetrieveHtmlView() 
		{
			var value = null;
			
			//console.log(this.kWLogCalled());

			if (this.m_bKWHtmlRetrieved)
			{
			 	return;
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWHtml();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			this.m_sKWHtml = value.getKWValue();
			if (validate.isString(this.m_sKWHtml))
			{
				//console.debug(this.kWLogDisplay("m_sKWHtml", this.m_sKWHtml));
				this.m_bKWHtmlRetrieved = true;
			}
		};
		
		elmt.prototype.elmtRetrieveIsVisible = 
			function elmtRetrieveIsVisible() 
		{
			var value	= null;
			
			var bVal	= false;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWIsVisible();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWIsVisible = bVal;
				//console.debug(this.kWLogDisplay("m_bKWIsVisible", this.m_bKWIsVisible));
			}
		};
		
		elmt.prototype.elmtRetrieveLang = 
			function elmtRetrieveLang() 
		{
			var value = null;
			
			console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWLang();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			this.m_sKWLang = value.getKWValue();
			if (validate.isString(this.m_sKWLang))
			{
				//console.debug(this.kWLogDisplay("m_sKWLang", this.m_sKWLang));
			}
		};
		
		elmt.prototype.elmtRetrieveModelText = 
			function elmtRetrieveModelText() 
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(this.m_sField))
			{
				return
			}
			
			this.m_sKWText = this.getModelText(this.m_sField);
			if (!validate.isString(this.m_sKWText))
			{
				console.error(this.kWLogErrRetrieve("m_sKWText"));
			}
			
			//console.log(this.kWLogDisplay("m_sKWText", this.m_sKWText));
		};
		
		elmt.prototype.elmtRetrieveParentClass = 
			function elmtRetrieveParentClass() 
		{
			//console.log(this.kWLogCalled());

			if (validate.isString(this.m_sKWClassParent))
			{
				return; 
			}
			
			if (!validate.isDom(this.m_kWDomParent))
			{
				console.error(this.kWLogInvalid("m_kWDomParent"));
			}
			
			this.m_sKWClassParent = this.m_kWDomParent.attr("class");
			if (!validate.isString(this.m_sKWClassParent))
			{
				//console.error(this.kWLogErrRetrieve("m_sKWClassParent"));
			}
			
			//console.debug(this.kWLogDisplay("m_sKWClassParent", this.m_sKWClassParent));
		};
		
		elmt.prototype.elmtRetrieveParentID = 
			function elmtRetrieveParentID() 
		{
			//console.log(this.kWLogCalled());

			if (validate.isString(this.m_sKWIDParent))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isDom(this.m_kWDomParent))
			{
				console.error(this.kWLogInvalid("m_kWDomParent"));
			}
			
			this.m_sKWIDParent = this.m_kWDomParent.elmt("id");
			if (!validate.isString(this.m_sKWIDParent))
			{
				console.error(log.errRetrieve("m_sKWIDParent"));
			}		
		};
		
		elmt.prototype.elmtRetrieveSpellCheck = 
			function elmtRetrieveSpellCheck() 
		{
			var value	= null;
			
			var bVal	= false;
			
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWSpellCheck();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWSpellCheck = bVal;
				//console.debug(this.kWLogDisplay("m_bKWSpellCheck", this.m_bKWSpellCheck));
			}
		};
		
		elmt.prototype.elmtRetrieveStyle = 
			function elmtRetrieveStyle() 
		{
			var value = null;
			
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWStyle();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			this.m_sKWStyle = value.getKWValue();
			if (validate.isString(this.m_sKWStyle))
			{
				//console.debug(this.kWLogDisplay("m_sKWStyle", this.m_sKWStyle));
			}
		};
		
		elmt.prototype.elmtRetrieveTabIndex = 
			function elmtRetrieveTabIndex() 
		{
			var value	= null;
			
			var nVal	= -1;
			
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWTabIndex();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			nVal = value.getKWValue();
			if (validate.isNumberNotNeg(nVal))
			{
				this.m_nKWTabIndex = nVal;
				//console.debug(this.kWLogDisplay("m_nKWTabIndex", this.m_nKWTabIndex));
			}
		};
		
		elmt.prototype.elmtRetrieveText = 
			function elmtRetrieveText() 
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWText();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			this.m_sKWText = value.getKWValue();
			if (validate.isString(this.m_sKWText))
			{
				//console.debug(this.kWLogDisplay("m_sKWText", this.m_sKWText));
			}
		};
		
		elmt.prototype.elmtRetrieveTitle = 
			function elmtRetrieveTitle() 
		{
			//console.log(this.kWLogCalled());

			this.elmtRetrieveTitleKey();
			this.elmtRetrieveTitleRaw();
		};	
		
		elmt.prototype.elmtRetrieveTitleKey = 
			function elmtRetrieveTitleKey() 
		{
			var value	= null;
			
			var sKey	= null;
			
			//console.log(this.kWLogCalled());

			if (this.m_bKWTitleRetrieved)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWKeyTitle();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			sKey = value.getKWValue();
			if (!validate.isString(sKey))
			{
				return;
			}
		
			//console.debug(this.kWLogDisplay("sKey", sKey));
		
			this.m_sKWTitle = value.getKWValue();
			if (validate.isString(this.m_sKWTitle))
			{
				//console.debug(this.kWLogDisplay("m_sKWTitle", this.m_sKWTitle));
				this.m_bKWTitleRetrieved = true;
			}
		};
		
		elmt.prototype.elmtRetrieveTitleRaw = 
			function elmtRetrieveTitleRaw() 
		{
			var value = null;
			
			//console.log(this.kWLogCalled());

			if (this.m_bKWTitleRetrieved)
			{
				return;
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWTitle();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			this.m_sKWTitle = value.getKWValue();
			if (validate.isString(this.m_sKWTitle))
			{
				//console.debug(this.kWLogDisplay("m_sKWTitle", this.m_sKWTitle));
				this.m_bKWTitleRetrieved = true;
			}
		};
		
		elmt.prototype.elmtSetAttr = 
			function elmtSetAttr(sKey, sVal)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWAttrs))
			{
				console.error(this.kWLogInvalid("m_kWAttrs"));
			}
			
			this.m_kWAttrs.set(sKey, sVal);
		};

		elmt.prototype.elmtSetClass = 
			function elmtSetClass()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(this.m_sKWClass))
			{
				return;
			}
			
			if (!validate.isNotNull(this.m_kWAttrs))
			{
				return;
			}
			
			this.m_kWAttrs.setKWClass(this.m_sKWClass);
		};
		
		elmt.prototype.elmtSetHeight =
			function elmtSetHeight(nVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}

			this.m_kWDom.height(nVal);
		};

		elmt.prototype.elmtSetHtml =
			function elmtSetHtml()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNumber(this.m_sKWHtml))
			{
				this.m_sKWHtml = this.m_sKWHtml + "";
			}

			if (!validate.isString(this.m_sKWHtml))
			{
				return;
			}
			
			if (!validate.isNotNull(this.m_kWAttrs))
			{
				return;
			}
			
			this.m_kWAttrs.setKWHtml(this.m_sKWHtml);
		};

		elmt.prototype.elmtSetIsVisible = 
			function elmtSetIsVisible(bVal)
		{
			//console.log(this.kWLogCalled());
			
			this.m_bKWIsVisible = bVal;
			this.elmtSetVisibility();
		};

		elmt.prototype.elmtSetStyle = 
			function elmtSetStyle(sKey, sVal)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWCSS))
			{
				console.error(this.kWLogInvalid("m_kWCSS"));
			}

			this.m_kWCSS.setKWVal(sKey, sVal);
		};

		elmt.prototype.elmtSetText = 
			function elmtSetText(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWAttrs))
			{
				console.error(this.kWLogInvalid("m_kWAttrs"));
			}
			
			this.m_kWAttrs.setKWText(sVal);
		};

		elmt.prototype.elmtSetVisibility = 
			function elmtSetVisibility()
		{
			//console.log(this.kWLogCalled());
			
			if (this.m_bKWIsVisible)
			{
				this.elmtShow();
			}
			else
			{
				this.elmtHide();
			}
		};

		elmt.prototype.elmtSetWidth =
			function elmtSetWidth(nVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}

			this.m_kWDom.width(nVal);
		};

		elmt.prototype.elmtShow =
			function elmtShow()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWCSS))
			{
				console.error(this.kWLogInvalid("m_kWCSS"));
			}
			
			this.m_kWCSS.show();
		};
		
		elmt.prototype.elmtSubscribeClick = 
			function elmtSubscribeClick()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}

			if (!validate.isFunction(this.elmtCallbackClick))
			{
				console.error(this.kWLogInvalid("elmtCallbackClick"));
			}

			this.m_kWDom.click(this.elmtCallbackClick);
		};

		elmt.prototype.elmtSubscribeDoubleClick = 
			function elmtSubscribeDoubleClick()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}

			if (!validate.isFunction(this.elmtCallbackDoubleClick))
			{
				console.error(this.kWLogInvalid("elmtCallbackDoubleClick"));
			}

			this.m_kWDom.dblclick(this.elmtCallbackDoubleClick);
		};

		elmt.prototype.elmtVerifyDomNotPresent =
			function elmtVerifyDomNotPresent()
			{
				//console.log(this.kWLogCalled());

				if (validate.isDom(this.m_kWDom))
				{
					console.error(this.kWLogRepeated());
				}

				if (!validate.isString(this.m_sKWID))
				{
					console.error(this.kWLogInvalid("m_sKWID"));
				}

				this.m_kWDom = $('#' + this.m_sKWID);
				if(validate.isDom(this.m_kWDom))
				{
					console.error(this.kWLogDisplay(this.m_sKWID, "already created"));
					return false;
				}

				//console.debug(this.kWLogDisplay(this.m_sKWID, "not created"));
				return true;
			};

		return elmt;

	}
);
