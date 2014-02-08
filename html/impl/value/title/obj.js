/**********************************************************************
 *
 * title/obj.js
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
	
		function title() 
		{
			//console.log("title::constructor");
			
			this.m_sKWExt		= "title";
		}

		title.sKWKey = "kwTitle";

		title.prototype = new simpleText();
		title.prototype.constructor = title;
		title.constructor = simpleText.prototype.constructor;

		title.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = title.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		title.prototype.init =
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

		title.prototype.stInitOR = 
			function()
		{
			this.titleInit(); 
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
		
		title.prototype.titleInit = 
			function titleInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return title;

	}
);
