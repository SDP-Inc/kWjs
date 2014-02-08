/**********************************************************************
 *
 * list/obj.js
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
		"kWUtils/value/simpleText/obj"
	],
	function
	(
		simpleText
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function list() 
		{
			//console.log("list::constructor");
			
			this.m_sKWExt		= "list";
		}

		list.sKWKey = "kwList";

		list.prototype = new simpleText();
		list.prototype.constructor = list;
		list.constructor = simpleText.prototype.constructor;

		list.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = list.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		list.prototype.init = 
			function init() 
		{
			//console.log(this.kWLogCalled());
			simpleText.prototype.init.call(this);
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

		list.prototype.stInitOR =
			function()
		{
			this.listInit(); 
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
		
		list.prototype.listInit = 
			function listInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return list;

	}
);
