/**********************************************************************
 *
 * reversed/obj.js
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
	
		function reversed() 
		{
			//console.log("reversed::constructor");
			
			this.m_sKWExt	= "reversed";
			this.m_sKWAttr	= "reversed";
		}

		reversed.prototype = new bool();
		reversed.prototype.constructor = reversed;
		reversed.constructor = bool.prototype.constructor;

		reversed.prototype.check = 
			function check() 
		{
			bool.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		reversed.prototype.init =
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

		reversed.prototype.baseRetrieveOR = 
			function()
		{
			this.reversedRetrieve(); 
		};
		
		reversed.prototype.boolInitOR = 
			function()
		{
			this.reversedInit(); 
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
		
		reversed.prototype.reversedInit = 
			function reversedInit()
		{
			//console.log(this.kWLogCalled());
			
			if (this.m_kWValue)
			{
				//console.debug(this.kWLogDisplay("m_kWValue", this.m_kWValue));
			}
		};
		
		reversed.prototype.reversedRetrieve = 
			function reversedRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getReversed();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return reversed;

	}
);
