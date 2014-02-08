/**********************************************************************
 *
 * seamless/obj.js
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
	
		function seamless() 
		{
			//console.log("seamless::constructor");
			
			this.m_sKWExt		= "seamless";
		}

		seamless.sKWKey = "kwSeamless";

		seamless.prototype = new simpleBool();
		seamless.prototype.constructor = seamless;
		seamless.constructor = simpleBool.prototype.constructor;

		seamless.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = seamless.sKWKey;

			simpleBool.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		seamless.prototype.init =
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

		seamless.prototype.sbInitOR = 
			function()
		{
			this.apInit(); 
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
		
		seamless.prototype.apInit = 
			function apInit()
		{
			//console.log(this.kWLogCalled());
			if (validate.isBool(this.m_kWValue))
			{
				//console.debug(this.kWLogDisplay("this.m_kWValue", this.m_kWValue));
			}
		};
		
		return seamless;

	}
);
