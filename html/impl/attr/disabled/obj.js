/**********************************************************************
 *
 * disabled/obj.js
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
	
		function disabled() 
		{
			//console.log("disabled::constructor");
			
			this.m_sKWExt	= "disabled";
			this.m_sKWAttr	= "disabled";
			
			this.m_kWValue	= false;
		}

		disabled.prototype = new bool();
		disabled.prototype.constructor = disabled;
		disabled.constructor = bool.prototype.constructor;

		disabled.prototype.check =
			function check() 
		{
			bool.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		disabled.prototype.init = 
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

		disabled.prototype.baseRetrieveOR = 
			function()
		{
			this.disabledRetrieve(); 
		};
		
		disabled.prototype.boolInitOR = 
			function boolInitOR()
		{
			this.disabledInit();
		};
		
		disabled.prototype.boolSetValueOR = 
			function(bVal)
		{
			this.disabledSetValue(bVal); 
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
		
		disabled.prototype.disabledInit = 
			function disabledInit()
		{
			//console.log(this.kWLogCalled());
			
			if (this.m_kWValue)
			{
				//console.debug(this.kWLogDisplay("m_kWValue", this.m_kWValue));
			}
		};
		
		disabled.prototype.disabledRetrieve = 
			function disabledRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWDisabled();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return disabled;

	}
);
