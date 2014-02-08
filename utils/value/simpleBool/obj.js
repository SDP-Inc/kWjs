/**********************************************************************
 *
 * simpleBool/obj.js
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
	
		function simpleBool() 
		{
			//console.log("simpleBool::constructor");
		}

		simpleBool.prototype = new simple();
		simpleBool.prototype.constructor = simpleBool;
		simpleBool.constructor = simple.prototype.constructor;

		simpleBool.prototype.check = 
			function check() 
		{
			simple.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		simpleBool.prototype.init = 
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

		simpleBool.prototype.baseRetrieveOR = 
			function()
		{
			this.sbRetrieve(); 
		};
		
		simpleBool.prototype.simpleInitOR =
			function()
		{
			this.sbInit(); 
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		simpleBool.prototype.sbInitOR = 
			function sbInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//
		
		simpleBool.prototype.sbInit = 
			function sbInit()
		{
			//console.log(this.kWLogCalled());
			this.sbInitOR();
		};

		simpleBool.prototype.sbRetrieve = 
			function sbRetrieve() 
		{
			var bVal = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isBool(this.m_kWValue))
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
			
			bVal = this.m_kWView.getKWAsBool(this.m_sKWSimpleKey);
			if (validate.isBool(bVal))
			{
				this.m_kWValue = bVal;
				//console.debug(this.kWLogDisplay(this.m_sKWSimpleKey, this.m_kWValue));
			}
		};
			
		return simpleBool;

	}
);
