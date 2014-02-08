/**********************************************************************
 *
 * kind/obj.js
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
	
		function kind() 
		{
			//console.log("kind::constructor");
			
			this.m_sKWExt		= "kind";
		}

		kind.sKWKey = "kwKind";

		kind.prototype = new simpleText();
		kind.prototype.constructor = kind;
		kind.constructor = simpleText.prototype.constructor;

		kind.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = kind.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		kind.prototype.init = 
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

		kind.prototype.stInitOR = 
			function()
		{
			this.kindInit(); 
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
		
		kind.prototype.kindInit = 
			function kindInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return kind;

	}
);
