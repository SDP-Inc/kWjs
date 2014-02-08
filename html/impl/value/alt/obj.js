/**********************************************************************
 *
 * alt/obj.js
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
		"kWUtils/value/i18n/obj"
	],
	function
	(
		i18n
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function alt() 
		{
			//console.log("alt::constructor");
			
			this.m_sKWExt		= "alt";
		}

		alt.sKWKey = "kwKeyAlt";

		alt.prototype = new i18n();
		alt.prototype.constructor = alt;
		alt.constructor = i18n.prototype.constructor;

		alt.prototype.check = 
			function check() 
		{
			this.m_sKWI18NKey = alt.sKWKey;

			i18n.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		alt.prototype.init =
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

		alt.prototype.i18nInitOR = 
			function()
		{
			this.altInit(); 
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
		
		alt.prototype.altInit = 
			function altInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return alt;

	}
);
