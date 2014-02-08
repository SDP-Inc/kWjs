/**********************************************************************
 *
 * textRaw/obj.js
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
		text,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function textRaw() 
		{
			//console.log("textRaw::constructor");
			
			this.m_sKWExt		= "textRaw";
		}

		textRaw.sKWKey = "kwText";

		textRaw.prototype = new text();
		textRaw.prototype.constructor = textRaw;
		textRaw.constructor = text.prototype.constructor;

		textRaw.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = textRaw.sKWKey;

			text.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		textRaw.prototype.init =
			function init() 
		{
			//console.log(this.kWLogCalled());
			text.prototype.init.call(this);
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

		textRaw.prototype.stInitOR =
			function()
		{
			this.trInit(); 
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
		
		textRaw.prototype.trInit = 
			function trInit()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_kWValue))
			{
				//console.debug(this.kWLogDisplay("m_kWValue", this.m_kWValue));
			}
		};
		
		return textRaw;

	}
);
