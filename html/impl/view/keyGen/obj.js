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
		"../../value/autoFocus/obj",
		"../../value/challenge/obj",
		"../../value/disabled/obj",
		"../../value/form/obj",
		"../../value/keyType/obj",
		"../../value/name/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		autoFocus,
		challenge,
		disabled,
		form,
		keyType,
		name,
		base,
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
			
			this.m_kWAutoFocus	= null;
			this.m_kWChallenge	= null;
			this.m_kWDisabled	= null;
			this.m_kWForm		= null;
			this.m_kWKeyType	= null;
			this.m_kWName		= null;
		}

		keyGen.prototype = new base();
		keyGen.prototype.constructor = keyGen;
		keyGen.constructor = base.prototype.constructor;

		keyGen.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		keyGen.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			base.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		keyGen.prototype.getKWAutoFocus =
			function()
		{
			return this.m_kWAutoFocus;
		};

		keyGen.prototype.getKWChallenge =
			function()
		{
			return this.m_kWChallenge;
		};

		keyGen.prototype.getKWDisabled =
			function()
		{
			return this.m_kWDisabled;
		};

		keyGen.prototype.getKWForm =
			function()
		{
			return this.m_kWForm;
		};

		keyGen.prototype.getKWKeyType =
			function()
		{
			return this.m_kWKeyType;
		};

		keyGen.prototype.getKWName =
			function()
		{
			return this.m_kWName;
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
	
		keyGen.prototype.baseCreateOR =
			function()
		{
			this.keyGenCreate();
		};

		keyGen.prototype.baseDeleteOR =
			function()
		{
			this.keyGenDelete();
		};

		keyGen.prototype.baseInitOR =
			function()
		{
			this.keyGenInit();
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

		keyGen.prototype.keyGenCreate = 
			function keyGenCreate() 
		{
			//console.log(this.kWLogCalled());

			this.keyGenCreateAutoFocus();
			this.keyGenCreateChallenge();
			this.keyGenCreateDisabled();
			this.keyGenCreateForm();
			this.keyGenCreateKeyType();
			this.keyGenCreateName();
		};
		
		keyGen.prototype.keyGenCreateAutoFocus = 
			function keyGenCreateAutoFocus() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWAutoFocus))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWAutoFocus = new autoFocus();
			
			this.m_kWAutoFocus.setKWView(this);
			this.m_kWAutoFocus.setKWIDParent(this.m_sKWID);
			
			this.m_kWAutoFocus.check();
			this.m_kWAutoFocus.init();

			this.kWAddValue(this.m_kWAutoFocus);
		};
		
		keyGen.prototype.keyGenCreateChallenge = 
			function keyGenCreateChallenge() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWChallenge))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWChallenge = new challenge();
			
			this.m_kWChallenge.setKWView(this);
			this.m_kWChallenge.setKWIDParent(this.m_sKWID);
			
			this.m_kWChallenge.check();
			this.m_kWChallenge.init();

			this.kWAddValue(this.m_kWChallenge);
		};
		
		keyGen.prototype.keyGenCreateDisabled = 
			function keyGenCreateDisabled() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWDisabled))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWDisabled = new disabled();
			
			this.m_kWDisabled.setKWView(this);
			this.m_kWDisabled.setKWIDParent(this.m_sKWID);
			
			this.m_kWDisabled.check();
			this.m_kWDisabled.init();

			this.kWAddValue(this.m_kWDisabled);
		};
		
		keyGen.prototype.keyGenCreateForm = 
			function keyGenCreateForm() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWForm))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWForm = new form();
			
			this.m_kWForm.setKWView(this);
			this.m_kWForm.setKWIDParent(this.m_sKWID);
			
			this.m_kWForm.check();
			this.m_kWForm.init();

			this.kWAddValue(this.m_kWForm);
		};
		
		keyGen.prototype.keyGenCreateKeyType = 
			function keyGenCreateKeyType() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWKeyType))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWKeyType = new keyType();
			
			this.m_kWKeyType.setKWView(this);
			this.m_kWKeyType.setKWIDParent(this.m_sKWID);
			
			this.m_kWKeyType.check();
			this.m_kWKeyType.init();

			this.kWAddValue(this.m_kWKeyType);
		};
		
		keyGen.prototype.keyGenCreateName = 
			function keyGenCreateName() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWName))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWName = new name();
			
			this.m_kWName.setKWView(this);
			this.m_kWName.setKWIDParent(this.m_sKWID);
			
			this.m_kWName.check();
			this.m_kWName.init();

			this.kWAddValue(this.m_kWName);
		};

		keyGen.prototype.keyGenDelete =
			function keyGenDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWAutoFocus	= null;
			this.m_kWChallenge	= null;
			this.m_kWDisabled	= null;
			this.m_kWForm		= null;
			this.m_kWKeyType	= null;
			this.m_kWName		= null;
		};

		keyGen.prototype.keyGenInit =
			function keyGenInit()
		{
			//console.log(this.kWLogCalled());
		};

		return keyGen;

	}
);
