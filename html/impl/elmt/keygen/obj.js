/**********************************************************************
 *
 * keyGen/obj.js
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
		"../../attrs/keyGen/obj",
		"../../view/keyGen/obj",
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

		function keyGen()
		{
			//console.log("keyGen::constructor");

			this.m_sKWTag		= "keyGen";
			
			this.m_sKWForm		= null;
			this.m_sKWKeyType	= null;
			this.m_sKWName		= null;
			
			this.m_bKWAutoFocus	= false;
			this.m_bKWChallenge	= false;
			this.m_bKWDisabled	= false;
		}

		keyGen.prototype = new elmt();
		keyGen.prototype.constructor = keyGen;
		keyGen.constructor = elmt.prototype.constructor;

		keyGen.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		keyGen.prototype.init = 
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

		keygen.prototype.setKWDisabled =
			function(bVal)
		{
			this.m_bKWDisabled = bVal;
			this.kgSetDisabled(bVal)
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
	
		keyGen.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.kgCreateAttrs(); 
		};
		
		keyGen.prototype.elmtCreateViewOR = 
			function()
		{
			return this.kgCreateView();
		};
		
		keyGen.prototype.elmtInitOR = 
			function()
		{
			this.kgInit();
		};
		
		keyGen.prototype.elmtRetrieveOR = 
			function()
		{
			this.kgRetrieve();
		};
		
		keygen.prototype.mvcEnableOR =
			function()
		{
			this.kgEnable();
		};

		keygen.prototype.mvcDisableOR =
			function()
		{
			this.kgDisable();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		keygen.prototype.kgDisableOR =
			function kgDisableOR(sValue)
		{
			//console.error(this.kWLogNotImpl());
		};

		keygen.prototype.kgEnableOR =
			function kgEnableOR(sValue)
		{
			//console.error(this.kWLogNotImpl());
		};

		keyGen.prototype.kgInitOR =
			function kgInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		keyGen.prototype.kgCreateAttrs = 
			function kgCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWAutoFocus(this.m_sAutoFocus);
			theAttrs.setKWChallenge(this.m_sChallenge);
			theAttrs.setKWDisabled(this.m_sDisabled);
			theAttrs.setKWForm(this.m_sKWForm);
			theAttrs.setKWKeyType(this.m_sKWKeyType);
			theAttrs.setKWName(this.m_sKWName);
			
			return theAttrs;
		};

		keyGen.prototype.kgCreateView = 
			function kgCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		keygen.prototype.kgDisable =
			function kgDisable()
		{
			//console.log(this.kWLogCalled());
			this.setKWDisabled(true);
			this.kgDisableOR();
		};

		keygen.prototype.kgEnable =
			function kgEnable()
		{
			//console.log(this.kWLogCalled());
			this.setKWDisabled(false);
			this.kgEnableOR();
		};

		keyGen.prototype.kgInit =
			function kgInit()
		{
			//console.log(this.kWLogCalled());
			this.kgInitOR();
		};

		keyGen.prototype.kgRetrieve = 
			function kgRetrieve()
		{
			//console.log(this.kWLogCalled());
			this.kgRetrieveAutoFocus();
			this.kgRetrieveChallenge();
			this.kgRetrieveDisabled();
			this.kgRetrieveForm();
			this.kgRetrieveKeyType();
			this.kgRetrieveName();
		};

		keyGen.prototype.kgRetrieveAutoFocus = 
			function kgRetrieveAutoFocus()
		{
			var value	= null;
			
			var bVal	= false;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWAutoFocus();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWAutoFocus = bVal;
				//console.debug(this.kWLogDisplay("m_bKWAutoFocus", this.m_bKWAutoFocus));
			}
		};
		
		keyGen.prototype.kgRetrieveChallenge = 
			function kgRetrieveChallenge()
		{
			var value	= null;
			
			var bVal	= false;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWChallenge();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWChallenge = bVal;
				//console.debug(this.kWLogDisplay("m_bKWChallenge", this.m_bKWChallenge));
			}
		};
		
		keyGen.prototype.kgRetrieveDisabled = 
			function kgRetrieveDisabled()
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
		
		keyGen.prototype.kgRetrieveForm = 
			function kgRetrieveForm()
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
			if (validate.isString(this.m_sKWForm))
			{
				//console.debug(this.kWLogDisplay("m_sKWForm", this.m_sKWForm));
			}
		};
		
		keyGen.prototype.kgRetrieveKeyType = 
			function kgRetrieveKeyType()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWKeyType))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWKeyType();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWKeyType = value.getKWValue();
			if (validate.isString(this.m_sKWKeyType))
			{
				//console.debug(this.kWLogDisplay("m_sKWKeyType", this.m_sKWKeyType));
			}
		};
		
		keyGen.prototype.kgRetrieveName = 
			function kgRetrieveName()
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
		
		keygen.prototype.kgSetDisabled =
			function kgSetDisabled()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWAttrs))
			{
				return
			}

			this.m_kWAttrs.setKWDisabled(this.m_bKWDisabled);
		};

		return keyGen;

	}
);
