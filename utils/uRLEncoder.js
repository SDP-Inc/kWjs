/**********************************************************************
 *
 * URLEncoder.js
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

		function encoder()
		{
			//console.log("encoder::constructor");
		};

		encoder.prototype.check = function()
		{
			//console.log("jsonp::check");
		};

		encoder.prototype.init = function()
		{
			//console.log("jsonp::init");
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
				
		encoder.prototype.encode = function(sVal)
		{
			return this.URLEncode(sVal);
		};

//*******************************************************************//
//***																	   
//***		private methods
//***
//*******************************************************************//

		encoder.prototype.URLEncode = function(sVal)
		{
			var sURL = null;
			
			//console.log("URLEncoder::URLEncode");
			
			if (!validate.isString(sVal))
			{
				throw new Error("URLEncoder::URLEncode() [sVal] invalid"); 
			}
			
			sURL = escape(sVal);
			
			return sURL;
		};
		
		encoder.prototype.URLInit= function()
		{
			//console.log("URLEncoder::Init");
		};

		return encoder;
	}
);
