/**********************************************************************
 *
 * textArea/obj.js
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
		"../../value/autoFocus/obj",
		"../../value/cols/obj",
		"../../value/disabled/obj",
		"../../value/form/obj",
		"../../value/maxLength/obj",
		"../../value/name/obj",
		"../../value/placeHolder/obj",
		"../../value/readOnly/obj",
		"../../value/required/obj",
		"../../value/rows/obj",
		"../../value/wrap/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		autoFocus,
		cols,
		disabled,
		form,
		maxLength,
		name,
		placeHolder,
		readOnly,
		required,
		rows,
		wrap,
		base,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function textArea()
		{
			//console.log("textArea::constructor");
			
			this.m_kWAutoFocus	    = null;
			this.m_kWCols			= null;
			this.m_kWDisabled		= null;
			this.m_kWForm			= null;
			this.m_kWMaxLength	    = null;
			this.m_kWName			= null;
			this.m_kWPlaceHolder	= null;
			this.m_kWReadOnly		= null;
			this.m_kWRequired		= null;
			this.m_kWRows			= null;
			this.m_kWWrap			= null;
		}

		textArea.prototype = new base();
		textArea.prototype.constructor = textArea;
		textArea.constructor = base.prototype.constructor;

		textArea.prototype.check =
			function check()
		{
			base.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
		};

		textArea.prototype.init =
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

		textArea.prototype.getKWAutoFocus =
			function()
		{
			return this.m_kWAutoFocus;
		};

		textArea.prototype.getKWCols =
			function()
		{
			return this.m_kWCols;
		};

		textArea.prototype.getKWDisabled =
			function()
		{
			return this.m_kWDisabled;
		};

		textArea.prototype.getKWForm =
			function()
		{
			return this.m_kWForm;
		};

		textArea.prototype.getKWMaxLength =
			function()
		{
			return this.m_kWMaxLength;
		};

		textArea.prototype.getKWName =
			function()
		{
			return this.m_kWName;
		};

		textArea.prototype.getKWPlaceHolder =
			function()
		{
			return this.m_kWPlaceHolder;
		};

		textArea.prototype.getKWReadOnly =
			function()
		{
			return this.m_kWReadOnly;
		};

		textArea.prototype.getKWRequired =
			function()
		{
			return this.m_kWRequired;
		};

		textArea.prototype.getKWRows =
			function()
		{
			return this.m_kWRows;
		};

		textArea.prototype.getKWWrap =
			function()
		{
			return this.m_kWWrap;
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
	
		textArea.prototype.baseCreateOR =
			function()
		{
			this.textAreaCreate();
		};

		textArea.prototype.baseDeleteOR =
			function()
			{
				this.textAreaDelete();
			};

		textArea.prototype.baseInitOR =
			function()
		{
			this.textAreaInit();
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

		textArea.prototype.textAreaCreate = 
			function textAreaCreate() 
		{
			//console.log(this.kWLogCalled());
			this.textAreaCreateAutoFocus();
			this.textAreaCreateCols();
			this.textAreaCreateDisabled();
			this.textAreaCreateForm();
			this.textAreaCreateMaxLength();
			this.textAreaCreateName();
			this.textAreaCreatePlaceHolder();
			this.textAreaCreateReadOnly();
			this.textAreaCreateRequired();
			this.textAreaCreateRows();
			this.textAreaCreateWrap();
		};
		
		textArea.prototype.textAreaCreateAutoFocus = 
			function textAreaCreateAutoFocus() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWAutoFocus))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWAutoFocus = new autoFocus();
			
			this.m_kWAutoFocus.setKWView(this);
			this.m_kWAutoFocus.setKWIDParent(this.m_sKWID);
			
			this.m_kWAutoFocus.check();
			this.m_kWAutoFocus.init();

			this.kWAddValue(this.m_kWAutoFocus);
		};
		
		textArea.prototype.textAreaCreateCols = 
			function textAreaCreateCols() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWCols))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWCols = new cols();
			
			this.m_kWCols.setKWView(this);
			this.m_kWCols.setKWIDParent(this.m_sKWID);
			
			this.m_kWCols.check();
			this.m_kWCols.init();

			this.kWAddValue(this.m_kWCols);
		};
		
		textArea.prototype.textAreaCreateDisabled = 
			function textAreaCreateDisabled() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWDisabled))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWDisabled = new disabled();
			
			this.m_kWDisabled.setKWView(this);
			this.m_kWDisabled.setKWIDParent(this.m_sKWID);
			
			this.m_kWDisabled.check();
			this.m_kWDisabled.init();

			this.kWAddValue(this.m_kWDisabled);
		};
		
		textArea.prototype.textAreaCreateForm = 
			function textAreaCreateForm() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWForm))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWForm = new form();
			
			this.m_kWForm.setKWView(this);
			this.m_kWForm.setKWIDParent(this.m_sKWID);
			
			this.m_kWForm.check();
			this.m_kWForm.init();

			this.kWAddValue(this.m_kWForm);
		};
		
		textArea.prototype.textAreaCreateMaxLength = 
			function textAreaCreateMaxLength() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWMaxLength))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWMaxLength = new maxLength();
			
			this.m_kWMaxLength.setKWView(this);
			this.m_kWMaxLength.setKWIDParent(this.m_sKWID);
			
			this.m_kWMaxLength.check();
			this.m_kWMaxLength.init();

			this.kWAddValue(this.m_kWMaxLength);
		};
		
		textArea.prototype.textAreaCreateName = 
			function textAreaCreateName() 
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
		
		textArea.prototype.textAreaCreatePlaceHolder = 
			function textAreaCreatePlaceHolder() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWPlaceHolder))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWPlaceHolder = new placeHolder();
			
			this.m_kWPlaceHolder.setKWView(this);
			this.m_kWPlaceHolder.setKWIDParent(this.m_sKWID);
			
			this.m_kWPlaceHolder.check();
			this.m_kWPlaceHolder.init();

			this.kWAddValue(this.m_kWPlaceHolder);
		};
		
		textArea.prototype.textAreaCreateReadOnly = 
			function textAreaCreateReadOnly() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWReadOnly))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWReadOnly = new readOnly();
			
			this.m_kWReadOnly.setKWView(this);
			this.m_kWReadOnly.setKWIDParent(this.m_sKWID);
			
			this.m_kWReadOnly.check();
			this.m_kWReadOnly.init();

			this.kWAddValue(this.m_kWReadOnly);
		};
		
		textArea.prototype.textAreaCreateRequired = 
			function textAreaCreateRequired() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWRequired))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWRequired = new required();
			
			this.m_kWRequired.setKWView(this);
			this.m_kWRequired.setKWIDParent(this.m_sKWID);
			
			this.m_kWRequired.check();
			this.m_kWRequired.init();

			this.kWAddValue(this.m_kWRequired);
		};
		
		textArea.prototype.textAreaCreateRows = 
			function textAreaCreateRows() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWRows))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWRows = new rows();
			
			this.m_kWRows.setKWView(this);
			this.m_kWRows.setKWIDParent(this.m_sKWID);
			
			this.m_kWRows.check();
			this.m_kWRows.init();

			this.kWAddValue(this.m_kWRows);
		};
		
		textArea.prototype.textAreaCreateWrap = 
			function textAreaCreateWrap() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWWrap))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWWrap = new wrap();
			
			this.m_kWWrap.setKWView(this);
			this.m_kWWrap.setKWIDParent(this.m_sKWID);
			
			this.m_kWWrap.check();
			this.m_kWWrap.init();

			this.kWAddValue(this.m_kWWrap);
		};

		textArea.prototype.textAreaDelete =
			function textAreaDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWAutoFocus	    = null;
			this.m_kWCols			= null;
			this.m_kWDisabled		= null;
			this.m_kWForm			= null;
			this.m_kWMaxLength	    = null;
			this.m_kWName			= null;
			this.m_kWPlaceHolder	= null;
			this.m_kWReadOnly		= null;
			this.m_kWRequired		= null;
			this.m_kWRows			= null;
			this.m_kWWrap			= null;
		};

		textArea.prototype.textAreaInit =
			function textAreaInit()
		{
			//console.log(this.kWLogCalled());
		};

		return textArea;

	}
);
