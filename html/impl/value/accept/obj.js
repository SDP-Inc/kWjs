/**********************************************************************
 *
 * accept/obj.js
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
	
		function accept() 
		{
			//console.log("accept::constructor");
			
			this.m_sKWExt		= "accept";
		}

		accept.sKWKey = "kwAccept";

		accept.prototype = new simpleText();
		accept.prototype.constructor = accept;
		accept.constructor = simpleText.prototype.constructor;

		accept.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = accept.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		accept.prototype.init = 
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

		accept.prototype.stInitOR =
			function()
		{
			this.acceptInit(); 
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
		
		accept.prototype.acceptInit = 
			function acceptInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return accept;

	}
);
