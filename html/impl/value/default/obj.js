/**********************************************************************
 *
 * default_/obj.js
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
	
		function default_() 
		{
			//console.log("default::constructor");
			
			this.m_sKWExt		= "default";
		}

		default_.sKWKey = "kwDefault";

		default_.prototype = new simpleBool();
		default_.prototype.constructor = default_;
		default_.constructor = simpleBool.prototype.constructor;

		default_.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = default_.sKWKey;

			simpleBool.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		default_.prototype.init = 
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

		default_.prototype.sbInitOR =
			function()
		{
			this.defaultInit(); 
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
		
		default_.prototype.defaultInit = 
			function defaultInit()
		{
			//console.log(this.kWLogCalled());
			if (validate.isBool(this.m_kWValue))
			{
				//console.debug(this.kWLogDisplay("this.m_kWValue", this.m_kWValue));
			}
		};
		
		return default_;

	}
);
