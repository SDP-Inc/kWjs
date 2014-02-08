/**********************************************************************
 *
 * style/obj.js
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
		"../../value/media/obj",
		"../../value/scoped/obj",
		"../../value/type/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		media,
		scoped,
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

		function style()
		{
			//console.log("style::constructor");
			
			this.m_kWMedia	= null;
			this.m_kWScoped	= null;
			this.m_kWType	= null;
		}

		style.prototype = new base();
		style.prototype.constructor = style;
		style.constructor = base.prototype.constructor;

		style.prototype.check =
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		style.prototype.init =
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

		style.prototype.getKWMedia =
			function()
		{
			return this.m_kWMedia;
		};

		style.prototype.getKWScoped =
			function()
		{
			return this.m_kWScoped;
		};

		style.prototype.getKWType =
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
	
		style.prototype.baseCreateOR = 
			function()
		{
			this.styleCreate();
		};

		style.prototype.baseDeleteOR =
			function()
			{
				this.styleDelete();
			};

		style.prototype.baseInitOR =
			function()
		{
			this.styleInit();
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

		style.prototype.styleCreate = 
			function styleCreate() 
		{
			//console.log(this.kWLogCalled());
			
			this.styleCreateMedia();
			this.styleCreateScoped();
			this.styleCreateType();
		};
		
		style.prototype.styleCreateMedia = 
			function styleCreateMedia() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWMedia))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWMedia = new media();
			
			this.m_kWMedia.setKWView(this);
			this.m_kWMedia.setKWIDParent(this.m_sKWID);
			
			this.m_kWMedia.check();
			this.m_kWMedia.init();

			this.kWAddValue(this.m_kWMedia);
		};
		
		style.prototype.styleCreateScoped = 
			function styleCreateScoped() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWScoped))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWScoped = new scoped();
			
			this.m_kWScoped.setKWView(this);
			this.m_kWScoped.setKWIDParent(this.m_sKWID);
			
			this.m_kWScoped.check();
			this.m_kWScoped.init();

			this.kWAddValue(this.m_kWScoped);
		};
		
		style.prototype.styleCreateType = 
			function styleCreateType() 
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

		style.prototype.styleDelete =
			function styleDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWMedia	= null;
			this.m_kWScoped	= null;
			this.m_kWType	= null;
		};

		style.prototype.styleInit =
			function styleInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return style;
	}
);
