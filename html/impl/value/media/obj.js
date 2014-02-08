/**********************************************************************
 *
 * media/obj.js
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
	
		function media() 
		{
			//console.log("media::constructor");
			
			this.m_sKWExt		= "media";
		}

		media.sKWKey = "kwMedia";

		media.prototype = new simpleText();
		media.prototype.constructor = media;
		media.constructor = simpleText.prototype.constructor;

		media.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey = media.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		media.prototype.init = 
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

		media.prototype.stInitOR = 
			function()
		{
			this.mediaInit(); 
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
		
		media.prototype.mediaInit = 
			function mediaInit()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_kWValue))
			{
				//console.debug(this.kWLogDisplay("m_kWValue", this.m_kWValue));
			}
		};
		
		return media;

	}
);
