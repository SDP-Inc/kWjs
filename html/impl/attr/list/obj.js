/**********************************************************************
 *
 * list/obj.js
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
	
		function list() 
		{
			//console.log("list::constructor");
			
			this.m_sKWExt	= "list";

			this.m_sKWAttr	= "list";
		}

		list.prototype = new string();
		list.prototype.constructor = list;
		list.constructor = string.prototype.constructor;

		list.prototype.check = 
			function check() 
		{
			string.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		list.prototype.init =
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

		list.prototype.baseRetrieveOR = 
			function()
		{
			this.listRetrieve(); 
		};
		
		list.prototype.stringInitOR = 
			function()
		{
			this.listInit(); 
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
		
		list.prototype.listInit = 
			function listInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		list.prototype.listRetrieve = 
			function listRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWList();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return list;

	}
);
