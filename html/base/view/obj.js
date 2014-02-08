/**********************************************************************
 *
 * base/obj.js
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
		"../../impl/value/accessKey/obj",
		"../../impl/value/class/obj",
		"../../impl/value/classOff/obj",
		"../../impl/value/classOn/obj",
		"../../impl/value/contentEditable/obj",
		"../../impl/value/contextMenu/obj",
		"../../impl/value/dir/obj",
		"../../impl/value/disabled/obj",
		"../../impl/value/display/obj",
		"../../impl/value/draggable/obj",
		"../../impl/value/dropZone/obj",
		"../../impl/value/hidden/obj",
		"../../impl/value/html/obj",
		"../../impl/value/isVisible/obj",
		"../../impl/value/keyHtml/obj",
		"../../impl/value/keyTitle/obj",
		"../../impl/value/lang/obj",
		"../../impl/value/spellCheck/obj",
		"../../impl/value/style/obj",
		"../../impl/value/tabIndex/obj",
		"../../impl/value/text/obj",
		"../../impl/value/title/obj",
		"kWMVC/viewMVC/obj",
		"kWStat/validate"
	],
	function
	(
		accessKey,
		class_,
		classOff,
		classOn,
		contentEditable,
		contextMenu,
		dir,
		disabled,
		display,
		draggable,
		dropZone,
		hidden,
		html,
		isVisible,
		keyHtml,
		keyTitle,
		lang,
		spellCheck,
		style,
		tabIndex,
		text,
		title,
		vmvc,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function base() 
		{
			//console.log("base::constructor");
			
			this.m_kWAccessKey		    = null;
			this.m_kWClass			    = null;
			this.m_kWClassOff			= null;
			this.m_kWClassOn			= null;
			this.m_kWContentEditable	= null;
			this.m_kWContextMenu		= null;
			this.m_kWDir				= null;
			this.m_kWDisabled			= null;
			this.m_kWDisplay			= null;
			this.m_kWDraggable		    = null;
			this.m_kWDropZone			= null;
			this.m_kWHidden			    = null;
			this.m_kWHtml				= null;
			this.m_kWIsVisible		    = null;
			this.m_kWKeyHtml			= null;
			this.m_kWKeyTitle			= null;
			this.m_kWLang				= null;
			this.m_kWSpellCheck		    = null;
			this.m_kWStyle			    = null;
			this.m_kWTabIndex			= null;
			this.m_kWText				= null;
			this.m_kWTitle			    = null;
			this.m_kWVisible			= null;
		}

		base.prototype = new vmvc();
		base.prototype.constructor = base;
		base.constructor = vmvc.prototype.constructor;

		base.prototype.check = 
			function check() 
		{
			vmvc.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		base.prototype.init = 
			function init() 
		{
			//console.log(this.kWLogCalled());
			vmvc.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		base.prototype.getKWAccessKey =
			function()
		{
			return this.m_kWAccessKey;
		};

		base.prototype.getKWClass =
			function()
		{
			return this.m_kWClass;
		};

		base.prototype.getKWClassOff =
			function()
		{
			return this.m_kWClassOff;
		};

		base.prototype.getKWClassOn =
			function()
		{
			return this.m_kWClassOn;
		};

		base.prototype.getKWContentEditable =
			function()
		{
			return this.m_kWContentEditable;
		};

		base.prototype.getKWContextMenu =
			function()
		{
			return this.m_kWContextMenu;
		};

		base.prototype.getKWDir =
			function()
		{
			return this.m_kWDir;
		};

		base.prototype.getKWDisabled =
			function()
		{
			return this.m_kWDisabled;
		};

		base.prototype.getKWDisplay =
			function()
		{
			return this.m_kWDisplay;
		};

		base.prototype.getKWDraggable =
			function()
		{
			return this.m_kWDraggable;
		};

		base.prototype.getKWDropZone =
			function()
		{
			return this.m_kWDropZone;
		};
		
		base.prototype.getKWHidden =
			function()
		{
			return this.m_kWHidden;
		};
		
		base.prototype.getKWHtml =
			function()
		{
			return this.m_kWHtml;
		};

		base.prototype.getKWIsVisible =
			function()
		{
			return this.m_kWIsVisible;
		};
		
		base.prototype.getKWKeyHtml =
			function()
		{
			return this.m_kWKeyHtml;
		};

		base.prototype.getKWKeyTitle =
			function()
		{
			return this.m_kWKeyTitle;
		};

		base.prototype.getKWLang =
			function()
		{
			return this.m_kWLang;
		};

		base.prototype.getKWSpellCheck =
			function()
		{
			return this.m_kWSpellCheck;
		};

		base.prototype.getKWStyle =
			function()
		{
			return this.m_kWStyle;
		};

		base.prototype.getKWTabIndex =
			function()
		{
			return this.m_kWTabIndex;
		};

		base.prototype.getKWText =
			function()
		{
			return this.m_kWText;
		};

		base.prototype.getKWTitle =
			function()
		{
			return this.m_kWTitle;
		};

		base.prototype.getKWVisible =
			function()
		{
			return this.m_kWVisible;
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

		base.prototype.vmvcCreateOR =
			function()
			{
				this.baseCreate();
			};

		base.prototype.vmvcDeleteOR =
			function()
			{
				this.baseDelete();
			};

		base.prototype.vmvcInitOR =
			function()
		{
			this.baseInit(); 
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		base.prototype.baseCreateOR = 
			function baseCreateOR()
		{
			console.error(this.kWLogNotImpl());
		};

		base.prototype.baseDeleteOR =
			function baseDeleteOR()
			{
				console.error(this.kWLogNotImpl());
			};

		base.prototype.baseInitOR =
			function baseInitOR()
			{
				console.error(this.kWLogNotImpl());
			};

		//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		base.prototype.baseCreate = 
			function baseCreate() 
		{
			//console.log(this.kWLogCalled());
			
			this.baseCreateAccessKey();
			this.baseCreateClass();
			this.baseCreateClassOff();
			this.baseCreateClassOn();
			this.baseCreateContentEditable();
			this.baseCreateContextMenu();
			this.baseCreateDir();
			this.baseCreateDisplay();
			this.baseCreateDraggable();
			this.baseCreateDropZone();
			this.baseCreateHidden();
			this.baseCreateHtml();
			this.baseCreateIsVisible();
			this.baseCreateKeyHtml();
			this.baseCreateKeyTitle();
			this.baseCreateLang();
			this.baseCreateSpellCheck();
			this.baseCreateStyle();
			this.baseCreateTabIndex();
			this.baseCreateText();
			this.baseCreateTitle();
			
			this.baseCreateOR();
		};
		
		base.prototype.baseCreateAccessKey = 
			function baseCreateAccessKey() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWAccessKey))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}

			value = this.m_kWJson[accessKey.sKWKey];
			if (!validate.isNotNull(value))
			{
				return;
			}

			this.m_kWAccessKey = new accessKey();
			
			this.m_kWAccessKey.setKWView(this);
			this.m_kWAccessKey.setKWIDParent(this.m_sKWID);
			
			this.m_kWAccessKey.check();
			this.m_kWAccessKey.init();

			this.kWAddValue(this.m_kWAccessKey);
		};
		
		base.prototype.baseCreateClass = 
			function baseCreateClass() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWClass))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}

			value = this.m_kWJson[class_.sKWKey];
			if (!validate.isNotNull(value))
			{
				return;
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWClass = new class_();
			
			this.m_kWClass.setKWView(this);
			this.m_kWClass.setKWIDParent(this.m_sKWID);
			
			this.m_kWClass.check();
			this.m_kWClass.init();

			this.kWAddValue(this.m_kWClass);
		};
		
		base.prototype.baseCreateClassOff = 
			function baseCreateClassOff() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWClassOff))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}

			value = this.m_kWJson[classOff.sKWKey];
			if (!validate.isNotNull(value))
			{
				return;
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWClassOff = new classOff();
			
			this.m_kWClassOff.setKWView(this);
			this.m_kWClassOff.setKWIDParent(this.m_sKWID);
			
			this.m_kWClassOff.check();
			this.m_kWClassOff.init();

			this.kWAddValue(this.m_kWClassOff);
		};
		
		base.prototype.baseCreateClassOn = 
			function baseCreateClassOn() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWClassOn))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}

			value = this.m_kWJson[classOn.sKWKey];
			if (!validate.isNotNull(value))
			{
				return;
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWClassOn = new classOn();
			
			this.m_kWClassOn.setKWView(this);
			this.m_kWClassOn.setKWIDParent(this.m_sKWID);
			
			this.m_kWClassOn.check();
			this.m_kWClassOn.init();

			this.kWAddValue(this.m_kWClassOn);
		};
		
		base.prototype.baseCreateContentEditable = 
			function baseCreateContentEditable() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWContentEditable))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}

			value = this.m_kWJson[contentEditable.sKWKey];
			if (!validate.isNotNull(value))
			{
				return;
			}

			this.m_kWContentEditable = new contentEditable();
			
			this.m_kWContentEditable.setKWView(this);
			this.m_kWContentEditable.setKWIDParent(this.m_sKWID);
			
			this.m_kWContentEditable.check();
			this.m_kWContentEditable.init();

			this.kWAddValue(this.m_kWContentEditable);
		};
		
		base.prototype.baseCreateContextMenu = 
			function baseCreateContextMenu() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWContextMenu))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}

			value = this.m_kWJson[contextMenu.sKWKey];
			if (!validate.isNotNull(value))
			{
				return;
			}

			this.m_kWContextMenu = new contextMenu();
			
			this.m_kWContextMenu.setKWView(this);
			this.m_kWContextMenu.setKWIDParent(this.m_sKWID);
			
			this.m_kWContextMenu.check();
			this.m_kWContextMenu.init();

			this.kWAddValue(this.m_kWContextMenu);
		};
		
		base.prototype.baseCreateDir = 
			function baseCreateDir() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWDir))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}

			value = this.m_kWJson[dir.sKWKey];
			if (!validate.isNotNull(value))
			{
				return;
			}

			this.m_kWDir = new dir();
			
			this.m_kWDir.setKWView(this);
			this.m_kWDir.setKWIDParent(this.m_sKWID);
			
			this.m_kWDir.check();
			this.m_kWDir.init();

			this.kWAddValue(this.m_kWDir);
		};
		
		base.prototype.baseCreateDisplay = 
			function baseCreateDisplay() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWDisplay))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}

			value = this.m_kWJson[display.sKWKey];
			if (!validate.isNotNull(value))
			{
				return;
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWDisplay = new display();
			
			this.m_kWDisplay.setKWView(this);
			this.m_kWDisplay.setKWIDParent(this.m_sKWID);
			
			this.m_kWDisplay.check();
			this.m_kWDisplay.init();

			this.kWAddValue(this.m_kWDisplay);
		};
		
		base.prototype.baseCreateDraggable = 
			function baseCreateDraggable() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWDraggable))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}

			value = this.m_kWJson[draggable.sKWKey];
			if (!validate.isNotNull(value))
			{
				return;
			}

			this.m_kWDraggable = new draggable();
			
			this.m_kWDraggable.setKWView(this);
			this.m_kWDraggable.setKWIDParent(this.m_sKWID);
			
			this.m_kWDraggable.check();
			this.m_kWDraggable.init();

			this.kWAddValue(this.m_kWDraggable);
		};
		
		base.prototype.baseCreateDropZone = 
			function baseCreateDropZone() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWDropZone))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}

			value = this.m_kWJson[dropZone.sKWKey];
			if (!validate.isNotNull(value))
			{
				return;
			}

			this.m_kWDropZone = new dropZone();
			
			this.m_kWDropZone.setKWView(this);
			this.m_kWDropZone.setKWIDParent(this.m_sKWID);
			
			this.m_kWDropZone.check();
			this.m_kWDropZone.init();

			this.kWAddValue(this.m_kWDropZone);
		};
		
		base.prototype.baseCreateHidden = 
			function baseCreateHidden() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWHidden))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}

			value = this.m_kWJson[hidden.sKWKey];
			if (!validate.isNotNull(value))
			{
				return;
			}

			this.m_kWHidden = new hidden();
			
			this.m_kWHidden.setKWView(this);
			this.m_kWHidden.setKWIDParent(this.m_sKWID);
			
			this.m_kWHidden.check();
			this.m_kWHidden.init();

			this.kWAddValue(this.m_kWHidden);
		};
		
		base.prototype.baseCreateHtml = 
			function baseCreateHtml() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWHtml))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}

			value = this.m_kWJson[html.sKWKey];
			if (!validate.isNotNull(value))
			{
				return;
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWHtml = new html();
			
			this.m_kWHtml.setKWView(this);
			this.m_kWHtml.setKWIDParent(this.m_sKWID);
			
			this.m_kWHtml.check();
			this.m_kWHtml.init();

			this.kWAddValue(this.m_kWHtml);
		};
		
		base.prototype.baseCreateIsVisible = 
			function baseCreateIsVisible() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWIsVisible))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}

			value = this.m_kWJson[isVisible.sKWKey];
			if (!validate.isNotNull(value))
			{
				return;
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWIsVisible = new isVisible();
			
			this.m_kWIsVisible.setKWView(this);
			this.m_kWIsVisible.setKWIDParent(this.m_sKWID);
			
			this.m_kWIsVisible.check();
			this.m_kWIsVisible.init();

			this.kWAddValue(this.m_kWIsVisible);
		};
		
		base.prototype.baseCreateKeyHtml = 
			function baseCreateKeyHtml() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWKeyHtml))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}

			value = this.m_kWJson[keyHtml.sKWKey];
			if (!validate.isNotNull(value))
			{
				return;
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWKeyHtml = new keyHtml();
			
			this.m_kWKeyHtml.setKWView(this);
			this.m_kWKeyHtml.setKWIDParent(this.m_sKWID);
			
			this.m_kWKeyHtml.check();
			this.m_kWKeyHtml.init();

			this.kWAddValue(this.m_kWKeyHtml);
		};
		
		base.prototype.baseCreateKeyTitle = 
			function baseCreateKeyTitle() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWKeyTitle))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}

			value = this.m_kWJson[keyTitle.sKWKey];
			if (!validate.isNotNull(value))
			{
				return;
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWKeyTitle = new keyTitle();
			
			this.m_kWKeyTitle.setKWView(this);
			this.m_kWKeyTitle.setKWIDParent(this.m_sKWID);
			
			this.m_kWKeyTitle.check();
			this.m_kWKeyTitle.init();

			this.kWAddValue(this.m_kWKeyTitle);
		};
		
		base.prototype.baseCreateLang = 
			function baseCreateLang() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWLang))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}

			value = this.m_kWJson[lang.sKWKey];
			if (!validate.isNotNull(value))
			{
				return;
			}

			this.m_kWLang = new lang();
			
			this.m_kWLang.setKWView(this);
			this.m_kWLang.setKWIDParent(this.m_sKWID);
			
			this.m_kWLang.check();
			this.m_kWLang.init();

			this.kWAddValue(this.m_kWLang);
		};
		
		base.prototype.baseCreateSpellCheck = 
			function baseCreateSpellCheck() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWSpellCheck))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}

			value = this.m_kWJson[spellCheck.sKWKey];
			if (!validate.isNotNull(value))
			{
				return;
			}

			this.m_kWSpellCheck = new spellCheck();
			
			this.m_kWSpellCheck.setKWView(this);
			this.m_kWSpellCheck.setKWIDParent(this.m_sKWID);
			
			this.m_kWSpellCheck.check();
			this.m_kWSpellCheck.init();

			this.kWAddValue(this.m_kWSpellCheck);
		};
		
		base.prototype.baseCreateStyle = 
			function baseCreateStyle() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWStyle))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}

			value = this.m_kWJson[style.sKWKey];
			if (!validate.isNotNull(value))
			{
				return;
			}

			this.m_kWStyle = new style();
			
			this.m_kWStyle.setKWView(this);
			this.m_kWStyle.setKWIDParent(this.m_sKWID);
			
			this.m_kWStyle.check();
			this.m_kWStyle.init();

			this.kWAddValue(this.m_kWStyle);
		};
		
		base.prototype.baseCreateTabIndex = 
			function baseCreateTabIndex() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWTabIndex))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}

			value = this.m_kWJson[tabIndex.sKWKey];
			if (!validate.isNotNull(value))
			{
				return;
			}

			this.m_kWTabIndex = new tabIndex();
			
			this.m_kWTabIndex.setKWView(this);
			this.m_kWTabIndex.setKWIDParent(this.m_sKWID);
			
			this.m_kWTabIndex.check();
			this.m_kWTabIndex.init();

			this.kWAddValue(this.m_kWTabIndex);
		};
		
		base.prototype.baseCreateText = 
			function baseCreateText() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWText))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}

			value = this.m_kWJson[text.sKWKey];
			if (!validate.isNotNull(value))
			{
				return;
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWText = new text();
			
			this.m_kWText.setKWView(this);
			this.m_kWText.setKWIDParent(this.m_sKWID);
			
			this.m_kWText.check();
			this.m_kWText.init();

			this.kWAddValue(this.m_kWText);
		};
		
		base.prototype.baseCreateTitle = 
			function baseCreateTitle() 
		{
			var value = null;

			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWTitle))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}

			value = this.m_kWJson[title.sKWKey];
			if (!validate.isNotNull(value))
			{
				return;
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWTitle = new title();
			
			this.m_kWTitle.setKWView(this);
			this.m_kWTitle.setKWIDParent(this.m_sKWID);
			
			this.m_kWTitle.check();
			this.m_kWTitle.init();

			this.kWAddValue(this.m_kWTitle);
		};

		base.prototype.baseDelete =
			function baseDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWAccessKey		    = null;
			this.m_kWClass			    = null;
			this.m_kWClassOff			= null;
			this.m_kWClassOn			= null;
			this.m_kWContentEditable	= null;
			this.m_kWContextMenu		= null;
			this.m_kWDir				= null;
			this.m_kWDisabled			= null;
			this.m_kWDisplay			= null;
			this.m_kWDraggable		    = null;
			this.m_kWDropZone			= null;
			this.m_kWHidden			    = null;
			this.m_kWHtml				= null;
			this.m_kWIsVisible		    = null;
			this.m_kWKeyHtml			= null;
			this.m_kWKeyTitle			= null;
			this.m_kWLang				= null;
			this.m_kWSpellCheck		    = null;
			this.m_kWStyle			    = null;
			this.m_kWTabIndex			= null;
			this.m_kWText				= null;
			this.m_kWTitle			    = null;
			this.m_kWVisible			= null;

			this.baseDeleteOR();
		}

		base.prototype.baseInit =
			function baseInit()
		{
			//console.log(this.kWLogCalled());
			this.baseInitOR();
		};

		return base;

	}
);
