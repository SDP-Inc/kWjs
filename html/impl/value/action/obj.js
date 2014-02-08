/**********************************************************************
 *
 * action/obj.js
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
	
		function action() 
		{
			//console.log("action::constructor");
			
			this.m_sKWExt		= "action";
		}

		action.sKWKey = "kwAction";

		action.prototype = new simpleText();
		action.prototype.constructor = action;
		action.constructor = simpleText.prototype.constructor;

		action.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = action.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		action.prototype.init = 
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

		action.prototype.stInitOR =
			function()
		{
			this.actionInit(); 
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
		
		action.prototype.actionInit = 
			function actionInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return action;

	}
);
