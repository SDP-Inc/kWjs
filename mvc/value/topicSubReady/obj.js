/**********************************************************************
 *
 * topicSubReady/obj.js
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
	
		function topicSubReady() 
		{
			//console.log("topicSubReady::constructor");
			
			this.m_sKWExt = "topicSubReady";
		}

		topicSubReady.sKWKey = "kwTopicSubReady";

		topicSubReady.prototype = new simpleText();
		topicSubReady.prototype.constructor = topicSubReady;
		topicSubReady.constructor = simpleText.prototype.constructor;

		topicSubReady.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey	= topicSubReady.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		topicSubReady.prototype.init = 
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

		topicSubReady.prototype.stInitOR =
			function()
		{
			this.tsrInit(); 
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
		
		topicSubReady.prototype.tsrInit = 
			function tsrInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return topicSubReady;

	}
);
