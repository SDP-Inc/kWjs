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
		"../../attr/name/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		name,
		html,
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
			
			this.m_kWName		= null;
			
			this.m_sKWName		= null;
		}

		map.prototype = new html();
		map.prototype.constructor = map;
		map.constructor = html.prototype.constructor;

		map.prototype.check =
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		map.prototype.init = 
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

		map.prototype.setKWName =
			function(sVal)
		{
			this.mapSetName(sVal);
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
	
		map.prototype.htmlCreateOR =
			function()
		{
			this.mapCreate();
		};
		
		map.prototype.htmlDeleteOR =
			function()
		{
			this.mapDelete();
		};
		
		map.prototype.htmlInitOR = 
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
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWName))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWName();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWName;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.mapCreateNameImpl();

			this.m_kWName.setKWValue(sValue);
		};

		map.prototype.mapCreateNameImpl =
			function mapCreateNameImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWName))
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

			this.m_kWName = new name();

			this.m_kWName.setKWIDParent(this.m_sKWID);
			this.m_kWName.setKWDom(this.m_kWDom);

			this.m_kWName.check();
			this.m_kWName.init();

			this.kWAddAttr(this.m_kWName);
		};

		map.prototype.mapDelete =
			function mapDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWName = null;
		};

		map.prototype.mapInit =
			function mapInit()
		{
			//console.log(this.kWLogCalled());
		};

		map.prototype.mapSetName =
			function mapSetName(sVal)
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
				this.mapCreateNameImpl();
			}

			this.m_kWName.setKWValue(this.m_sKWName);
		};

		return map;

	}
);
