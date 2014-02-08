/**********************************************************************
 *
 * blockQuote/obj.js
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

		function blockQuote()
		{
			//console.log("blockQuote::constructor");
			this.m_kWCite	= null;
		}

		blockQuote.prototype = new base();
		blockQuote.prototype.constructor = blockQuote;
		blockQuote.constructor = base.prototype.constructor;

		blockQuote.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		blockQuote.prototype.init = 
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

		blockQuote.prototype.getKWCite =
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
	
		blockQuote.prototype.baseCreateOR =
			function()
		{
			this.bqCreate();
		};

		blockQuote.prototype.baseDeleteOR =
			function()
			{
				this.bqDelete();
			};

		blockQuote.prototype.baseInitOR =
			function()
		{
			this.bqInit();
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

		blockQuote.prototype.bqCreate = 
			function bqCreate() 
		{
			//console.log(this.kWLogCalled());
			this.bqCreateCite();
		};
		
		blockQuote.prototype.bqCreateCite = 
			function bqCreateCite() 
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

		blockQuote.prototype.bqDelete =
			function bqDelete()
			{
				//console.log(this.kWLogCalled());
				this.m_kWCite	= null;
			};

		blockQuote.prototype.bqInit =
			function bqInit()
		{
			//console.log(this.kWLogCalled());
		};

		return blockQuote;

	}
);
