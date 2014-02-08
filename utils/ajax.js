/**********************************************************************
 *
 * ajax.js
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
		"stat/validate",
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

		function ajax()
		{
			//console.log("ajax::constructor");

			this.m_sKWType		= "GET";
			
			this.m_bKWIsCached	= false;
			
			this.m_kWCaller		= null;
			this.m_kWData		= null;

			this.m_sKWURL		= null;
		};

		ajax.prototype.check = 
			function()
		{
			//console.log("ajax::check");

			if (!validate.isString(this.m_sKWType))
			{
			   throw new Error("ajax::check() [m_sKWType] invalid");
			}

			if (!validate.isString(this.m_sKWURL))
			{
			   throw new Error("ajax::check() [m_sKWURL] invalid");
			}

			if (!this.m_kWCaller)
			{
			   throw new Error("ajax::check() [m_kWCaller] invalid");
			}
		};

		ajax.prototype.init =
			function()
		{
			//console.log("ajax::init");
			this.ajaxInit();
		};

//*******************************************************************//
//***																	   
//***		public accessors
//***
//*******************************************************************//

		ajax.prototype.getKWData =
			function()
		{
			return this.m_kWData;
		};

		ajax.prototype.isKWCached =
			function()
		{
			return this.m_bKWIsCached;
		};

		ajax.prototype.setKWCaller =
			function(obj)
		{
			this.m_kWCaller = obj;
		};

		ajax.prototype.setKWIsCached =
			function(bVal)
		{
			this.m_bKWIsCached = bVal;
		};

		ajax.prototype.setKWType =
			function(sVal)
		{
			this.m_sKWType = sVal;
		};

		ajax.prototype.setKWURL =
			function(sVal)
		{
			this.m_sKWURL = sVal;
		};

//*******************************************************************//
//***																	   
//***		public methods
//***
//*******************************************************************//

		ajax.prototype.callbackSuccess = 
			function(data)
		{
			//console.log("ajax::callbackSuccess");
			
			this.m_kWData = data;

			this.ajaxSuccess();
		};

		ajax.prototype.callbackError = 
			function(jqXHR, sStatus, error)
		{
			//console.log("ajax::callbackError");

			this.ajaxError(jqXHR, sStatus, error);
		};

//*******************************************************************//
//***																	   
//***		private methods
//***
//*******************************************************************//

		ajax.prototype.ajaxSuccess = 
			function()
		{
			//console.log("ajax::ajaxSuccess() called");

			if (!this.m_kWData)
			{
			   throw new Error("ajax::ajaxSuccess() [m_kWData] invalid");
			}

			if (!this.m_kWCaller)
			{
			   throw new Error("ajax::ajaxSuccess() [m_kWCaller] invalid");
			}

			this.m_kWCaller.callback(this.m_kWData);
		};

		ajax.prototype.ajaxError = 
			function(jqXHR, sStatus, error)
		{
			//console.log("ajax::ajaxError() called");
			
			throw new Error("ajax::ajaxError() error [" + sStatus + "]");
		};

		ajax.prototype.ajaxInit =
			function()
		{
			//console.log("ajax::ajaxInit");

			this.ajaxRetrieve();
		};

		ajax.prototype.ajaxRetrieve =
			function()
		{
			//console.log("ajax::ajaxRetrieve");

			if (this.m_kWData)
			{
				throw new Error("ajax::ajaxRetrieve() duplicated"); 
			}

			if (!validate.isString(this.m_sKWType))
			{
				throw new Error("ajax::ajaxCreateDojo() [m_sKWType] invalid");
			}

			if (!validate.isString(this.m_sKWURL))
			{
				throw new Error("ajax::ajaxCreateDojo() [m_sKWURL] invalid");
			}

			if (!this.callbackError)
			{
				throw new Error("ajax::ajaxCreateDojo() [callbackError] invalid"); 
			}

			if (!this.callbackSuccess)
			{
				throw new Error("ajax::ajaxCreateDojo() [callbackSuccess] invalid"); 
			}

			$.ajax
			(
				{
					url: this.m_sKWURL,
					type: this.m_sKWType,
					cache: this.m_bKWIsCached,
					success: function(data, sStatus, jqXHR)
					{
						self.callbackSuccess(data);
					},
					error: function(jqXHR, sStatus, error)
					{
						self.callbackError(jqXHR, sStatus, error);
					}
				}
			);
		};
		
		return ajax;
			
	}
);
