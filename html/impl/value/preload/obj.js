/**********************************************************************
 *
 * preload/obj.js
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
	
		function preload() 
		{
			//console.log("preload::constructor");
			
			this.m_sKWExt		= "preload";
		}

		preload.sKWKey = "kwPreload";

		preload.prototype = new simpleText();
		preload.prototype.constructor = preload;
		preload.constructor = simpleText.prototype.constructor;

		preload.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = preload.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		preload.prototype.init =
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

		preload.prototype.stInitOR =
			function()
		{
			this.preloadInit(); 
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
		
		preload.prototype.preloadInit = 
			function preloadInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return preload;

	}
);
