/**********************************************************************
 *
 * formMethod/obj.js
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
	
		function formMethod() 
		{
			//console.log("formMethod::constructor");
			
			this.m_sKWExt		= "formMethod";
		}

		formMethod.sKWKey = "kwFormMethod";

		formMethod.prototype = new simpleText();
		formMethod.prototype.constructor = formMethod;
		formMethod.constructor = simpleText.prototype.constructor;

		formMethod.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = formMethod.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		formMethod.prototype.init =
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

		formMethod.prototype.stInitOR = 
			function()
		{
			this.fmInit(); 
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
		
		formMethod.prototype.fmInit = 
			function fmInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return formMethod;

	}
);
