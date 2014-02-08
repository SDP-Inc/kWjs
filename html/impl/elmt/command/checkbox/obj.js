/**********************************************************************
 *
 * checkbox/obj.js
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
		"../../../attrs/command/checkbox/obj",
		"../../../view/command/checkbox/obj",
		"../obj",
		"kWStat/validate",
		"jquery"
	], 
	function
	(
		attrs,
		view,
		command,
		validate,
		$
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function checkbox()
		{
			//console.log("checkbox::constructor");
			this.m_sKWType		= "checkbox";
			
			this.m_bKWChecked		= false;
		}

		checkbox.prototype = new command();
		checkbox.prototype.constructor = checkbox;
		checkbox.constructor = command.prototype.constructor;

		checkbox.prototype.check = 
			function check()
		{
			command.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		checkbox.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			command.prototype.init.call(this);
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

		checkbox.prototype.cbInitOR = 
			function cbInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		checkbox.prototype.commandCreateAttrsOR = 
			function()
		{
			return this.cbCreateAttrs(); 
		};
		
		checkbox.prototype.commandInitOR = 
			function()
		{
			this.cbInit();
		};
		
		checkbox.prototype.commandRetrieveOR = 
			function()
		{
			this.cbRetrieve();
		};
		
		checkbox.prototype.elmtCreateViewOR = 
			function()
		{
			return this.cbCreateView();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		checkbox.prototype.cbCreateAttrs = 
			function cbCreateAttrs()
		{
			theAttrs = null;
			
			//console.log(this.kWLogCalled());
			theAttrs = new attrs();
			
			theAttrs.setKWChecked(this.m_bKWChecked);
			
			return theAttrs;
		};

		checkbox.prototype.cbCreateView = 
			function cbCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		checkbox.prototype.cbInit = 
			function cbInit()
		{
			//console.log(this.kWLogCalled());
			this.cbInitOR();
		};
		
		checkbox.prototype.cbRetrieve = 
			function cbRetrieve()
		{
			//console.log(this.kWLogCalled());
			this.cbRetrieveChecked();
		};
		
		checkbox.prototype.cbRetrieveChecked = 
			function cbRetrieveChecked()
		{
			var value	= null;
			
			var bVal	= null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWChecked();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (!validate.isBool(bVal))
			{
				this.m_bKWChecked = bVal;
				//console.debug(this.kWLogDisplay("m_bKWChecked", this.m_bKWChecked));
			}
		};
		
		return checkbox;

	}
);
