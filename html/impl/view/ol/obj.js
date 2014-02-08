/**********************************************************************
 *
 * ol/obj.js
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
		"../../value/reversed/obj",
		"../../value/start/obj",
		"../../value/type/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		reversed,
		start,
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

		function ol()
		{
			//console.log("ol::constructor");
			
			this.m_kWReversed	= null;
			this.m_kWStart		= null;
			this.m_kWType		= null;
		}

		ol.prototype = new base();
		ol.prototype.constructor = ol;
		ol.constructor = base.prototype.constructor;

		ol.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		ol.prototype.init = 
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

		ol.prototype.getKWReversed =
			function()
		{
			return this.m_kWReversed;
		};

		ol.prototype.getKWStart =
			function()
		{
			return this.m_kWStart;
		};

		ol.prototype.getKWType =
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
	
		ol.prototype.baseCreateOR = 
			function()
		{
			this.olCreate();
		};

		ol.prototype.baseDeleteOR =
			function()
		{
			this.olDelete();
		};

		ol.prototype.baseInitOR =
			function()
		{
			this.olInit();
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

		ol.prototype.olCreate = 
			function olCreate() 
		{
			//console.log(this.kWLogCalled());
			this.olCreateReversed();
			this.olCreateStart();
			this.olCreateType();
		};
		
		ol.prototype.olCreateReversed = 
			function olCreateReversed() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWReversed))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWReversed = new reversed();
			
			this.m_kWReversed.setKWView(this);
			this.m_kWReversed.setKWIDParent(this.m_sKWID);
			
			this.m_kWReversed.check();
			this.m_kWReversed.init();

			this.kWAddValue(this.m_kWReversed);
		};
		
		ol.prototype.olCreateStart = 
			function olCreateStart() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWStart))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWStart = new start();
			
			this.m_kWStart.setKWView(this);
			this.m_kWStart.setKWIDParent(this.m_sKWID);
			
			this.m_kWStart.check();
			this.m_kWStart.init();

			this.kWAddValue(this.m_kWStart);
		};
		
		ol.prototype.olCreateType = 
			function olCreateType() 
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

		ol.prototype.olDelete =
			function olDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWReversed	= null;
			this.m_kWStart		= null;
			this.m_kWType		= null;
		};

		ol.prototype.olInit =
			function olInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return ol;

	}
);
