/**********************************************************************
 *
 * hRefRaw/obj.js
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
		"kWUtils/value/simpleText/obj",
		"kWStat/validate"
	],
	function
	(
		simpleText,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function hRefRaw() 
		{
			//console.log("hRefRaw::constructor");
			
			this.m_sKWExt		= "hRefRaw";
		}

		hRefRaw.sKWKey = "kwHRefRaw";

		hRefRaw.prototype = new simpleText();
		hRefRaw.prototype.constructor = hRefRaw;
		hRefRaw.constructor = simpleText.prototype.constructor;

		hRefRaw.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey	= hRefRaw.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		hRefRaw.prototype.init =
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

		hRefRaw.prototype.stInitOR = function()
		{
			this.hrrInit(); 
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
		
		hRefRaw.prototype.hrrInit = 
			function hrrInit()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_kWValue))
			{
				//console.debug(this.kWLogDisplay("m_kWValue", this.m_kWValue));
			}
		};
		
		return hRefRaw;

	}
);
