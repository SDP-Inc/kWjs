/**********************************************************************
 *
 * html/obj.js
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
		"../../../impl/attr/accessKey/obj",
		"../../../impl/attr/class/obj",
		"../../../impl/attr/contentEditable/obj",
		"../../../impl/attr/contextMenu/obj",
		"../../../impl/attr/dir/obj",
		"../../../impl/attr/draggable/obj",
		"../../../impl/attr/dropZone/obj",
		"../../../impl/attr/hidden/obj",
		"../../../impl/attr/html/obj",
		"../../../impl/attr/id/obj",
		"../../../impl/attr/lang/obj",
		"../../../impl/attr/spellCheck/obj",
		"../../../impl/attr/style/obj",
		"../../../impl/attr/tabIndex/obj",
		"../../../impl/attr/text/obj",		
		"../../../impl/attr/title/obj",		
		"../obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
		accessKey,
		class_,
		contentEditable,
		contextMenu,
		dir,
		draggable,
		dropZone,
		hidden,
		vHtml,
		id,
		lang,
		spellCheck,
		style,
		tabIndex,
		text,
		title,
		base,
		validate,
		$
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function html() 
		{
			//console.log("html::constructor");
			
			this.m_kWAccessKey		    = null;
			this.m_kWClass			    = null;
			this.m_kWContentEditable	= null;
			this.m_kWContextMenu		= null;
			this.m_kWDir				= null;
			this.m_kWDraggable		    = null;
			this.m_kWDropZone		   	= null;
			this.m_kWHidden			    = null;
			this.m_kWHtml				= null;
			this.m_kWID				    = null;
			this.m_kWLang			    = null;
			this.m_kWSpellCheck	    	= null;
			this.m_kWStyle		    	= null;
			this.m_kWTabIndex		    = null;
			this.m_kWText			   	= null;
			this.m_kWTitle		    	= null;
			
			this.m_sKWAccessKey		    = null;
			this.m_sKWClass			    = null;
			this.m_sKWContextMenu	    = null;
			this.m_sKWDir			    = null;
			this.m_sKWDropZone  	    = null;
			this.m_sKWHtml		    	= null;
			this.m_sKWLang		    	= null;
			this.m_sKWStyle		    	= null;
			this.m_sKWText		    	= null;
			this.m_sKWTitle			    = null;
			
			this.m_bKWContentEditable	= null;
			this.m_bKWDraggable		    = null;
			this.m_bKWHidden		    = null;
			
			this.m_nKWTabIndex		    = -1
		}

		html.prototype = new base();
		html.prototype.constructor = html;
		html.constructor = base.prototype.constructor;

		html.prototype.check =
			function check() 
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		html.prototype.init = 
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

		html.prototype.getKWHtml =
			function()
			{
				return this.htmlGetHtml();
			};

		html.prototype.setKWAccessKey =
			function(sVal)
			{
				this.htmlSetAccessKey(sVal);
			};

		html.prototype.setKWClass =
			function(sVal)
		{
			this.htmlSetClass(sVal);
		};

		html.prototype.setKWContentEditable =
			function(bVal)
		{
			this.htmlSetContentEditable(bVal);
		};

		html.prototype.setKWContextMenu =
			function(sVal)
		{
			this.htmlSetContextMenu(sVal);
		};

		html.prototype.setKWDir =
			function(sVal)
		{
			this.htmlSetDir(sVal);
		};

		html.prototype.setKWDraggable =
			function(bVal)
		{
			this.htmlSetDraggable(bVal);
		};

		html.prototype.setKWDropZone =
			function(sVal)
		{
			this.htmlSetDropZone(sVal);
		};

		html.prototype.setKWHidden =
			function(bVal)
		{
			this.htmlSetHidden(bVal);
		};

		html.prototype.setKWHtml =
			function(sVal)
		{
			this.htmlSetHtml(sVal);
		};

		html.prototype.setKWLang =
			function(sVal)
		{
			this.htmlSetLang(sVal);
		};

		html.prototype.setKWSpellCheck =
			function(bVal)
		{
			this.htmlSetSpellCheck(sVal);
		};

		html.prototype.setKWStyle =
			function(sVal)
		{
			this.htmlSetStyle(sVal);
		};

		html.prototype.setKWTabIndex =
			function(nVal)
		{
			this.htmlSetTabIndex(nVal);
		};

		html.prototype.setKWText =
			function(sVal) 
		{
			this.htmlSetText(sVal);
		};

		html.prototype.setKWTitle =
			function(sVal) 
		{
			this.htmlSetTitle(sVal);
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

		html.prototype.clearClass = 
			function() 
		{
			this.htmlClearClass();
		};

		html.prototype.clearText = 
			function() 
		{
			this.htmlClearText();
		};

		html.prototype.disable = 
			function() 
		{
			this.htmlDisable();
		};

		html.prototype.enable = 
			function() 
		{
			this.htmlEnable();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		html.prototype.baseCreateOR =
			function baseCreateOR()
			{
				this.htmlCreate();
			};

		html.prototype.baseDeleteOR =
			function baseDeleteOR()
			{
				this.htmlDelete();
			};

		html.prototype.baseInitOR =
			function()
		{
			this.htmlInit(); 
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		html.prototype.htmlCreateOR =
			function htmlCreateOR()
			{
				console.error(this.kWLogNotImpl());
			};

		html.prototype.htmlDeleteOR =
			function htmlDeleteOR()
			{
				console.error(this.kWLogNotImpl());
			};

		html.prototype.htmlInitOR =
			function htmlInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		html.prototype.htmlClearText = 
			function htmlClearText()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWText))
			{
				return;
			}
			
			this.m_kWText.clear();
		};

		html.prototype.htmlClearClass = 
			function htmlClearClass()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWClass))
			{
				return;
			}
			
			this.m_kWClass.kWClear();
		};

		html.prototype.htmlCreate = 
			function htmlCreate()
		{
			//console.log(this.kWLogCalled());
			
			this.htmlCreateAccessKey();
			this.htmlCreateClass();
			this.htmlCreateContentEditable();
			this.htmlCreateContextMenu();
			this.htmlCreateDir();
			this.htmlCreateDraggable();
			this.htmlCreateDropZone();
			this.htmlCreateHtml();
			this.htmlCreateHidden();
			this.htmlCreateID();
			this.htmlCreateLang();
			this.htmlCreateSpellCheck();
			this.htmlCreateStyle();
			this.htmlCreateTabIndex();
			this.htmlCreateText();
			this.htmlCreateTitle();
			
			this.htmlCreateOR();
		};
		
		html.prototype.htmlCreateAccessKey = 
			function htmlCreateAccessKey()
		{
			var value = null;

			var sValue = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWAccessKey))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWAccessKey();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWAccessKey;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.htmlCreateAccessKeyImpl();

			this.m_kWAccessKey.setKWValue(sValue);
		};

		html.prototype.htmlCreateAccessKeyImpl =
			function htmlCreateAccessKeyImpl()
			{
				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWAccessKey))
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

				this.m_kWAccessKey = new accessKey();

				this.m_kWAccessKey.setKWID(this.m_sKWID);
				this.m_kWAccessKey.setKWDom(this.m_kWDom);

				this.m_kWAccessKey.check();
				this.m_kWAccessKey.init();

				this.kWAddAttr(this.m_kWAccessKey);
			};

		html.prototype.htmlCreateClass =
			function htmlCreateClass()
		{
			var value = null;

			var sValue = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWClass))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWClass();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWClass;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.htmlCreateClassImpl();

			this.m_kWClass.setKWValue(sValue);
		};

		html.prototype.htmlCreateClassImpl =
			function htmlCreateClassImpl()
			{
				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWClass))
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

				this.m_kWClass = new class_();

				this.m_kWClass.setKWIDParent(this.m_sKWID);
				this.m_kWClass.setKWDom(this.m_kWDom);

				this.m_kWClass.check();
				this.m_kWClass.init();

				this.kWAddAttr(this.m_kWClass);
			};

		html.prototype.htmlCreateContentEditable =
			function htmlCreateContentEditable()
		{
			var value = null;

			var bValue = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWContentEditable))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWContentEditable();
			if (validate.isNotNull(value))
			{
				bValue = value.getKWValue();
			}

			if (!validate.isBool(bValue))
			{
				bValue = this.m_bKWContentEditable;
			}

			if (!validate.isBool(bValue))
			{
				return;
			}

			this.htmlCreateContentEditableImpl();

			this.m_kWContentEditable.setKWValue(bValue);
		};

		html.prototype.htmlCreateContentEditableImpl =
			function htmlCreateContentEditableImpl()
			{
				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWContentEditable))
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

				this.m_kWContentEditable = new contentEditable();

				this.m_kWContentEditable.setKWIDParent(this.m_sKWID);
				this.m_kWContentEditable.setKWDom(this.m_kWDom);

				this.m_kWContentEditable.check();
				this.m_kWContentEditable.init();

				this.kWAddAttr(this.m_kWContentEditable);
			};

		html.prototype.htmlCreateContextMenu =
			function htmlCreateContextMenu()
		{
			var value = null;

			var sValue = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWContextMenu))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWContextMenu();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWContextMenu;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.htmlCreateContextMenuImpl();

			this.m_kWContextMenu.setKWValue(sValue);
		};

		html.prototype.htmlCreateContextMenuImpl =
			function htmlCreateContextMenuImpl()
			{
				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWContextMenu))
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

				this.m_kWContextMenu = new contextMenu();

				this.m_kWContextMenu.setKWIDParent(this.m_sKWID);
				this.m_kWContextMenu.setKWDom(this.m_kWDom);

				this.m_kWContextMenu.check();
				this.m_kWContextMenu.init();

				this.kWAddAttr(this.m_kWContextMenu);
			};

		html.prototype.htmlCreateDir =
			function htmlCreateDir()
		{
			var value = null;

			var sValue = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWDir))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWDir();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWDir;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.htmlCreateDirImpl();

			this.m_kWDir.setKWValue(sValue);
		};

		html.prototype.htmlCreateDirImpl =
			function htmlCreateDirImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWDir))
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

			this.m_kWDir = new dir();

			this.m_kWDir.setKWIDParent(this.m_sKWID);
			this.m_kWDir.setKWDom(this.m_kWDom);

			this.m_kWDir.check();
			this.m_kWDir.init();

			this.kWAddAttr(this.m_kWDir);
		};

		html.prototype.htmlCreateDraggable =
			function htmlCreateDraggable()
		{
			var value = null;

			var bValue = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWDraggable))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWDraggable();
			if (validate.isNotNull(value))
			{
				bValue = value.getKWValue();
			}

			if (!validate.isBool(bValue))
			{
				bValue = this.m_sKWDraggable;
			}

			if (!validate.isString(bValue))
			{
				return;
			}

			this.htmlCreateDraggableImpl();

			this.m_kWDraggable.setKWValue(bValue);
		};

		html.prototype.htmlCreateDraggableImpl =
			function htmlCreateDraggableImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWDraggable))
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

			this.m_kWDraggable = new draggable();

			this.m_kWDraggable.setKWIDParent(this.m_sKWID);
			this.m_kWDraggable.setKWDom(this.m_kWDom);

			this.m_kWDraggable.check();
			this.m_kWDraggable.init();

			this.kWAddAttr(this.m_kWDraggable);
		};

		html.prototype.htmlCreateDropZone =
			function htmlCreateDropZone()
			{
				var value = null;

				var sValue = null;

				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWDropZone))
				{
					console.error(this.kWLogRepeated());
				}

				if (!validate.isNotNull(this.m_kWView))
				{
					console.error(this.kWLogInvalid("m_kWView"));
				}

				value = this.m_kWView.getKWDropZone();
				if (validate.isNotNull(value))
				{
					sValue = value.getKWValue();
				}

				if (!validate.isString(sValue))
				{
					sValue = this.m_sKWDropZone;
				}

				if (!validate.isString(sValue))
				{
					return;
				}

				this.htmlCreateDropZoneImpl();

				this.m_kWDropZone.setKWValue(sValue);
			};

		html.prototype.htmlCreateDropZoneImpl =
			function htmlCreateDropZoneImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWDropZone))
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

			this.m_kWDropZone = new dropZone();

			this.m_kWDropZone.setKWIDParent(this.m_sKWID);
			this.m_kWDropZone.setKWDom(this.m_kWDom);

			this.m_kWDropZone.check();
			this.m_kWDropZone.init();

			this.kWAddAttr(this.m_kWDropZone);
		};

		html.prototype.htmlCreateHidden =
			function htmlCreateHidden()
		{
			var value = null;

			var bValue = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWHidden))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWHidden();
			if (validate.isNotNull(value))
			{
				bValue = value.getKWValue();
			}

			if (!validate.isBool(bValue))
			{
				bValue = this.m_bKWHidden;
			}

			if (!validate.isString(bValue))
			{
				return;
			}

			this.htmlCreateHiddenImpl();

			this.m_kWHidden.setKWValue(bValue);
		};

		html.prototype.htmlCreateHiddenImpl =
			function htmlCreateHiddenImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWHidden))
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

			this.m_kWHidden = new hidden();

			this.m_kWHidden.setKWIDParent(this.m_sKWID);
			this.m_kWHidden.setKWDom(this.m_kWDom);

			this.m_kWHidden.check();
			this.m_kWHidden.init();

			this.kWAddAttr(this.m_kWHidden);
		};

		html.prototype.htmlCreateHtml =
			function htmlCreateHtml()
			{
				var value   = null;

				var sValue  = null;

				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWHtml))
				{
					console.error(this.kWLogRepeated());
				}

				if (!validate.isNotNull(this.m_kWView))
				{
					console.error(this.kWLogInvalid("m_kWView"));
				}

				value = this.m_kWView.getKWHtml();
				if (validate.isNotNull(value))
				{
					sValue = value.getKWValue();
				}

				if (!validate.isString(sValue))
				{
					sValue = this.m_sKWHtml;
				}

				if (!validate.isString(sValue))
				{
					return;
				}

				this.htmlCreateHtmlImpl();

				this.m_kWHtml.setKWValue(sValue);
			};

		html.prototype.htmlCreateHtmlImpl =
			function htmlCreateHtmlImpl()
			{
				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWHtml))
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

				this.m_kWHtml = new vHtml();

				this.m_kWHtml.setKWIDParent(this.m_sKWID);
				this.m_kWHtml.setKWDom(this.m_kWDom);

				this.m_kWHtml.check();
				this.m_kWHtml.init();

				this.kWAddAttr(this.m_kWHtml);
			};

		html.prototype.htmlCreateID =
			function htmlCreateID()
			{
				var value = null;

				var sValue  = null;

				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWID))
				{
					console.error(this.kWLogRepeated());
				}

				if (!validate.isNotNull(this.m_kWView))
				{
					console.error(this.kWLogInvalid("m_kWView"));
				}

				value = this.m_kWView.getKWValueID();
				if (validate.isNotNull(value))
				{
					sValue = value.getKWValue();
				}

				if (!validate.isString(sValue))
				{
					sValue = this.m_sKWID;
				}

				if (!validate.isString(sValue))
				{
					console.error(this.kWLogInvalid("sValue"));
				}

				this.htmlCreateIDImpl();

				this.m_kWID.setKWValue(this.m_sKWID);
			};

		html.prototype.htmlCreateIDImpl =
			function htmlCreateIDImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWID))
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

			this.m_kWID = new id();

			this.m_kWID.setKWIDParent(this.m_sKWID);
			this.m_kWID.setKWDom(this.m_kWDom);

			this.m_kWID.check();
			this.m_kWID.init();

			this.kWAddAttr(this.m_kWID);
		};

		html.prototype.htmlCreateLang =
			function htmlCreateLang()
			{
				var value = null;

				var sValue = null;

				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWLang))
				{
					console.error(this.kWLogRepeated());
				}

				if (!validate.isNotNull(this.m_kWView))
				{
					console.error(this.kWLogInvalid("m_kWView"));
				}

				value = this.m_kWView.getKWLang();
				if (validate.isNotNull(value))
				{
					sValue = value.getKWValue();
				}

				if (!validate.isString(sValue))
				{
					sValue = this.m_sKWLang;
				}

				if (!validate.isString(sValue))
				{
					return;
				}

				this.htmlCreateLangImpl();

				this.m_kWLang.setKWValue(sValue);
			};

		html.prototype.htmlCreateLangImpl =
			function htmlCreateLangImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWLang))
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

			this.m_kWLang = new lang();

			this.m_kWLang.setKWIDParent(this.m_sKWID);
			this.m_kWLang.setKWDom(this.m_kWDom);

			this.m_kWLang.check();
			this.m_kWLang.init();

			this.kWAddAttr(this.m_kWLang);
		};

		html.prototype.htmlCreateSpellCheck =
			function htmlCreateSpellCheck()
			{
				var value = null;
				var bValue = null;

				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWSpellCheck))
				{
					console.error(this.kWLogRepeated());
				}

				if (!validate.isNotNull(this.m_kWView))
				{
					console.error(this.kWLogInvalid("m_kWView"));
				}

				value = this.m_kWView.getKWSpellCheck();
				if (validate.isNotNull(value))
				{
					bValue = value.getKWValue();
				}

				if (!validate.isBool(bValue))
				{
					bValue = this.m_bKWSpellCheck;
				}

				if (!validate.isBool(bValue))
				{
					return;
				}

				this.htmlCreateSpellCheckImpl();

				this.m_kWSpellCheck.setKWValue(bValue);
			};

		html.prototype.htmlCreateSpellCheckImpl =
			function htmlCreateSpellCheckImpl()
			{
				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWSpellCheck))
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

				this.m_kWSpellCheck = new spellCheck();

				this.m_kWSpellCheck.setKWIDParent(this.m_sKWID);
				this.m_kWSpellCheck.setKWDom(this.m_kWDom);

				this.m_kWSpellCheck.check();
				this.m_kWSpellCheck.init();

				this.kWAddAttr(this.m_kWSpellCheck);
			};

		html.prototype.htmlCreateStyle =
			function htmlCreateStyle()
		{
			var value = null;

			var sValue = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWStyle))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWStyle();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWStyle;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.htmlCreateStyleImpl();

			this.m_kWStyle.setKWValue(sValue);
		};

		html.prototype.htmlCreateStyleImpl =
			function htmlCreateStyleImpl()
			{
				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWStyle))
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

				this.m_kWStyle = new style();

				this.m_kWStyle.setKWIDParent(this.m_sKWID);
				this.m_kWStyle.setKWDom(this.m_kWDom);

				this.m_kWStyle.check();
				this.m_kWStyle.init();

				this.kWAddAttr(this.m_kWStyle);
			};

		html.prototype.htmlCreateTabIndex =
			function htmlCreateTabIndex()
		{
			var value = null;

			var nValue = -1;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWTabIndex))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			value = this.m_kWView.getKWTabIndex();
			if (validate.isNotNull(value))
			{
				nValue = value.getKWValue();
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				nValue = this.m_nKWTabIndex;
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				return;
			}

			this.htmlCreateTabIndexImpl();

			this.m_kWTabIndex.setKWValue(nValue);
		};

		html.prototype.htmlCreateTabIndexImpl =
			function htmlCreateTabIndexImpl()
			{
				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWTabIndex))
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

				this.m_kWTabIndex = new tabIndex();

				this.m_kWTabIndex.setKWIDParent(this.m_sKWID);
				this.m_kWTabIndex.setKWDom(this.m_kWDom);

				this.m_kWTabIndex.check();
				this.m_kWTabIndex.init();

				this.kWAddAttr(this.m_kWTabIndex);
			};

		html.prototype.htmlCreateText =
			function htmlCreateText()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWText))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWText();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWText;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.htmlCreateTextImpl();

			this.m_kWText.setKWValue(sValue);
		};

		html.prototype.htmlCreateTextImpl =
			function htmlCreateTextImpl()
			{
				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWText))
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

				this.m_kWText = new text();

				this.m_kWText.setKWIDParent(this.m_sKWID);
				this.m_kWText.setKWDom(this.m_kWDom);

				this.m_kWText.check();
				this.m_kWText.init();

				this.kWAddAttr(this.m_kWText);
			};

		html.prototype.htmlCreateTitle =
			function htmlCreateTitle()
		{
			var value = null;

			var sValue = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWTitle))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWTitle();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWTitle;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.htmlCreateTitleImpl();

			this.m_kWTitle.setKWValue(sValue);
		};

		html.prototype.htmlCreateTitleImpl =
			function htmlCreateTitleImpl()
			{
				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWTitle))
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

				this.m_kWTitle = new title();

				this.m_kWTitle.setKWIDParent(this.m_sKWID);
				this.m_kWTitle.setKWDom(this.m_kWDom);

				this.m_kWTitle.check();
				this.m_kWTitle.init();

				this.kWAddAttr(this.m_kWTitle);
			};

		html.prototype.htmlDelete =
			function htmlDelete()
		{
			//console.log("html::constructor");

			this.m_kWAccessKey		    = null;
			this.m_kWClass			    = null;
			this.m_kWContentEditable	= null;
			this.m_kWContextMenu		= null;
			this.m_kWDir				= null;
			this.m_kWDraggable		    = null;
			this.m_kWDropZone		   	= null;
			this.m_kWHidden			    = null;
			this.m_kWHtml				= null;
			this.m_kWID				    = null;
			this.m_kWLang			    = null;
			this.m_kWSpellCheck	    	= null;
			this.m_kWStyle		    	= null;
			this.m_kWTabIndex		    = null;
			this.m_kWText			   	= null;
			this.m_kWTitle		    	= null;

			this.htmlDeleteOR();
		};

		html.prototype.htmlGetHtml =
			function htmlGetHtml()
			{
				//console.log(this.kWLogCalled());

				if (!this.m_bKWInit)
				{
					return;
				}

				if (!validate.isNotNull(this.m_kWHtml))
				{
					this.htmlCreateHtmlImpl();
				}

				return this.m_kWHtml.getKWValue();
			};

		html.prototype.htmlInit =
			function htmlInit()
			{
				//console.log(this.kWLogCalled());
				this.htmlInitOR();
			};

		html.prototype.htmlSetAccessKey =
			function htmlSetAccessKey(sVal)
			{
				//console.log(this.kWLogCalled());

				if (!validate.isString(sVal))
				{
					return;
				}

				this.m_sKWAccessKey = sVal;

				if (!this.m_bKWInit)
				{
					return;
				}

				if (!validate.isNotNull(this.m_kWAccessKey))
				{
					this.htmlCreateAccessKeyImpl();
				}

				this.m_kWAccessKey.setKWValue(this.m_sKWAccessKey);
			};

		html.prototype.htmlSetClass =
			function htmlSetClass(sVal)
			{
				//console.log(this.kWLogCalled());

				if (!validate.isString(sVal))
				{
					return;
				}

				this.m_sKWClass = sVal;

				if (!this.m_bKWInit)
				{
					return;
				}

				if (!validate.isNotNull(this.m_kWClass))
				{
					this.htmlCreateClassImpl();
				}

				this.m_kWClass.setKWValue(this.m_sKWClass);
			};

		html.prototype.htmlSetContentEditable =
			function htmlSetContentEditable(bVal)
			{
				//console.log(this.kWLogCalled());

				if (!validate.isBool(bVal))
				{
					return;
				}

				this.m_bKWContentEditable = bVal;

				if (!this.m_bKWInit)
				{
					return;
				}

				if (!validate.isNotNull(this.m_kWContentEditable))
				{
					this.htmlCreateContentEditableImpl();
				}

				this.m_kWContentEditable.setKWValue(this.m_bKWContentEditable);
			};

		html.prototype.htmlSetContextMenu =
			function htmlSetContextMenu(sVal)
			{
				//console.log(this.kWLogCalled());

				if (!validate.isString(sVal))
				{
					return;
				}

				this.m_sKWContextMenu = sVal;

				if (!this.m_bKWInit)
				{
					return;
				}

				if (!validate.isNotNull(this.m_kWContextMenu))
				{
					this.htmlCreateContextMenuImpl();
				}

				this.m_kWContextMenu.setKWValue(this.m_sKWContextMenu);
			};

		html.prototype.htmlSetDir =
			function htmlSetDir(sVal)
			{
				//console.log(this.kWLogCalled());

				if (!validate.isString(sVal))
				{
					return;
				}

				this.m_sKWDir = sVal;

				if (!this.m_bKWInit)
				{
					return;
				}

				if (!validate.isNotNull(this.m_kWDir))
				{
					this.htmlCreateDirImpl();
				}

				this.m_kWDir.setKWValue(this.m_sKWDir);
			};

		html.prototype.htmlSetDraggable =
			function htmlSetDraggable(bVal)
			{
				//console.log(this.kWLogCalled());

				if (!validate.isBool(bVal))
				{
					return;
				}

				this.m_bKWDraggable = bVal;

				if (!this.m_bKWInit)
				{
					return;
				}

				if (!validate.isNotNull(this.m_kWDraggable))
				{
					this.htmlCreateDraggableImpl();
				}

				this.m_kWDraggable.setKWValue(this.m_bKWDraggable);
			};

		html.prototype.htmlSetDropZone =
			function htmlSetDropZone(sVal)
			{
				//console.log(this.kWLogCalled());

				if (!validate.isString(sVal))
				{
					return;
				}

				this.m_sKWDropZone = sVal;

				if (!this.m_bKWInit)
				{
					return;
				}

				if (!validate.isNotNull(this.m_kWDropZone))
				{
					this.htmlCreateDropZoneImpl();
				}

				this.m_kWDropZone.setKWValue(this.m_sKWDropZone);
			};

		html.prototype.htmlSetHidden =
			function htmlSetHidden(bVal)
			{
				//console.log(this.kWLogCalled());

				if (!validate.isBool(bVal))
				{
					return;
				}

				this.m_bKWHidden = bVal;

				if (!this.m_bKWInit)
				{
					return;
				}

				if (!validate.isNotNull(this.m_kWHidden))
				{
					this.htmlCreateHiddenImpl();
				}

				this.m_kWHidden.setKWValue(this.m_bKWHidden);
			};

		html.prototype.htmlSetHtml =
			function htmlSetHtml(sVal)
			{
				//console.log(this.kWLogCalled());

				if (!validate.isString(sVal))
				{
					return;
				}

				this.m_sKWHtml = sVal;

				if (!this.m_bKWInit)
				{
					return;
				}

				if (!validate.isNotNull(this.m_kWHtml))
				{
					this.htmlCreateHtmlImpl();
				}

				this.m_kWHtml.setKWValue(this.m_sKWHtml);
			};

		html.prototype.htmlSetID =
			function htmlSetID(sVal)
			{
				//console.log(this.kWLogCalled());

				if (!validate.isString(sVal))
				{
					return;
				}

				this.m_sKWID = sVal;

				if (!this.m_bKWInit)
				{
					return;
				}

				if (!validate.isNotNull(this.m_kWID))
				{
					this.htmlCreateIDImpl();
				}

				this.m_kWID.setKWValue(this.m_sKWID);
			};

		html.prototype.htmlSetLang =
			function htmlSetLang(sVal)
			{
				//console.log(this.kWLogCalled());

				if (!validate.isString(sVal))
				{
					return;
				}

				this.m_sKWLang = sVal;

				if (!this.m_bKWInit)
				{
					return;
				}

				if (!validate.isNotNull(this.m_kWLang))
				{
					this.htmlCreateLangImpl();
				}

				this.m_kWLang.setKWValue(this.m_sKWLang);
			};

		html.prototype.htmlSetSpellCheck =
			function htmlSetSpellCheck(sVal)
			{
				//console.log(this.kWLogCalled());

				if (!validate.isString(sVal))
				{
					return;
				}

				this.m_sKWSpellCheck = sVal;

				if (!this.m_bKWInit)
				{
					return;
				}

				if (!validate.isNotNull(this.m_kWSpellCheck))
				{
					this.htmlCreateSpellCheckImpl();
				}

				this.m_kWSpellCheck.setKWValue(this.m_sKWSpellCheck);
			};

		html.prototype.htmlSetStyle =
			function htmlSetStyle(sVal)
			{
				//console.log(this.kWLogCalled());

				if (!validate.isString(sVal))
				{
					return;
				}

				this.m_sKWStyle = sVal;

				if (!this.m_bKWInit)
				{
					return;
				}

				if (!validate.isNotNull(this.m_kWStyle))
				{
					this.htmlCreateStyleImpl();
				}

				this.m_kWStyle.setKWValue(this.m_sKWStyle);
			};

		html.prototype.htmlSetTabIndex =
			function htmlSetTabIndex(nVal)
			{
				//console.log(this.kWLogCalled());

				if (!validate.isNumberNotNeg(nVal))
				{
					return;
				}

				this.m_nKWTabIndex = nVal;

				if (!this.m_bKWInit)
				{
					return;
				}

				if (!validate.isNotNull(this.m_kWTabIndex))
				{
					this.htmlCreateTabIndexImpl();
				}

				this.m_kWTabIndex.setKWValue(this.m_nKWTabIndex);
			};

		html.prototype.htmlSetText =
			function htmlSetText(sVal)
			{
				//console.log(this.kWLogCalled());

				if (!validate.isString(sVal))
				{
					return;
				}

				this.m_sKWText = sVal;

				if (!this.m_bKWInit)
				{
					return;
				}

				if (!validate.isNotNull(this.m_kWText))
				{
					this.htmlCreateTextImpl();
				}

				this.m_kWText.setKWValue(this.m_sKWText);
			};

		html.prototype.htmlSetTitle =
			function htmlSetTitle(sVal)
			{
				//console.log(this.kWLogCalled());

				if (!validate.isString(sVal))
				{
					return;
				}

				this.m_sKWTitle = sVal;

				if (!this.m_bKWInit)
				{
					return;
				}

				if (!validate.isNotNull(this.m_kWTitle))
				{
					this.htmlCreateTitleImpl();
				}

				this.m_kWTitle.setKWValue(this.m_sKWTitle);
			};

		return html;

	}
);
