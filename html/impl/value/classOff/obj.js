/**********************************************************************
 *
 * kWClassOff/obj.js
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
	
		function classOff()
		{
			//console.log("classOff::constructor");
			
			this.m_sKWExt		= "classOff";
		}

		classOff.sKWKey = "kwClassOff";

		classOff.prototype = new simpleText();
		classOff.prototype.constructor = classOff;
		classOff.constructor = simpleText.prototype.constructor;

		classOff.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = classOff.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		classOff.prototype.init =
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

		classOff.prototype.stInitOR =
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
		
		classOff.prototype.coInit =
			function coInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return classOff;

	}
);
