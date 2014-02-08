/**********************************************************************
 *
 * time/obj.js
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
		"../../value/dateTime/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		dateTime,
		base,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function time()
		{
			//console.log("time::constructor");
			
			this.m_kWDateTime	= null;
		}

		time.prototype = new base();
		time.prototype.constructor = time;
		time.constructor = base.prototype.constructor;

		time.prototype.check =
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		time.prototype.init = 
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

		time.prototype.getKWDateTime =
			function()
		{
			return this.m_kWDateTime;
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
	
		time.prototype.baseCreateOR =
			function()
		{
			this.timeCreate();
		};

		time.prototype.baseDeleteOR =
			function()
			{
				this.timeDelete();
			};

		time.prototype.baseInitOR =
			function()
		{
			this.timeInit();
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

		time.prototype.timeCreate = 
			function timeCreate() 
		{
			//console.log(this.kWLogCalled());
			
			this.timeCreateDateTime();
		};
		
		time.prototype.timeCreateDateTime = 
			function timeCreateDateTime() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWDateTime))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWDateTime = new dateTime();
			
			this.m_kWDateTime.setKWView(this);
			this.m_kWDateTime.setKWIDParent(this.m_sKWID);
			
			this.m_kWDateTime.check();
			this.m_kWDateTime.init();

			this.kWAddValue(this.m_kWDateTime);
		};

		time.prototype.timeDelete =
			function timeDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWDateTime	= null;
		};

		time.prototype.timeInit =
			function timeInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return time;
	}
);
