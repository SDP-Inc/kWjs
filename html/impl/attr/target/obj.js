/**********************************************************************
 *
 * target/obj.js
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
		"../../../base/attr/string/obj",
		"kWStat/validate"
	],
	function
	(
		string,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function target() 
		{
			//console.log("target::constructor");
			
			this.m_sKWExt	= "target";
			
			this.m_sKWAttr	= "target";
		}

		target.prototype = new string();
		target.prototype.constructor = target;
		target.constructor = string.prototype.constructor;

		target.prototype.check = 
			function check() 
		{
			string.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		target.prototype.init = 
			function init() 
		{
			//console.log(this.kWLogCalled());
			string.prototype.init.call(this);
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

		target.prototype.baseRetrieveOR = 
			function()
		{
			this.targetRetrieve(); 
		};
		
		target.prototype.stringInitOR =
			function()
		{
			this.targetInit(); 
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
		
		target.prototype.targetInit = 
			function targetInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		target.prototype.targetRetrieve = 
			function targetRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWTarget();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return target;

	}
);
