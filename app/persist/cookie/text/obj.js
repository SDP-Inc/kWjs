/**********************************************************************
 *
 * text/obj.js
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

		function text() 
		{
			//console.log("text::constructor");
 		}

		text.prototype = new value();
		text.prototype.constructor = text;
		text.constructor = value.prototype.constructor;
		
		text.prototype.check = 
			function check()
		{
			value.prototype.check.call(this);
            //console.log(this.kWLogCalled());
		};

		text.prototype.init = 
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
		
		text.prototype.valueInitOR = function()
		{
			this.textInit();
		};

		text.prototype.valueVerifyOR = function()
		{
			this.textVerify();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		text.prototype.textInit =
			function textInit() 
		{
			//console.log(this.kWLogCalled());
		};

		text.prototype.textVerify = 
			function textVerify()
		{
			//console.log(this.kWLogCalled());

			if(!validate.isString(this.m_kWValue))
			{
				//console.error(this.kWLogInvalid("m_kWValue"));
			} 
		};  

		return text;
		
	}
);