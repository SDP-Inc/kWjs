/**********************************************************************
 *
 * dropZone/obj.js
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
	
		function dropZone() 
		{
			//console.log("dropZone::constructor");
			
			this.m_sKWExt		= "dropZone";
		}

		dropZone.sKWKey = "kwDropZone";

		dropZone.prototype = new simpleText();
		dropZone.prototype.constructor = dropZone;
		dropZone.constructor = simpleText.prototype.constructor;

		dropZone.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = dropZone.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		dropZone.prototype.init =
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

		dropZone.prototype.stInitOR =
			function()
		{
			this.dzInit(); 
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
		
		dropZone.prototype.dzInit = 
			function dzInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return dropZone;

	}
);
