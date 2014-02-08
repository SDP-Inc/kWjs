/**********************************************************************
 *
 * border/obj.js
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
	
		function border() 
		{
			//console.log("border::constructor");
			
			this.m_sKWExt		= "border";
		}

		border.sKWKey = "kwBorder";

		border.prototype = new simpleNum();
		border.prototype.constructor = border;
		border.constructor = simpleNum.prototype.constructor;

		border.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = border.sKWKey;

			simpleNum.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		border.prototype.init =
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

		border.prototype.snInitOR =
			function()
		{
			this.borderInit(); 
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
		
		border.prototype.borderInit = 
			function borderInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return border;

	}
);
