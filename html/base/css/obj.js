/**********************************************************************
 *
 * css/obj.js
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
		"kWLog/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
		log,
		validate,
		$
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function css() 
		{
			//console.log("css::constructor");
			
			this.m_sKWTagDisplay	= "display";
			this.m_sKWTagNone		= "none";
			
			this.m_bKWIsVisible	    = true;
			
			this.m_kWDom			= null;
			this.m_kWView			= null;
		}

		css.prototype = new log();
		css.prototype.constructor = css;
		css.constructor = log.prototype.constructor;

		css.prototype.check =
			function check() 
		{
			log.prototype.check.call(this);

			//console.log(this.kWLogCalled());
	
			if (!validate.isNotNull(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}
	
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
	
			if (!validate.isString(this.m_sKWTagDisplay))
			{
				console.error(this.kWLogInvalid("m_sKWTagDisplay"));
			}
	
			if (!validate.isString(this.m_sKWTagNone))
			{
				console.error(this.kWLogInvalid("m_sKWTagNone"));
			}
		};

		css.prototype.init =
			function init() 
		{
			//console.log(this.kWLogCalled());
			log.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		css.prototype.setKWDom =
			function(obj)
		{
			this.m_kWDom = obj;
		};

		css.prototype.setKWIsVisible =
			function(bVal)
		{
			this.cssSetIsVisible(bVal);
		};

		css.prototype.setKWView =
			function(obj)
		{
			this.m_kWView = obj;
		};

		css.prototype.setKWVisibility =
			function()
		{
			this.cssSetVisibility();
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

		css.prototype.hide = 
			function() 
		{
			this.cssSetIsVisible(false);
		};

		css.prototype.show =
			function() 
		{
			this.cssSetIsVisible(true);
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		css.prototype.uBLDeleteOR =
			function()
			{
				this.cssDelete();
			};

		css.prototype.uBLInitOR =
			function()
			{
				this.cssInit();
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

		css.prototype.cssDelete =
			function cssDelete()
		{
			//console.log(this.kWLogCalled());
			this.m_kWDom			= null;
			this.m_kWView			= null;
		};

		css.prototype.cssInit =
			function cssInit()
		{
			//console.log(this.kWLogCalled());
		};

		css.prototype.cssRemoveStyle =
			function cssRemoveStyle(sKey)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}
			
			if (!validate.isString(sKey))
			{
				console.error(this.kWLogInvalid("sKey"));
			}

			this.m_kWDom.css(sKey, "");
		};

		css.prototype.cssSetIsVisible = 
			function cssSetIsVisible(bVal)
		{
			//console.log(this.kWLogCalled());
			
			this.m_bKWIsVisible = bVal;
			this.cssSetVisibility();
		};

		css.prototype.cssSetStyle = 
			function cssSetStyle(sKey, sVal)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}
			
			if (!validate.isString(sKey))
			{
				console.error(this.kWLogInvalid("sKey"));
			}
			
			if (!validate.isString(sVal))
			{
				return;
			}
			
			//console.log(this.kWLogDisplay(sKey, sVal));

			this.m_kWDom.css(sKey, sVal);
		};

		css.prototype.cssSetVisibility = 
			function cssSetVisibility()
		{
			sVal = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sKWTagDisplay))
			{
				console.error(this.kWLogInvalid("m_sKWTagDisplay"));
			}
			
			if (!validate.isString(this.m_sKWTagNone))
			{
				console.error(this.kWLogInvalid("m_sKWTagNone"));
			}
			
			if (this.m_bKWIsVisible)
			{
				this.cssRemoveStyle(this.m_sKWTagDisplay);
			}
			else
			{
				this.cssSetStyle(this.m_sKWTagDisplay, this.m_sKWTagNone);
			}
		};

		return css;

	}
);
