/**********************************************************************
 *
 * srcLang/obj.js
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
	
		function srcLang() 
		{
			//console.log("srcLang::constructor");
			
			this.m_sKWExt		= "srcLang";
		}

		srcLang.sKWKey = "kwSrcLang";

		srcLang.prototype = new simpleText();
		srcLang.prototype.constructor = srcLang;
		srcLang.constructor = simpleText.prototype.constructor;

		srcLang.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = srcLang.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		srcLang.prototype.init =
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

		srcLang.prototype.stInitOR = 
			function()
		{
			this.slInit(); 
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
		
		srcLang.prototype.slInit = 
			function slInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return srcLang;

	}
);
