/**********************************************************************
 *
 * srcDoc/obj.js
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
	
		function srcDoc() 
		{
			//console.log("srcDoc::constructor");
			
			this.m_sKWExt	= "srcDoc";
			
			this.m_sKWAttr	= "srcDoc";
		}

		srcDoc.prototype = new string();
		srcDoc.prototype.constructor = srcDoc;
		srcDoc.constructor = string.prototype.constructor;

		srcDoc.prototype.check =
			function check() 
		{
			string.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		srcDoc.prototype.init = 
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

		srcDoc.prototype.baseRetrieveOR = 
			function()
		{
			this.srcDocRetrieve(); 
		};
		
		srcDoc.prototype.stringInitOR =
			function()
		{
			this.srcDocInit(); 
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
		
		srcDoc.prototype.srcDocInit = 
			function srcDocInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		srcDoc.prototype.srcDocRetrieve = 
			function srcDocRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWSrcDoc();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return srcDoc;

	}
);
