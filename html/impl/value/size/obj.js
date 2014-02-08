/**********************************************************************
 *
 * size/obj.js
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
	
		function size() 
		{
			//console.log("size::constructor");
			
			this.m_sKWExt		= "size";
		}

		size.sKWKey = "kwSize";

		size.prototype = new simpleNum();
		size.prototype.constructor = size;
		size.constructor = simpleNum.prototype.constructor;

		size.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = size.sKWKey;

			simpleNum.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		size.prototype.init = 
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

		size.prototype.snInitOR =
			function()
		{
			this.sizeInit(); 
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
		
		size.prototype.sizeInit = 
			function sizeInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return size;

	}
);
