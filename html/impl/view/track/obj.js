/**********************************************************************
 *
 * track/obj.js
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
		"../../value/default/obj",
		"../../value/kind/obj",
		"../../value/label/obj",
		"../../value/src/obj",
		"../../value/srcLang/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		default_,
		kind,
		label,
		src,
		srcLang,
		base,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function track()
		{
			//console.log("track::constructor");
			
			this.m_kWDefault	= null;
			this.m_kWKind		= null;
			this.m_kWLabel	    = null;
			this.m_kWSrc		= null;
			this.m_kWSrcLang	= null;
		}

		track.prototype = new base();
		track.prototype.constructor = track;
		track.constructor = base.prototype.constructor;

		track.prototype.check = function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		track.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			base.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		track.prototype.getKWDefault =
			function()
		{
			return this.m_kWDefault;
		};

		track.prototype.getKWKind =
			function()
		{
			return this.m_kWKind;
		};

		track.prototype.getKWLabel =
			function()
		{
			return this.m_kWLabel;
		};

		track.prototype.getKWSrc =
			function()
		{
			return this.m_kWSrc;
		};

		track.prototype.getKWSrcLang =
			function()
		{
			return this.m_kWSrcLang;
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
	
		track.prototype.baseCreateOR = 
			function()
		{
			this.trackCreate();
		};

		track.prototype.baseDeleteOR =
			function()
			{
				this.trackDelete();
			};

		track.prototype.baseInitOR =
			function()
		{
			this.trackInit();
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

		track.prototype.trackCreate = 
			function trackCreate() 
		{
			//console.log(this.kWLogCalled());
			
			this.trackCreateDefault();
			this.trackCreateKind();
			this.trackCreateLabel();
			this.trackCreateSrc();
			this.trackCreateSrcLang();
		};
		
		track.prototype.trackCreateDefault = 
			function trackCreateDefault() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWDefault))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWDefault = new default_();
			
			this.m_kWDefault.setKWView(this);
			this.m_kWDefault.setKWIDParent(this.m_sKWID);
			
			this.m_kWDefault.check();
			this.m_kWDefault.init();

			this.kWAddValue(this.m_kWDefault);
		};
		
		track.prototype.trackCreateKind = 
			function trackCreateKind() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWKind))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWKind = new kind();
			
			this.m_kWKind.setKWView(this);
			this.m_kWKind.setKWIDParent(this.m_sKWID);
			
			this.m_kWKind.check();
			this.m_kWKind.init();

			this.kWAddValue(this.m_kWKind);
		};
		
		track.prototype.trackCreateLabel = 
			function trackCreateLabel() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWLabel))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWLabel = new label();
			
			this.m_kWLabel.setKWView(this);
			this.m_kWLabel.setKWIDParent(this.m_sKWID);
			
			this.m_kWLabel.check();
			this.m_kWLabel.init();

			this.kWAddValue(this.m_kWLabel);
		};
		
		track.prototype.trackCreateSrc = 
			function trackCreateSrc() 
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
		
		track.prototype.trackCreateSrcLang = 
			function trackCreateSrcLang() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWSrcLang))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWSrcLang = new srcLang();
			
			this.m_kWSrcLang.setKWView(this);
			this.m_kWSrcLang.setKWIDParent(this.m_sKWID);
			
			this.m_kWSrcLang.check();
			this.m_kWSrcLang.init();

			this.kWAddValue(this.m_kWSrcLang);
		};

		track.prototype.trackDelete =
			function trackDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWDefault	= null;
			this.m_kWKind		= null;
			this.m_kWLabel	    = null;
			this.m_kWSrc		= null;
			this.m_kWSrcLang	= null;
		};

		track.prototype.trackInit =
			function trackInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return track;

	}
);
