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
		"../../attrs/audio/obj",
		"../../view/audio/obj",
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

		function audio()
		{
			//console.log("audio::constructor");

			this.m_sKWTag		= "audio";
			
			this.m_sKWPreload	= null;
			this.m_sKWSrc		= null;
			
			this.m_bKWControls	= true;
			this.m_bKWAutoPlay	= true;
			this.m_bKWLoop		= true;
			this.m_bKWMuted		= true;
		}

		audio.prototype = new elmt();
		audio.prototype.constructor = audio;
		audio.constructor = elmt.prototype.constructor;

		audio.prototype.check =
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		audio.prototype.init = 
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

		audio.prototype.setKWControls =
			function(bVal)
		{
			this.m_bKWControls = bVal;
		};

		audio.prototype.setKWAutoPlay =
			function(bVal)
		{
			this.m_bKWAutoPlay = bVal;
		};

		audio.prototype.setKWLoop =
			function(bVal)
		{
			this.m_bKWLoop = bVal;
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
	
		audio.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.audioCreateAttrs(); 
		};
		
		audio.prototype.elmtCreateViewOR = 
			function()
		{
			return this.audioCreateView();
		};
		
		audio.prototype.elmtInitOR = 
			function()
		{
			this.audioInit();
		};
		
		audio.prototype.elmtRetrieveOR = 
			function()
		{
			this.audioRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		audio.prototype.audioInitOR = 
			function audioInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		audio.prototype.audioCreateAttrs = 
			function audioCreateAttrs()
		{
			theAttrs = null;
			
			//console.log(this.kWLogCalled());
			theAttrs = new attrs();
			
			theAttrs.setKWControls(this.m_bKWControls);
			theAttrs.setKWAutoPlay(this.m_bKWAutoPlay);
			theAttrs.setKWLoop(this.m_bKWLoop);
			theAttrs.setKWMuted(this.m_bKWMuted);
			theAttrs.setKWPreload(this.m_sKWPreload);
			theAttrs.setKWSrc(this.m_sKWSrc);
			
			return theAttrs;
		};

		audio.prototype.audioCreateView = 
			function audioCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		audio.prototype.audioInit = 
			function audioInit()
		{
			//console.log(this.kWLogCalled());
			this.audioInitOR();
		};

		audio.prototype.audioRetrieve = 
			function audioRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.audioRetrieveControls();
			this.audioRetrieveAutoPlay();
			this.audioRetrieveLoop();
			this.audioRetrieveMuted();
			this.audioRetrievePreload();
			this.audioRetrieveSrc();
		};

		audio.prototype.audioRetrieveAutoPlay = 
			function audioRetrieveAutoPlay()
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
		
		audio.prototype.audioRetrieveControls = 
			function audioRetrieveControls()
		{
			var value	= null;
			
			var bVal	= true;
			
			//console.log(this.kWLogCalled());
			
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
		
		audio.prototype.audioRetrieveLoop = 
			function audioRetrieveLoop()
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
		
		audio.prototype.audioRetrieveMuted = 
			function audioRetrieveMuted()
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
		audio.prototype.audioRetrievePreload = 
			function audioRetrievePreload()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
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
		
		audio.prototype.audioRetrieveSrc = 
			function audioRetrieveSrc()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
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

		return audio;

	}
);
