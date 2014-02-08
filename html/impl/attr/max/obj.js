/**********************************************************************
 *
 * max/obj.js
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
		"../../../base/attr/numeric/obj",
		"kWStat/validate"
	],
	function
	(
		numeric,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function max() 
		{
			//console.log("max::constructor");
			
			this.m_sKWExt	= "max";
			this.m_sKWAttr	= "max";
		}

		max.prototype = new numeric();
		max.prototype.constructor = max;
		max.constructor = numeric.prototype.constructor;

		max.prototype.check = 
			function check() 
		{
			numeric.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		max.prototype.init = 
			function init() 
		{
			//console.log(this.kWLogCalled());
			numeric.prototype.init.call(this);
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

		max.prototype.baseRetrieveOR = 
			function()
		{
			this.maxRetrieve(); 
		};
		
		max.prototype.numericInitOR = 
			function()
		{
			this.maxInit(); 
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
		
		max.prototype.maxInit = 
			function maxInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		max.prototype.maxRetrieve = 
			function maxRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWMax();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return max;

	}
);
