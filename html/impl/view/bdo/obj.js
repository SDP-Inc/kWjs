/**********************************************************************
 *
 * bdo/obj.js
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
		"../../value/dir/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		dir,
		base,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function bdo()
		{
			//console.log("bdo::constructor");
			
			this.m_kWDir	= null;
		}

		bdo.prototype = new base();
		bdo.prototype.constructor = bdo;
		bdo.constructor = base.prototype.constructor;

		bdo.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		bdo.prototype.init = 
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

		bdo.prototype.getKWDir =
			function()
		{
			return this.m_kWDir;
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
	
		bdo.prototype.baseCreateOR =
			function()
		{
			this.bdoCreate();
		};

		bdo.prototype.baseDeleteOR =
			function()
			{
				this.bdoDelete();
			};

		bdo.prototype.baseInitOR =
			function()
		{
			this.bdoInit();
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

		bdo.prototype.bdoCreate = 
			function bdoCreate() 
		{
			//console.log(this.kWLogCalled());
			this.bdoCreateDir();
		};
		
		bdo.prototype.bdoCreateDir = 
			function bdoCreateDir() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWDir))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWDir = new dir();
			
			this.m_kWDir.setKWView(this);
			this.m_kWDir.setKWIDParent(this.m_sKWID);
			
			this.m_kWDir.check();
			this.m_kWDir.init();

			this.kWAddValue(this.m_kWDir);
		};

		bdo.prototype.bdoDelete =
			function bdoDelete()
			{
				//console.log(this.kWLogCalled());

				this.m_kWDir	= null;
			};

		bdo.prototype.bdoInit =
			function bdoInit()
		{
			//console.log(this.kWLogCalled());
		};

		return bdo;

	}
);
