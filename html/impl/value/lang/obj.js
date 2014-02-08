/**********************************************************************
 *
 * lang/obj.js
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
		"kWUtils/value/simpleText/obj"
	],
	function
	(
		simpleText
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function lang() 
		{
			//console.log("lang::constructor");
			
			this.m_sKWExt		= "lang";
		}

		lang.sKWKey = "kwLang";

		lang.prototype = new simpleText();
		lang.prototype.constructor = lang;
		lang.constructor = simpleText.prototype.constructor;

		lang.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = lang.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		lang.prototype.init =
			function init() 
		{
			//console.log(this.kWLogCalled());
			simpleText.prototype.init.call(this);
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

		lang.prototype.stInitOR = 
			function()
		{
			this.langInit(); 
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
		
		lang.prototype.langInit = 
			function langInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return lang;

	}
);
