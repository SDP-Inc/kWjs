/**********************************************************************
 *
 * audio/obj.js
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

		function audio()
		{
			//console.log("audio::constructor");
			
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

		audio.prototype = new base();
		audio.prototype.constructor = audio;
		audio.constructor = base.prototype.constructor;

		audio.prototype.check =
			function check()
		{
			base.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
		};

		audio.prototype.init = 
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

		audio.prototype.getKWAutoPlay =
			function()
		{
			return this.m_kWAutoPlay;
		};

		audio.prototype.getKWControls =
			function()
		{
			return this.m_kWControls;
		};

		audio.prototype.getKWHeight =
			function()
		{
			return this.m_kWHeight;
		};

		audio.prototype.getKWLoop =
			function()
		{
			return this.m_kWLoop;
		};

		audio.prototype.getKWMuted =
			function()
		{
			return this.m_kWMuted;
		};

		audio.prototype.getKWPoster =
			function()
		{
			return this.m_kWPoster;
		};

		audio.prototype.getKWPreload =
			function()
		{
			return this.m_kWPreLoad;
		};

		audio.prototype.getKWSrc =
			function()
		{
			return this.m_kWSrc;
		};

		audio.prototype.getKWWidth =
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
	
		audio.prototype.baseCreateOR = 
			function()
		{
			this.audioCreate();
		};

		audio.prototype.baseDeleteOR =
			function()
			{
				this.audioDelete();
			};

		audio.prototype.baseInitOR =
			function()
		{
			this.audioInit();
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

		audio.prototype.audioCreate = 
			function audioCreate() 
		{
			//console.log(this.kWLogCalled());
			
			this.audioCreateAutoPlay();
			this.audioCreateControls();
			this.audioCreateHeight();
			this.audioCreateLoop();
			this.audioCreateMuted();
			this.audioCreatePoster();
			this.audioCreatePreload();
			this.audioCreateSrc();
			this.audioCreateWidth();
		};
		
		audio.prototype.audioCreateAutoPlay = 
			function audioCreateAutoPlay() 
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
		
		audio.prototype.audioCreateControls = 
			function audioCreateControls() 
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
		
		audio.prototype.audioCreateHeight = 
			function audioCreateHeight() 
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
		
		audio.prototype.audioCreateLoop = 
			function audioCreateLoop() 
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
		
		audio.prototype.audioCreateMuted = 
			function audioCreateMuted() 
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
		
		audio.prototype.audioCreatePoster = 
			function audioCreatePoster() 
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
		
		audio.prototype.audioCreatePreload = 
			function audioCreatePreload() 
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
		
		audio.prototype.audioCreateSrc = 
			function audioCreateSrc() 
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
		
		audio.prototype.audioCreateWidth = 
			function audioCreateWidth() 
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

		audio.prototype.audioDelete =
			function audioDelete()
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

		audio.prototype.audioInit =
			function audioInit()
		{
			//console.log(this.kWLogCalled());
		};

		return audio;

	}
);
