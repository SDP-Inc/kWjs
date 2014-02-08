/**********************************************************************
 *
 * resize/obj.js
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
		"kWMVC/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
		mvc,
		validate,
		$
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function resize()
		{
			//console.log("resize::constructor")
			this.m_sKWExt = "resize";
		}

		resize.prototype = new mvc();
		resize.prototype.constructor = resize;
		resize.constructor = mvc.prototype.constructor;
		
		resize.prototype.check = function check()
		{
			mvc.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		resize.prototype.init = function init()
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
	//***		public callbacks
	//***
	//*******************************************************************//
	
	//*******************************************************************//
	//***																	   
	//***		public methods
	//***
	//*******************************************************************//

		resize.prototype.resize = function()
		{
			this.resizeFired();
		};

	//*******************************************************************//
	//***																		
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
		
		resize.prototype.mvcHandleCBDefaultOR  = function()
		{
			this.resizeHandleCBDefault();
		};

		resize.prototype.mvcInitOR = function()
		{
			this.resizeInit();
		};

	//*******************************************************************//
	//***																		
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		resize.prototype.resizeFiredOR = 
			function resizeFiredOR()
		{
			//console.error(this.kWLogNotImpl());
		};

		resize.prototype.resizeInitOR = 
			function resizeInitOR()
		{
			//console.error(this.kWLogNotImpl());
		};

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		resize.prototype.resizeFired = 
			function resizeFired()
		{
			//console.log(this.kWLogCalled())
			this.resizeFiredOR();
		};
		
		resize.prototype.resizeHandleCBDefault = 
			function resizeHandleCBDefault()
		{
			//console.log(this.kWLogCalled())
			this.resizeFired();
		};
		
		resize.prototype.resizeInit = 
			function resizeInit()
		{
			//console.log(this.kWLogCalled())
			this.resizeInitOR();
		};
		
		return resize;
		
	}
)