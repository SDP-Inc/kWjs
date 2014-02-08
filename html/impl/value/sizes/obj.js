/**********************************************************************
 *
 * sizes/obj.js
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
	
		function sizes() 
		{
			//console.log("sizes::constructor");
			
			this.m_sKWExt		= "sizes";
		}

		sizes.sKWKey = "kwSizes";

		sizes.prototype = new simpleText();
		sizes.prototype.constructor = sizes;
		sizes.constructor = simpleText.prototype.constructor;

		sizes.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = sizes.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		sizes.prototype.init = 
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

		sizes.prototype.stInitOR = 
			function()
		{
			this.sizesInit(); 
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
		
		sizes.prototype.sizesInit = 
			function sizesInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return sizes;

	}
);
