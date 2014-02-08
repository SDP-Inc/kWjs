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
		"../../attr/role/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		role,
		html,
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
			
			this.m_kWRole	= null;
			
			this.m_sKWRole	= null;
		}

		div.prototype = new html();
		div.prototype.constructor = div;
		div.constructor = html.prototype.constructor;

		div.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		div.prototype.init =
			function init()
		{
			//console.log(this.kWLogCalled());
			html.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		div.prototype.setKWRole =
			function(sVal)
		{
			this.divSetRole(sVal);
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

		div.prototype.htmlCreateOR =
			function()
		{
			this.divCreate();
		};

		div.prototype.htmlDeleteOR =
			function()
		{
			this.divDelete();
		};

		div.prototype.htmlInitOR =
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
			var value   = null;
			
			var sValue  = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWRole))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWRole();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWRole;
			}

			if (!validate.isString(sValue))
			{
				return;
			}
			
			this.divCreateRoleImpl();
			
			this.m_kWRole.setKWValue(sValue);
		};

		div.prototype.divCreateRoleImpl =
			function divCreateRoleImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWRole))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			this.m_kWRole = new role();

			this.m_kWRole.setKWIDParent(this.m_sKWID);
			this.m_kWRole.setKWDom(this.m_kWDom);

			this.m_kWRole.check();
			this.m_kWRole.init();

			this.kWAddAttr(this.m_kWRole);
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

		div.prototype.divSetRole =
			function divSetRole(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWRole = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWRole))
			{
				this.divCreateRoleImpl();
			}

			this.m_kWRole.setKWValue(this.m_sKWRole);
		};

		return div;

	}
);
