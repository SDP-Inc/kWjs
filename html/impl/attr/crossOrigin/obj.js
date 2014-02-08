/**********************************************************************
 *
 * crossOrigin/obj.js
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
		"../../../base/attr/string/obj",
		"kWStat/validate"
	],
	function
	(
		string,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function crossOrigin() 
		{
			//console.log("crossOrigin::constructor");
			
			this.m_sKWExt	= "crossOrigin";

			this.m_sKWAttr	= "crossOrigin";
		}

		crossOrigin.prototype = new string();
		crossOrigin.prototype.constructor = crossOrigin;
		crossOrigin.constructor = string.prototype.constructor;

		crossOrigin.prototype.check = 
			function check() 
		{
			string.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		crossOrigin.prototype.init = 
			function init() 
		{
			//console.log(this.kWLogCalled());
			string.prototype.init.call(this);
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

		crossOrigin.prototype.baseRetrieveOR = 
			function()
		{
			this.coRetrieve(); 
		};
		
		crossOrigin.prototype.stringInitOR = 
			function()
		{
			this.coInit(); 
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
		
		crossOrigin.prototype.coInit = 
			function coInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		crossOrigin.prototype.coRetrieve = 
			function coRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWCrossOrigin();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return crossOrigin;

	}
);
