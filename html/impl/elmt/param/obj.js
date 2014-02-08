/**********************************************************************
 *
 * param/obj.js
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
		"../../attrs/param/obj",
		"../../view/param/obj",
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

		function param()
		{
			//console.log("param::constructor");
			this.m_sKWTag	= "param";
			
			this.m_sKWName	= null;
			this.m_sKWValue	= null;
		}

		param.prototype = new elmt();
		param.prototype.constructor = param;
		param.constructor = elmt.prototype.constructor;

		param.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		param.prototype.init =
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
	
		param.prototype.elmtCreateAttrsOR =
			function()
		{
			return this.paramCreateAttrs(); 
		};
		
		param.prototype.elmtCreateViewOR = 
			function()
		{
			return this.paramCreateView();
		};
		
		param.prototype.elmtInitOR = 
			function()
		{
			this.paramInit();
		};
		
		param.prototype.elmtRetrieveOR =
			function()
		{
			this.paramRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		param.prototype.paramInitOR = 
			function paramInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		param.prototype.paramCreateAttrs = 
			function paramCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWName(this.m_sKWName);
			theAttrs.setKWValue(this.m_sKWValue);
			
			return theAttrs;
		};

		param.prototype.paramCreateView = 
			function paramCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		param.prototype.paramInit = 
			function paramInit()
		{
			this.paramInitOR();
		};
		
		param.prototype.paramRetrieve = 
			function paramRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.paramRetrieveName();
			this.paramRetrieveValue();
		};

		param.prototype.paramRetrieveName = 
			function paramRetrieveName()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWName))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWName();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWName = value.getKWValue();
			if (validate.isString(this.m_sKWName))
			{
				//console.debug(this.kWLogDisplay("m_sKWName", this.m_sKWName));
			}
		};
		
		param.prototype.paramRetrieveValue = 
			function paramRetrieveValue()
		{
			var Value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWValue))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			Value = this.m_kWView.getKWValue();
			if (!validate.isNotNull(Value))
			{
				console.error(this.kWLogErrRetrieve("Value"));
			}
			
			this.m_sKWValue = value.getKWValue();
			if (!validate.isString(this.m_sKWValue))
			{
				console.error(this.kWLogErrRetrieve("m_sKWValue"));
			}
			
			//console.debug(this.kWLogDisplay("m_sKWValue", this.m_sKWValue))
		};

		return param;

	}
);
