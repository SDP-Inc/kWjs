/**********************************************************************
 *
 * maxLength/obj.js
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
	
		function maxLength() 
		{
			//console.log("maxLength::constructor");
			
			this.m_sKWExt	= "maxLength";
			this.m_sKWAttr	= "maxLength";
		}

		maxLength.prototype = new numeric();
		maxLength.prototype.constructor = maxLength;
		maxLength.constructor = numeric.prototype.constructor;

		maxLength.prototype.check = function check() 
		{
			numeric.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		maxLength.prototype.init = function init() 
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

		maxLength.prototype.baseRetrieveOR = 
			function()
		{
			this.mlRetrieve(); 
		};
		
		maxLength.prototype.numericInitOR =
			function()
		{
			this.mlInit(); 
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
		
		maxLength.prototype.mlInit = 
			function mlInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		maxLength.prototype.mlRetrieve = 
			function mlRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWMaxLength();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return maxLength;

	}
);
