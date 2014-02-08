/**********************************************************************
 *
 * file/obj.js
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
		"../../../attr/accept/obj",
		"../obj",
		"kWStat/validate"
	], 
	function
	(
		accept,
		input,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function file()
		{
			//console.log("file::constructor");

			this.m_kWAccept		= null;
			
			this.m_sKWAccept	= null;
		}

		file.prototype = new input();
		file.prototype.constructor = file;
		file.constructor = input.prototype.constructor;

		file.prototype.check = 
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		file.prototype.init =
			function init()
		{
			//console.log(this.kWLogCalled());
			input.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		file.prototype.getKWAccept =
			function()
		{
			return this.m_sKWAccept;
		};

		file.prototype.setKWAccept =
			function(sVal)
		{
			this.fileSetAccept(sVal);
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
	
		file.prototype.inputCreateOR = 
			function()
		{
			this.fileCreate();
		};

		file.prototype.inputDeleteOR =
			function()
		{
			this.fileDelete();
		};

		file.prototype.inputInitOR = 
			function()
		{
			this.fileInit();
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

		file.prototype.fileCreate = 
			function fileCreate() 
		{
			//console.log(this.kWLogCalled());
			this.fileCreateAccept();
		};
		
		file.prototype.fileCreateAccept = 
			function fileCreateAccept()
		{
			var value   = null;
			
			var sValue  = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWAccept))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWAccept();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWAccept;
			}

			if (!validate.isString(sValue))
			{
				return;
			}
			
			this.fileCreateAcceptImpl();
			
			this.m_kWAccept.setKWValue(sValue);
		};

		file.prototype.fileCreateAcceptImpl =
			function fileCreateAcceptImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWAccept))
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

			this.m_kWAccept = new accept();

			this.m_kWAccept.setKWIDParent(this.m_sKWID);
			this.m_kWAccept.setKWDom(this.m_kWDom);

			this.m_kWAccept.check();
			this.m_kWAccept.init();

			this.kWAddAttr(this.m_kWAccept);
		};

		file.prototype.fileDelete =
			function fileDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWAccept		= null;
		};

		file.prototype.fileInit = 
			function fileInit()
		{
			//console.log(this.kWLogCalled());
		};

		file.prototype.fileSetAccept =
			function fileSetAccept(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWAccept = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWAccept))
			{
				this.fileCreateAcceptImpl();
			}

			this.m_kWAccept.setKWValue(this.m_sKWAccept);
		};

		return file;

	}
);
