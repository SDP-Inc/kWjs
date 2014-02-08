/**********************************************************************
 *
 * video/obj.js
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
		"../../attrs/video/obj",
		"../../view/video/obj",
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

		function video()
		{
			//console.log("video::constructor");

			this.m_sKWTag		= "video";
			
			this.m_sKWPoster	= null;
			this.m_sKWPreload	= null;
			this.m_sKWSrc		= null;
			
			this.m_bKWAutoPlay	= true;
			this.m_bKWControls	= true;
			this.m_bKWLoop		= true;
			this.m_bKWMuted		= true;
			
			this.m_nKWHeight	= -1;
			this.m_nKWWidth		= -1;
		}

		video.prototype = new elmt();
		video.prototype.constructor = video;
		video.constructor = elmt.prototype.constructor;

		video.prototype.check =
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		video.prototype.init = 
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
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		video.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.videoCreateAttrs(); 
		};
		
		video.prototype.elmtCreateViewOR = 
			function()
		{
			return this.videoCreateView();
		};
		
		video.prototype.elmtInitOR =
			function()
		{
			this.videoInit();
		};
		
		video.prototype.elmtRetrieveOR = 
			function()
		{
			this.videoRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		video.prototype.videoInitOR = 
			function videoInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		video.prototype.videoCreateAttrs = 
			function videoCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWAutoPlay(this.m_bKWAutoPlay);
			theAttrs.setKWControls(this.m_bKWControls);
			theAttrs.setKWHeight(this.m_nKWHeight);
			theAttrs.setKWLoop(this.m_bKWLoop);
			theAttrs.setKWMuted(this.m_bKWMuted);
			theAttrs.setKWPoster(this.m_sKWPoster);
			theAttrs.setKWPreload(this.m_sKWPreload);
			theAttrs.setKWSrc(this.m_sKWSrc);
			theAttrs.setKWWidth(this.m_nKWWidth);
			
			return theAttrs;
		};

		video.prototype.videoCreateView = 
			function videoCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		video.prototype.videoInit = 
			function videoInit()
		{
			//console.log(this.kWLogCalled());
			this.videoInitOR();
		};

		video.prototype.videoRetrieve = 
			function videoRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.videoRetrieveAutoPlay();
			this.videoRetrieveControls();
			this.videoRetrieveHeight();
			this.videoRetrieveLoop();
			this.videoRetrieveMuted();
			this.videoRetrievePoster();
			this.videoRetrievePreload();
			this.videoRetrieveSrc();
			this.videoRetrieveWidth();
		};

		video.prototype.videoRetrieveAutoPlay = 
			function videoRetrieveAutoPlay()
		{
			var value	= null;
			
			var bVal	= true;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWAutoPlay();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWAutoPlay = bVal;
				//console.debug(this.kWLogDisplay("m_bKWAutoPlay", this.m_bKWAutoPlay));
			}
		};
		
		video.prototype.videoRetrieveControls = 
			function videoRetrieveControls()
		{
			var value	= null;
			
			var bVal	= true;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_bKWControls))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWControls();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWControls = bVal;
				//console.debug(this.kWLogDisplay("m_bKWControls", this.m_bKWControls));
			}
		};
		
		video.prototype.videoRetrieveHeight = 
			function videoRetrieveHeight()
		{
			var value	= null;
			
			var nVal	= true;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberNotNeg(this.m_nKWHeight))
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
			if (validate.isNumberNotNeg(nVal))
			{
				this.m_nKWHeight = nVal;
				//console.debug(this.kWLogDisplay("m_nKWHeight", this.m_nKWHeight));
			}
		};
		
		video.prototype.videoRetrieveLoop = 
			function videoRetrieveLoop()
		{
			var value	= null;
			
			var bVal	= true;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWLoop();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWLoop = bVal;
				//console.debug(this.kWLogDisplay("m_bKWLoop", this.m_bKWLoop));
			}
		};
		
		video.prototype.videoRetrieveMuted = 
			function videoRetrieveMuted()
		{
			var value	= null;
			
			var bVal	= true;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWMuted();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWMuted = bVal;
				//console.debug(this.kWLogDisplay("m_bKWMuted", this.m_bKWMuted));
			}
		};
		
		video.prototype.videoRetrievePoster = 
			function videoRetrievePoster()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWPoster))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWPoster();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWPoster = value.getKWValue();
			if (validate.isString(this.m_sKWPoster))
			{
				//console.debug(this.kWLogDisplay("m_sKWPoster", this.m_sKWPoster));
			}
		};		
		
		video.prototype.videoRetrievePreload = 
			function videoRetrievePreload()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWPreload))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWPreload();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWPreload = value.getKWValue();
			if (validate.isString(this.m_sKWPreload))
			{
				//console.debug(this.kWLogDisplay("m_sKWPreload", this.m_sKWPreload));
			}
		};		
		
		video.prototype.videoRetrieveSrc = 
			function videoRetrieveSrc()
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

		video.prototype.videoRetrieveWidth = 
			function videoRetrieveWidth()
		{
			var value	= null;
			
			var nVal	= true;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberNotNeg(this.m_nKWWidth))
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
			if (validate.isNumberNotNeg(nVal))
			{
				this.m_nKWWidth = nVal;
				//console.debug(this.kWLogDisplay("m_nKWWidth", this.m_nKWWidth));
			}
		};
		
		return video;

	}
);
