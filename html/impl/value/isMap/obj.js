/**********************************************************************
 *
 * isMap/obj.js
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
		"kWUtils/value/simpleBool/obj"
	],
	function
	(
		simpleBool
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function isMap() 
		{
			//console.log("isMap::constructor");
			
			this.m_sKWExt		= "isMap";
		}

		isMap.sKWKey = "kwIsMap";

		isMap.prototype = new simpleBool();
		isMap.prototype.constructor = isMap;
		isMap.constructor = simpleBool.prototype.constructor;

		isMap.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = isMap.sKWKey;

			simpleBool.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		isMap.prototype.init = 
			function init() 
		{
			//console.log(this.kWLogCalled());
			simpleBool.prototype.init.call(this);
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

		isMap.prototype.sbInitOR =
			function()
		{
			this.imInit(); 
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
		
		isMap.prototype.imInit = 
			function imInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return isMap;

	}
);
