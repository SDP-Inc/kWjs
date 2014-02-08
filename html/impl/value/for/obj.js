/**********************************************************************
 *
 * for_/obj.js
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
	
		function for_() 
		{
			//console.log("for_::constructor");
			
			this.m_sKWExt		= "for_";
		}

		for_.sKWKey = "kwFor";

		for_.prototype = new simpleText();
		for_.prototype.constructor = for_;
		for_.constructor = simpleText.prototype.constructor;

		for_.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = for_.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		for_.prototype.init = 
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

		for_.prototype.stInitOR = 
			function()
		{
			this.forInit(); 
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
		
		for_.prototype.forInit = 
			function forInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return for_;

	}
);
