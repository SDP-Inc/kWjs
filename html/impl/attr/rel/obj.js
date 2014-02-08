/**********************************************************************
 *
 * rel/obj.js
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
	
		function rel() 
		{
			//console.log("rel::constructor");
			
			this.m_sKWExt	= "rel";
			this.m_sKWAttr	= "rel";
		}

		rel.prototype = new string();
		rel.prototype.constructor = rel;
		rel.constructor = string.prototype.constructor;

		rel.prototype.check = function check() 
		{
			string.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		rel.prototype.init = function init() 
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

		rel.prototype.baseRetrieveOR = 
			function()
		{
			this.relRetrieve(); 
		};
		
		rel.prototype.stringInitOR = 
			function()
		{
			this.relInit(); 
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
		
		rel.prototype.relInit = 
			function relInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		rel.prototype.relRetrieve = 
			function relRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWRel();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return rel;

	}
);
