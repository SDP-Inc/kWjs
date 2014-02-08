/**********************************************************************
 *
 * class_/obj.js
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
	
		function class_() 
		{
			//console.log("class_::constructor");
			
			this.m_sKWExt	= "class";
			
			this.m_sKWAttr	= "class";
		}

		class_.prototype = new string();
		class_.prototype.constructor = class_;
		class_.constructor = string.prototype.constructor;

		class_.prototype.check =
			function check() 
		{
			string.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		class_.prototype.init = 
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

		class_.prototype.baseRetrieveOR = 
			function()
		{
			this.classRetrieve(); 
		};
		
		class_.prototype.stringInitOR = 
			function()
		{
			this.classInit(); 
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
		
		class_.prototype.classInit = 
			function classInit()
		{
			//console.log(this.kWLogCalled());
			
			//console.debug(this.kWLogDisplay("m_kWValue", this.m_kWValue));
		};
		
		class_.prototype.classRetrieve = 
			function classRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWClass();
			if (!validate.isNotNull(this.m_kWValueView))
			{

			}
		};
		
		return class_;

	}
);
