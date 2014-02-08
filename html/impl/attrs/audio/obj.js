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
		"../../attr/autoPlay/obj",
		"../../attr/controls/obj",
		"../../attr/loop/obj",
		"../../attr/muted/obj",
		"../../attr/preload/obj",
		"../../attr/src/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		autoPlay,
		controls,
		loop,
		muted,
		preload,
		src,
		html,
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
			this.m_kWLoop		= null;
			this.m_kWMuted		= null;
			this.m_kWPreLoad	= null;
			this.m_kWSrc		= null;
			
			this.m_bKWAutoPlay	= true;
			this.m_bKWControls	= true;
			this.m_bKWLoop		= true;
			this.m_bKWMuted		= false;
			
			this.m_sKWPreload	= null;
			this.m_sKWSrc		= null;
		}

		audio.prototype = new html();
		audio.prototype.constructor = audio;
		audio.constructor = html.prototype.constructor;

		audio.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		audio.prototype.init = 
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

		audio.prototype.setKWAutoPlay =
			function(bVal)
		{
			this.audioSetAutoPlay(sVal);
		};

		audio.prototype.setKWControls =
			function(bVal)
		{
			this.audioSetControls(bVal);
		};

		audio.prototype.setKWLoop =
			function(bVal)
		{
			this.audioSetLoop(bVal);
		};

		audio.prototype.setKWMuted =
			function(bVal)
		{
			this.audioSetMuted(bVal);
		};

		audio.prototype.setKWPreload =
			function(sVal)
		{
			this.audioSetPreload(sVal);
		};

		audio.prototype.setKWSrc =
			function(sVal)
		{
			this.audioSetSrc(sVal);
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
	
		audio.prototype.htmlCreateOR = 
			function()
		{
			this.audioCreate();
		};
		
		audio.prototype.htmlDeleteOR =
			function()
		{
			this.audioDelete();
		};

		audio.prototype.htmlInitOR =
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
			this.audioCreateLoop();
			this.audioCreateMuted();
			this.audioCreatePreload();
			this.audioCreateSrc();
		};

		audio.prototype.audioCreateAutoPlay =
			function audioCreateAutoPlay()
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

			this.audioCreateAutoPlayImpl();

			this.m_kWAutoPlay.setKWValue(bValue);
		};

		audio.prototype.audioCreateAutoPlayImpl =
			function audioCreateAutoPlayImpl()
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

		audio.prototype.audioCreateControls =
			function audioCreateControls()
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

			this.audioCreateControlsImpl();

			this.m_kWControls.setKWValue(bValue);
		};

		audio.prototype.audioCreateControlsImpl =
			function audioCreateControlsImpl()
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

		audio.prototype.audioCreateLoop =
			function audioCreateLoop()
		{

			var value   = null;

			var sValue  = null;

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

			this.audioCreateLoopImpl();

			this.m_kWLoop.setKWValue(bValue);
		};

		audio.prototype.audioCreateLoopImpl =
			function audioCreateLoopImpl()
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

		audio.prototype.audioCreateMuted =
			function audioCreateMuted()
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

			this.audioCreateMutedImpl();

			this.m_kWMuted.setKWValue(bValue);
		};

		audio.prototype.audioCreateMutedImpl =
			function audioCreateMutedImpl()
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

		audio.prototype.audioCreatePreload =
			function audioCreatePreload()
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

			this.audioCreatePreloadImpl();

			this.m_kWPreload.setKWValue(sValue);
		};

		audio.prototype.audioCreatePreloadImpl =
			function audioCreatePreloadImpl()
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

		audio.prototype.audioCreateSrc =
			function audioCreateSrc()
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

			this.audioCreateSrcImpl();

			this.m_kWSrc.setKWValue(sValue);
		};

		audio.prototype.audioCreateSrcImpl =
			function audioCreateSrcImpl()
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

		audio.prototype.audioDelete =
			function audioDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWAutoPlay	= null;
			this.m_kWControls	= null;
			this.m_kWLoop		= null;
			this.m_kWMuted		= null;
			this.m_kWPreLoad	= null;
			this.m_kWSrc		= null;
		};

		audio.prototype.audioInit =
			function audioInit()
		{
			//console.log(this.kWLogCalled());
		};

		audio.prototype.audioSetAutoPlay =
			function audioSetAutoPlay(bVal)
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
				this.kWCreateAutoPlayImpl();
			}

			this.m_kWAutoPlay.setKWValue(this.m_bKWAutoPlay);
		};

		audio.prototype.audioSetControls =
			function audioSetControls(bVal)
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
				this.kWCreateControlsImpl();
			}

			this.m_kWControls.setKWValue(this.m_bKWControls);
		};

		audio.prototype.audioSetAlt =
			function audioSetLoop(bVal)
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
				this.kWCreateLoopImpl();
			}

			this.m_kWLoop.setKWValue(this.m_bKWLoop);
		};

		audio.prototype.audioSetLoop =
			function audioSetLoop(bVal)
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
				this.kWCreateLoopImpl();
			}

			this.m_kWLoop.setKWValue(this.m_bKWLoop);
		};

		audio.prototype.audioSetMuted =
			function audioSetMuted(bVal)
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
				this.kWCreateMutedImpl();
			}

			this.m_kWMuted.setKWValue(this.m_bKWMuted);
		};

		audio.prototype.audioSetPreload =
			function audioSetPreload(sVal)
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
				this.kWCreatePreloadImpl();
			}

			this.m_kWPreload.setKWValue(this.m_sKWPreload);
		};

		audio.prototype.audioSetSrc =
			function audioSetSrc(sVal)
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
				this.kWCreateSrcImpl();
			}

			this.m_kWSrc.setKWValue(this.m_sKWSrc);
		};

		return audio;

	}
);
