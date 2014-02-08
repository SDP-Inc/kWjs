/**********************************************************************
 *
 * formEncType/obj.js
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
	
		function formEncType() 
		{
			//console.log("formEncType::constructor");
			
			this.m_sKWExt		= "formEncType";
		}

		formEncType.sKWKey = "kwFormEncType";

		formEncType.prototype = new simpleText();
		formEncType.prototype.constructor = formEncType;
		formEncType.constructor = simpleText.prototype.constructor;

		formEncType.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = formEncType.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		formEncType.prototype.init =
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

		formEncType.prototype.stInitOR = 
			function()
		{
			this.fetInit(); 
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
		
		formEncType.prototype.fetInit = 
			function fetInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return formEncType;

	}
);
