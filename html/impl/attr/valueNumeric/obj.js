/**********************************************************************
 *
 * valueNumeric/obj.js
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
	
		function valueNumeric() 
		{
			//console.log("valueNumeric::constructor");
			
			this.m_sKWExt	= "valueNumeric";
			this.m_sKWAttr	= "value";
		}

		valueNumeric.prototype = new numeric();
		valueNumeric.prototype.constructor = valueNumeric;
		valueNumeric.constructor = numeric.prototype.constructor;

		valueNumeric.prototype.check =
			function check() 
		{
			numeric.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		valueNumeric.prototype.init =
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

		valueNumeric.prototype.baseRetrieveOR = 
			function()
		{
			this.valueNumericRetrieve(); 
		};
		
		valueNumeric.prototype.numericInitOR = 
			function()
		{
			this.valueNumericInit(); 
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
		
		valueNumeric.prototype.valueNumericInit = 
			function valueNumericInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		valueNumeric.prototype.valueNumericRetrieve = 
			function valueNumericRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWValue();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return valueNumeric;

	}
);
