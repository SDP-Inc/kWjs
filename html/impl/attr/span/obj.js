/**********************************************************************
 *
 * span/obj.js
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
	
		function span() 
		{
			//console.log("span::constructor");
			
			this.m_sKWExt	= "span";
			this.m_sKWAttr	= "span";
		}

		span.prototype = new numeric();
		span.prototype.constructor = span;
		span.constructor = numeric.prototype.constructor;

		span.prototype.check = 
			function check() 
		{
			numeric.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		span.prototype.init = 
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

		span.prototype.baseRetrieveOR = 
			function()
		{
			this.spanRetrieve(); 
		};
		
		span.prototype.numericInitOR = 
			function()
		{
			this.spanInit(); 
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
		
		span.prototype.spanInit = 
			function spanInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		span.prototype.spanRetrieve = 
			function spanRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWSpan();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return span;

	}
);
