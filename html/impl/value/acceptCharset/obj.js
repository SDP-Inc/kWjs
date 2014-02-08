/**********************************************************************
 *
 * acceptCharset/obj.js
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
	
		function acceptCharset() 
		{
			//console.log("acceptCharset::constructor");
			
			this.m_sKWExt		= "acceptCharset";
		}

		acceptCharset.sKWKey = "kwAcceptCharset";

		acceptCharset.prototype = new simpleText();
		acceptCharset.prototype.constructor = acceptCharset;
		acceptCharset.constructor = simpleText.prototype.constructor;

		acceptCharset.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = acceptCharset.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		acceptCharset.prototype.init = 
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

		acceptCharset.prototype.stInitOR = 
			function()
		{
			this.acceptCharsetInit(); 
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
		
		acceptCharset.prototype.acceptCharsetInit = 
			function acceptCharsetInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return acceptCharset;

	}
);
