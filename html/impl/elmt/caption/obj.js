/**********************************************************************
 *
 * caption/obj.js
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
		"../../attrs/simple/obj",
		"../../view/simple/obj",
		"../../../base/elmt/obj",
		"kWStat/validate",
		"jquery"
	], 
	function
	(
		attrs,
		view,
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

		function caption()
		{
			//console.log("caption::constructor");
			this.m_sKWTag = "caption";
		}

		caption.prototype = new elmt();
		caption.prototype.constructor = caption;
		caption.constructor = elmt.prototype.constructor;

		caption.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		caption.prototype.init = 
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

		caption.prototype.captionInitOR = 
			function captionInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		caption.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.captionCreateAttrs(); 
		};
		
		caption.prototype.elmtCreateViewOR =
			function()
		{
			return this.captionCreateView();
		};
		
		caption.prototype.elmtInitOR = 
			function()
		{
			this.captionInit();
		};
		
		caption.prototype.elmtRetrieveOR = 
			function()
		{
			this.captionRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		caption.prototype.captionCreateAttrs = 
			function captionCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		caption.prototype.captionCreateView = 
			function captionCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		caption.prototype.captionInit = 
			function captionInit()
		{
			//console.log(this.kWLogCalled());
			this.captionInitOR();
		};
		
		caption.prototype.captionRetrieve = 
			function captionRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return caption;

	}
);
