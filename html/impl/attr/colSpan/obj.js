/**********************************************************************
 *
 * colSpan/obj.js
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
	
		function colSpan() 
		{
			//console.log("colSpan::constructor");
			
			this.m_sKWExt	= "colSpan";
			this.m_sKWAttr	= "colSpan";
		}

		colSpan.prototype = new numeric();
		colSpan.prototype.constructor = colSpan;
		colSpan.constructor = numeric.prototype.constructor;

		colSpan.prototype.check = 
			function check() 
		{
			numeric.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		colSpan.prototype.init = 
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

		colSpan.prototype.baseRetrieveOR = 
			function()
		{
			this.csRetrieve(); 
		};
		
		colSpan.prototype.numericInitOR = 
			function()
		{
			this.csInit(); 
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
		
		colSpan.prototype.csInit = 
			function colSpanInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		colSpan.prototype.csRetrieve = 
			function colSpanRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWColSpan();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return colSpan;

	}
);
