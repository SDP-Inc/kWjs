/**********************************************************************
 *
 * q/obj.js
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
		"../../value/cite/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		cite,
		base,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function q()
		{
			//console.log("q::constructor");
			
			this.m_kWCite = null;
		}

		q.prototype = new base();
		q.prototype.constructor = q;
		q.constructor = base.prototype.constructor;

		q.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
		};

		q.prototype.init = 
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

		q.prototype.getKWCite =
			function()
		{
			return this.m_kWCite;
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
	
		q.prototype.baseCreateOR =
			function()
		{
			this.qCreate();
		};

		q.prototype.baseDeleteOR =
			function()
		{
			this.qDelete();
		};

		q.prototype.baseInitOR =
			function()
		{
			this.qInit();
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

		q.prototype.qCreate = 
			function qCreate() 
		{
			//console.log(this.kWLogCalled());
			this.qCreateCite();
		};
		
		q.prototype.qCreateCite = 
			function qCreateCite() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWCite))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWCite = new cite();
			
			this.m_kWCite.setKWView(this);
			this.m_kWCite.setKWIDParent(this.m_sKWID);
			
			this.m_kWCite.check();
			this.m_kWCite.init();

			this.kWAddValue(this.m_kWCite);
		};

		q.prototype.qDelete =
			function qDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWCite = null;
		};

		q.prototype.qInit =
			function qInit()
		{
			//console.log(this.kWLogCalled());
		};

		return q;

	}
);
