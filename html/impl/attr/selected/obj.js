/**********************************************************************
 *
 * selected/obj.js
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
	
		function selected() 
		{
			//console.log("selected::constructor");
			
			this.m_sKWExt	= "selected";
			
			this.m_sKWAttr	= "selected";
		}

		selected.prototype = new bool();
		selected.prototype.constructor = selected;
		selected.constructor = bool.prototype.constructor;

		selected.prototype.check =
			function check() 
		{
			bool.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		selected.prototype.init =
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

		selected.prototype.baseRetrieveOR = 
			function()
		{
			this.selectedRetrieve(); 
		};
		
		selected.prototype.boolInitOR =
			function()
		{
			this.selectedInit(); 
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
		
		selected.prototype.selectedInit = 
			function selectedInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		selected.prototype.selectedRetrieve = 
			function selectedRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWSelected();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		selected.prototype.selectedSetValue = 
			function selectedSetValue(bVal)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isBool(bVal))
			{
				return;
			}
			
			if (!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}
			
			if (!validate.isString(this.m_sKWAttr))
			{
				console.error(this.kWLogInvalid("m_sKWAttr"));
			}
			
			if (bVal)
			{
				this.baseSetValueByAttr(this.m_sKWAttr, this.m_sKWAttr);
			}
			else
			{
				this.baseRemove();
			}
		};
		
		return selected;

	}
);
