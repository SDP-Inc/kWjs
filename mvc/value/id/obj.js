/**********************************************************************
 *
 * id/obj.js
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
	
		function id() 
		{
			//console.log("id::constructor");

			this.m_sKWExt = "id";
		}

		id.sKWKey = "kwID";

		id.prototype = new simpleText();
		id.prototype.constructor = id;
		id.constructor = simpleText.prototype.constructor;

		id.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey	= id.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		id.prototype.init = 
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

		id.prototype.stInitOR = 
			function()
		{
			this.idInit(); 
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
		
		id.prototype.idInit = 
			function idInit()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_baseValue))
			{
				//console.debug(this.kWLogDisplay("m_baseValue", this.m_baseValue))
			}
		};
		
		return id;

	}
);
