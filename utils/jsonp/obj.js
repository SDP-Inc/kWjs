/**********************************************************************
 *
 * jsonp/obj.js
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
		"kWStat/validate",
		"jquery"
	], 
	function
	(
		validate,
		$
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function jsonp()
		{
			//console.log("jsonp::constructor");

			this.m_bKWIsLoaded	= false;
			
			this.m_sKWFile		= "";
			
			this.m_kWContext	= null;
			this.m_kWData		= null;
			this.m_kWMethod		= null;
		};

		jsonp.prototype.check = 
			function check()
		{
			//console.log("jsonp::check");

			if (!validate.isNotNull(this.m_kWContext))
			{
			   throw new Error("jsonp::check() [m_kWContext] invalid");
			}

			if (!validate.isNotNull(this.m_kWMethod))
			{
			   throw new Error("jsonp::check() [m_kWMethod] invalid");
			}
			
			if (!validate.isString(this.m_sKWFile))
			{
			   throw new Error("jsonp::check() [m_sKWFile] invalid");
			}
		};

		jsonp.prototype.init =
			function init()
		{
			//console.log("jsonp::init");
			this.jsonpInit();
		};

//*******************************************************************//
//***																	   
//***		public accessors
//***
//*******************************************************************//

		jsonp.prototype.getKWData =
			function()
		{
			return this.m_kWData;
		};

		jsonp.prototype.isLoaded = 
			function()
		{
			return this.m_bKWIsLoaded;
		};
		
		jsonp.prototype.setKWContext =
			function(obj)
		{
			this.m_kWContext = obj;
		};

		jsonp.prototype.setKWMethod =
			function(obj)
		{
			this.m_kWMethod = obj;
		};

		jsonp.prototype.setKWFile =
			function(sVal)
		{
			this.m_sKWFile = sVal;
		};

//*******************************************************************//
//***																	   
//***		public methods
//***
//*******************************************************************//

		jsonp.prototype.callbackSuccess = 
			function(data)
		{
			//console.log("jsonp::callbackSuccess");
			
			this.m_kWData = data;

			this.jsonpCallback();
		};

//*******************************************************************//
//***																	   
//***		private methods
//***
//*******************************************************************//

		jsonp.prototype.jsonpCallback =
			function()
		{
			//console.log("jsonp::jsonpCallback() called");

			if (!this.m_kWData)
			{
			   throw new Error("jsonp::jsonpCallback() [m_kWData] invalid");
			}

			if (!this.m_kWContext)
			{
			   throw new Error("jsonp::jsonpCallback() [m_kWContext] invalid");
			}
			
			if (!this.m_kWMethod)
			{
			   throw new Error("jsonp::jsonpCallback() [m_kWMethod] invalid");
			}
			
			this.m_bKWIsLoaded = true;
			
			this.m_kWMethod.call(this.m_kWContext, this.m_kWData);
		};

		jsonp.prototype.jsonpInit =
			function()
		{
			//console.log("jsonp::jsonpInit");

			this.jsonpRetrieve();
		};

		jsonp.prototype.jsonpRetrieve =
			function()
		{
			var obj = null;
			var sFile = null;
			
			//console.log("jsonp::jsonpRetrieve");

			if (this.m_kWData)
			{
				throw new Error("jsonp::jsonpRetrieve() duplicated"); 
			}

			if (!validate.isString(this.m_sKWFile))
			{
				throw new Error("jsonp::jsonpRetrieve() [m_sKWFile] invalid");
			}

			if (!this.callbackSuccess)
			{
				throw new Error("jsonp::jsonpRetrieve() [callbackSuccess] invalid"); 
			}
			
			obj = this;
			sFile = this.m_sKWFile;

			$.getJSON(
				sFile,
				function(data)
				{
					obj.callbackSuccess(data);
				}
			);
		};
		
		return jsonp;
			
	}
);
