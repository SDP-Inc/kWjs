/**********************************************************************
 *
 * name/obj.js
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
	
		function name() 
		{
			//console.log("name::constructor");
			
			this.m_sKWExt		= "name";
		}

		name.sKWKey = "kwName";

		name.prototype = new simpleText();
		name.prototype.constructor = name;
		name.constructor = simpleText.prototype.constructor;

		name.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = name.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		name.prototype.init = 
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

		name.prototype.stInitOR =
			function()
		{
			this.nameInit(); 
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
		
		name.prototype.nameInit = 
			function nameInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return name;

	}
);
