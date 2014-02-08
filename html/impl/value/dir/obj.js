/**********************************************************************
 *
 * dir/obj.js
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
	
		function dir() 
		{
			//console.log("dir::constructor");
			
			this.m_sKWExt		= "dir";
		}

		dir.sKWKey = "kwDir";

		dir.prototype = new simpleText();
		dir.prototype.constructor = dir;
		dir.constructor = simpleText.prototype.constructor;

		dir.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = dir.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		dir.prototype.init = 
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

		dir.prototype.stInitOR = 
			function()
		{
			this.dirInit(); 
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
		
		dir.prototype.dirInit = 
			function dirInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return dir;

	}
);
