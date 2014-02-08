/**********************************************************************
 *
 * simpleNum/obj.js
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
		"../simple/obj",
		"kWStat/validate"
	],
	function
	(
		simple,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function simpleNum() 
		{
			//console.log("simpleNum::constructor");
			this.m_kWValue = -1;
		}

		simpleNum.prototype = new simple();
		simpleNum.prototype.constructor = simpleNum;
		simpleNum.constructor = simple.prototype.constructor;

		simpleNum.prototype.check = 
			function check() 
		{
			simple.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		simpleNum.prototype.init = 
			function check() 
		{
			//console.log(this.kWLogCalled());
			simple.prototype.init.call(this);
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

		simpleNum.prototype.baseRetrieveOR =
			function()
		{
			this.snRetrieve(); 
		};
		
		simpleNum.prototype.simpleInitOR = 
			function()
		{
			this.snInit(); 
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		simpleNum.prototype.snInitOR = 
			function snInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//
		
		simpleNum.prototype.snInit = 
			function snInit()
		{
			//console.log(this.kWLogCalled());
			this.snInitOR();
		};

		simpleNum.prototype.snRetrieve = 
			function snRetrieve() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberNotNeg(this.m_kWValue))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWSimpleKey))
			{
				console.error(this.kWLogInvalid("m_sKWSimpleKey"));
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			this.m_kWValue = this.m_kWView.getKWAsNumeric(this.m_sKWSimpleKey);
			if (validate.isNumberNotNeg(this.m_kWValue))
			{
				//console.debug(this.kWLogDisplay(this.m_sKWSimpleKey, this.m_kWValue));
			}
		};
			
		return simpleNum;

	}
);
