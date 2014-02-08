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
		"../../../base/attr/bool/obj",
		"kWStat/validate"
	],
	function
	(
		bool,
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
			
			this.m_sKWExt	= "spellCheck";
			
			this.m_sKWAttr	= "spellcheck";
		}

		spellCheck.prototype = new bool();
		spellCheck.prototype.constructor = spellCheck;
		spellCheck.constructor = bool.prototype.constructor;

		spellCheck.prototype.check = 
			function check() 
		{
			bool.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		spellCheck.prototype.init =
			function init() 
		{
			//console.log(this.kWLogCalled());
			bool.prototype.init.call(this);
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

		spellCheck.prototype.baseRetrieveOR = 
			function()
		{
			this.spRetrieve(); 
		};
		
		spellCheck.prototype.boolInitOR = 
			function()
		{
			this.spInit(); 
		};
		
		spellCheck.prototype.boolSetValueOR = function(bVal)
		{
			this.spSetValue(bVal); 
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
		
		spellCheck.prototype.spInit = 
			function spInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		spellCheck.prototype.spRetrieve = 
			function spRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			this.m_kWValueView = this.m_kWView.getKWSpellCheck();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return spellCheck;

	}
);
