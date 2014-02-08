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
		"../../../base/attr/numeric/obj",
		"kWStat/validate"
	],
	function
	(
		numeric,
		validate
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
			
			this.m_sKWExt	= "border";
			this.m_sKWAttr	= "border";
		}

		border.prototype = new numeric();
		border.prototype.constructor = border;
		border.constructor = numeric.prototype.constructor;

		border.prototype.check = 
			function check() 
		{
			numeric.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		border.prototype.init = 
			function init() 
		{
			//console.log(this.kWLogCalled());
			numeric.prototype.init.call(this);
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

		border.prototype.baseRetrieveOR =
			function()
		{
			this.borderRetrieve(); 
		};
		
		border.prototype.numericInitOR = 
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
		
		border.prototype.borderRetrieve = 
			function borderRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			this.m_kWValueView = this.m_kWView.getKWBorder();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return border;

	}
);
