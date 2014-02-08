/**********************************************************************
 *
 * useMap/obj.js
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
	
		function useMap() 
		{
			//console.log("useMap::constructor");
			
			this.m_sKWExt		= "useMap";
			this.m_sKWSimpleKey	= ""
		}

		useMap.sKWKey = "kwUseMap";

		useMap.prototype = new simpleText();
		useMap.prototype.constructor = useMap;
		useMap.constructor = simpleText.prototype.constructor;

		useMap.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = useMap.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		useMap.prototype.init =
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

		useMap.prototype.stInitOR =
			function()
		{
			this.umInit(); 
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
		
		useMap.prototype.umInit = 
			function umInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return useMap;

	}
);
