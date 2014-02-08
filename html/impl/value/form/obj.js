/**********************************************************************
 *
 * form/obj.js
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
	
		function form() 
		{
			//console.log("form::constructor");
			
			this.m_sKWExt		= "form";
		}

		form.sKWKey = "kwForm";

		form.prototype = new simpleText();
		form.prototype.constructor = form;
		form.constructor = simpleText.prototype.constructor;

		form.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = form.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		form.prototype.init = 
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

		form.prototype.stInitOR = 
			function()
		{
			this.formInit(); 
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
		
		form.prototype.formInit = 
			function formInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return form;

	}
);
