/**********************************************************************
 *
 * listener.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"stat/globals",
		"kWMVC/obj",
		"kWStat/validate"
	],
	function
	(
		globals,
		mvc,
		validate
	)
	{

	//*******************************************************************//
	//***																		
	//***		public initializors
	//***
	//*******************************************************************//

		function listener()
		{
		}

		listener.prototype = new mvc();
		listener.prototype.constructor = listener;
		listener.constructor = mvc.prototype.constructor;
		
		listener.prototype.check = function check()
		{
			mvc.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		listener.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			mvc.prototype.init.call(this);
		};  

	//*******************************************************************//
	//***																		
	//***		public accessors
	//***
	//*******************************************************************//

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
		
		listener.prototype.mvcHandleCBDefaultOR = function(sTopic, data)
		{
			this.listenerHandleCBDefault(data);
		};

		listener.prototype.mvcInitOR = function()
		{
			this.listenerInit();
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

		listener.prototype.listenerHandleCBDefault = 
			function listenerHandleCBDefault()
		{
 			//console.log(this.kWLogCalled());
            this.kWPublishDefault();
		};  
		
		listener.prototype.listenerInit = 
			function listenerInit()
		{
			//console.log(this.kWLogCalled());
		};  
		
		return listener;
		
	}
);	