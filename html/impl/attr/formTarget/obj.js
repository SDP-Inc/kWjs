/**********************************************************************
 *
 * formTarget/obj.js
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
	
		function formTarget() 
		{
			//console.log("formTarget::constructor");
			
			this.m_sKWExt	= "formTarget";

			this.m_sKWAttr	= "formTarget";
		}

		formTarget.prototype = new string();
		formTarget.prototype.constructor = formTarget;
		formTarget.constructor = string.prototype.constructor;

		formTarget.prototype.check = function check() 
		{
			string.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		formTarget.prototype.init = function init() 
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

		formTarget.prototype.baseRetrieveOR = 
			function baseRetrieveOR()
		{
			this.ftRetrieve(); 
		};
		
		formTarget.prototype.stringInitOR = function()
		{
			this.ftInit(); 
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
		
		formTarget.prototype.ftInit = 
			function ftInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		formTarget.prototype.ftRetrieve = 
			function ftRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWFormTarget();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return formTarget;

	}
);
