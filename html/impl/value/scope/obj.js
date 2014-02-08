/**********************************************************************
 *
 * scope/obj.js
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
		"kWUtils/value/simpleText/obj"
	],
	function
	(
		simpleText
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function scope() 
		{
			//console.log("scope::constructor");
			
			this.m_sKWExt		= "scope";
		}

		scope.sKWKey = "kwScope";

		scope.prototype = new simpleText();
		scope.prototype.constructor = scope;
		scope.constructor = simpleText.prototype.constructor;

		scope.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = scope.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		scope.prototype.init = 
			function init() 
		{
			//console.log(this.kWLogCalled());
			simpleText.prototype.init.call(this);
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

		scope.prototype.stInitOR = 
			function()
		{
			this.scopeInit(); 
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
		
		scope.prototype.scopeInit = 
			function scopeInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return scope;

	}
);
