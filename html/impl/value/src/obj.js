/**********************************************************************
 *
 * src/obj.js
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
	
		function src() 
		{
			//console.log("src::constructor");
			
			this.m_sKWExt		= "src";
		}

		src.sKWKey = "kwSrc";

		src.prototype = new simpleText();
		src.prototype.constructor = src;
		src.constructor = simpleText.prototype.constructor;

		src.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = src.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		src.prototype.init =
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

		src.prototype.stInitOR = 
			function()
		{
			this.srcInit(); 
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
		
		src.prototype.srcInit = 
			function srcInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return src;

	}
);
