/**********************************************************************
 *
 * multiple/obj.js
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
	
		function multiple() 
		{
			//console.log("multiple::constructor");
			
			this.m_sKWExt		= "multiple";
		}

		multiple.sKWKey = "kwMultiple";

		multiple.prototype = new simpleBool();
		multiple.prototype.constructor = multiple;
		multiple.constructor = simpleBool.prototype.constructor;

		multiple.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = multiple.sKWKey;

			simpleBool.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		multiple.prototype.init =
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

		multiple.prototype.sbInitOR =
			function()
		{
			this.multipleInit(); 
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
		
		multiple.prototype.multipleInit = 
			function multipleInit()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isBool(this.m_kWValue))
			{
				//console.debug(this.kWLogDisplay("this.m_kWValue", this.m_kWValue));
			}
		};
		
		return multiple;

	}
);
