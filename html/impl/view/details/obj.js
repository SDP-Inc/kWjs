/**********************************************************************
 *
 * details/obj.js
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
		"../../value/open/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		open,
		base,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function details()
		{
			//console.log("details::constructor");
			this.m_kWOpen = null;
		}

		details.prototype = new base();
		details.prototype.constructor = details;
		details.constructor = base.prototype.constructor;

		details.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
		};

		details.prototype.init =
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

		details.prototype.getKWOpen =
			function()
		{
			return this.m_kWOpen;
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
	
		details.prototype.baseCreateOR = 
			function()
		{
			this.detailsCreate();
		};

		details.prototype.baseDeleteOR =
			function()
			{
				this.detailsDelete();
			};

		details.prototype.baseInitOR =
			function()
		{
			this.detailsInit();
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

		details.prototype.detailsCreate = 
			function detailsCreate() 
		{
			//console.log(this.kWLogCalled());
			this.detailsCreateOpen();
		};
		
		details.prototype.detailsCreateOpen = 
			function detailsCreateOpen() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWOpen))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWOpen = new open();
			
			this.m_kWOpen.setKWView(this);
			this.m_kWOpen.setKWIDParent(this.m_sKWID);
			
			this.m_kWOpen.check();
			this.m_kWOpen.init();

			this.kWAddValue(this.m_kWOpen);
		};

		details.prototype.detailsDelete =
			function detailsDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWOpen = null;
		};

		details.prototype.detailsInit =
			function detailsInit()
		{
			//console.log(this.kWLogCalled());
		};

		return details;

	}
);
