/**********************************************************************
 *
 * hRefLang/obj.js
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
	
		function hRefLang() 
		{
			//console.log("hRefLang::constructor");
			
			this.m_sKWExt = "hRefLang";
		}

		hRefLang.sKWKey = "kwHRefLang";

		hRefLang.prototype = new simpleText();
		hRefLang.prototype.constructor = hRefLang;
		hRefLang.constructor = simpleText.prototype.constructor;

		hRefLang.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey	= hRefLang.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		hRefLang.prototype.init = 
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

		hRefLang.prototype.stInitOR =
			function()
		{
			this.hrlInit(); 
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
		
		hRefLang.prototype.hrlInit = 
			function hrlInit()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_kWValue))
			{
				console.debug(this.kWLogDisplay("m_kWValue", this.m_kWValue));
			}
		};
		
		return hRefLang;

	}
);
