/**********************************************************************
 *
 * embed/obj.js
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
		"../../value/height/obj",
		"../../value/src/obj",
		"../../value/type/obj",
		"../../value/width/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		height,
		src,
		type,
		width,
		base,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function embed()
		{
			//console.log("embed::constructor");
			
			this.m_kWHeight	= null;
			this.m_kWSrc	= null;
			this.m_kWType	= null;
			this.m_kWWidth	= null;
		}

		embed.prototype = new base();
		embed.prototype.constructor = embed;
		embed.constructor = base.prototype.constructor;

		embed.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		embed.prototype.init = 
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

		embed.prototype.getKWHeight =
			function()
		{
			return this.m_kWHeight;
		};

		embed.prototype.getKWSrc =
			function()
		{
			return this.m_kWSrc;
		};

		embed.prototype.getKWType =
			function()
		{
			return this.m_kWType;
		};

		embed.prototype.getKWWidth =
			function()
		{
			return this.m_kWWidth;
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
	
		embed.prototype.baseCreateOR = 
			function()
		{
			this.embedCreate();
		};

		embed.prototype.baseDeleteOR =
			function()
		{
			this.aDelete();
		};

		embed.prototype.baseInitOR =
			function()
		{
			this.embedInit();
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

		embed.prototype.embedCreate = 
			function embedCreate() 
		{
			//console.log(this.kWLogCalled());
			this.embedCreateHeight();
			this.embedCreateSrc();
			this.embedCreateType();
			this.embedCreateWidth();
		};
		
		embed.prototype.embedCreateHeight = 
			function embedCreateHeight() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWHeight))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWHeight = new height();
			
			this.m_kWHeight.setKWView(this);
			this.m_kWHeight.setKWIDParent(this.m_sKWID);
			
			this.m_kWHeight.check();
			this.m_kWHeight.init();

			this.kWAddValue(this.m_kWHeight);
		};
		
		embed.prototype.embedCreateSrc = 
			function embedCreateSrc() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWSrc))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWSrc = new src();
			
			this.m_kWSrc.setKWView(this);
			this.m_kWSrc.setKWIDParent(this.m_sKWID);
			
			this.m_kWSrc.check();
			this.m_kWSrc.init();

			this.kWAddValue(this.m_kWSrc);
		};
		
		embed.prototype.embedCreateType = 
			function embedCreateType() 
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
		
		embed.prototype.embedCreateWidth = 
			function embedCreateWidth() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWWidth))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWWidth = new width();
			
			this.m_kWWidth.setKWView(this);
			this.m_kWWidth.setKWIDParent(this.m_sKWID);
			
			this.m_kWWidth.check();
			this.m_kWWidth.init();

			this.kWAddValue(this.m_kWWidth);
		};

		embed.prototype.embedDelete =
			function embedareaDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWHeight	= null;
			this.m_kWSrc	= null;
			this.m_kWType	= null;
			this.m_kWWidth	= null;
		};

		embed.prototype.embedInit =
			function embedInit()
		{
			//console.log(this.kWLogCalled());
		};

		return embed;

	}
);
