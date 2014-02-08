/**********************************************************************
 *
 * optimum/obj.js
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
	
		function optimum() 
		{
			//console.log("optimum::constructor");
			
			this.m_sKWExt	= "optimum";
			this.m_sKWAttr	= "optimum";
		}

		optimum.prototype = new numeric();
		optimum.prototype.constructor = optimum;
		optimum.constructor = numeric.prototype.constructor;

		optimum.prototype.check = 
			function check() 
		{
			numeric.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		optimum.prototype.init = 
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

		optimum.prototype.baseRetrieveOR = 
			function()
		{
			this.optimumRetrieve(); 
		};
		
		optimum.prototype.numericInitOR = 
			function()
		{
			this.optimumInit(); 
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
		
		optimum.prototype.optimumInit = 
			function optimumInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		optimum.prototype.optimumRetrieve = 
			function optimumRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWOptimum();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return optimum;

	}
);
