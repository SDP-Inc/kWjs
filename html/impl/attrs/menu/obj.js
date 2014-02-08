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
		"../../attr/label/obj",
		"../../attr/type/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		label,
		type,
		html,
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
			
			this.m_sKWLabel	= null;
			this.m_sKWType	= null;
		}

		menu.prototype = new html();
		menu.prototype.constructor = menu;
		menu.constructor = html.prototype.constructor;

		menu.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		menu.prototype.init = 
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

		menu.prototype.setKWLabel =
			function(sVal)
		{
			this.menuSetName(sVal);
		};

		menu.prototype.setKWType =
			function(sVal)
		{
			this.menuSetName(sVal);
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
	
		menu.prototype.htmlCreateOR =
			function()
		{
			this.menuCreate();
		};
		
		menu.prototype.htmlDeleteOR =
			function()
		{
			this.menuDelete();
		};
		
		menu.prototype.htmlInitOR = 
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
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWLabel))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWLabel();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWLabel;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.menuCreateLabelImpl();

			this.m_kWLabel.setKWValue(sValue);
		};

		menu.prototype.menuCreateLabelImpl =
			function menuCreateLabelImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWLabel))
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

			this.m_kWLabel = new label();

			this.m_kWLabel.setKWIDParent(this.m_sKWID);
			this.m_kWLabel.setKWDom(this.m_kWDom);

			this.m_kWLabel.check();
			this.m_kWLabel.init();

			this.kWAddAttr(this.m_kWLabel);
		};

		menu.prototype.menuCreateType =
			function menuCreateType()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWType))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWType();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWType;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.menuCreateTypeImpl();

			this.m_kWType.setKWValue(sValue);
		};

		menu.prototype.menuCreateTypeImpl =
			function menuCreateTypeImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWType))
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

			this.m_kWType = new type();

			this.m_kWType.setKWIDParent(this.m_sKWID);
			this.m_kWType.setKWDom(this.m_kWDom);

			this.m_kWType.check();
			this.m_kWType.init();

			this.kWAddAttr(this.m_kWType);
		};

		menu.prototype.menuDelete =
			function menuDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWName = null;
			this.m_kWType = null;
		};

		menu.prototype.menuInit =
			function menuInit()
		{
			//console.log(this.kWLogCalled());
		};

		menu.prototype.menuSetName =
			function menuSetName(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWName = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWName))
			{
				this.menuCreateNameImpl();
			}

			this.m_kWName.setKWValue(this.m_sKWName);
		};

		menu.prototype.menuSetType =
			function menuSetType(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWType = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWType))
			{
				this.menuCreateTypeImpl();
			}

			this.m_kWType.setKWValue(this.m_sKWType);
		};

		return menu;

	}
);
