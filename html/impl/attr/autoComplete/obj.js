/**********************************************************************
 *
 * autoComplete/obj.js
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
	
		function autoComplete() 
		{
			//console.log("autoComplete::constructor");
			
			this.m_sKWExt	= "autoComplete";
			
			this.m_sKWAttr	= "autoComplete";
		}

		autoComplete.prototype = new bool();
		autoComplete.prototype.constructor = autoComplete;
		autoComplete.constructor = bool.prototype.constructor;

		autoComplete.prototype.check =
			function check() 
		{
			bool.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		autoComplete.prototype.init = 
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

		autoComplete.prototype.baseRetrieveOR = 
			function()
		{
			this.acRetrieve(); 
		};
		
		autoComplete.prototype.boolInitOR =
			function()
		{
			this.acInit(); 
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
		
		autoComplete.prototype.acInit = 
			function acInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		autoComplete.prototype.acRetrieve = 
			function acRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWAutoComplete();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return autoComplete;

	}
);
