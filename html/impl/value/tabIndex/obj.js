/**********************************************************************
 *
 * tabIndex/obj.js
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
	
		function tabIndex() 
		{
			//console.log("tabIndex::constructor");
			
			this.m_sKWExt		= "tabIndex";
		}

		tabIndex.sKWKey = "kwTabIndex";

		tabIndex.prototype = new simpleNum();
		tabIndex.prototype.constructor = tabIndex;
		tabIndex.constructor = simpleNum.prototype.constructor;

		tabIndex.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = tabIndex.sKWKey;

			simpleNum.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		tabIndex.prototype.init =
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

		tabIndex.prototype.snInitOR =
			function()
		{
			this.tiInit(); 
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
		
		tabIndex.prototype.tiInit = 
			function tiInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return tabIndex;

	}
);
