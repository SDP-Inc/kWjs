/**********************************************************************
 *
 * simpleText/obj.js
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
	
		function simpleText() 
		{
			//console.log("simpleText::constructor");
		}

		simpleText.prototype = new simple();
		simpleText.prototype.constructor = simpleText;
		simpleText.constructor = simple.prototype.constructor;

		simpleText.prototype.check = 
			function check() 
		{
			simple.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		simpleText.prototype.init = 
			function init() 
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

		simpleText.prototype.baseRetrieveOR = 
			function()
		{
			this.stRetrieve(); 
		};
		
		simpleText.prototype.simpleInitOR = 
			function()
		{
			this.stInit(); 
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		simpleText.prototype.stInitOR = 
			function stInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//
		
		simpleText.prototype.stInit = 
			function stInit()
		{
			//console.log(this.kWLogCalled());
			this.stInitOR();
		};

		simpleText.prototype.stRetrieve = 
			function stRetrieve() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_kWValue))
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
			
			if (this.m_sKWSimpleKey == "kwField")
			{
				//debugger;
			}
			
			this.m_kWValue = this.m_kWView.getKWAsText(this.m_sKWSimpleKey);
			if (validate.isString(this.m_kWValue))
			{
				//console.debug(this.kWLogDisplay(this.m_sKWSimpleKey, this.m_kWValue));
			}
		};
			
		return simpleText;

	}
);
