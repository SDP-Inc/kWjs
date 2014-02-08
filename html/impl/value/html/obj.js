/**********************************************************************
 *
 * html/obj.js
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
		text
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function html() 
		{
			//console.log("html::constructor");
			
			this.m_sKWExt		= "html";
		}

		html.sKWKey = "kwHtml";

		html.prototype = new text();
		html.prototype.constructor = html;
		html.constructor = text.prototype.constructor;

		html.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = html.sKWKey;

			text.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		html.prototype.init = 
			function init() 
		{
			//console.log(this.kWLogCalled());
			text.prototype.init.call(this);
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

		html.prototype.stInitOR =
			function()
		{
			this.htmlInit(); 
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
		
		html.prototype.htmlInit = 
			function htmlInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return html;

	}
);
