/**********************************************************************
 *
 * isClickHandled/obj.js
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
	
		function isClickHandled() 
		{
			//console.log("isClickHandled::constructor");
			
			this.m_sKWExt		= "isClickHandled";
		}

		isClickHandled.sKWKey = "kwIsClickHandled";

		isClickHandled.prototype = new simpleBool();
		isClickHandled.prototype.constructor = isClickHandled;
		isClickHandled.constructor = simpleBool.prototype.constructor;

		isClickHandled.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = isClickHandled.sKWKey;

			simpleBool.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		isClickHandled.prototype.init =
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

		isClickHandled.prototype.sbInitOR =
			function()
		{
			this.ichInit(); 
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
		
		isClickHandled.prototype.ichInit = 
			function ichInit()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isBool(this.m_kWValue))
			{
				//console.debug(this.kWLogDisplay("this.m_kWValue", this.m_kWValue));
			}
		};
		
		return isClickHandled;

	}
);
