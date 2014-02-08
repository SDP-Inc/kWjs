/**********************************************************************
 *
 * img/obj.js
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
		"../../attrs/img/obj",
		"../../view/img/obj",
		"../../../base/elmt/obj",
		"kWStat/validate"
	], 
	function
	(
		attrs,
		view,
		elmt,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function img()
		{
			//console.log("img::constructor");
			this.m_sKWTag			= "img";
			
			this.m_sKWCrossOrigin	= null;
			this.m_sKWSrc			= null;
			this.m_sKWSrcExt		= null;
			this.m_sKWSrcName		= null;
			this.m_sKWUseMap		= null;
			
			this.m_nKWHeight		= -1;
			this.m_nKWWidth		    = -1;
			
			this.m_bKWIsMap		    = false;
		}

		img.prototype = new elmt();
		img.prototype.constructor = img;
		img.constructor = elmt.prototype.constructor;

		img.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		img.prototype.init = 
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

		img.prototype.setKWSrc =
			function(sVal)
		{
			this.m_sKWSrc = sVal;
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

		img.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.imgCreateAttrs(); 
		};
		
		img.prototype.elmtCreateViewOR = 
			function()
		{
			return this.imgCreateView();
		};
		
		img.prototype.elmtInitOR = 
			function()
		{
			this.imgInit();
		};
		
		img.prototype.elmtRetrieveOR = 
			function()
		{
			this.imgRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		img.prototype.imgInitOR = 
			function imgInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		img.prototype.imgCreateAttrs = 
			function imgCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			this.imgCreateVal();
			
			theAttrs = new attrs();
			
			theAttrs.setKWCrossOrigin(this.m_sKWCrossOrigin);
			theAttrs.setKWHeight(this.m_nKWHeight);
			theAttrs.setKWIsMap(this.m_bKWIsMap);
			theAttrs.setKWSrc(this.m_sKWSrc);
			theAttrs.setKWUseMap(this.m_sKWUseMap);
			theAttrs.setKWWidth(this.m_nKWWidth);
			
			return theAttrs;
		};

		img.prototype.imgCreateVal = 
			function imgCreateVal()
		{
			//console.log(this.kWLogCalled());
		
			if (validate.isString(this.m_sKWSrc))
			{
				return;
			}
			
			if (!validate.isNotNull(this.m_sKWSrcExt))
			{
				console.error(this.kWLogInvalid("m_sKWSrcExt"));
			}
			
			if (!validate.isNotNull(this.m_sKWSrcName))
			{
				console.error(this.kWLogInvalid("m_sKWSrcName"));
			}
			
			if (!validate.isString(this.m_sKWLang))
			{
				console.error(this.kWLogInvalid("m_sKWLang"));
			}
			
			this.m_sKWSrc	=	this.m_sKWSrcName
						+ "_"
						+ this.m_sKWLang
						+ "."
						+ this.m_sKWSrcExt;
		};

		img.prototype.imgCreateView = 
			function imgCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		img.prototype.imgInit = 
			function imgInit()
		{
			//console.log(this.kWLogCalled());
			this.imgInitOR();
		};

		img.prototype.imgRetrieve = 
			function imgRetrieve()
		{
			//console.log(this.kWLogCalled());
			this.imgRetrieveCrossOrigin();
			this.imgRetrieveHeight();
			this.imgRetrieveIsMap();
			this.imgRetrieveSrc();
			this.imgRetrieveSrcExt();
			this.imgRetrieveSrcName();
			this.imgRetrieveUseMap();
			this.imgRetrieveWidth();
		};
	
		img.prototype.imgRetrieveCrossOrigin = 
			function imgRetrieveCrossOrigin()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWCrossOrigin))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWCrossOrigin();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value", value));
			}
			
			this.m_sKWCrossOrigin = value.getKWValue();
			if (validate.isString(this.m_sKWCrossOrigin))
			{
				//console.log(this.kWLogDisplay("m_sImgCrossOrigin", this.m_sImgCrossOrigin));
			}
		};
		
		img.prototype.imgRetrieveHeight = 
			function imgRetrieveHeight()
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
		
		img.prototype.imgRetrieveIsMap = 
			function imgRetrieveIsMap()
		{
			var value	= null;
			
			var bVal	= null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWIsMap();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWIsMap = bVal;
				//console.debug(this.kWLogDisplay("m_bKWIsMap", this.m_bKWIsMap));
			}
		};		
		
		img.prototype.imgRetrieveSrc = 
			function imgRetrieveSrc()
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
				console.error(this.kWLogErrRetrieve("value", value));
			}
			
			this.m_sKWSrc = value.getKWValue();
			if (validate.isString(this.m_sKWSrc))
			{
				//console.log(this.kWLogDisplay("m_sImgSrc", this.m_sImgSrc));
			}
		};
		
		img.prototype.imgRetrieveSrcExt = 
			function imgRetrieveSrcExt()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWSrcExt))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWSrcExt();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value", value));
			}
			
			this.m_sKWSrcExt = value.getKWValue();
			if (validate.isString(this.m_sKWSrcExt))
			{
				//console.log(this.kWLogDisplay("m_sImgSrcExt", this.m_sImgSrcExt));
			}
		};
		
		img.prototype.imgRetrieveSrcName = 
			function imgRetrieveSrcName()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWSrcName))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWSrcName();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value", value));
			}
			
			this.m_sKWSrcName = value.getKWValue();
			if (validate.isString(this.m_sKWSrcName))
			{
				//console.debug(this.kWLogDisplay("m_sKWSrcName", this.m_sKWSrcName));
			}
		};
		
		img.prototype.imgRetrieveUseMap = 
			function imgRetrieveUseMap()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWUseMap))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWUseMap();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value", value));
			}
			
			this.m_sKWUseMap = value.getKWValue();
			if (validate.isString(this.m_sKWUseMap))
			{
				//console.debug(this.kWLogDisplay("m_sKWUseMap", this.m_sKWUseMap));
			}
		};
		
		img.prototype.imgRetrieveWidth = 
			function imgRetrieveWidth()
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
		
		return img;

	}
);
