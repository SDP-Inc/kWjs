/**********************************************************************
 *
 * hRef/obj.js
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
		"kWUtils/value/i18n/obj",
		"kWStat/validate"
	],
	function
	(
		i18n,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function hRef() 
		{
			//console.log("hRef::constructor");
			
			this.m_sKWExt		= "hRef";
		}

		hRef.sKWKey = "kwKeyHRef";

		hRef.prototype = new i18n();
		hRef.prototype.constructor = hRef;
		hRef.constructor = i18n.prototype.constructor;

		hRef.prototype.check =
			function check() 
		{
			this.m_sKWI18NKey = hRef.sKWKey;

			i18n.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		hRef.prototype.init = 
			function init() 
		{
			//console.log(this.kWLogCalled());
			i18n.prototype.init.call(this);
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

		hRef.prototype.i18nInitOR =
			function()
		{
			this.hrInit(); 
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
		
		hRef.prototype.hrInit = 
			function hrInit()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_kWValue))
			{
				//console.debug(this.kWLogDisplay("m_kWValue", this.m_kWValue));
			}
		};
		
		return hRef;

	}
);
