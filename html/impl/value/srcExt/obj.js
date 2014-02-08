/**********************************************************************
 *
 * srcExt/obj.js
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
	
		function srcExt() 
		{
			//console.log("srcExt::constructor");
			
			this.m_sKWExt		= "srcExt";
		}

		srcExt.sKWKey = "kwSrcExt";

		srcExt.prototype = new simpleText();
		srcExt.prototype.constructor = srcExt;
		srcExt.constructor = simpleText.prototype.constructor;

		srcExt.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = srcExt.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		srcExt.prototype.init =
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

		srcExt.prototype.stInitOR =
			function()
		{
			this.seInit(); 
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
		
		srcExt.prototype.seInit = 
			function seInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return srcExt;

	}
);
