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
		"../../attrs/li/obj",
		"../../view/li/obj",
		"../../../base/elmt/obj",
		"kWStat/validate"
	], 
	function
	(
		attrs,
		view,
		elmt,
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
			this.m_sKWTag	= "li";
			
			this.m_nKWValue	= -1;
		}

		li.prototype = new elmt();
		li.prototype.constructor = li;
		li.constructor = elmt.prototype.constructor;

		li.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		li.prototype.init = 
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
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		li.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.liCreateAttrs(); 
		};
		
		li.prototype.elmtCreateViewOR = 
			function()
		{
			return this.liCreateView();
		};
		
		li.prototype.elmtInitOR = 
			function()
		{
			this.liInit();
		};
		
		li.prototype.elmtRetrieveOR =
			function()
		{
			this.liRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		li.prototype.liInitOR = 
			function liInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		li.prototype.liCreateAttrs = 
			function liCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWValue(this.m_nKWValue);
			
			return theAttrs;
		};

		li.prototype.liCreateView = 
			function liCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		li.prototype.liInit = 
			function liInit()
		{
			//console.log(this.kWLogCalled());
			this.liInitOR();
		};

		li.prototype.liRetrieve = 
			function liRetrieve()
		{
			//console.log(this.kWLogCalled());
		};

		li.prototype.liRetrieveValue = 
			function liRetrieveValue()
		{
			var value	= null;
			
			var nVal	= -1;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_nKWValue))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWValue();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			nVal = value.getKWValue();
			if (validate.isNumberNotNeg(nVal))
			{
				this.m_nKWValue = nVal;
				//console.debug(this.kWLogDisplay("m_nKWValue", this.m_nKWValue));
			}
		};
		
		return li;

	}
);
