/**********************************************************************
 *
 * open/obj.js
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
	
		function open() 
		{
			//console.log("open::constructor");
			
			this.m_sKWExt	= "open";
			
			this.m_sKWAttr	= "open";
		}

		open.prototype = new bool();
		open.prototype.constructor = open;
		open.constructor = bool.prototype.constructor;

		open.prototype.check = 
			function check() 
		{
			bool.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		open.prototype.init = 
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

		open.prototype.baseRetrieveOR = 
			function()
		{
			this.openRetrieve(); 
		};
		
		open.prototype.boolInitOR = 
			function()
		{
			this.openInit(); 
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
		
		open.prototype.openInit = 
			function openInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		open.prototype.openRetrieve = 
			function openRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWOpen();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		open.prototype.openSetValue = 
			function openSetValue(bVal)
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
		
		return open;

	}
);
