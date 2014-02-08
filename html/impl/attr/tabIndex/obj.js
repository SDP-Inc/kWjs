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
	
		function tabIndex() 
		{
			//console.log("tabIndex::constructor");
			
			this.m_sKWExt	= "tabIndex";
			this.m_sKWAttr	= "tabIndex";
		}

		tabIndex.prototype = new numeric();
		tabIndex.prototype.constructor = tabIndex;
		tabIndex.constructor = numeric.prototype.constructor;

		tabIndex.prototype.check = 
			function check() 
		{
			numeric.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		tabIndex.prototype.init = 
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

		tabIndex.prototype.baseRetrieveOR = 
			function()
		{
			this.tiRetrieve(); 
		};
		
		tabIndex.prototype.numericInitOR = 
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
		
		tabIndex.prototype.tiRetrieve = 
			function tiRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWTabIndex();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return tabIndex;

	}
);
