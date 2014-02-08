/**********************************************************************
 *
 * contentEditable/obj.js
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
	
		function contentEditable() 
		{
			//console.log("contentEditable::constructor");
			
			this.m_sKWExt	= "contentEditable";
			
			this.m_sKWAttr	= "contentEditable";
		}

		contentEditable.prototype = new bool();
		contentEditable.prototype.constructor = contentEditable;
		contentEditable.constructor = bool.prototype.constructor;

		contentEditable.prototype.check =
			function check() 
		{
			bool.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		contentEditable.prototype.init =
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

		contentEditable.prototype.baseRetrieveOR = 
			function()
		{
			this.ceRetrieve(); 
		};
		
		contentEditable.prototype.boolInitOR = 
			function()
		{
			this.ceInit(); 
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
		
		contentEditable.prototype.ceInit = 
			function ceInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		contentEditable.prototype.ceRetrieve = 
			function ceRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWContentEditable();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return contentEditable;

	}
);
