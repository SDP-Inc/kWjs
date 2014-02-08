/**********************************************************************
 *
 * rowSpan/obj.js
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
	
		function rowSpan() 
		{
			//console.log("rowSpan::constructor");
			
			this.m_sKWExt	= "rowSpan";
			this.m_sKWAttr	= "rowSpan";
		}

		rowSpan.prototype = new numeric();
		rowSpan.prototype.constructor = rowSpan;
		rowSpan.constructor = numeric.prototype.constructor;

		rowSpan.prototype.check = 
			function check() 
		{
			numeric.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		rowSpan.prototype.init =
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

		rowSpan.prototype.baseRetrieveOR = 
			function()
		{
			this.rsRetrieve(); 
		};
		
		rowSpan.prototype.numericInitOR = 
			function()
		{
			this.rsInit(); 
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
		
		rowSpan.prototype.rsInit = 
			function rsInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		rowSpan.prototype.rsRetrieve = 
			function rsRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWRowSpan();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return rowSpan;

	}
);
