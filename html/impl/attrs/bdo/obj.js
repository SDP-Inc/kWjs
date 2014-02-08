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
		"../../attr/dir/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		dir,
		html,
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
			
			this.m_sKWDir	= true;
		}

		bdo.prototype = new html();
		bdo.prototype.constructor = bdo;
		bdo.constructor = html.prototype.constructor;

		bdo.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		bdo.prototype.init = 
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

		bdo.prototype.setKWDir =
			function(sVal)
		{
			this.bdoSetDir(sVal);
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
	
		bdo.prototype.htmlCreateOR = 
			function()
		{
			this.bdoCreate();
		};
		
		bdo.prototype.htmlDeleteOR =
			function()
		{
			this.bdoDelete();
		};

		bdo.prototype.htmlInitOR =
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
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWDir))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWDir();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWDir;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.bdoCreateDirImpl();

			this.m_kWDir.setKWValue(sValue);
		};

		bdo.prototype.bdoCreateDirImpl =
			function bdoCreateDirImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWDir))
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

			this.m_kWDir = new role();

			this.m_kWDir.setKWIDParent(this.m_sKWID);
			this.m_kWDir.setKWDom(this.m_kWDom);

			this.m_kWDir.check();
			this.m_kWDir.init();

			this.kWAddAttr(this.m_kWDir);
		};

		bdo.prototype.bdoDelete =
			function bdoDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWDir = null;
		};

		bdo.prototype.bdoInit =
			function bdoInit()
		{
			//console.log(this.kWLogCalled());
		};

		bdo.prototype.bdoSetDir =
			function bdoSetDir(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWDir = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWDir))
			{
				this.bdoCreateDirImpl();
			}

			this.m_kWDir.setKWValue(this.m_sKWDir);
		};

		return bdo;

	}
);
