/**********************************************************************
 *
 * topicPub/obj.js
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
	
		function topicPub() 
		{
			//console.log("topicPub::constructor");
			
			this.m_sKWExt = "topicPub";
		}

		topicPub.sKWKey = "kwTopicPub";

		topicPub.prototype = new simpleText();
		topicPub.prototype.constructor = topicPub;
		topicPub.constructor = simpleText.prototype.constructor;

		topicPub.prototype.check =
			function check() 
		{
			this.m_sKWSimpleKey	= topicPub.sKWKey;

			simpleText.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		topicPub.prototype.init =
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

		topicPub.prototype.stInitOR =
			function()
		{
			this.tpInit(); 
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		topicPub.prototype.baseDeleteOR =
			function baseDeleteOR()
			{
				this.tpDelete();
			};

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		topicPub.prototype.tpDelete =
			function tpDelete()
			{
				//console.log(this.kWLogCalled());
			};

		topicPub.prototype.tpInit =
			function tpInit()
			{
				//console.log(this.kWLogCalled());
			};

		return topicPub;

	}
);
