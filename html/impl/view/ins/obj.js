/**********************************************************************
 *
 * ins/obj.js
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
		"../../value/cite/obj",
		"../../value/dateTime/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		cite,
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

		function ins()
		{
			//console.log("ins::constructor");
			
			this.m_kWCite		= null;
			this.m_kWDateTime	= null;
		}

		ins.prototype = new base();
		ins.prototype.constructor = ins;
		ins.constructor = base.prototype.constructor;

		ins.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
		};

		ins.prototype.init = 
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

		ins.prototype.getKWCite =
			function()
		{
			return this.m_kWCite;
		};

		ins.prototype.getKWDateTime =
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
	
		ins.prototype.baseCreateOR =
			function()
		{
			this.insCreate();
		};

		ins.prototype.baseDeleteOR =
			function()
		{
			this.insDelete();
		};

		ins.prototype.baseInitOR =
			function()
		{
			this.insInit();
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

		ins.prototype.insCreate = 
			function insCreate() 
		{
			//console.log(this.kWLogCalled());
			this.insCreateCite();
			this.insCreateDateTime();
		};
		
		ins.prototype.insCreateCite = 
			function insCreateCite() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWCite))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWCite = new cite();
			
			this.m_kWCite.setKWView(this);
			this.m_kWCite.setKWIDParent(this.m_sKWID);
			
			this.m_kWCite.check();
			this.m_kWCite.init();

			this.kWAddValue(this.m_kWCite);
		};
		
		ins.prototype.insCreateDateTime = 
			function insCreateDateTime() 
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

		ins.prototype.insDelete =
			function insDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWCite		= null;
			this.m_kWDateTime	= null;
		};

		ins.prototype.insInit =
			function insInit()
		{
			//console.log(this.kWLogCalled());
		};

		return ins;

	}
);
