/**********************************************************************
 *
 * progress/obj.js
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
		"../../value/max/obj",
		"../../value/valueNumeric/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		max,
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

		function progress()
		{
			//console.log("progress::constructor");
			
			this.m_kWMax	= null;
			this.m_kWValue	= null;
		}

		progress.prototype = new base();
		progress.prototype.constructor = progress;
		progress.constructor = base.prototype.constructor;

		progress.prototype.check =
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		progress.prototype.init =
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

		progress.prototype.getKWMax =
			function()
		{
			return this.m_kWMax;
		};

		progress.prototype.getKWValue =
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
	
		progress.prototype.baseCreateOR = 
			function()
		{
			this.progressCreate();
		};

		progress.prototype.baseDeleteOR =
			function()
			{
				this.progressDelete();
			};

		progress.prototype.baseInitOR =
			function()
		{
			this.progressInit();
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

		progress.prototype.progressCreate = 
			function progressCreate() 
		{
			//console.log(this.kWLogCalled());
			this.progressCreateMax();
			this.progressCreateValue();
		};
		
		progress.prototype.progressCreateMax = 
			function progressCreateMax() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWMax))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWMax = new max();
			
			this.m_kWMax.setKWView(this);
			this.m_kWMax.setKWIDParent(this.m_sKWID);
			
			this.m_kWMax.check();
			this.m_kWMax.init();

			this.kWAddValue(this.m_kWMax);
		};
		
		progress.prototype.progressCreateValue = 
			function progressCreateValue() 
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

		progress.prototype.progressDelete =
			function progressDelete()
			{
				//console.log(this.kWLogCalled());

				this.m_kWMax	= null;
				this.m_kWValue	= null;
			};

		progress.prototype.progressInit =
			function progressInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return progress;

	}
);
