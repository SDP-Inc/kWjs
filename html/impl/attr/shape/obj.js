/**********************************************************************
 *
 * shape/obj.js
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
		"../../../base/attr/string/obj",
		"kWStat/validate"
	],
	function
	(
		string,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function shape() 
		{
			//console.log("shape::constructor");
			
			this.m_sKWExt	= "shape";

			this.m_sKWAttr	= "shape";
		}

		shape.prototype = new string();
		shape.prototype.constructor = shape;
		shape.constructor = string.prototype.constructor;

		shape.prototype.check = 
			function check() 
		{
			string.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		shape.prototype.init =
			function init() 
		{
			//console.log(this.kWLogCalled());
			string.prototype.init.call(this);
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

		shape.prototype.baseRetrieveOR = 
			function()
		{
			this.shapeRetrieve(); 
		};
		
		shape.prototype.stringInitOR =
			function()
		{
			this.shapeInit(); 
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
		
		shape.prototype.shapeInit = 
			function shapeInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		shape.prototype.shapeRetrieve = 
			function shapeRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWShape();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return shape;

	}
);
