/**********************************************************************
 *
 * style/obj.js
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
	
		function style() 
		{
			//console.log("style::constructor");
			
			this.m_sKWExt		= "style";
		}

		style.sKWKey = "kwStyle";

		style.prototype = new simpleText();
		style.prototype.constructor = style;
		style.constructor = simpleText.prototype.constructor;

		style.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = style.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		style.prototype.init =
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

		style.prototype.stInitOR =
			function()
		{
			this.styleInit(); 
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
		
		style.prototype.styleInit = 
			function styleInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return style;

	}
);
