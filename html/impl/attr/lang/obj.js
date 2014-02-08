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
		"../../../base/attr/string/obj",
		"kWStat/validate"
	],
	function
	(
		string,
		validate
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
			
			this.m_sKWExt	= "lang";
			
			this.m_sKWAttr	= "lang";
		}

		lang.prototype = new string();
		lang.prototype.constructor = lang;
		lang.constructor = string.prototype.constructor;

		lang.prototype.check =
			function check() 
		{
			string.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		lang.prototype.init = 
			function init() 
		{
			//console.log(this.kWLogCalled());
			string.prototype.init.call(this);
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

		lang.prototype.baseRetrieveOR = 
			function()
		{
			this.langRetrieve(); 
		};
		
		lang.prototype.stringInitOR = 
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
		
		lang.prototype.langRetrieve = 
			function langRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			this.m_kWValueView = this.m_kWView.getKWLang();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return lang;

	}
);
