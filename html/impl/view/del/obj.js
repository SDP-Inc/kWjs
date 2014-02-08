/**********************************************************************
 *
 * del/obj.js
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

		function del()
		{
			//console.log("del::constructor");
			
			this.m_kWCite		= null;
			this.m_kWDateTime	= null;
		}

		del.prototype = new base();
		del.prototype.constructor = del;
		del.constructor = base.prototype.constructor;

		del.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
		};

		del.prototype.init = 
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

		del.prototype.getKWCite =
			function()
		{
			return this.m_kWCite;
		};

		del.prototype.getKWDateTime =
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
	
		del.prototype.baseCreateOR = 
			function()
		{
			this.delCreate();
		};

		del.prototype.baseDeleteOR =
			function()
			{
				this.delDelete();
			};

		del.prototype.baseInitOR =
			function()
		{
			this.delInit();
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

		del.prototype.delCreate = 
			function delCreate() 
		{
			//console.log(this.kWLogCalled());
			this.delCreateCite();
			this.delCreateDateTime();
		};
		
		del.prototype.delCreateCite = 
			function delCreateCite() 
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
		
		del.prototype.delCreateDateTime = 
			function delCreateDateTime() 
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

		del.prototype.delDelete =
			function delDelete()
		{
			//console.log(this.kWLogCalled());
			this.m_kWCite		= null;
			this.m_kWDateTime	= null;
		};

		del.prototype.delInit =
			function delInit()
		{
			//console.log(this.kWLogCalled());
		};

		return del;

	}
);
