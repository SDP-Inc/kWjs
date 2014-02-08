/**********************************************************************
 *
 * srcName/obj.js
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
	
		function srcName() 
		{
			//console.log("srcName::constructor");
			
			this.m_sKWExt		= "srcName";
		}

		srcName.sKWKey = "kwSrcName";

		srcName.prototype = new simpleText();
		srcName.prototype.constructor = srcName;
		srcName.constructor = simpleText.prototype.constructor;

		srcName.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = srcName.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		srcName.prototype.init =
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

		srcName.prototype.stInitOR =
			function()
		{
			this.snInit(); 
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
		
		srcName.prototype.snInit = 
			function snInit()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_kWValue))
			{
				//console.debug(this.kWLogDisplay("m_kWValue", this.m_kWValue));
			}
		};
		
		return srcName;

	}
);
