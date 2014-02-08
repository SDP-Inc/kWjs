/**********************************************************************
 *
 * div/obj.js
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
		"../../value/role/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		role,
		base,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function div()
		{
			//console.log("div::constructor");
			this.m_kWRole = null;
		}

		div.prototype = new base();
		div.prototype.constructor = div;
		div.constructor = base.prototype.constructor;

		div.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
		};

		div.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			base.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		div.prototype.getKWRole =
			function()
		{
			return this.m_kWRole;
		};

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
	
		div.prototype.baseCreateOR = 
			function()
		{
			this.divCreate();
		};

		div.prototype.baseDeleteOR =
			function()
			{
				this.divDelete();
			};

		div.prototype.baseInitOR =
			function()
		{
			this.divInit();
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

		div.prototype.divCreate = 
			function divCreate() 
		{
			//console.log(this.kWLogCalled());
			this.divCreateRole();
		};
		
		div.prototype.divCreateRole = 
			function divCreateRole() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWRole))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWRole = new role();
			
			this.m_kWRole.setKWView(this);
			this.m_kWRole.setKWIDParent(this.m_sKWID);
			
			this.m_kWRole.check();
			this.m_kWRole.init();

			this.kWAddValue(this.m_kWRole);
		};

		div.prototype.divDelete =
			function divDelete()
		{
			//console.log(this.kWLogCalled());
			this.m_kWRole = null;
		};

		div.prototype.divInit =
			function divInit()
		{
			//console.log(this.kWLogCalled());
		};

		return div;

	}
);
