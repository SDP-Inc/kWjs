/**********************************************************************
 *
 * li/obj.js
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
		"../../value/value/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		value,
		base,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function li()
		{
			//console.log("li::constructor");
			this.m_kWValue	= null;
		}

		li.prototype = new base();
		li.prototype.constructor = li;
		li.constructor = base.prototype.constructor;

		li.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
		};

		li.prototype.init =
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

		li.prototype.getKWValue =
			function()
		{
			return this.m_kWValue;
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
	
		li.prototype.baseCreateOR =
			function()
		{
			this.liCreate();
		};

		li.prototype.baseDeleteOR =
			function()
		{
			this.liDelete();
		};

		li.prototype.baseInitOR =
			function()
		{
			this.liInit();
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

		li.prototype.liCreate = 
			function liCreate() 
		{
			//console.log(this.kWLogCalled());
			this.liCreateValue();
		};
		
		li.prototype.liCreateValue = 
			function liCreateValue() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWValue))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWValue = new value();
			
			this.m_kWValue.setKWView(this);
			this.m_kWValue.setKWIDParent(this.m_sKWID);
			
			this.m_kWValue.check();
			this.m_kWValue.init();

			this.kWAddValue(this.m_kWValue);
		};

		li.prototype.liDelete =
			function liDelete()
			{
				//console.log(this.kWLogCalled());
				this.m_kWValue	= null;
			};

		li.prototype.liInit =
			function liInit()
		{
			//console.log(this.kWLogCalled());
		};

		return li;

	}
);
