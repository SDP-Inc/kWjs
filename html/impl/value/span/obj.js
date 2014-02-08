/**********************************************************************
 *
 * span/obj.js
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
		"kWUtils/value/simpleNum/obj"
	],
	function
	(
		simpleNum
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function span() 
		{
			//console.log("span::constructor");
			
			this.m_sKWExt		= "span";
		}

		span.sKWKey = "kwSpan";

		span.prototype = new simpleNum();
		span.prototype.constructor = span;
		span.constructor = simpleNum.prototype.constructor;

		span.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = span.sKWKey;

			simpleNum.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		span.prototype.init = 
			function init() 
		{
			//console.log(this.kWLogCalled());
			simpleNum.prototype.init.call(this);
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

		span.prototype.snInitOR =
			function()
		{
			this.csInit(); 
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
		
		span.prototype.csInit = 
			function csInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return span;

	}
);
