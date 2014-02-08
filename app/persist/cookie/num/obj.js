/**********************************************************************
 *
 * num/obj.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"../value/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
		value,
		validate,
		$
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function num() 
		{
			//console.log("num::constructor");
 		}

		num.prototype = new value();
		num.prototype.constructor = num;
		num.constructor = value.prototype.constructor;
		
		num.prototype.check = 
			function check()
		{
			value.prototype.check.call(this);
            //console.log(this.kWLogCalled());
		};

		num.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			value.prototype.init.call(this);
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
		
		num.prototype.valueInitOR = function()
		{
			this.numInit();
		};

		num.prototype.valueVerifyOR = function()
		{
			this.numVerify();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		num.prototype.numInit =
			function numInit() 
		{
			//console.log(this.kWLogCalled());
		};

		num.prototype.numVerify = 
			function numVerify()
		{
			//console.log(this.kWLogCalled());

			if(!validate.isNumberPos(this.m_kWValue))
			{
				//console.error(this.kWLogInvalid("m_kWValue"));
			} 
		};  

		return num;
		
	}
);