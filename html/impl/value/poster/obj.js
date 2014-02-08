/**********************************************************************
 *
 * poster/obj.js
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
	
		function poster() 
		{
			//console.log("poster::constructor");
			
			this.m_sKWExt		= "poster";
		}

		poster.sKWKey = "kwPoster";

		poster.prototype = new simpleText();
		poster.prototype.constructor = poster;
		poster.constructor = simpleText.prototype.constructor;

		poster.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = poster.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		poster.prototype.init =
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

		poster.prototype.stInitOR = 
			function()
		{
			this.posterInit(); 
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
		
		poster.prototype.posterInit = 
			function posterInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return poster;

	}
);
