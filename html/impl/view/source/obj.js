/**********************************************************************
 *
 * source/obj.js
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
		"../../value/src/obj",
		"../../value/type/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		media,
		src,
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

		function source()
		{
			//console.log("source::constructor");
			
			this.m_kWMedia	    = null;
			this.m_kWSrc		= null;
			this.m_kWType		= null;
		}

		source.prototype = new base();
		source.prototype.constructor = source;
		source.constructor = base.prototype.constructor;

		source.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		source.prototype.init = 
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

		source.prototype.getKWMedia =
			function()
		{
			return this.m_kWMedia;
		};

		source.prototype.getKWSrc =
			function()
		{
			return this.m_kWSrc;
		};

		source.prototype.getKWType =
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
	
		source.prototype.baseCreateOR =
			function()
		{
			this.sourceCreate();
		};

		source.prototype.baseDeleteOR =
			function()
		{
			this.sourceDelete();
		};

		source.prototype.baseInitOR =
			function()
		{
			this.sourceInit();
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

		source.prototype.sourceCreate = 
			function sourceCreate() 
		{
			//console.log(this.kWLogCalled());
			
			this.sourceCreateMedia();
			this.sourceCreateSrc();
			this.sourceCreateType();
		};
		
		source.prototype.sourceCreateMedia = 
			function sourceCreateMedia() 
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
		
		source.prototype.sourceCreateSrc = 
			function sourceCreateSrc() 
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
		
		source.prototype.sourceCreateType = 
			function sourceCreateType() 
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

		source.prototype.sourceDelete =
			function sourceDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWMedia	    = null;
			this.m_kWSrc		= null;
			this.m_kWType		= null;
		};

		source.prototype.sourceInit =
			function sourceInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return source;
	}
);
