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
	
		function srcDoc() 
		{
			//console.log("srcDoc::constructor");
			
			this.m_sKWExt		= "srcDoc";
		}

		srcDoc.sKWKey = "kwSrcDoc";

		srcDoc.prototype = new simpleText();
		srcDoc.prototype.constructor = srcDoc;
		srcDoc.constructor = simpleText.prototype.constructor;

		srcDoc.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = srcDoc.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		srcDoc.prototype.init = 
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

		srcDoc.prototype.stInitOR =
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
		
		return srcDoc;

	}
);
