/**********************************************************************
 *
 * command/obj.js
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
		"../../../base/elmt/obj",
		"kWStat/validate",
		"jquery"
	], 
	function
	(
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

		function command()
		{
			//console.log("command::constructor");
			this.m_sKWTag		= "command";
			
			this.m_sKWIcon		= null;
			this.m_sKWLabel		= null;
			this.m_sKWType		= null;
			
			this.m_bKWDisabled	= false;
		}

		command.prototype = new elmt();
		command.prototype.constructor = command;
		command.constructor = elmt.prototype.constructor;

		command.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sKWType))
			{
				console.error(this.kWLogInvalid("m_sKWType"));
			}
		};

		command.prototype.init = 
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

		command.prototype.commandCreateAttrsOR = 
			function commandCreateAttrsOR()
		{
			console.error(this.kWLogNotImpl());
		};

		command.prototype.commandInitOR = 
			function commandInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
		command.prototype.commandRetrieveOR = 
			function commandRetrieveOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		command.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.commandCreateAttrs();
		};
		
		command.prototype.elmtInitOR = 
			function()
		{
			this.commandInit();
		};
		
		command.prototype.elmtRetrieveOR = 
			function()
		{
			return this.commandRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		command.prototype.commandCreateAttrs = 
			function commandCreateAttrs()
		{
			theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = this.commandCreateAttrsOR();
			if (!validate.isNotNull(theAttrs))
			{
				console.error(this.kWLogInvalid("theAttrs"));
			}
			
			theAttrs.setKWDisabled(this.m_bKWDisabled);
			theAttrs.setKWIcon(this.m_sKWIcon);
			theAttrs.setKWLabel(this.m_sKWLabel);
			theAttrs.setKWType(this.m_sKWType);
			
			return theAttrs;
		};
		
		command.prototype.commandInit = 
			function commandInit()
		{
			//console.log(this.kWLogCalled());
			this.commandInitOR();
		};
		
		command.prototype.commandRetrieve = 
			function commandRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.commandRetrieveDisabled();
			this.commandRetrieveIcon();
			this.commandRetrieveLabel();
			
			this.commandRetrieveOR();
		};
		
		command.prototype.commandRetrieveDisabled = 
			function commandRetrieveDisabled()
		{
			var value	= null;
			
			var bVal	= false;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sDisabled))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWDisabled();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWDisabled = bVal;
				//console.debug(this.kWLogDisplay("m_bKWDisabled", this.m_bKWDisabled));
			}
		};
		
		command.prototype.commandRetrieveIcon = 
			function commandRetrieveIcon()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWIcon))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWIcon();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWIcon = value.getKWValue();
			if (validate.isString(this.m_sKWIcon))
			{
				//console.debug(this.kWLogDisplay("m_sKWIcon", this.m_sKWIcon));
			}
		};
		
		command.prototype.commandRetrieveLabel = 
			function commandRetrieveLabel()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWLabel))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWLabel();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWLabel = value.getKWValue();
			if (validate.isString(this.m_sKWLabel))
			{
				//console.debug(this.kWLogDisplay("m_sKWLabel", this.m_sKWLabel));
			}
		};
		
		return command;

	}
);
