/**********************************************************************
 *
 * bool/obj.js
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
		"../obj",
		"kWStat/validate"
	],
	function
	(
		base,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function bool() 
		{
			//console.log("bool::constructor");
		}

		bool.prototype = new base();
		bool.prototype.constructor = bool;
		bool.constructor = base.prototype.constructor;

		bool.prototype.check =
			function check() 
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		bool.prototype.init = 
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

		bool.prototype.baseGetOR = 
			function()
		{
			return this.boolGet(); 
		};
		
		bool.prototype.baseInitOR =
			function()
		{
			this.boolInit(); 
		};
		
		bool.prototype.baseSetOR =
			function(obj)
		{
			this.boolSet(obj); 
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		bool.prototype.boolInitOR = 
			function boolInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//
		
		bool.prototype.boolGet = 
			function boolGet()
		{
			var sVal = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sKWAttr))
			{
				console.error(this.kWLogInvalid("m_sKWAttr"));
			}
			
			sVal = this.baseGetValueByAttr(this.m_sKWAttr);
			
			if (sVal != this.m_sKWAttr)
			{
				return false;
			}
			else
			{
				return true;
			}
		};
		
		bool.prototype.boolInit = 
			function boolInit()
		{
			//console.log(this.kWLogCalled());
			this.boolInitOR();
		};

		bool.prototype.boolSet = 
			function boolSet(obj)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isBool(obj))
			{
				return;
			}
			
			if (!this.m_bKWInit)
			{
				return;
			}
			
			this.boolSetValue(obj);
		};
		
		bool.prototype.boolSetValue = 
			function boolSetValue(bVal)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isBool(bVal))
			{
				return;
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
		
		return bool;

	}
);
