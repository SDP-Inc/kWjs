/**********************************************************************
 *
 * menu/obj.js
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
		"../../value/label/obj",
		"../../value/type/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		label,
		type,
		base,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function menu()
		{
			//console.log("menu::constructor");
			
			this.m_kWLabel	= null;
			this.m_kWType	= null;
		}

		menu.prototype = new base();
		menu.prototype.constructor = menu;
		menu.constructor = base.prototype.constructor;

		menu.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
		};

		menu.prototype.init =
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

		menu.prototype.getKWLabel =
			function()
		{
			return this.m_kWLabel;
		};

		menu.prototype.getKWType =
			function()
		{
			return this.m_kWType;
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
	
		menu.prototype.baseCreateOR =
			function()
		{
			this.menuCreate();
		};

		menu.prototype.baseDeleteOR =
			function()
		{
			this.menuDelete();
		};

		menu.prototype.baseInitOR =
			function()
		{
			this.menuInit();
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

		menu.prototype.menuCreate = 
			function menuCreate() 
		{
			//console.log(this.kWLogCalled());
			this.menuCreateLabel();
			this.menuCreateType();
		};
		
		menu.prototype.menuCreateLabel = 
			function menuCreateLabel() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWLabel))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWLabel = new label();
			
			this.m_kWLabel.setKWView(this);
			this.m_kWLabel.setKWIDParent(this.m_sKWID);
			
			this.m_kWLabel.check();
			this.m_kWLabel.init();

			this.kWAddValue(this.m_kWLabel);
		};
		
		menu.prototype.menuCreateType = 
			function menuCreateType() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWType))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWType = new type();
			
			this.m_kWType.setKWView(this);
			this.m_kWType.setKWIDParent(this.m_sKWID);
			
			this.m_kWType.check();
			this.m_kWType.init();

			this.kWAddValue(this.m_kWType);
		};

		menu.prototype.menuDelete =
			function menuDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWLabel	= null;
			this.m_kWType	= null;
		};

		menu.prototype.menuInit =
			function menuInit()
		{
			//console.log(this.kWLogCalled());
		};

		return menu;

	}
);
