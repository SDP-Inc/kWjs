/**********************************************************************
 *
 * article/obj.js
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
		"../../attrs/simple/obj",
		"../../view/simple/obj",
		"../../../base/elmt/obj",
		"kWStat/validate",
		"jquery"
	], 
	function
	(
		attrs,
		view,
		elmt,
		validate,
		$
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function article()
		{
			//console.log("article::constructor");
			this.m_sKWTag = "article";
		}

		article.prototype = new elmt();
		article.prototype.constructor = article;
		article.constructor = elmt.prototype.constructor;

		article.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		article.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			elmt.prototype.init.call(this);
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
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		article.prototype.articleInitOR = 
			function articleInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		article.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.articleCreateAttrs(); 
		};
		
		article.prototype.elmtCreateViewOR = 
			function()
		{
			return this.articleCreateView();
		};
		
		article.prototype.elmtInitOR = 
			function()
		{
			this.articleInit();
		};
		
		article.prototype.elmtRetrieveOR = 
			function()
		{
			this.articleRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		article.prototype.articleCreateAttrs = 
			function articleCreateAttrs()
		{
			//console.log(this.kWLogCalled());
			return new attrs();
		};

		article.prototype.articleCreateView = 
			function articleCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		article.prototype.articleInit = 
			function articleInit()
		{
			//console.log(this.kWLogCalled());
			this.articleInitOR();
		};
		
		article.prototype.articleRetrieve = 
			function articleRetrieve()
		{
			//console.log(this.kWLogCalled());
		};
		
		return article;

	}
);
