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
		"../../attrs/blockQuote/obj",
		"../../view/blockQuote/obj",
		"../../../base/elmt/obj",
		"kWStat/validate",
		"jquery"
	], 
	function
	(
		attrs,
		view,
		elmt,
		validate,
		$
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
			this.m_sKWTag	= "blockQuote";
			
			this.m_sKWCite	= null;
		}

		blockQuote.prototype = new elmt();
		blockQuote.prototype.constructor = blockQuote;
		blockQuote.constructor = elmt.prototype.constructor;

		blockQuote.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		blockQuote.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			elmt.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

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
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		blockQuote.prototype.bqInitOR = 
			function bqInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		blockQuote.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.bqCreateAttrs(); 
		};
		
		blockQuote.prototype.elmtCreateViewOR = 
			function()
		{
			return this.bqCreateView();
		};
		
		blockQuote.prototype.elmtInitOR = 
			function()
		{
			this.bqInit();
		};
		
		blockQuote.prototype.elmtRetrieveOR = 
			function()
		{
			this.bqRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		blockQuote.prototype.bqCreateAttrs = 
			function bqCreateAttrs()
		{
			theAttrs = null;
			
			//console.log(this.kWLogCalled());
			theAttrs = new attrs();
			
			theAttrs.setKWCite(this.m_sKWCite);
			
			return theAttrs;
		};

		blockQuote.prototype.bqCreateView = 
			function bqCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		blockQuote.prototype.bqInit = 
			function bqInit()
		{
			//console.log(this.kWLogCalled());
			this.bqInitOR();
		};
		
		blockQuote.prototype.bqRetrieve = 
			function bqRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		blockQuote.prototype.bqRetrieveCite = 
			function bqRetrieveCite()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWCite))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWCite();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWCite = value.getKWValue();
			if (validate.isString(this.m_sKWCite))
			{
				//console.debug(this.kWLogDisplay("m_sKWCite", this.m_sKWCite));
			}
		};
		
		return blockQuote;

	}
);
