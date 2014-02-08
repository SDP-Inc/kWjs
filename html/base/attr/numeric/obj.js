/**********************************************************************
 *
 * numeric/obj.js
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
		"../obj",
		"kWStat/validate"
	],
	function
	(
		base,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function numeric() 
		{
			//console.log("numeric::constructor");
		}

		numeric.prototype = new base();
		numeric.prototype.constructor = numeric;
		numeric.constructor = base.prototype.constructor;

		numeric.prototype.check = 
			function check() 
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		numeric.prototype.init = 
			function init() 
		{
			//console.log(this.kWLogCalled());
			base.prototype.init.call(this);
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

		numeric.prototype.baseInitOR = 
			function()
		{
			this.numericInit(); 
		};
		
		numeric.prototype.baseSetOR = 
			function(obj)
		{
			this.numericSet(obj); 
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		numeric.prototype.numericInitOR = 
			function numericInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//
		
		numeric.prototype.numericInit = 
			function numericInit()
		{
			//console.log(this.kWLogCalled());
			this.numericInitOR();
		};

		numeric.prototype.numericSet = 
			function numericSet(obj)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNumberPos(obj))
			{
				return;
			}
			
			if (!this.m_bKWInit)
			{
				return;
			}
			
			if (!validate.isString(this.m_sKWAttr))
			{
				console.error(this.kWLogInvalid("m_sKWAttr"));
			}
			
			this.baseSetValueByAttr(this.m_sKWAttr, obj);
		};
		
		return numeric;

	}
);
