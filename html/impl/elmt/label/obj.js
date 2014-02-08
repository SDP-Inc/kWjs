/**********************************************************************
 *
 * label/obj.js
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
		"../../attrs/label/obj",
		"../../view/label/obj",
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

		function label()
		{
			//console.log("label::constructor");

			this.m_sKWTag	= "label";
			
			this.m_sKWFor	= null;
		}

		label.prototype = new elmt();
		label.prototype.constructor = label;
		label.constructor = elmt.prototype.constructor;

		label.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		label.prototype.init =
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

		label.prototype.setKWFor =
			function(sVal)
		{
			this.m_sKWFor = sVal;
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
	
		label.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.labelCreateAttrs(); 
		};
		
		label.prototype.elmtCreateViewOR = 
			function()
		{
			return this.labelCreateView();
		};
		
		label.prototype.elmtInitOR =
			function()
		{
			this.labelInit();
		};
		
		label.prototype.elmtRetrieveOR = 
			function()
		{
			this.labelRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		label.prototype.labelInitOR = 
			function labelInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		label.prototype.labelCreateAttrs = 
			function labelCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWFor(this.m_sKWFor);
			
			return theAttrs;
		};

		label.prototype.labelCreateView = 
			function labelCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		label.prototype.labelInit = 
			function labelInit()
		{
			//console.log(this.kWLogCalled());
			this.labelInitOR();
		};

		label.prototype.labelRetrieve = 
			function labelRetrieve()
		{
			//console.log(this.kWLogCalled());
			this.labelRetrieveFor();
		};

		label.prototype.labelRetrieveFor = 
			function labelRetrieveFor()
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
		
		return label;

	}
);
