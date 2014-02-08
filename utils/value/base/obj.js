/**********************************************************************
 *
 * base/obj.js
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
		"kWLog/obj",
		"kWStat/validate"
	],
	function
	(
		log,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function base() 
		{
			//console.log("base::constructor");
			
			this.m_kWView	= null;
			this.m_kWValue	= null;
		}

		base.prototype = new log();
		base.prototype.constructor = base;
		base.constructor = log.prototype.constructor;

		base.prototype.check = 
			function check() 
		{
			log.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			if (!validate.isString(this.m_sKWExt))
			{
				console.error(this.kWLogInvalid("m_sKWExt"));
			}
		};

		base.prototype.init = 
			function init() 
		{
			//console.log(this.kWLogCalled());
			log.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		base.prototype.getKWValue =
			function() 
		{
			return this.m_kWValue;
		};

		base.prototype.setKWView =
			function(obj) 
		{
			this.m_kWView = obj;
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

		base.prototype.kWDelete =
			function()
			{
				this.baseDelete();
			};

		//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		base.prototype.uBLInitOR =
			function()
		{
			this.baseInit(); 
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		base.prototype.baseDeleteOR =
			function baseDeleteOR()
			{
				//console.error(this.kWLogNotImpl());
			};

		base.prototype.baseInitOR =
			function baseInitOR()
			{
				//console.error(this.kWLogNotImpl());
			};

		base.prototype.baseRetrieveOR =
			function baseRetrieveOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		base.prototype.baseDelete =
			function baseDelete()
			{
				//console.log(this.kWLogCalled());

				this.m_kWView = null;

				this.baseDeleteOR();
			};

		base.prototype.baseInit =
			function baseInit()
			{
				//console.log(this.kWLogCalled());
				this.baseRetrieve();
				this.baseInitOR();
			};

		base.prototype.baseRetrieve =
			function baseRetrieve() 
		{
			//console.log(this.kWLogCalled());
			this.baseRetrieveOR();
		};
		
		return base;

	}
);
