/**********************************************************************
 *
 * isMap/obj.js
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
	
		function isMap() 
		{
			//console.log("isMap::constructor");
			
			this.m_sKWExt	= "isMap";
			this.m_sKWAttr	= "ismap";
		}

		isMap.prototype = new bool();
		isMap.prototype.constructor = isMap;
		isMap.constructor = bool.prototype.constructor;

		isMap.prototype.check = 
			function check() 
		{
			bool.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		isMap.prototype.init =
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

		isMap.prototype.baseRetrieveOR = 
			function()
		{
			this.imRetrieve(); 
		};
		
		isMap.prototype.boolInitOR = 
			function()
		{
			this.imInit(); 
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
		
		isMap.prototype.imInit = 
			function imInit()
		{
			//console.log(this.kWLogCalled());
			
			if (this.m_kWValue)
			{
				//console.debug(this.kWLogDisplay("m_kWValue", this.m_kWValue));
			}
		};
		
		isMap.prototype.imRetrieve = 
			function imRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWIsMap();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return isMap;

	}
);
