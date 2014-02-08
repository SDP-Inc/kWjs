/**********************************************************************
 *
 * encType/obj.js
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
	
		function encType() 
		{
			//console.log("encType::constructor");
			
			this.m_sKWExt		= "encType";
		}

		encType.sKWKey = "kwEncType";

		encType.prototype = new simpleText();
		encType.prototype.constructor = encType;
		encType.constructor = simpleText.prototype.constructor;

		encType.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = encType.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		encType.prototype.init =
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

		encType.prototype.stInitOR =
			function()
		{
			this.etInit(); 
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
		
		encType.prototype.etInit = 
			function etInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return encType;

	}
);
