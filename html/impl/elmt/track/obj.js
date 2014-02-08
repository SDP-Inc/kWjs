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
		"../../attrs/track/obj",
		"../../view/track/obj",
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

		function track()
		{
			//console.log("track::constructor");

			this.m_sKWTag		= "track";
			
			this.m_sKWKind		= null;
			this.m_sKWLabel		= null;
			this.m_sKWSrc		= null;
			this.m_sKWSrcLang	= null;
			
			this.m_bKWDefault	= false;
		}

		track.prototype = new elmt();
		track.prototype.constructor = track;
		track.constructor = elmt.prototype.constructor;

		track.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		track.prototype.init =
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

		track.prototype.elmtCreateAttrsOR =
			function()
		{
			return this.trackCreateAttrs(); 
		};
		
		track.prototype.elmtCreateViewOR =
			function()
		{
			return this.trackCreateView();
		};
		
		track.prototype.elmtInitOR = 
			function()
		{
			this.trackInit();
		};
		
		track.prototype.elmtRetrieveOR = 
			function()
		{
			this.trackRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		track.prototype.trackInitOR = 
			function trackInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		track.prototype.trackCreateAttrs = 
			function trackCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWDefault(this.m_nDefault);
			theAttrs.setKWKind(this.m_sKWKind);
			theAttrs.setKWLabel(this.m_nLabel);
			theAttrs.setKWSrc(this.m_sKWSrc);
			theAttrs.setKWSrcLang(this.m_sKWSrcLang);
			
			return theAttrs;
		};

		track.prototype.trackCreateView = 
			function trackCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		track.prototype.trackInit = 
			function trackInit()
		{
			//console.log(this.kWLogCalled());
			this.trackInitOR();
		};

		track.prototype.trackRetrieve = 
			function trackRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.trackRetrieveDefault();
			this.trackRetrieveKind();
			this.trackRetrieveLabel();
			this.trackRetrieveSrc();
			this.trackRetrieveSrcLang();
		};
		
		track.prototype.trackRetrieveDefault = 
			function trackRetrieveDefault()
		{
			var value	= null;
			
			var bVal	= null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWDefault();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWDefault = bVal;
				//console.debug(this.kWLogDisplay("m_bKWDefault", this.m_bKWDefault));
			}
		};
		
		track.prototype.trackRetrieveKind = 
			function trackRetrieveKind()
		{
			var value	= null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWKind))
			{
				console.error(this.logDuplicated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWKind();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWKind = value.getKWValue();
			if (validate.isString(this.m_sKWKind))
			{
				//console.debug(this.kWLogDisplay("m_sKWKind", this.m_sKWKind));
			}
		};
		
		track.prototype.trackRetrieveLabel = 
			function trackRetrieveLabel()
		{
			var value	= null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWLabel))
			{
				console.error(this.logDuplicated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWLabel();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWLabel = value.getKWValue();
			if (validate.isString(this.m_sKWLabel))
			{
				//console.debug(this.kWLogDisplay("m_sKWLabel", this.m_sKWLabel));
			}
		};
		
		track.prototype.trackRetrieveSrc = 
			function trackRetrieveSrc()
		{
			var value	= null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWSrc))
			{
				console.error(this.logDuplicated());
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
		
		track.prototype.trackRetrieveSrcLang = 
			function trackRetrieveSrcLang()
		{
			var value	= null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWSrcLang))
			{
				console.error(this.logDuplicated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWSrcLang();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWSrcLang = value.getKWValue();
			if (validate.isString(this.m_sKWSrcLang))
			{
				//console.debug(this.kWLogDisplay("m_sKWSrcLang", this.m_sKWSrcLang));
			}
		};
		
		return track;
		
	}
);
