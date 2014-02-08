/**********************************************************************
 *
 * height/obj.js
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
	
		function height() 
		{
			//console.log("height::constructor");
			
			this.m_sKWExt		= "height";
		}

		height.sKWKey = "kwHeight";

		height.prototype = new simpleNum();
		height.prototype.constructor = height;
		height.constructor = simpleNum.prototype.constructor;

		height.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = height.sKWKey;

			simpleNum.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		height.prototype.init = 
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

		height.prototype.snInitOR = 
			function()
		{
			this.heightInit(); 
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
		
		height.prototype.heightInit = 
			function heightInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return height;

	}
);
