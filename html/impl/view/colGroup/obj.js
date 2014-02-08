/**********************************************************************
 *
 * colGroup/obj.js
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
		"../../value/span/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		span,
		base,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function colGroup()
		{
			//console.log("colGroup::constructor");
			this.m_kWSpan = null;
		}

		colGroup.prototype = new base();
		colGroup.prototype.constructor = colGroup;
		colGroup.constructor = base.prototype.constructor;

		colGroup.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
		};

		colGroup.prototype.init = 
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

		colGroup.prototype.getKWSpan =
			function()
		{
			return this.m_kWSpan;
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
	
		colGroup.prototype.baseCreateOR =
			function()
		{
			this.cgCreate();
		};

		colGroup.prototype.baseDeleteOR =
			function()
		{
			this.cgDelete();
		};

		colGroup.prototype.baseInitOR =
			function()
		{
			this.cgInit();
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

		colGroup.prototype.cgCreate = 
			function cgCreate() 
		{
			//console.log(this.kWLogCalled());
			this.cgCreateSpan();
		};
		
		colGroup.prototype.cgCreateSpan = 
			function cgCreateSpan() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWSpan))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWSpan = new span();
			
			this.m_kWSpan.setKWView(this);
			this.m_kWSpan.setKWIDParent(this.m_sKWID);
			
			this.m_kWSpan.check();
			this.m_kWSpan.init();

			this.kWAddValue(this.m_kWSpan);
		};

		colGroup.prototype.cgDelete =
			function cgDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWSpan = null;
		};

		colGroup.prototype.cgInit =
			function cgInit()
		{
			//console.log(this.kWLogCalled());
		};

		return colGroup;

	}
);
