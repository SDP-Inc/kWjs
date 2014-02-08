/**********************************************************************
 *
 * maxLength/obj.js
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
	
		function maxLength() 
		{
			//console.log("maxLength::constructor");
			
			this.m_sKWExt		= "maxLength";
		}

		maxLength.sKWKey = "kwMaxLength";

		maxLength.prototype = new simpleNum();
		maxLength.prototype.constructor = maxLength;
		maxLength.constructor = simpleNum.prototype.constructor;

		maxLength.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = maxLength.sKWKey;

			simpleNum.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		maxLength.prototype.init = 
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

		maxLength.prototype.snInitOR = 
			function()
		{
			this.mlInit(); 
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
		
		maxLength.prototype.mlInit = 
			function mlInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return maxLength;

	}
);
