/**********************************************************************
 *
 * autoFocus/obj.js
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
	
		function autoFocus() 
		{
			//console.log("autoFocus::constructor");
			
			this.m_sKWExt	= "autoFocus";
			
			this.m_sKWAttr	= "autofocus";
		}

		autoFocus.prototype = new bool();
		autoFocus.prototype.constructor = autoFocus;
		autoFocus.constructor = bool.prototype.constructor;

		autoFocus.prototype.check = 
			function check() 
		{
			bool.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		autoFocus.prototype.init =
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

		autoFocus.prototype.baseRetrieveOR = 
			function()
		{
			this.afRetrieve(); 
		};
		
		autoFocus.prototype.boolInitOR =
			function()
		{
			this.afInit(); 
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
		
		autoFocus.prototype.afInit = 
			function afInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		autoFocus.prototype.afRetrieve = 
			function afRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWAutoFocus();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return autoFocus;

	}
);
