/**********************************************************************
 *
 * listenerResize.js
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

		function listenerResize()
		{
		}

		listenerResize.prototype = new mvc();
		listenerResize.prototype.constructor = listenerResize;
		listenerResize.constructor = mvc.prototype.constructor;
		
		listenerResize.prototype.check = function check()
		{
			mvc.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		listenerResize.prototype.init = function init()
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
		
		listenerResize.prototype.mvcHandleCBResizeOR = 
            function(sTopic, data)
		{
			this.lrHandleCBResize(data);
		};

		listenerResize.prototype.mvcInitOR = function()
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

		listenerResize.prototype.lrHandleCBResize = 
			function lrHandleCBResize()
		{
 			//console.log(this.kWLogCalled());
            this.kWPublishResize();
		};  
		
		listenerResize.prototype.lrInit = 
			function lrInit()
		{
			//console.log(this.kWLogCalled());
		};  
		
		return listenerResize;
		
	}
);	