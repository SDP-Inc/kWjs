/**********************************************************************
 *
 * crossOrigin/obj.js
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
	
		function crossOrigin() 
		{
			//console.log("crossOrigin::constructor");
			
			this.m_sKWExt		= "crossOrigin";
		}

		crossOrigin.sKWKey = "kwCrossOrigin";

		crossOrigin.prototype = new simpleText();
		crossOrigin.prototype.constructor = crossOrigin;
		crossOrigin.constructor = simpleText.prototype.constructor;

		crossOrigin.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = crossOrigin.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		crossOrigin.prototype.init = 
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

		crossOrigin.prototype.stInitOR = 
			function()
		{
			this.coInit(); 
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
		
		crossOrigin.prototype.coInit = 
			function coInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return crossOrigin;

	}
);
