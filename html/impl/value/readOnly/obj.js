/**********************************************************************
 *
 * readOnly/obj.js
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
	
		function readOnly()
		{
			//console.log("readOnly::constructor");
			
			this.m_sKWExt		= "readOnly";
		}

		readOnly.sKWKey = "kwReadOnly";

		readOnly.prototype = new simpleBool();
		readOnly.prototype.constructor = readOnly;
		readOnly.constructor = simpleBool.prototype.constructor;

		readOnly.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = readOnly.sKWKey;

			simpleBool.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		readOnly.prototype.init =
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

		readOnly.prototype.sbInitOR = function()
		{
			this.roInit(); 
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
		
		readOnly.prototype.roInit =
			function roInit()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isBool(this.m_kWValue))
			{
				//console.debug(this.kWLogDisplay("this.m_kWValue", this.m_kWValue));
			}
		};
		
		return readOnly;

	}
);
