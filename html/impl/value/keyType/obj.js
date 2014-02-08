/**********************************************************************
 *
 * keyType/obj.js
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
	
		function keyType() 
		{
			//console.log("keyType::constructor");
			
			this.m_sKWExt		= "keyType";
		}

		keyType.sKWKey = "kwKeyType";

		keyType.prototype = new simpleText();
		keyType.prototype.constructor = keyType;
		keyType.constructor = simpleText.prototype.constructor;

		keyType.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = keyType.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		keyType.prototype.init = 
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

		keyType.prototype.stInitOR =
			function()
		{
			this.keyTypeInit(); 
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
		
		keyType.prototype.keyTypeInit = 
			function keyTypeInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return keyType;

	}
);
