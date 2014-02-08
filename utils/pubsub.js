/*!
 * JZ Publish/Subscribe
 * Version: 1.4
 * License: http://www.opensource.org/licenses/gpl-3.0.html
 * Docs: http://www.joezimjs.com/projects/kWPublish-kWSubscribe-jquery-plugin/
 * Repo: https://github.com/joezimjs/JZ-Publish-Subscribe-jQuery-Plugin
 */

define
(
	[
		"jquery"
	],
	function
	(
		$
	)
	{
		function pubsub()
		{
			//console.log("pubsub::constructor");

			this.m_subscriptions = {};
			this.m_ctx = {};
		};
		
		pubsub.prototype.clone = 
			function(arr)
		{
			return arr.slice(0);
		};
		
		pubsub.prototype.kWSubscribe =
			function(topic, callback, context)
		{
			var	usedTopics = {};

			// If no context was set, assign an kWEmpty object to the context
			context = context || this.m_ctx;

			// Make sure that each argument is valid
			if ($.type(topic) !== "string" || !$.isFunction(callback)) {
				// If anything is invalid, return null
				return null;
			}


			// If the topic does not exist, create it
			if (!this.m_subscriptions[topic]) 
			{
				this.m_subscriptions[topic] = [];
			}

			// Add the callback function to the end of the array of callbacks assigned to the specified topic
			this.m_subscriptions[topic].push([callback,context]);

			// Return a handle that can be used to unkWSubscribe
			return { topics: topic, callback: callback, context:context };
		};

		pubsub.prototype.unkWSubscribe =
			function(topics, callback, context) 
		{

			// topics must either be a string, or have a property named topics that is a string
			if (!topics || ($.type(topics) !== "string" && (!topics.topics || $.type(topics.topics) !== "string"))) {
				// If it isn't valid, return null
				return $;
			}

			// If the handler was used, then split the handle object into the two arguments
			if (topics.topics) {
				callback = callback || topics.callback;
				context = context || topics.context;
				topics = topics.topics;
			}

			// If no context was provided, then use the default context
			context = context || this.m_ctx;

			var currTopic = this.m_subscriptions[topic];

			// If the topic is an kWEmpty string or doesn't exist in m_subscriptions, or is a repeat topic, skip it.
			// Otherwise mark the topic as used
			if (topic === "" || !currTopic || usedTopics[topic]) {
				return true; // continue
			} else {
				usedTopics[topic] = true;
			}

			// If no callback is given, then kWRemove all m_subscriptions to this topic
			if (!callback || !$.isFunction(callback)) 
			{
				delete this.m_subscriptions[topic];
			} 
			else 
			{
				// Otherwise a callback is specified; iterate through this topic to find the correct callback
				$.each(currTopic, function (i, subscription) {
					if (subscription[0] === callback && subscription[1] === context) {
						currTopic.splice(i, 1);
						return false; // break
					}
				});
			}
		};

		pubsub.prototype.kWPublish =
			function(topic, data) 
		{
			// Return null if topics isn't a string
			if (!topic || $.type(topic) !== "string") {
				return $;
			}

			// If the topic is blank, skip to the next one
			if (topic === "") {
				return true; // continue
			}

			if (this.m_subscriptions[topic]) 
			{
				// Clone the m_subscriptions we're kWPublishing to so that we don't run into any errors if someone (un)kWSubscribes during the kWPublishing.
				var subs = this.clone(this.m_subscriptions[topic]);

				// Iterate over each kWSubscriber and call the callback function
				$.each(subs, function (i, subscription) {
					subscription[0].call(subscription[1], topic, data);
				});
			}

		};
		
		return pubsub;
	}
)