/**********************************************************************
 *
 * radio/obj.js
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
		"../../../attrs/command/radio/obj",
		"../../../view/command/radio/obj",
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

		function radio()
		{
			//console.log("radio::constructor");
			this.m_sKWType		= "radio";
			
			this.m_sKWRadioGroup	= null;
			
			this.m_bKWChecked		= false;
		}

		radio.prototype = new command();
		radio.prototype.constructor = radio;
		radio.constructor = command.prototype.constructor;

		radio.prototype.check = function check()
		{
			command.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		radio.prototype.init = function init()
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

		radio.prototype.radioInitOR = 
			function radioInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		radio.prototype.commandCreateAttrsOR = 
			function()
		{
			return this.radioCreateAttrs(); 
		};
		
		radio.prototype.commandInitOR = 
			function()
		{
			this.radioInit();
		};
		
		radio.prototype.commandRetrieveOR = 
			function()
		{
			this.radioRetrieve();
		};
		
		radio.prototype.elmtCreateViewOR = 
			function()
		{
			return this.radioCreateView();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		radio.prototype.radioCreateAttrs = 
			function radioCreateAttrs()
		{
			theAttrs = null;
			
			//console.log(this.kWLogCalled());
			theAttrs = new attrs();
			
			theAttrs.setKWChecked(this.m_bKWChecked);
			theAttrs.setKWRadioGroup(this.m_sKWRadioGroup);
			
			return theAttrs;
		};

		radio.prototype.radioCreateView = 
			function radioCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		radio.prototype.radioInit = 
			function radioInit()
		{
			//console.log(this.kWLogCalled());
			this.radioInitOR();
		};
		
		radio.prototype.radioRetrieve = 
			function radioRetrieve()
		{
			//console.log(this.kWLogCalled());
			this.radioRetrieveChecked();
			this.radioRetrieveRadioGroup();
		};
		
		radio.prototype.radioRetrieveChecked = 
			function radioRetrieveChecked()
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
		
		radio.prototype.radioRetrieveRadioGroup = 
			function radioRetrieveRadioGroup()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWRadioGroup))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWRadioGroup();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWRadioGroup = value.getKWValue();
			if (validate.isString(this.m_sKWRadioGroup))
			{
				//console.debug(this.kWLogDisplay("m_sKWRadioGroup", this.m_sKWRadioGroup));
			}
		};
		
		return radio;

	}
);
