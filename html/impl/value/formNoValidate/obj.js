/**********************************************************************
 *
 * formNoValidate/obj.js
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
	
		function formNoValidate() 
		{
			//console.log("formNoValidate::constructor");
			
			this.m_sKWExt		= "formNoValidate";
		}

		formNoValidate.sKWKey = "kwFormNoValidate";

		formNoValidate.prototype = new simpleBool();
		formNoValidate.prototype.constructor = formNoValidate;
		formNoValidate.constructor = simpleBool.prototype.constructor;

		formNoValidate.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = formNoValidate.sKWKey;

			simpleBool.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		formNoValidate.prototype.init =
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

		formNoValidate.prototype.sbInitOR =
			function()
		{
			this.fnvInit(); 
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
		
		formNoValidate.prototype.fnvInit = 
			function fnvInit()
		{
			//console.log(this.kWLogCalled());
			if (validate.isBool(this.m_kWValue))
			{
				//console.debug(this.kWLogDisplay("this.m_kWValue", this.m_kWValue));
			}
		};
		
		return formNoValidate;

	}
);
