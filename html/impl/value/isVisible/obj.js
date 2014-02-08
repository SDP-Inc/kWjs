/**********************************************************************
 *
 * isVisible/obj.js
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
		"kWUtils/value/simpleBool/obj",
		"kWStat/validate"
	],
	function
	(
		simpleBool,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function isVisible() 
		{
			//console.log("isVisible::constructor");
			
			this.m_sKWExt		= "isVisible";
		}

		isVisible.sKWKey = "kwIsVisible";

		isVisible.prototype = new simpleBool();
		isVisible.prototype.constructor = isVisible;
		isVisible.constructor = simpleBool.prototype.constructor;

		isVisible.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = isVisible.sKWKey;

			simpleBool.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		isVisible.prototype.init = 
			function init() 
		{
			//console.log(this.kWLogCalled());
			simpleBool.prototype.init.call(this);
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

		isVisible.prototype.sbInitOR =
			function()
		{
			this.ivInit(); 
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
		
		isVisible.prototype.ivInit = 
			function ivInit()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isBool(this.m_kWValue))
			{
				//console.debug(this.kWLogDisplay("this.m_kWValue", this.m_kWValue));
			}
		};
		
		return isVisible;

	}
);
