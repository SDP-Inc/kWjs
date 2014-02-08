/**********************************************************************
 *
 * contentEditable/obj.js
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
	
		function contentEditable() 
		{
			//console.log("contentEditable::constructor");
			
			this.m_sKWExt		= "contentEditable";
		}

		contentEditable.sKWKey = "kwContentEditable";

		contentEditable.prototype = new simpleBool();
		contentEditable.prototype.constructor = contentEditable;
		contentEditable.constructor = simpleBool.prototype.constructor;

		contentEditable.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = contentEditable.sKWKey;

			simpleBool.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		contentEditable.prototype.init = 
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

		contentEditable.prototype.sbInitOR = 
			function()
		{
			this.ceInit(); 
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
		
		contentEditable.prototype.ceInit = 
			function ceInit()
		{
			//console.log(this.kWLogCalled());
			if (validate.isBool(this.m_kWValue))
			{
				//console.debug(this.kWLogDisplay("this.m_kWValue", this.m_kWValue));
			}
		};
		
		return contentEditable;

	}
);
