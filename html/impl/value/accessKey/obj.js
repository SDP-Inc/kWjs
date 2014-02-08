/**********************************************************************
 *
 * accessKey/obj.js
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
	
		function accessKey() 
		{
			//console.log("accessKey::constructor");
			
			this.m_sKWExt		= "accessKey";
		}

		accessKey.sKWKey = "kwAccessKey";

		accessKey.prototype = new simpleText();
		accessKey.prototype.constructor = accessKey;
		accessKey.constructor = simpleText.prototype.constructor;

		accessKey.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = accessKey.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		accessKey.prototype.init = 
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

		accessKey.prototype.stInitOR =
			function()
		{
			this.akInit(); 
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
		
		accessKey.prototype.akInit = 
			function akInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return accessKey;

	}
);
