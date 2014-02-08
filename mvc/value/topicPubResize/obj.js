/**********************************************************************
 *
 * topicPubResize/obj.js
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
	
		function topicPubResize() 
		{
			//console.log("topicPubResize::constructor");
			
			this.m_sKWExt = "topicPubResize";
		}

		topicPubResize.sKWKey = "kwTopicPubResize";

		topicPubResize.prototype = new simpleText();
		topicPubResize.prototype.constructor = topicPubResize;
		topicPubResize.constructor = simpleText.prototype.constructor;

		topicPubResize.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey	= topicPubResize.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		topicPubResize.prototype.init =
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

		topicPubResize.prototype.stInitOR =
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
		
		topicPubResize.prototype.tprInit = 
			function tprInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return topicPubResize;

	}
);
