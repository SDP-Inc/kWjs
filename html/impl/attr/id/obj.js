/**********************************************************************
 *
 * id/obj.js
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
	
		function id() 
		{
			//console.log("id::constructor");
			
			this.m_sKWExt	= "id";
			
			this.m_sKWAttr	= "id";
		}

		id.prototype = new string();
		id.prototype.constructor = id;
		id.constructor = string.prototype.constructor;

		id.prototype.check = 
			function check() 
		{
			string.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		id.prototype.init =
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

		id.prototype.baseRetrieveOR = 
			function()
		{
			this.idRetrieve(); 
		};
		
		id.prototype.stringInitOR = 
			function()
		{
			this.idInit(); 
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
		
		id.prototype.idInit = 
			function idInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		id.prototype.idRetrieve = 
			function idRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWValueID();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				//console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return id;

	}
);
