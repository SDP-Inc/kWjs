/**********************************************************************
 *
 * map/obj.js
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
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		name,
		base,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function map()
		{
			//console.log("map::constructor");
			
			this.m_kWName	= null;
		}

		map.prototype = new base();
		map.prototype.constructor = map;
		map.constructor = base.prototype.constructor;

		map.prototype.check =
			function check()
		{
			base.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
		};

		map.prototype.init = 
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

		map.prototype.getKWName =
			function()
		{
			return this.m_kWName;
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
	
		map.prototype.baseCreateOR = 
			function()
		{
			this.mapCreate();
		};

		map.prototype.baseDeleteOR =
			function()
		{
			this.mapDelete();
		};

		map.prototype.baseInitOR =
			function()
		{
			this.mapInit();
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

		map.prototype.mapCreate = 
			function mapCreate() 
		{
			//console.log(this.kWLogCalled());
			this.mapCreateName();
		};
		
		map.prototype.mapCreateName = 
			function mapCreateName() 
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

		map.prototype.mapDelete =
			function mapDelete()
		{
			//console.log(this.kWLogCalled());
			this.m_kWName	= null;
		};

		map.prototype.mapInit =
			function mapInit()
		{
			//console.log(this.kWLogCalled());
		};

		return map;

	}
);
