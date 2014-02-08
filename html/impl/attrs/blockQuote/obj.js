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
		"../../attr/cite/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		cite,
		html,
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
			
			this.m_sKWCite	= true;
		}

		blockQuote.prototype = new html();
		blockQuote.prototype.constructor = blockQuote;
		blockQuote.constructor = html.prototype.constructor;

		blockQuote.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		blockQuote.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			html.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		blockQuote.prototype.setKWCite =
			function(sVal)
		{
			this.blockQuoteSetCite(sVal);
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
	
		blockQuote.prototype.htmlCreateOR = 
			function()
		{
			this.blockQuoteCreate();
		};
		
		blockQuote.prototype.htmlDeleteOR =
			function()
		{
			this.blockQuoteDelete();
		};

		blockQuote.prototype.htmlInitOR =
			function()
		{
			this.blockQuoteInit();
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

		blockQuote.prototype.blockQuoteCreate = 
			function blockQuoteCreate()
		{
			//console.log(this.kWLogCalled());
			this.blockQuoteCreateCite();
		};

		blockQuote.prototype.blockQuoteCreateCite =
			function blockQuoteCreateCite()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWCite))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWCite();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWCite;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.blockQuoteCreateCiteImpl();

			this.m_kWCite.setKWValue(sValue);
		};

		blockQuote.prototype.blockQuoteCreateCiteImpl =
			function blockQuoteCreateCiteImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWCite))
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

			this.m_kWCite = new cite();

			this.m_kWCite.setKWIDParent(this.m_sKWID);
			this.m_kWCite.setKWDom(this.m_kWDom);

			this.m_kWCite.check();
			this.m_kWCite.init();

			this.kWAddAttr(this.m_kWCite);
		};

		blockQuote.prototype.blockQuoteDelete =
			function blockQuoteDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWCite = null;
		};

		blockQuote.prototype.blockQuoteInit =
			function blockQuoteInit()
		{
			//console.log(this.kWLogCalled());
		};

		blockQuote.prototype.blockQuoteSetCite =
			function blockQuoteSetCite(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWCite = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWCite))
			{
				this.blockQuoteCreateCiteImpl();
			}

			this.m_kWCite.setKWValue(this.m_sKWCite);
		};

		return blockQuote;

	}
);
