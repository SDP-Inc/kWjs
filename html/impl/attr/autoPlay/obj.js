/**********************************************************************
 *
 * autoplay/obj.js
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
	
		function autoplay() 
		{
			//console.log("autoplay::constructor");
			
			this.m_sKWExt	= "autoplay";
			
			this.m_sKWAttr	= "autoplay";
		}

		autoplay.prototype = new bool();
		autoplay.prototype.constructor = autoplay;
		autoplay.constructor = bool.prototype.constructor;

		autoplay.prototype.check =
			function check() 
		{
			bool.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		autoplay.prototype.init = 
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

		autoplay.prototype.baseRetrieveOR = 
			function()
		{
			this.apRetrieve(); 
		};
		
		autoplay.prototype.boolInitOR =
			function()
		{
			this.apInit(); 
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
		
		autoplay.prototype.apInit = 
			function apInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		autoplay.prototype.apRetrieve = 
			function apRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWAutoPlay();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return autoplay;

	}
);
