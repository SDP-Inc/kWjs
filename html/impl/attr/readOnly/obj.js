/**********************************************************************
 *
 * readOnly/obj.js
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
		"../../../base/attr/bool/obj",
		"kWStat/validate"
	],
	function
	(
		bool,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function readOnly() 
		{
			//console.log("readOnly::constructor");
			
			this.m_sKWExt	= "readOnly";
			
			this.m_sKWAttr	= "readOnly";
		}

		readOnly.prototype = new bool();
		readOnly.prototype.constructor = readOnly;
		readOnly.constructor = bool.prototype.constructor;

		readOnly.prototype.check = 
			function check() 
		{
			bool.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		readOnly.prototype.init = 
			function init() 
		{
			//console.log(this.kWLogCalled());
			bool.prototype.init.call(this);
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

		readOnly.prototype.baseRetrieveOR = 
			function()
		{
			this.roRetrieve(); 
		};
		
		readOnly.prototype.boolInitOR = 
			function()
		{
			this.roInit(); 
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
		
		readOnly.prototype.roInit = 
			function roInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		readOnly.prototype.roRetrieve = 
			function roRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			this.m_kWValueView = this.m_kWView.getKWReadOnly();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		readOnly.prototype.roSetValue = 
			function readOnlySetValue(bVal)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isBool(bVal))
			{
				return;
			}
			
			if (!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}
			
			if (!validate.isString(this.m_sKWAttr))
			{
				console.error(this.kWLogInvalid("m_sKWAttr"));
			}
			
			if (bVal)
			{
				this.baseSetValueByAttr(this.m_sKWAttr, this.m_sKWAttr);
			}
			else
			{
				this.baseRemove();
			}
		};
		
		return readOnly;

	}
);
