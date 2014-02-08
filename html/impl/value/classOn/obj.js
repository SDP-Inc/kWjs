/**********************************************************************
 *
 * classOn/obj.js
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
	
		function classOn()
		{
			//console.log("classOn::constructor");
			
			this.m_sKWExt		= "classOn";
		}

		classOn.sKWKey = "kwClassOn";

		classOn.prototype = new simpleText();
		classOn.prototype.constructor = classOn;
		classOn.constructor = simpleText.prototype.constructor;

		classOn.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = classOn.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		classOn.prototype.init =
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

		classOn.prototype.stInitOR =
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
		
		classOn.prototype.coInit =
			function coInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return classOn;

	}
);
