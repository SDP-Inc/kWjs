/**********************************************************************
 *
 * string/obj.js
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
	
		function string() 
		{
			//console.log("string::constructor");
		}

		string.prototype = new base();
		string.prototype.constructor = string;
		string.constructor = base.prototype.constructor;

		string.prototype.check =
			function check() 
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		string.prototype.init = 
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

		string.prototype.baseInitOR = 
			function()
		{
			this.stringInit(); 
		};
		
		string.prototype.baseSetOR =
			function(obj)
		{
			this.stringSet(obj); 
		};
		
		string.prototype.baseStoreOR = 
			function()
		{
			this.stringStore(); 
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		string.prototype.stringInitOR = 
			function stringInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//
		
		string.prototype.stringInit = 
			function stringInit()
		{
			//console.log(this.kWLogCalled());
			this.stringInitOR();
		};

		string.prototype.stringSet = 
			function stringSet(obj)
		{
			//console.log("string::stringSet() called");
			
			if (!validate.isString(obj))
			{
				return;
			}
			
			this.m_kWValue = obj;
			
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
		
		return string;

	}
);
