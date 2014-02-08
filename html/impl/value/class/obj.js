/**********************************************************************
 *
 * class_/obj.js
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
		"kWUtils/value/simpleText/obj",
		"kWStat/validate"
	],
	function
	(
		simpleText,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function class_() 
		{
			//console.log("class_::constructor");
			
			this.m_sKWExt		= "class_";
		}

		class_.sKWKey = "kwClass";

		class_.prototype = new simpleText();
		class_.prototype.constructor = class_;
		class_.constructor = simpleText.prototype.constructor;

		class_.prototype.check = 
			function check() 
		{
			this.m_sKWSimpleKey = class_.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		class_.prototype.init = 
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

		class_.prototype.stInitOR = 
			function()
		{
			this.classInit(); 
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		class_.prototype.baseDeleteOR =
			function OR()
			{
				this.classDelete();
			};

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		class_.prototype.classDelete =
			function classDelete()
			{
				//console.log(this.kWLogCalled());
			};

		class_.prototype.classInit =
			function classInit()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_baseValue))
			{
				//console.log(this.kWLogDisplay("m_baseValue", this.m_baseValue));
			}
		};
		
		return class_;

	}
);
