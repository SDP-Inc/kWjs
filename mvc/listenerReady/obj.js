/**********************************************************************
 *
 * listenerReady.js
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

		function listenerReady()
		{
		}

		listenerReady.prototype = new mvc();
		listenerReady.prototype.constructor = listenerReady;
		listenerReady.constructor = mvc.prototype.constructor;
		
		listenerReady.prototype.check = function check()
		{
			mvc.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		listenerReady.prototype.init = function init()
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
		
		listenerReady.prototype.mvcHandleCBReadyOR =
            function(sTopic, data)
		{
			this.lrHandleCBReady(sTopic, data);
		};

		listenerReady.prototype.mvcInitOR =
            function()
		{
			this.lrInit();
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

		listenerReady.prototype.lrHandleCBReady = 
			function lrHandleCBReady()
		{
 			//console.log(this.kWLogCalled());
            this.kWPublishReady();
		};  
		
		listenerReady.prototype.lrInit = 
			function lrInit()
		{
			//console.log(this.kWLogCalled());
		};  
		
		return listenerReady;
		
	}
);	