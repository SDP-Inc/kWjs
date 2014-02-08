/**********************************************************************
 *
 * label/obj.js
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
	
		function label() 
		{
			//console.log("label::constructor");
			
			this.m_sKWExt		= "label";
		}

		label.sKWKey = "kwLabel";

		label.prototype = new simpleText();
		label.prototype.constructor = label;
		label.constructor = simpleText.prototype.constructor;

		label.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = label.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		label.prototype.init =
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

		label.prototype.stInitOR = 
			function()
		{
			this.labelInit(); 
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
		
		label.prototype.labelInit = 
			function labelInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return label;

	}
);
