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
	
		function media() 
		{
			//console.log("media::constructor");
			
			this.m_sKWExt	= "media";
			this.m_sKWAttr	= "media";
		}

		media.prototype = new string();
		media.prototype.constructor = media;
		media.constructor = string.prototype.constructor;

		media.prototype.check = function check() 
		{
			string.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		media.prototype.init = function init() 
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

		media.prototype.baseRetrieveOR = 
			function()
		{
			this.mediaRetrieve(); 
		};
		
		media.prototype.stringInitOR = 
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
		};
		
		media.prototype.mediaRetrieve = 
			function mediaRetrieve()
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
			
			this.m_kWValueView = this.m_kWView.getKWMedia();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		return media;

	}
);
