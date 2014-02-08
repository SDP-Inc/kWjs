/**********************************************************************
 *
 * param/obj.js
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
		"../../value/name/obj",
		"../../value/value/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		name,
		value,
		base,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function param()
		{
			//console.log("param::constructor");
			
			this.m_kWName	= null;
			this.m_kWValue	= null;
		}

		param.prototype = new base();
		param.prototype.constructor = param;
		param.constructor = base.prototype.constructor;

		param.prototype.check =
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		param.prototype.init = 
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

		param.prototype.getKWName =
			function()
		{
			return this.m_kWName;
		};

		param.prototype.getKWValue =
			function()
		{
			return this.m_kWValue;
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
	
		param.prototype.baseCreateOR = 
			function()
		{
			this.paramCreate();
		};

		param.prototype.baseDeleteOR =
			function()
		{
			this.paramDelete();
		};

		param.prototype.baseInitOR =
			function()
		{
			this.paramInit();
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

		param.prototype.paramCreate = 
			function paramCreate() 
		{
			//console.log(this.kWLogCalled());
			
			this.paramCreateName();
			this.paramCreateValue();
		};
		
		param.prototype.paramCreateName = 
			function paramCreateName() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWName))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWName = new name();
			
			this.m_kWName.setKWView(this);
			this.m_kWName.setKWIDParent(this.m_sKWID);
			
			this.m_kWName.check();
			this.m_kWName.init();

			this.kWAddValue(this.m_kWName);
		};
		
		param.prototype.paramCreateValue = 
			function paramCreateValue() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWValue))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWValue = new value();
			
			this.m_kWValue.setKWView(this);
			this.m_kWValue.setKWIDParent(this.m_sKWID);
			
			this.m_kWValue.check();
			this.m_kWValue.init();

			this.kWAddValue(this.m_kWValue);
		};

		param.prototype.paramDelete =
			function paramDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWName	= null;
			this.m_kWValue	= null;
		};

		param.prototype.paramInit =
			function paramInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return param;

	}
);
