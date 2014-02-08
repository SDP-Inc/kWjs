/**********************************************************************
 *
 * formNoValidate/obj.js
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
		"../../../base/attr/bool/obj",
		"kWStat/validate"
	],
	function
	(
		bool,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function formNoValidate() 
		{
			//console.log("formNoValidate::constructor");
			
			this.m_sKWExt	= "formNoValidate";
			
			this.m_sKWAttr	= "formnovalidate";
		}

		formNoValidate.prototype = new bool();
		formNoValidate.prototype.constructor = formNoValidate;
		formNoValidate.constructor = bool.prototype.constructor;

		formNoValidate.prototype.check =
			function check() 
		{
			bool.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		formNoValidate.prototype.init = 
			function init() 
		{
			//console.log(this.kWLogCalled());
			bool.prototype.init.call(this);
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

		formNoValidate.prototype.baseRetrieveOR = 
			function()
		{
			this.fnvRetrieve(); 
		};
		
		formNoValidate.prototype.boolInitOR = 
			function()
		{
			this.fnvInit(); 
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
		
		formNoValidate.prototype.fnvInit = 
			function fnvInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		formNoValidate.prototype.fnvRetrieve = 
			function fnvRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWFormNoValidate();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return formNoValidate;

	}
);
