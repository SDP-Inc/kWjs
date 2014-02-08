/**********************************************************************
 *
 * output/obj.js
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
		"../../attrs/output/obj",
		"../../view/output/obj",
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

		function output()
		{
			//console.log("output::constructor");
			this.m_sKWTag	= "output";
			
			this.m_sKWFor	= null;
			this.m_sKWForm	= null;
			this.m_sKWName	= null;
		}

		output.prototype = new elmt();
		output.prototype.constructor = output;
		output.constructor = elmt.prototype.constructor;

		output.prototype.check =
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		output.prototype.init =
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
	
		output.prototype.elmtCreateAttrsOR =
			function()
		{
			return this.outputCreateAttrs(); 
		};
		
		output.prototype.elmtCreateViewOR =
			function()
		{
			return this.outputCreateView();
		};
		
		output.prototype.elmtInitOR =
			function()
		{
			this.outputInit();
		};
		
		output.prototype.elmtRetrieveOR =
			function()
		{
			this.outputRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		output.prototype.outputInitOR = 
			function outputInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		output.prototype.outputCreateAttrs = 
			function outputCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWFor(this.m_sKWFor);
			theAttrs.setKWForm(this.m_sKWForm);
			theAttrs.setKWName(this.m_sKWName);
			
			return theAttrs;
		};

		output.prototype.outputCreateView = 
			function outputCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		output.prototype.outputInit = 
			function outputInit()
		{
			this.outputInitOR();
		};
		
		output.prototype.outputRetrieve = 
			function outputRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.outputRetrieveFor();
			this.outputRetrieveForm();
			this.outputRetrieveName();
		};

		output.prototype.outputRetrieveFor = 
			function outputRetrieveFor()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWFor))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWFor();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWFor = value.getKWValue();
			if (validate.isString(this.m_sKWFor))
			{
				//console.debug(this.kWLogDisplay("m_sKWFor", this.m_sKWFor));
			}
		};
		
		output.prototype.outputRetrieveForm = 
			function outputRetrieveForm()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWForm))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWForm();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWForm = value.getKWValue();
			if (!validate.isString(this.m_sKWForm))
			{
				console.error(this.kWLogErrRetrieve("m_sKWForm"));
			}
			
			//console.debug(this.kWLogDisplay("m_sKWForm", this.m_sKWForm))
		};

		output.prototype.outputRetrieveName = 
			function outputRetrieveName()
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
		
		return output;

	}
);
