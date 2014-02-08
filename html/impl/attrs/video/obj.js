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
		"../../attr/autoPlay/obj",
		"../../attr/controls/obj",
		"../../attr/height/obj",
		"../../attr/loop/obj",
		"../../attr/muted/obj",
		"../../attr/poster/obj",
		"../../attr/preload/obj",
		"../../attr/src/obj",
		"../../attr/width/obj",
		"../../../base/attrs/html/obj",
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
		html,
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
			this.m_kWHeight		= null;
			this.m_kWLoop		= null;
			this.m_kWMuted		= null;
			this.m_kWPoster		= null;
			this.m_kWPreload	= null;
			this.m_kWSrc		= null;
			this.m_kWWidth		= null;
			
			this.m_bKWAutoPlay	= true;
			this.m_bKWControls	= true;
			this.m_bKWLoop		= true;
			this.m_bKWMuted		= false;
			
			this.m_sKWPoster	= null;
			this.m_sKWPreload	= null;
			this.m_sKWSrc		= null;
			
			this.m_nKWHeight	= -1;
			this.m_nKWWidth		= -1;
		}

		video.prototype = new html();
		video.prototype.constructor = video;
		video.constructor = html.prototype.constructor;

		video.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		video.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			html.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		video.prototype.setKWAutoPlay =
			function(bVal)
		{
			this.videoSetAutoPlay(bVal);
		};

		video.prototype.setKWControls =
			function(bVal)
		{
			this.videoSetControls(bVal);
		};

		video.prototype.setKWHeight =
			function(nVal)
		{
			this.videoSetHeight(nVal);
		};

		video.prototype.setKWLoop =
			function(bVal)
		{
			this.videoSetLoop(bVal);
		};

		video.prototype.setKWMuted =
			function(bVal)
		{
			this.videoSetMuted(bVal);
		};

		video.prototype.setKWPoster =
			function(sVal)
		{
			this.videoSetPoster(sVal);
		};

		video.prototype.setKWPreload =
			function(sVal)
		{
			this.videoSetPreload(sVal);
		};

		video.prototype.setKWSrc =
			function(sVal)
		{
			this.videoSetSrc(sVal);
		};

		video.prototype.setKWWidth =
			function(nVal)
		{
			this.videoSetWidth(nVal);
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
	
		video.prototype.htmlCreateOR = 
			function()
		{
			this.videoCreate();
		};

		video.prototype.htmlDeleteOR =
			function()
		{
			this.videoDelete();
		};

		video.prototype.htmlInitOR =
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
			var value   = null;

			var bValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWAutoPlay))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWAutoPlay();
			if (validate.isNotNull(value))
			{
				bValue = value.getKWValue();
			}

			if (!validate.isBool(bValue))
			{
				bValue = this.m_bKWAutoPlay;
			}

			if (!validate.isBool(bValue))
			{
				return;
			}

			this.videoCreateAutoPlayImpl();

			this.m_kWAutoPlay.setKWValue(bValue);
		};

		video.prototype.videoCreateAutoPlayImpl =
			function videoCreateAutoPlayImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWAutoPlay))
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

			this.m_kWAutoPlay = new autoPlay();

			this.m_kWAutoPlay.setKWIDParent(this.m_sKWID);
			this.m_kWAutoPlay.setKWDom(this.m_kWDom);

			this.m_kWAutoPlay.check();
			this.m_kWAutoPlay.init();

			this.kWAddAttr(this.m_kWAutoPlay);
		};

		video.prototype.videoCreateControls =
			function videoCreateControls()
		{
			var value   = null;

			var bValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWControls))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWControls();
			if (validate.isNotNull(value))
			{
				bValue = value.getKWValue();
			}

			if (!validate.isBool(bValue))
			{
				bValue = this.m_bKWControls;
			}

			if (!validate.isBool(bValue))
			{
				return;
			}

			this.videoCreateControlsImpl();

			this.m_kWControls.setKWValue(bValue);
		};

		video.prototype.videoCreateControlsImpl =
			function videoCreateControlsImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWControls))
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

			this.m_kWControls = new controls();

			this.m_kWControls.setKWIDParent(this.m_sKWID);
			this.m_kWControls.setKWDom(this.m_kWDom);

			this.m_kWControls.check();
			this.m_kWControls.init();

			this.kWAddAttr(this.m_kWControls);
		};

		video.prototype.videoCreateHeight =
			function videoCreateHeight()
		{
			var value   = null;

			var sValue  = null;

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
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWHeight;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.videoCreateHeightImpl();

			this.m_kWHeight.setKWValue(sValue);
		};

		video.prototype.videoCreateHeightImpl =
			function videoCreateHeightImpl()
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

		video.prototype.videoCreateLoop =
			function videoCreateLoop()
		{
			var value   = null;

			var bValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWLoop))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWLoop();
			if (validate.isNotNull(value))
			{
				bValue = value.getKWValue();
			}

			if (!validate.isBool(bValue))
			{
				bValue = this.m_bKWLoop;
			}

			if (!validate.isBool(bValue))
			{
				return;
			}

			this.videoCreateLoopImpl();

			this.m_kWLoop.setKWValue(bValue);
		};

		video.prototype.videoCreateLoopImpl =
			function videoCreateLoopImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWLoop))
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

			this.m_kWLoop = new loop();

			this.m_kWLoop.setKWIDParent(this.m_sKWID);
			this.m_kWLoop.setKWDom(this.m_kWDom);

			this.m_kWLoop.check();
			this.m_kWLoop.init();

			this.kWAddAttr(this.m_kWLoop);
		};

		video.prototype.videoCreateMuted =
			function videoCreateMuted()
		{
			var value   = null;

			var bValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWMuted))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWMuted();
			if (validate.isNotNull(value))
			{
				bValue = value.getKWValue();
			}

			if (!validate.isBool(bValue))
			{
				bValue = this.m_bKWMuted;
			}

			if (!validate.isBool(bValue))
			{
				return;
			}

			this.videoCreateMutedImpl();

			this.m_kWMuted.setKWValue(bValue);
		};

		video.prototype.videoCreateMutedImpl =
			function videoCreateMutedImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWMuted))
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

			this.m_kWMuted = new muted();

			this.m_kWMuted.setKWIDParent(this.m_sKWID);
			this.m_kWMuted.setKWDom(this.m_kWDom);

			this.m_kWMuted.check();
			this.m_kWMuted.init();

			this.kWAddAttr(this.m_kWMuted);
		};

		video.prototype.videoCreatePoster =
			function videoCreatePoster()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWPoster))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWPoster();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWPoster;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.videoCreatePosterImpl();

			this.m_kWPoster.setKWValue(sValue);
		};

		video.prototype.videoCreatePosterImpl =
			function videoCreatePosterImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWPoster))
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

			this.m_kWPoster = new poster();

			this.m_kWPoster.setKWIDParent(this.m_sKWID);
			this.m_kWPoster.setKWDom(this.m_kWDom);

			this.m_kWPoster.check();
			this.m_kWPoster.init();

			this.kWAddAttr(this.m_kWPoster);
		};

		video.prototype.videoCreatePreload =
			function videoCreatePreload()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWPreload))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWPreload();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWPreload;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.videoCreatePreloadImpl();

			this.m_kWPreload.setKWValue(sValue);
		};

		video.prototype.videoCreatePreloadImpl =
			function videoCreatePreloadImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWPreload))
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

			this.m_kWPreload = new preload();

			this.m_kWPreload.setKWIDParent(this.m_sKWID);
			this.m_kWPreload.setKWDom(this.m_kWDom);

			this.m_kWPreload.check();
			this.m_kWPreload.init();

			this.kWAddAttr(this.m_kWPreload);
		};

		video.prototype.videoCreateSrc =
			function videoCreateSrc()
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

			this.videoCreateSrcImpl();

			this.m_kWSrc.setKWValue(sValue);
		};

		video.prototype.videoCreateSrcImpl =
			function videoCreateSrcImpl()
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

		video.prototype.videoCreateWidth =
			function videoCreateWidth()
		{
			var value   = null;

			var sValue  = null;

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
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWWidth;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.videoCreateWidthImpl();

			this.m_kWWidth.setKWValue(sValue);
		};

		video.prototype.videoCreateWidthImpl =
			function videoCreateWidthImpl()
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

		video.prototype.videoDelete =
			function videoDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWAutoPlay	= null;
			this.m_kWControls	= null;
			this.m_kWHeight		= null;
			this.m_kWLoop		= null;
			this.m_kWMuted		= null;
			this.m_kWPoster		= null;
			this.m_kWPreload	= null;
			this.m_kWSrc		= null;
			this.m_kWWidth		= null;
		};

		video.prototype.videoInit =
			function videoInit()
		{
			//console.log(this.kWLogCalled());
		};

		video.prototype.videoSetAutoPlay =
			function videoSetAutoPlay(bVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isBool(bVal))
			{
				return;
			}

			this.m_bKWAutoPlay = bVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWAutoPlay))
			{
				this.videoCreateAutoPlayImpl();
			}

			this.m_kWAutoPlay.setKWValue(this.m_bKWAutoPlay);
		};

		video.prototype.videoSetControls =
			function videoSetControls(bVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isBool(bVal))
			{
				return;
			}

			this.m_bKWControls = bVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWControls))
			{
				this.videoCreateControlsImpl();
			}

			this.m_kWControls.setKWValue(this.m_bKWControls);
		};

		video.prototype.videoSetHeight =
			function videoSetHeight(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWHeight = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWHeight))
			{
				this.videoCreateHeightImpl();
			}

			this.m_kWHeight.setKWValue(this.m_sKWHeight);
		};

		video.prototype.videoSetLoop =
			function videoSetLoop(bVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isBool(bVal))
			{
				return;
			}

			this.m_bKWLoop = bVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWLoop))
			{
				this.videoCreateLoopImpl();
			}

			this.m_kWLoop.setKWValue(this.m_bKWLoop);
		};

		video.prototype.videoSetMuted =
			function videoSetMuted(bVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isBool(bVal))
			{
				return;
			}

			this.m_bKWMuted = bVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWMuted))
			{
				this.videoCreateMutedImpl();
			}

			this.m_kWMuted.setKWValue(this.m_bKWMuted);
		};

		video.prototype.videoSetPoster =
			function videoSetPoster(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWPoster = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWPoster))
			{
				this.videoCreatePosterImpl();
			}

			this.m_kWPoster.setKWValue(this.m_sKWPoster);
		};

		video.prototype.videoSetPreload =
			function videoSetPreload(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWPreload = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWPreload))
			{
				this.videoCreatePreloadImpl();
			}

			this.m_kWPreload.setKWValue(this.m_sKWPreload);
		};

		video.prototype.videoSetSrc =
			function videoSetSrc(sVal)
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
				this.videoCreateSrcImpl();
			}

			this.m_kWSrc.setKWValue(this.m_sKWSrc);
		};

		video.prototype.videoSetWidth =
			function videoSetWidth(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWWidth = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWWidth))
			{
				this.videoCreateWidthImpl();
			}

			this.m_kWWidth.setKWValue(this.m_sKWWidth);
		};

		return video;

	}
);
