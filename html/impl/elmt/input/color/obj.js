/**********************************************************************
 *
 * color/obj.js
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
		"../../../attrs/input/simple/obj",
		"../../../view/input/simple/obj",
		"../obj",
		"jquery",
		"kWStat/validate"
	], 
	function
	(
		attrs,
		view,
		input,
		$,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function color()
		{
			//console.log("color::constructor");
			this.m_sKWType = "color";
		}

		color.prototype = new input();
		color.prototype.constructor = color;
		color.constructor = input.prototype.constructor;

		color.prototype.check = 
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		color.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			input.prototype.init.call(this);
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

		color.prototype.colorInitOR = 
			function colorInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		color.prototype.inputCreateAttrsOR = 
			function()
		{
			return this.colorCreateAttrs(); 
		};
		
		color.prototype.elmtCreateViewOR = 
			function()
		{
			return this.colorCreateView();
		};
		
		color.prototype.inputInitOR = 
			function()
		{
			this.colorInit();
		};
		
		color.prototype.inputRetrieveOR = 
			function()
		{
			this.colorRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		color.prototype.colorCreateAttrs = 
			function colorCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
	
			theAttrs = new attrs();
			
			return theAttrs;
		};

		color.prototype.colorCreateView = 
			function colorCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		color.prototype.colorInit = 
			function colorInit()
		{
			//console.log(this.kWLogCalled());
			this.colorInitOR();
		};

		color.prototype.colorRetrieve = 
			function colorRetrieve()
		{
			//console.log(this.kWLogCalled());
		};

		return color;

	}
);
