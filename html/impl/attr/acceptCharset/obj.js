/**********************************************************************
 *
 * acceptCharset/obj.js
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
	
		function acceptCharset() 
		{
			//console.log("acceptCharset::constructor");
			
			this.m_sKWExt	= "acceptCharset";

			this.m_sKWAttr	= "accept-charset";
		}

		acceptCharset.prototype = new string();
		acceptCharset.prototype.constructor = acceptCharset;
		acceptCharset.constructor = string.prototype.constructor;

		acceptCharset.prototype.check = 
			function check() 
		{
			string.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		acceptCharset.prototype.init = 
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

		acceptCharset.prototype.baseRetrieveOR = 
			function()
		{
			this.acRetrieve(); 
		};
		
		acceptCharset.prototype.stringInitOR = 
			function()
		{
			this.acInit(); 
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
		
		acceptCharset.prototype.acInit = 
			function acInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		acceptCharset.prototype.acRetrieve = 
			function acRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWAcceptCharset();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return acceptCharset;

	}
);
