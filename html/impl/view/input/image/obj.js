/**********************************************************************
 *
 * image/obj.js
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
		"../../../value/alt/obj",
		"../../../value/formAction/obj",
		"../../../value/formEncType/obj",
		"../../../value/formMethod/obj",
		"../../../value/formTarget/obj",
		"../../../value/height/obj",
		"../../../value/src/obj",
		"../../../value/width/obj",
		"../obj",
		"kWStat/validate"
	], 
	function
	(
		alt,
		formAction,
		formEncType,
		formMethod,
		formTarget,
		height,
		src,
		width,
		input,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function image()
		{
			//console.log("image::constructor");
			
			this.m_kWAlt			= null;
			this.m_kWFormAction	    = null;
			this.m_kWFormEncType	= null;
			this.m_kWFormMethod	    = null;
			this.m_kWFormTarget	    = null;
			this.m_kWHeight		    = null;
			this.m_kWWidth		    = null;
			this.m_kWSrc			= null;
		}

		image.prototype = new input();
		image.prototype.constructor = image;
		image.constructor = input.prototype.constructor;

		image.prototype.check =
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		image.prototype.init =
			function init()
		{
			//console.log(this.kWLogCalled());
			input.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		image.prototype.getKWAlt =
			function()
		{
			return this.m_kWAlt;
		};

		image.prototype.getKWFormAction =
			function()
		{
			return this.m_kWFormAction;
		};

		image.prototype.getKWFormEncType =
			function()
		{
			return this.m_kWFormEncType;
		};

		image.prototype.getKWFormMethod =
			function()
		{
			return this.m_kWFormMethod;
		};

		image.prototype.getKWFormTarget =
			function()
		{
			return this.m_kWFormTarget;
		};

		image.prototype.getKWHeight =
			function()
		{
			return this.m_kWHeight;
		};

		image.prototype.getKWSrc =
			function()
		{
			return this.m_kWSrc;
		};
		
		image.prototype.getKWWidth =
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
	
		image.prototype.inputCreateOR =
			function()
		{
			this.imageCreate();
		};

		image.prototype.baseDeleteOR =
			function()
			{
				this.imageDelete();
			};

		image.prototype.inputInitOR =
			function()
		{
			this.imageInit();
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

		image.prototype.imageCreate = 
			function imageCreate() 
		{
			//console.log(this.kWLogCalled());
			
			this.imageCreateAlt();
			this.imageCreateFormAction();
			this.imageCreateFormEncType();
			this.imageCreateFormMethod();
			this.imageCreateFormTarget();
			this.imageCreateHeight();
			this.imageCreateSrc();
			this.imageCreateWidth();
		};
		
		image.prototype.imageCreateAlt = 
			function imageCreateAlt() 
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
		
		image.prototype.imageCreateFormAction = 
			function imageCreateFormAction() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWFormAction))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWFormAction = new formAction();
			
			this.m_kWFormAction.setKWView(this);
			this.m_kWFormAction.setKWIDParent(this.m_sKWID);
			
			this.m_kWFormAction.check();
			this.m_kWFormAction.init();

			this.kWAddValue(this.m_kWFormAction);
		};
		
		image.prototype.imageCreateFormEncType = 
			function imageCreateFormEncType() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWFormEncType))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWFormEncType = new formEncType();
			
			this.m_kWFormEncType.setKWView(this);
			this.m_kWFormEncType.setKWIDParent(this.m_sKWID);
			
			this.m_kWFormEncType.check();
			this.m_kWFormEncType.init();

			this.kWAddValue(this.m_kWFormEncType);
		};
		
		image.prototype.imageCreateFormMethod = 
			function imageCreateFormMethod() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWFormMethod))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWFormMethod = new formMethod();
			
			this.m_kWFormMethod.setKWView(this);
			this.m_kWFormMethod.setKWIDParent(this.m_sKWID);
			
			this.m_kWFormMethod.check();
			this.m_kWFormMethod.init();

			this.kWAddValue(this.m_kWFormMethod);
		};
		
		image.prototype.imageCreateFormTarget = 
			function imageCreateFormTarget() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWFormTarget))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWFormTarget = new formTarget();
			
			this.m_kWFormTarget.setKWView(this);
			this.m_kWFormTarget.setKWIDParent(this.m_sKWID);
			
			this.m_kWFormTarget.check();
			this.m_kWFormTarget.init();

			this.kWAddValue(this.m_kWFormTarget);
		};
		
		image.prototype.imageCreateHeight = 
			function imageCreateHeight() 
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
		
		image.prototype.imageCreateSrc = 
			function imageCreateSrc() 
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
		
		image.prototype.imageCreateWidth = 
			function imageCreateWidth() 
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

		image.prototype.imageDelete =
			function imageDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWAlt			= null;
			this.m_kWFormAction	    = null;
			this.m_kWFormEncType	= null;
			this.m_kWFormMethod	    = null;
			this.m_kWFormTarget	    = null;
			this.m_kWHeight		    = null;
			this.m_kWWidth		    = null;
			this.m_kWSrc			= null;
		};

		image.prototype.imageInit =
			function imageInit()
		{
			//console.log(this.kWLogCalled());
		};

		return image;

	}
);
