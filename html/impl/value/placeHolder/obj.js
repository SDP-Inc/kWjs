/**********************************************************************
 *
 * placeHolder/obj.js
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
	
		function placeHolder() 
		{
			//console.log("placeHolder::constructor");
			
			this.m_sKWExt		= "placeHolder";
		}

		placeHolder.sKWKey = "kwPlaceHolder";

		placeHolder.prototype = new simpleText();
		placeHolder.prototype.constructor = placeHolder;
		placeHolder.constructor = simpleText.prototype.constructor;

		placeHolder.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = placeHolder.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		placeHolder.prototype.init =
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

		placeHolder.prototype.stInitOR = 
			function()
		{
			this.phInit(); 
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
		
		placeHolder.prototype.phInit = 
			function phInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return placeHolder;

	}
);
