/**********************************************************************
 *
 * stat/obj.js
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
		"../field/obj",
		"../hasModel/obj",
		"../id/obj",
		"../topicPub/obj",
		"../topicPubReady/obj",
		"../topicPubResize/obj",
		"../topicSub/obj",
		"../topicSubReady/obj",
		"../topicSubResize/obj",
		"kWStat/validate"
	],
	function
	(
		field,
		hasModel,
		id,
		topicPub,
		topicPubReady,
		topicPubResize,
		topicSub,
		topicSubReady,
		topicSubResize,
	    validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function values()
		{
		}

		values.create =
			function(sVal)
			{
				var value = null;

				//console.log("create called.");

				if (!validate.isString(sVal))
				{
					console.error("values::create() - sVal invalid.");
					return value;
				}

				switch(sVal)
				{
					case "kwField" :
					{
						value = new field();
						break;
					}

					case "kwHasModel" :
					{
						value = new hasModel();
						break;
					}

					case "kwID" :
					{
						value = new id();
						break;
					}

					case "kwTopicPub" :
					{
						value = new topicPub();
						break;
					}

					case "kwTopicPubReady" :
					{
						value = new topicPubReady();
						break;
					}

					case "kwTopicPubResize" :
					{
						value = new topicPubResize();
						break;
					}

					case "kwTopicSub" :
					{
						value = new topicSub;
						break;
					}

					case "kwTopicSubReady" :
					{
						value = new topicSubReady;
						break;
					}

					case "kwTopicSubResize" :
					{
						value = new topicSubResize;
						break;
					}

				}

				return value;
			};

		return values;

	}
);
