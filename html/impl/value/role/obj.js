/**********************************************************************
 *
 * role/obj.js
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
	
		function role() 
		{
			//console.log("role::constructor");
			
			this.m_sKWExt		= "role";
		}

		role.sKWKey = "kwRole";

		role.prototype = new simpleText();
		role.prototype.constructor = role;
		role.constructor = simpleText.prototype.constructor;

		role.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = role.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		role.prototype.init =
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

		role.prototype.stInitOR =
			function()
		{
			this.roleInit(); 
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		role.prototype.baseDeleteOR =
			function baseDeleteOR()
			{
				this.roleDelete();
			};

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		role.prototype.roleDelete =
			function roleDelete()
			{
				//console.log(this.kWLogCalled());
			};

		role.prototype.roleInit =
			function roleInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return role;

	}
);
