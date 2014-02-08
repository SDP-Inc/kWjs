/**********************************************************************
 *
 * disabled/obj.js
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
	
		function disabled() 
		{
			//console.log("disabled::constructor");
			
			this.m_sKWExt		= "disabled";
		}

		disabled.sKWKey = "kwDisabled";

		disabled.prototype = new simpleBool();
		disabled.prototype.constructor = disabled;
		disabled.constructor = simpleBool.prototype.constructor;

		disabled.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = disabled.sKWKey;

			simpleBool.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		disabled.prototype.init =
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

		disabled.prototype.sbInitOR = 
			function()
		{
			this.disabledInit(); 
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
		
		disabled.prototype.disabledInit = 
			function disabledInit()
		{
			//console.log(this.kWLogCalled());
			if (validate.isBool(this.m_kWValue))
			{
				//console.debug(this.kWLogDisplay("this.m_kWValue", this.m_kWValue));
			}
		};
		
		return disabled;

	}
);
