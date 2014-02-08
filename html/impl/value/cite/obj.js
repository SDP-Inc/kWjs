/**********************************************************************
 *
 * cite/obj.js
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
	
		function cite() 
		{
			//console.log("cite::constructor");
			
			this.m_sKWExt		= "cite";
		}

		cite.sKWKey = "kwCite";

		cite.prototype = new simpleText();
		cite.prototype.constructor = cite;
		cite.constructor = simpleText.prototype.constructor;

		cite.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = cite.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		cite.prototype.init =
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

		cite.prototype.stInitOR =
			function()
		{
			this.citeInit(); 
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
		
		cite.prototype.citeInit = 
			function citeInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return cite;

	}
);
