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
		"../../../attr/alt/obj",
		"../../../attr/formAction/obj",
		"../../../attr/formEncType/obj",
		"../../../attr/formMethod/obj",
		"../../../attr/formTarget/obj",
		"../../../attr/height/obj",
		"../../../attr/src/obj",
		"../../../attr/width/obj",
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
			this.m_kWSrc			= null;
			this.m_kWWidth		    = null;
			
			this.m_sKWAlt			= null;
			this.m_sKWFormAction	= null;
			this.m_sKWFormEncType	= null;
			this.m_sKWFormMethod	= null;
			this.m_sKWFormTarget	= null;
			this.m_sKWSrc			= null;
			
			this.m_nKWHeight	    = -1;
			this.m_nKWWidth		    = -1;
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

		image.prototype.setKWAlt =
			function(sVal)
		{
			this.imageSetAlt(sVal);
		};
		
		image.prototype.setKWFormAction =
			function(sVal)
		{
			this.imageSetFormAction(sVal);
		};
		
		image.prototype.setKWFormEncType =
			function(sVal)
		{
			this.imageSetFormEncType(sVal);
		};
		
		image.prototype.setKWFormMethod =
			function(sVal)
		{
			this.imageSetFormMethod(sVal);
		};
		
		image.prototype.setKWFormTarget =
			function(sVal)
		{
			this.imageSetFormTarget(sVal);
		};
		
		image.prototype.setKWHeight =
			function(nVal)
		{
			this.imageSetHeight(nVal);
		};
		
		image.prototype.setKWSrc = function(sVal)
		{
			this.imageSetSrc(sVal);
		};
		
		image.prototype.setKWWidth =
			function(nVal)
		{
			this.imageSetWidth(nVal);
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

		image.prototype.inputDeleteOR =
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
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWAlt))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWAlt();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWAlt;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.imageCreateAltImpl();

			this.m_kWAlt.setKWValue(sValue);
		};

		image.prototype.imageCreateAltImpl =
			function imageCreateAltImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWAlt))
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

			this.m_kWAlt = new alt();

			this.m_kWAlt.setKWIDParent(this.m_sKWID);
			this.m_kWAlt.setKWDom(this.m_kWDom);

			this.m_kWAlt.check();
			this.m_kWAlt.init();

			this.kWAddAttr(this.m_kWAlt);
		};


		image.prototype.imageCreateFormAction =
			function imageCreateFormAction()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWFormAction))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWFormAction();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWFormAction;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.imageCreateFormActionImpl();

			this.m_kWFormAction.setKWValue(sValue);
		};

		image.prototype.imageCreateFormActionImpl =
			function imageCreateFormActionImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWFormAction))
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

			this.m_kWFormAction = new formAction();

			this.m_kWFormAction.setKWIDParent(this.m_sKWID);
			this.m_kWFormAction.setKWDom(this.m_kWDom);

			this.m_kWFormAction.check();
			this.m_kWFormAction.init();

			this.kWAddAttr(this.m_kWFormAction);
		};


		image.prototype.imageCreateFormEncType =
			function imageCreateFormEncType()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWFormEncType))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWFormEncType();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWFormEncType;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.imageCreateFormEncTypeImpl();

			this.m_kWFormEncType.setKWValue(sValue);
		};

		image.prototype.imageCreateFormEncTypeImpl =
			function imageCreateFormEncTypeImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWFormEncType))
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

			this.m_kWFormEncType = new formEncType();

			this.m_kWFormEncType.setKWIDParent(this.m_sKWID);
			this.m_kWFormEncType.setKWDom(this.m_kWDom);

			this.m_kWFormEncType.check();
			this.m_kWFormEncType.init();

			this.kWAddAttr(this.m_kWFormEncType);
		};


		image.prototype.imageCreateFormMethod =
			function imageCreateFormMethod()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWFormMethod))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWFormMethod();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWFormMethod;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.imageCreateFormMethodImpl();

			this.m_kWFormMethod.setKWValue(sValue);
		};

		image.prototype.imageCreateFormMethodImpl =
			function imageCreateFormMethodImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWFormMethod))
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

			this.m_kWFormMethod = new formMethod();

			this.m_kWFormMethod.setKWIDParent(this.m_sKWID);
			this.m_kWFormMethod.setKWDom(this.m_kWDom);

			this.m_kWFormMethod.check();
			this.m_kWFormMethod.init();

			this.kWAddAttr(this.m_kWFormMethod);
		};


		image.prototype.imageCreateFormTarget =
			function imageCreateFormTarget()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWFormTarget))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWFormTarget();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWFormTarget;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.imageCreateFormTargetImpl();

			this.m_kWFormTarget.setKWValue(sValue);
		};

		image.prototype.imageCreateFormTargetImpl =
			function imageCreateFormTargetImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWFormTarget))
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

			this.m_kWFormTarget = new formTarget();

			this.m_kWFormTarget.setKWIDParent(this.m_sKWID);
			this.m_kWFormTarget.setKWDom(this.m_kWDom);

			this.m_kWFormTarget.check();
			this.m_kWFormTarget.init();

			this.kWAddAttr(this.m_kWFormTarget);
		};


		image.prototype.imageCreateHeight =
			function imageCreateHeight()
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

			this.imageCreateHeightImpl();

			this.m_kWHeight.setKWValue(nValue);
		};

		image.prototype.imageCreateHeightImpl =
			function imageCreateHeightImpl()
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


		image.prototype.imageCreateSrc =
			function imageCreateSrc()
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

			this.imageCreateSrcImpl();

			this.m_kWSrc.setKWValue(sValue);
		};

		image.prototype.imageCreateSrcImpl =
			function imageCreateSrcImpl()
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


		image.prototype.imageCreateWidth =
			function imageCreateWidth()
		{
			var value   = null;

			var nValue  = null;

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

			this.imageCreateWidthImpl();

			this.m_kWWidth.setKWValue(nValue);
		};

		image.prototype.imageCreateWidthImpl =
			function imageCreateWidthImpl()
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
			this.m_kWSrc			= null;
			this.m_kWWidth		    = null;
		};

		image.prototype.imageInit =
			function imageInit()
		{
			//console.log(this.kWLogCalled());
		};

		image.prototype.imageSetAlt =
			function imageSetAlt(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWAlt = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWAlt))
			{
				this.imageCreateAltImpl();
			}

			this.m_kWAlt.setKWValue(this.m_sKWAlt);
		};


		image.prototype.imageSetFormAction =
			function imageSetFormAction(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWFormAction = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWFormAction))
			{
				this.imageCreateFormActionImpl();
			}

			this.m_kWFormAction.setKWValue(this.m_sKWFormAction);
		};


		image.prototype.imageSetFormEncType =
			function imageSetFormEncType(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWFormEncType = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWFormEncType))
			{
				this.imageCreateFormEncTypeImpl();
			}

			this.m_kWFormEncType.setKWValue(this.m_sKWFormEncType);
		};


		image.prototype.imageSetFormMethod =
			function imageSetFormMethod(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWFormMethod = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWFormMethod))
			{
				this.imageCreateFormMethodImpl();
			}

			this.m_kWFormMethod.setKWValue(this.m_sKWFormMethod);
		};


		image.prototype.imageSetFormTarget =
			function imageSetFormTarget(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWFormTarget = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWFormTarget))
			{
				this.imageCreateFormTargetImpl();
			}

			this.m_kWFormTarget.setKWValue(this.m_sKWFormTarget);
		};

		image.prototype.imageSetHeight =
			function imageSetHeight(nVal)
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
				this.imageCreateHeightImpl();
			}

			this.m_kWHeight.setKWValue(this.m_nKWHeight);
		};

		image.prototype.imageSetSrc =
			function imageSetSrc(sVal)
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
				this.imageCreateSrcImpl();
			}

			this.m_kWSrc.setKWValue(this.m_sKWSrc);
		};

		image.prototype.imageSetWidth =
			function imageSetWidth(nVal)
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
				this.imageCreateWidthImpl();
			}

			this.m_kWWidth.setKWValue(this.m_nKWWidth);
		};

		return image;

	}
);
