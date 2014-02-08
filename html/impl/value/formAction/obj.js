/**********************************************************************
 *
 * formAction/obj.js
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
	
		function formAction() 
		{
			//console.log("formAction::constructor");
			
			this.m_sKWExt		= "formAction";
		}

		formAction.sKWKey = "kwFormAction";

		formAction.prototype = new simpleText();
		formAction.prototype.constructor = formAction;
		formAction.constructor = simpleText.prototype.constructor;

		formAction.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = formAction.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		formAction.prototype.init = 
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

		formAction.prototype.stInitOR = 
			function()
		{
			this.faInit(); 
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
		
		formAction.prototype.faInit = 
			function faInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return formAction;

	}
);
