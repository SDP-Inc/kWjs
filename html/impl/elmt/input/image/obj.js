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
		"../../../attrs/input/image/obj",
		"../../../view/input/image/obj",
		"../obj",
		"kWStat/validate",
		"jquery"
	], 
	function
	(
		attrs,
		view,
		input,
		validate,
		$
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
			
			this.m_sKWType			= "image";
			
			this.m_sKWAlt			= null;
			this.m_sKWFormAction	= null;
			this.m_sKWFormEncType	= null;
			this.m_sKWFormMethod	= null;
			this.m_sKWFormTarget	= null;
			this.m_sKWSrc			= null;
			
			this.m_nKWHeight		= -1;
			this.m_nKWWidth			= -1;
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
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		image.prototype.imageInitOR = 
			function imageInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		image.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.imageCreateAttrs(); 
		};
		
		image.prototype.elmtCreateViewOR = 
			function()
		{
			return this.imageCreateView();
		};
		
		image.prototype.inputInitOR = 
			function()
		{
			this.imageInit();
		};
		
		image.prototype.inputRetrieveOR = 
			function()
		{
			this.imageRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		image.prototype.imageCreateAttrs = 
			function imageCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWAlt(this.m_sKWAlt);
			theAttrs.setKWFormAction(this.m_sKWFormAction);
			theAttrs.setKWFormEncType(this.m_sKWFormEncType);
			theAttrs.setKWFormMethod(this.m_sKWFormMethod);
			theAttrs.setKWFormTarget(this.m_sKWFormTarget);
			theAttrs.setKWHeight(this.m_nKWHeight);
			theAttrs.setKWSrc(this.m_sKWSrc);
			theAttrs.setKWWidth(this.m_nKWWidth);
			
			return theAttrs;
		};

		image.prototype.imageCreateView = 
			function imageCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		image.prototype.imageInit = 
			function imageInit()
		{
			//console.log(this.kWLogCalled());
			this.imageInitOR();
		};
		
		image.prototype.imageRetrieve = 
			function imageRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.imageRetrieveAlt();
			this.imageRetrieveFormAction();
			this.imageRetrieveFormEncType();
			this.imageRetrieveFormMethod();
			this.imageRetrieveFormTarget();
			this.imageRetrieveHeight();
			this.imageRetrieveSrc();
			this.imageRetrieveWidth();
		};
		
		image.prototype.imageRetrieveAlt = 
			function imageRetrieveAlt()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWAlt))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWAlt();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWAlt = value.getKWValue();
			if (validate.isString(this.m_sKWAlt))
			{
				//console.debug(this.kWLogDisplay("m_sKWAlt", this.m_sKWAlt));
			}
		};		
		
		image.prototype.imageRetrieveFormAction = 
			function imageRetrieveFormAction()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWFormAction))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWFormAction();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWFormAction = value.getKWValue();
			if (validate.isString(this.m_sKWFormAction))
			{
				//console.debug(this.kWLogDisplay("m_sKWFormAction", this.m_sKWFormAction));
			}
		};		
		
		image.prototype.imageRetrieveFormEncType = 
			function imageRetrieveFormEncType()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWFormEncType))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWFormEncType();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWFormEncType = value.getKWValue();
			if (validate.isString(this.m_sKWFormEncType))
			{
				//console.debug(this.kWLogDisplay("m_sKWFormEncType", this.m_sKWFormEncType));
			}
		};		
		
		image.prototype.imageRetrieveFormMethod = 
			function imageRetrieveFormMethod()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWFormMethod))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWFormMethod();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWFormMethod = value.getKWValue();
			if (validate.isString(this.m_sKWFormMethod))
			{
				//console.debug(this.kWLogDisplay("m_sKWFormMethod", this.m_sKWFormMethod));
			}
		};		
		
		image.prototype.imageRetrieveFormTarget = 
			function imageRetrieveFormTarget()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWFormTarget))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWFormTarget();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWFormTarget = value.getKWValue();
			if (validate.isString(this.m_sKWFormTarget))
			{
				//console.debug(this.kWLogDisplay("m_sKWFormTarget", this.m_sKWFormTarget));
			}
		};		
		
		image.prototype.imageRetrieveHeight = 
			function imageRetrieveHeight()
		{
			var value	= null;
			
			var nVal	= null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberPos(this.m_nKWHeight))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWHeight();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			nVal = value.getKWValue();
			if (validate.isNumberPos(nVal))
			{
				this.m_nKWHeight = nVal;
				//console.debug(this.kWLogDisplay("m_nKWHeight", this.m_nKWHeight));
			}
		};
		
		image.prototype.imageRetrieveSrc = 
			function imageRetrieveSrc()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWSrc))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWSrc();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWSrc = value.getKWValue();
			if (validate.isString(this.m_sKWSrc))
			{
				//console.debug(this.kWLogDisplay("m_sKWSrc", this.m_sKWSrc));
			}
		};		
		
		image.prototype.imageRetrieveWidth = 
			function imageRetrieveWidth()
		{
			var value	= null;
			
			var nVal	= null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberPos(this.m_nKWWidth))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWWidth();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			nVal = value.getKWValue();
			if (validate.isNumberPos(nVal))
			{
				this.m_nKWWidth = nVal;
				//console.debug(this.kWLogDisplay("m_nKWWidth", this.m_nKWWidth));
			}
		};
		
		return image;

	}
);
