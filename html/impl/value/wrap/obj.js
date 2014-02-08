/**********************************************************************
 *
 * wrap/obj.js
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
	
		function wrap() 
		{
			//console.log("wrap::constructor");
			
			this.m_sKWExt		= "wrap";
		}

		wrap.sKWKey = "kwWrap";

		wrap.prototype = new simpleText();
		wrap.prototype.constructor = wrap;
		wrap.constructor = simpleText.prototype.constructor;

		wrap.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = wrap.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		wrap.prototype.init = 
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

		wrap.prototype.stInitOR =
			function()
		{
			this.wrapInit(); 
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
		
		wrap.prototype.wrapInit = 
			function wrapInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return wrap;

	}
);
