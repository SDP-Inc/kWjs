/**********************************************************************
 *
 * figure/obj.js
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

		function figure()
		{
			//console.log("figure::constructor");
			this.m_sKWTag = "figure";
		}

		figure.prototype = new elmt();
		figure.prototype.constructor = figure;
		figure.constructor = elmt.prototype.constructor;

		figure.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		figure.prototype.init = 
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

		figure.prototype.figureInitOR = 
			function figureInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		figure.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.figureCreateAttrs(); 
		};
		
		figure.prototype.elmtCreateViewOR = 
			function()
		{
			return this.figureCreateView();
		};
		
		figure.prototype.elmtInitOR = 
			function()
		{
			this.figureInit();
		};
		
		figure.prototype.elmtRetrieveOR = 
			function()
		{
			this.figureRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		figure.prototype.figureCreateAttrs = 
			function figureCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		figure.prototype.figureCreateView = 
			function figureCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		figure.prototype.figureInit = 
			function figureInit()
		{
			//console.log(this.kWLogCalled());
			this.figureInitOR();
		};
		
		figure.prototype.figureRetrieve = 
			function figureRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return figure;

	}
);
