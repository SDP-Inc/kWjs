/**********************************************************************
 *
 * style/obj.js
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
		"../../attrs/style/obj",
		"../../view/style/obj",
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

		function style()
		{
			//console.log("style::constructor");

			this.m_sKWTag		= "style";
			
			this.m_sKWMedia	    = null;
			this.m_sKWType	    = null;
			
			this.m_bKWScoped	= null;
		}

		style.prototype = new elmt();
		style.prototype.constructor = style;
		style.constructor = elmt.prototype.constructor;

		style.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		style.prototype.init = 
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

		style.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.styleCreateAttrs(); 
		};
		
		style.prototype.elmtCreateViewOR =
			function()
		{
			return this.styleCreateView();
		};
		
		style.prototype.elmtInitOR =
			function()
		{
			this.styleInit();
		};
		
		style.prototype.elmtRetrieveOR =
			function()
		{
			this.styleRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		style.prototype.styleInitOR = 
			function styleInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		style.prototype.styleCreateAttrs = 
			function styleCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWMedia(this.m_sKWMedia);
			theAttrs.setKWScoped(this.m_bKWScoped);
			theAttrs.setKWType(this.m_sKWType);
			
			return theAttrs;
		};

		style.prototype.styleCreateView = 
			function styleCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		style.prototype.styleInit = 
			function styleInit()
		{
			//console.log(this.kWLogCalled());
			this.styleInitOR();
		};

		style.prototype.styleRetrieve = 
			function styleRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.styleRetrieveMedia();
			this.styleRetrieveScoped();
			this.styleRetrieveType();
		};
		
		style.prototype.styleRetrieveMedia = 
			function styleRetrieveMedia()
		{
			var value	= null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWMedia))
			{
				console.error(this.logDuplicated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWMedia();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWMedia = value.getKWValue();
			if (validate.isString(this.m_sKWMedia))
			{
				//console.debug(this.kWLogDisplay("m_sKWMedia", this.m_sKWMedia));
			}
		};

		style.prototype.styleRetrieveScoped = 
			function styleRetrieveScoped()
		{
			var value	= null;
			
			var bVal	= false;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWScoped();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWScoped = bVal;
				//console.debug(this.kWLogDisplay("m_bKWScoped", this.m_bKWScoped));
			}
		};

		style.prototype.styleRetrieveType = 
			function styleRetrieveType()
		{
			var value	= null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWType))
			{
				console.error(this.logDuplicated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWType();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWType = value.getKWValue();
			if (validate.isString(this.m_sKWType))
			{
				//console.debug(this.kWLogDisplay("m_sKWType", this.m_sKWType));
			}
		};
		
		return style;
		
	}
);
