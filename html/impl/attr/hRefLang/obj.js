/**********************************************************************
 *
 * hRefLang/obj.js
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
	
		function hRefLang() 
		{
			//console.log("hRefLang::constructor");
			
			this.m_sKWExt	= "hreflang";
			this.m_sKWAttr	= "hreflang";
		}

		hRefLang.prototype = new string();
		hRefLang.prototype.constructor = hRefLang;
		hRefLang.constructor = string.prototype.constructor;

		hRefLang.prototype.check =
			function check() 
		{
			string.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		hRefLang.prototype.init =
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

		hRefLang.prototype.baseRetrieveOR = 
			function()
		{
			this.hrlRetrieve(); 
		};
		
		hRefLang.prototype.stringInitOR = 
			function()
		{
			this.hrlInit(); 
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
		
		hRefLang.prototype.hrlInit = 
			function hrlInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		hRefLang.prototype.hrlRetrieve = 
			function hrlRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWHRefLang();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return hRefLang;

	}
);
