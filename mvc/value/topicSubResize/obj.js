/**********************************************************************
 *
 * topicSubResize/obj.js
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
	
		function topicSubResize() 
		{
			//console.log("topicSubResize::constructor");
			
			this.m_sKWExt = "topicSubResize";
		}

		topicSubResize.sKWKey = "kwTopicSubResize";

		topicSubResize.prototype = new simpleText();
		topicSubResize.prototype.constructor = topicSubResize;
		topicSubResize.constructor = simpleText.prototype.constructor;

		topicSubResize.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey	= topicSubResize.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		topicSubResize.prototype.init = 
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

		topicSubResize.prototype.stInitOR =
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
		
		topicSubResize.prototype.tsrInit = 
			function tsrInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		return topicSubResize;

	}
);
