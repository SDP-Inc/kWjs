/**********************************************************************
 *
 * type/obj.js
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
	
		function type() 
		{
			//console.log("type::constructor");
			
			this.m_sKWExt		= "type";
		}

		type.sKWKey = "kwType";

		type.prototype = new simpleText();
		type.prototype.constructor = type;
		type.constructor = simpleText.prototype.constructor;

		type.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = type.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		type.prototype.init = 
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

		type.prototype.stInitOR = 
			function()
		{
			this.typeInit(); 
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
		
		type.prototype.typeInit = 
			function typeInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return type;

	}
);
