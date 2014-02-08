/**********************************************************************
 *
 * simple/obj.js
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
		"../base/obj",
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
	
		function simple() 
		{
			//console.log("simple::constructor");

			this.m_sKWSimpleKey	= null;
		}

		simple.prototype = new base();
		simple.prototype.constructor = simple;
		simple.constructor = base.prototype.constructor;

		simple.prototype.check =
			function check() 
		{
			base.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sKWSimpleKey))
			{
				console.error(this.kWLogInvalid("m_sKWSimpleKey"));
			}
		};
		
		simple.prototype.init =
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

		simple.prototype.baseInitOR = 
			function()
		{
			this.simpleInit(); 
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		simple.prototype.simpleInitOR =
			function simpleInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//
		
		simple.prototype.simpleInit = 
			function simpleInit()
		{
			//console.log(this.kWLogCalled());
			this.simpleInitOR();
		};

		return simple;

	}
);
