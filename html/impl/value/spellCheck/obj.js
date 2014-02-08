/**********************************************************************
 *
 * spellCheck/obj.js
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
	
		function spellCheck() 
		{
			//console.log("spellCheck::constructor");
			
			this.m_sKWExt		= "spellCheck";
		}

		spellCheck.sKWKey = "kwSpellCheck";

		spellCheck.prototype = new simpleBool();
		spellCheck.prototype.constructor = spellCheck;
		spellCheck.constructor = simpleBool.prototype.constructor;

		spellCheck.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = spellCheck.sKWKey;

			simpleBool.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		spellCheck.prototype.init = 
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

		spellCheck.prototype.sbInitOR = 
			function()
		{
			this.scInit(); 
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
		
		spellCheck.prototype.scInit = 
			function scInit()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isBool(this.m_kWValue))
			{
				//console.debug(this.kWLogDisplay("this.m_kWValue", this.m_kWValue));
			}
		};
		
		return spellCheck;

	}
);
