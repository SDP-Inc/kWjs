/**********************************************************************
 *
 * pattern/obj.js
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
	
		function pattern() 
		{
			//console.log("pattern::constructor");
			
			this.m_sKWExt		= "pattern";
		}

		pattern.sKWKey = "kwPattern";

		pattern.prototype = new simpleText();
		pattern.prototype.constructor = pattern;
		pattern.constructor = simpleText.prototype.constructor;

		pattern.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = pattern.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		pattern.prototype.init =
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

		pattern.prototype.stInitOR = 
			function()
		{
			this.patternInit(); 
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
		
		pattern.prototype.patternInit = 
			function patternInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return pattern;

	}
);
