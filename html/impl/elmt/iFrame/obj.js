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
		"../../attrs/iFrame/obj",
		"../../view/iFrame/obj",
		"../../../base/elmt/obj",
		"kWStat/validate",
		"jquery"
	], 
	function
	(
		attrs,
		view,
		elmt,
		validate,
		$
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
			this.m_sKWTag			= "iFrame";
			
			this.m_sKWName			= null;
			this.m_sKWSandbox		= null;
			this.m_sKWSrc			= null;
			this.m_sKWSrcDoc		= null;
			
			this.m_nKWHeight		= -1;
			this.m_nKWWidth			= -1;
			
			this.m_bKWSeamless		= false;
		}

		iFrame.prototype = new elmt();
		iFrame.prototype.constructor = iFrame;
		iFrame.constructor = elmt.prototype.constructor;

		iFrame.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		iFrame.prototype.init =
			function init()
		{
			//console.log(this.kWLogCalled());
			elmt.prototype.init.call(this);
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

		iFrame.prototype.iFrameInitOR = 
			function iFrameInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		iFrame.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.iFrameCreateAttrs(); 
		};
		
		iFrame.prototype.elmtCreateViewOR = 
			function()
		{
			return this.iFrameCreateView();
		};
		
		iFrame.prototype.elmtInitOR = 
			function()
		{
			this.iFrameInit();
		};
		
		iFrame.prototype.elmtRetrieveOR = 
			function()
		{
			this.iFrameRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		iFrame.prototype.iFrameCreateAttrs = 
			function iFrameCreateAttrs()
		{
			theAttrs = null;
			
			//console.log(this.kWLogCalled());
			theAttrs = new attrs();
			
			theAttrs.setKWHeight(this.m_nKWHeight);
			theAttrs.setKWName(this.m_sKWName);
			theAttrs.setKWSandbox(this.m_sKWSandbox);
			theAttrs.setKWSrc(this.m_sKWSrc);
			theAttrs.setKWSrcDoc(this.m_sKWSrcDoc);
			theAttrs.setKWSeamless(this.m_bKWSeamless);
			theAttrs.setKWWidth(this.m_nKWWidth);
			
			return theAttrs;
		};

		iFrame.prototype.iFrameCreateView = 
			function iFrameCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		iFrame.prototype.iFrameInit = 
			function iFrameInit()
		{
			//console.log(this.kWLogCalled());
			this.iFrameInitOR();
		};
		
		iFrame.prototype.iFrameRetrieve = 
			function iFrameRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.iFrameRetrieveHeight();
			this.iFrameRetrieveName();
			this.iFrameRetrieveSandbox();
			this.iFrameRetrieveSrc();
			this.iFrameRetrieveSrcDoc();
			this.iFrameRetrieveWidth();
		};
		
		iFrame.prototype.iFrameRetrieveHeight = 
			function iFrameRetrieveHeight()
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
		
		iFrame.prototype.iFrameRetrieveSeamless = 
			function iFrameRetrieveSeamless()
		{
			var value	= null;
			
			var bVal	= null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWSeamless();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWSeamless = bVal;
				//console.debug(this.kWLogDisplay("m_bKWSeamless", this.m_bKWSeamless));
			}
		};		
	
		iFrame.prototype.iFrameRetrieveName = 
			function iFrameRetrieveName()
		{
			var value	= null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWName))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWName();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWName = value.getKWValue();
			if (validate.isString(this.m_sKWName))
			{
				//console.debug(this.kWLogDisplay("m_sKWName", this.m_sKWName));
			}
		};		
		
		iFrame.prototype.iFrameRetrieveSandbox = 
			function iFrameRetrieveSandbox()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWSandbox))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWSandbox();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWSandbox = value.getKWValue();
			if (validate.isString(this.m_sKWSandbox))
			{
				//console.debug(this.kWLogDisplay("m_sKWSandbox", this.m_sKWSandbox));
			}
		};		
		
		
		iFrame.prototype.iFrameRetrieveSrc = 
			function iFrameRetrieveSrc()
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
		
		iFrame.prototype.iFrameRetrieveSrcDoc = 
			function iFrameRetrieveSrcDoc()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWSrcDoc))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWSrcDoc();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWSrcDoc = value.getKWValue();
			if (validate.isString(this.m_sKWSrcDoc))
			{
				//console.debug(this.kWLogDisplay("m_sKWSrcDoc", this.m_sKWSrcDoc));
			}
		};		
		
		iFrame.prototype.iFrameRetrieveWidth = 
			function iFrameRetrieveWidth()
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
		
		return iFrame;

	}
);
