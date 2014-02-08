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
		"../../value/autoPlay/obj",
		"../../value/controls/obj",
		"../../value/height/obj",
		"../../value/loop/obj",
		"../../value/muted/obj",
		"../../value/poster/obj",
		"../../value/preload/obj",
		"../../value/src/obj",
		"../../value/width/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		autoPlay,
		controls,
		height,
		loop,
		muted,
		poster,
		preload,
		src,
		width,
		base,
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
			
			this.m_kWAutoPlay	= null;
			this.m_kWControls	= null;
			this.m_kWHeight	    = null;
			this.m_kWLoop		= null;
			this.m_kWMuted	    = null;
			this.m_kWPoster	    = null;
			this.m_kWPreLoad	= null;
			this.m_kWSrc		= null;
			this.m_kWWidth	    = null;
		}

		video.prototype = new base();
		video.prototype.constructor = video;
		video.constructor = base.prototype.constructor;

		video.prototype.check =
			function check()
		{
			base.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
		};

		video.prototype.init =
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

		video.prototype.getKWControls =
			function()
		{
			return this.m_kWControls;
		};

		video.prototype.getKWAutoPlay =
			function()
		{
			return this.m_kWAutoPlay;
		};

		video.prototype.getKWHeight =
			function()
		{
			return this.m_kWHeight;
		};

		video.prototype.getKWLoop =
			function()
		{
			return this.m_kWLoop;
		};

		video.prototype.getKWMuted =
			function()
		{
			return this.m_kWMuted;
		};

		video.prototype.getKWSrc =
			function()
		{
			return this.m_kWSrc;
		};

		video.prototype.getKWPoster =
			function()
		{
			return this.m_kWPoster;
		};

		video.prototype.getKWPreload =
			function()
		{
			return this.m_kWPreLoad;
		};

		video.prototype.getKWWidth =
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
	
		video.prototype.baseCreateOR =
			function()
		{
			this.videoCreate();
		};

		video.prototype.baseDeleteOR =
			function()
			{
				this.videoDelete();
			};

		video.prototype.baseInitOR =
			function()
		{
			this.videoInit();
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

		video.prototype.videoCreate = 
			function videoCreate() 
		{
			//console.log(this.kWLogCalled());
			this.videoCreateAutoPlay();
			this.videoCreateControls();
			this.videoCreateHeight();
			this.videoCreateLoop();
			this.videoCreateMuted();
			this.videoCreatePoster();
			this.videoCreatePreload();
			this.videoCreateSrc();
			this.videoCreateWidth();
		};
		
		video.prototype.videoCreateAutoPlay = 
			function videoCreateAutoPlay() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWAutoPlay))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWAutoPlay = new autoPlay();
			
			this.m_kWAutoPlay.setKWView(this);
			this.m_kWAutoPlay.setKWIDParent(this.m_sKWID);
			
			this.m_kWAutoPlay.check();
			this.m_kWAutoPlay.init();

			this.kWAddValue(this.m_kWAutoPlay);
		};
		
		video.prototype.videoCreateControls = 
			function videoCreateControls() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWControls))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWControls = new controls();
			
			this.m_kWControls.setKWView(this);
			this.m_kWControls.setKWIDParent(this.m_sKWID);
			
			this.m_kWControls.check();
			this.m_kWControls.init();

			this.kWAddValue(this.m_kWControls);
		};
		
		video.prototype.videoCreateHeight = 
			function videoCreateHeight() 
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
		
		video.prototype.videoCreateLoop = 
			function videoCreateLoop() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWLoop))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWLoop = new loop();
			
			this.m_kWLoop.setKWView(this);
			this.m_kWLoop.setKWIDParent(this.m_sKWID);
			
			this.m_kWLoop.check();
			this.m_kWLoop.init();

			this.kWAddValue(this.m_kWLoop);
		};
		
		video.prototype.videoCreateMuted = 
			function videoCreateMuted() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWMuted))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWMuted = new muted();
			
			this.m_kWMuted.setKWView(this);
			this.m_kWMuted.setKWIDParent(this.m_sKWID);
			
			this.m_kWMuted.check();
			this.m_kWMuted.init();

			this.kWAddValue(this.m_kWMuted);
		};
		
		video.prototype.videoCreatePoster = 
			function videoCreatePoster() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWPoster))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWPoster = new poster();
			
			this.m_kWPoster.setKWView(this);
			this.m_kWPoster.setKWIDParent(this.m_sKWID);
			
			this.m_kWPoster.check();
			this.m_kWPoster.init();

			this.kWAddValue(this.m_kWPoster);
		};
		
		video.prototype.videoCreatePreload = 
			function videoCreatePreload() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWPreLoad))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWPreLoad = new preload();
			
			this.m_kWPreLoad.setKWView(this);
			this.m_kWPreLoad.setKWIDParent(this.m_sKWID);
			
			this.m_kWPreLoad.check();
			this.m_kWPreLoad.init();

			this.kWAddValue(this.m_kWPreLoad);
		};
		
		video.prototype.videoCreateSrc = 
			function videoCreateSrc() 
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
		
		video.prototype.videoCreateWidth = 
			function videoCreateWidth() 
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

		video.prototype.videoDelete =
			function videoDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWAutoPlay	= null;
			this.m_kWControls	= null;
			this.m_kWHeight	    = null;
			this.m_kWLoop		= null;
			this.m_kWMuted	    = null;
			this.m_kWPoster	    = null;
			this.m_kWPreLoad	= null;
			this.m_kWSrc		= null;
			this.m_kWWidth	    = null;
		};

		video.prototype.videoInit =
			function videoInit()
		{
			//console.log(this.kWLogCalled());
		};

		return video;

	}
);
