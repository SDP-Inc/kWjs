/**********************************************************************
 *
 * topicPubReady/obj.js
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
	
		function topicPubReady() 
		{
			//console.log("topicPubReady::constructor");
			
			this.m_sKWExt = "topicPubReady";
		}

		topicPubReady.sKWKey = "kwTopicPubReady";

		topicPubReady.prototype = new simpleText();
		topicPubReady.prototype.constructor = topicPubReady;
		topicPubReady.constructor = simpleText.prototype.constructor;

		topicPubReady.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey	= topicPubReady.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		topicPubReady.prototype.init =
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

		topicPubReady.prototype.stInitOR =
			function()
		{
			this.tprInit(); 
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
		
		topicPubReady.prototype.tprInit = 
			function tprInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return topicPubReady;

	}
);
