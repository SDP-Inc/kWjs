/**********************************************************************
 *
 * formTarget/obj.js
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
	
		function formTarget() 
		{
			//console.log("formTarget::constructor");
			
			this.m_sKWExt		= "formTarget";
		}

		formTarget.sKWKey = "kwFormTarget";

		formTarget.prototype = new simpleText();
		formTarget.prototype.constructor = formTarget;
		formTarget.constructor = simpleText.prototype.constructor;

		formTarget.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = formTarget.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		formTarget.prototype.init = 
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

		formTarget.prototype.stInitOR =
			function()
		{
			this.ftInit(); 
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
		
		formTarget.prototype.ftInit = 
			function ftInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return formTarget;

	}
);
