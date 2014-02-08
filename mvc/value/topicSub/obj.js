/**********************************************************************
 *
 * topicSub/obj.js
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
	
		function topicSub() 
		{
			//console.log("topicSub::constructor");
			
			this.m_sKWExt = "topicSub";
		}

		topicSub.sKWKey = "kwTopicSub";

		topicSub.prototype = new simpleText();
		topicSub.prototype.constructor = topicSub;
		topicSub.constructor = simpleText.prototype.constructor;

		topicSub.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey	= topicSub.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		topicSub.prototype.init = 
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

		topicSub.prototype.stInitOR =
			function()
		{
			this.tsInit(); 
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
		
		topicSub.prototype.tsInit = 
			function tsInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return topicSub;

	}
);
