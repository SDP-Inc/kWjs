/**********************************************************************
 *
 * radioGroup/obj.js
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
	
		function radioGroup() 
		{
			//console.log("radioGroup::constructor");
			
			this.m_sKWExt		= "radioGroup";
		}

		radioGroup.sKWKey = "kwRadioGroup";

		radioGroup.prototype = new simpleText();
		radioGroup.prototype.constructor = radioGroup;
		radioGroup.constructor = simpleText.prototype.constructor;

		radioGroup.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = radioGroup.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		radioGroup.prototype.init =
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

		radioGroup.prototype.stInitOR =
			function()
		{
			this.rgInit(); 
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
		
		radioGroup.prototype.rgInit = 
			function rgInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return radioGroup;

	}
);
