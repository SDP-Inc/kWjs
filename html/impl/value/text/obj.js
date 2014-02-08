/**********************************************************************
 *
 * text/obj.js
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
	
		function text() 
		{
			//console.log("text::constructor");
			
			this.m_sKWExt		= "text";
		}

		text.sKWKey = "kwText";

		text.prototype = new simpleText();
		text.prototype.constructor = text;
		text.constructor = simpleText.prototype.constructor;

		text.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = text.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		text.prototype.init =
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

		text.prototype.stInitOR =
			function()
		{
			this.textInit(); 
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
		
		text.prototype.textInit = 
			function textInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return text;

	}
);
