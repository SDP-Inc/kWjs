/**********************************************************************
 *
 * dialog/obj.js
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

		function dialog()
		{
			//console.log("dialog::constructor");
			this.m_kWOpen = null;
		}

		dialog.prototype = new base();
		dialog.prototype.constructor = dialog;
		dialog.constructor = base.prototype.constructor;

		dialog.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
		};

		dialog.prototype.init = 
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

		dialog.prototype.getKWOpen =
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
	
		dialog.prototype.baseCreateOR = 
			function()
		{
			this.dialogCreate();
		};

		dialog.prototype.baseDeleteOR =
			function()
		{
			this.dialogDelete();
		};

		dialog.prototype.baseInitOR =
			function()
		{
			this.dialogInit();
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

		dialog.prototype.dialogCreate = 
			function dialogCreate() 
		{
			//console.log(this.kWLogCalled());
			this.dialoCreateOpen();
		};
		
		dialog.prototype.dialoCreateOpen = 
			function dialoCreateOpen() 
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

		dialog.prototype.dialogDelete =
			function dialogDelete()
		{
			//console.log(this.kWLogCalled());
			this.m_kWOpen = null;
		};

		dialog.prototype.dialogInit =
			function dialogInit()
		{
			//console.log(this.kWLogCalled());
		};

		return dialog;

	}
);
