/**********************************************************************
 *
 * i18n/obj.js
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
		"../base/obj",
		"kWStat/validate"
	],
	function
	(
		base,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function i18n() 
		{
			//console.log("i18n::constructor");
			this.m_sKWI18NKey	    = null;
			this.m_sKWI18NKeyText   = null;
		}

		i18n.prototype = new base();
		i18n.prototype.constructor = i18n;
		i18n.constructor = base.prototype.constructor;

		i18n.prototype.check = 
			function check() 
		{
			base.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());

			if (!validate.isString(this.m_sKWI18NKey))
			{
				console.error(this.kWLogInvalid("m_sKWI18NKey"));
			}
		};

		i18n.prototype.init = 
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

		i18n.prototype.setKWKey =
			function(sVal) 
		{
			this.m_sKWI18Key = sVal;
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

		i18n.prototype.baseInitOR =
			function()
			{
				this.i18nInit();
			};

		i18n.prototype.baseRetrieveOR =
			function()
		{
			this.i18nRetrieve(); 
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		i18n.prototype.i18nInitOR = 
			function i18nInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		i18n.prototype.i18nDelete =
			function i18nDelete()
			{
				console.log(this.kWLogCalled());
			};

		i18n.prototype.i18nInit =
			function i18nInit()
			{
				//console.log(this.kWLogCalled());
				this.i18nInitOR();
			};

		i18n.prototype.i18nRetrieve =
			function i18nRetrieve() 
		{
			//console.log(this.kWLogCalled());
			
			this.i18nRetrieveKey();
			this.i18nRetrieveText();
		};
			
		i18n.prototype.i18nRetrieveKey = 
			function i18nRetrieveKey() 
		{
			//console.log(this.kWLogCalled());

			if (validate.isString(this.m_sKWI18NKeyText))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWI18NKey))
			{
				console.error(this.kWLogInvalid("m_sKWI18NKey"));
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			this.m_sKWI18NKeyText = this.m_kWView.getKWAsText(this.m_sKWI18NKey);
			if (validate.isString(this.m_sKWI18NKeyText))
			{
				//console.debug(this.kWLogDisplay(this.m_sKWI18NKeyText, this.m_sKWI18NKeyText));
			}
		};
		
		i18n.prototype.i18nRetrieveText = 
			function i18nRetrieveText() 
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sKWI18NKeyText))
			{
				return;
			}
			
			this.m_kWValue = this.getKWText(this.m_sKWI18NKeyText);
			if (!validate.isString(this.m_kWValue))
			{
				console.error(this.kWLogErrRetrieve("m_kWValue"));
			}
			
			//console.debug(this.kWLogDisplay("m_kWValue", this.m_kWValue));
		};
		
		i18n.prototype.i18nRetrieveRaw = 
			function i18nRetrieveRaw() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_i18nValue))
			{
			    return; 
			}
			
			if (!validate.isString(this.m_sKWKeyRaw))
			{
				return;
			}
			
			this.m_i18nValue = this.getKWAsText(this.m_sKWKeyRaw);
			if (validate.isNotNull(this.m_i18nValue))
			{
				//console.debug(this.kWLogDisplay(this.m_sKWKeyRaw, this.m_i18nValue));
			}
		};
		
		return i18n;

	}
);
