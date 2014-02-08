/**********************************************************************
 *
 * cookie/obj.js
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
		"kWUtils/map/obj",
		"stat/globals",
		"kWMVC/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
        map,
		globals,
		mvc,
		validate,
		$
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function cookie()
		{
			//console.log("cookie::constructor")

			this.m_sKWExt			= "cookie";
			
			this.m_sKWKeyExpires	= "kwExpires";
            
			this.m_kWOptions		= null;
            this.m_kWValues         = null;
			
            this.m_kWState          = null;
            
			this.m_nKWExpires		= -1;
 		}

		cookie.prototype = new mvc();
		cookie.prototype.constructor = cookie;
		cookie.constructor = mvc.prototype.constructor;
		
		cookie.prototype.check = 
			function check()
		{
			mvc.prototype.check.call(this);

			//console.log(this.kWLogCalled());

			if(!validate.isString(this.m_sKWKeyExpires))
			{
				console.error(this.kWLogInvalid("m_sKWKeyExpires"));
			} 
		};

		cookie.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			mvc.prototype.init.call(this);
		}; 

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		cookie.prototype.get = 
                function()
		{
			return this.cookieGet();
		};
        
		cookie.prototype.set = 
                function(obj)
		{
			this.cookieSet(obj);
		};
        
	//*******************************************************************//
	//***																	   
	//***		public methods
	//***
	//*******************************************************************//

		cookie.prototype.kWAdd =
                function(obj)
		{
			this.cookieAdd(obj);
		};
        
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
		
		cookie.prototype.mvcHandleCBDefaultOR  = 
                function(sTopic, data)
		{
			this.cookieHandleCBDefault(sTopic, data);
		};

		cookie.prototype.mvcInitOR = 
                function()
		{
			this.cookieInit();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//
		
		cookie.prototype.cookieCreateOR  = 
            function cookieCreateOR()
		{
			//console.error(this.kWLogNotImpl());
		};

		cookie.prototype.cookieInitOR =
            function cookieInitOR()
		{
			//console.error(this.kWLogNotImpl());
		};

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		cookie.prototype.cookieAdd = 
			function cookieAdd(obj)
		{
            var sID = null;
            
			//console.log(this.kWLogCalled());

			if(!validate.isNotNull(this.m_kWValues))
			{
				console.error(this.kWLogInvalid("m_kWValues"));
			} 

 			if(!validate.isNotNull(obj))
			{
				console.error(this.kWLogInvalid("obj"));
			} 

            sID = obj.getKWKey();
			if(!validate.isString(sID))
			{
				console.error(this.kWLogErrRetrieve("sID"));
			} 
            
			this.m_kWValues.kWAdd(sID, obj);
		};  

		cookie.prototype.cookieCreate = 
			function cookieCreate()
		{
			//console.log(this.kWLogCalled());

			this.cookieCreateOptions();
			this.cookieCreateValues();
            this.cookieCreateOR();
		};  

		cookie.prototype.cookieCreateOptions = 
			function cookieCreateOptions()
		{
			//console.log(this.kWLogCalled());

			if(validate.isNotNull(this.m_kWOptions))
			{
				console.error(this.kWLogRepeated());
			} 

			if(!validate.isNumberPos(this.m_nKWExpires))
			{
				console.error(this.kWLogInvalid("m_nKWExpires"));
			} 

			this.m_kWOptions = {};

			this.m_kWOptions.expires = this.m_nKWExpires;
		};  

		cookie.prototype.cookieCreateValues = 
			function cookieCreateValues()
		{
			//console.log(this.kWLogCalled());

			if(validate.isNotNull(this.m_kWValues))
			{
				console.error(this.kWLogRepeated());
			} 

			if(!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			} 

			this.m_kWValues = new map();

			this.m_kWValues.setKWID(this.m_sKWID);
            
            this.m_kWValues.check();
            this.m_kWValues.init();
		};  

		cookie.prototype.cookieGet = 
			function cookieGet()
		{
			//console.log(this.kWLogCalled());
            
            this.cookiePackState();
            return this.m_kWState;
		};  

		cookie.prototype.cookieHandleCBDefault = 
			function cookieHandleCBDefault(sTopic, data)
		{
			console.log(this.kWLogCalled());

			if(!validate.isNumberNotNeg(data))
			{
				console.error(this.kWLogInvalid("data"));
			} 
			
			this.m_nView = data;
			
			this.cookieWriteView();
		};  

		cookie.prototype.cookieInit = 
			function cookieInit()
		{
			//console.log(this.kWLogCalled());

			this.cookieRetrieveExpires();
			this.cookieCreate();
		};

		cookie.prototype.cookiePackState = 
			function cookiePackState() 
		{
            var value   = null;
            
            var nIndex  = -1;
            var nLength = -1;
            
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWValues))
			{
				console.error(this.kWLogInvalid("m_kWValues"));
			}

	        this.m_kWState = {};
            
            nLength = this.m_kWValues.getKWLength();
            
    		for (nIndex=0; nIndex<nLength; nIndex++)
            {
                value = this.m_kWValues.getKWValByIndex(nIndex);
                if (!validate.isNotNull(value))
                {
                    console.error(this.kWLogErrRetrieve("value"));
                }
                
                this.m_kWState[value.getKWKey()] = value.getKWValue();
            }
		};
		
		cookie.prototype.cookieRetrieveExpires = 
			function cookieRetrieveExpires()
		{
			//console.log(this.kWLogCalled());

			if(validate.isNumberNotNeg(this.m_nKWExpires))
			{
				console.error(this.kWLogRepeated());
			} 

			if(!validate.isString(this.m_sKWKeyExpires))
			{
				console.error(this.kWLogInvalid("m_sKWKeyExpires"));
			} 

			this.m_nKWExpires = this.getKWViewNumeric(this.m_sKWKeyExpires);
			if (!validate.isNumberPos(this.m_nKWExpires))
			{
				console.error(this.kWLogErrRetrieve("m_nKWExpires"));
			}

			//console.log(this.kWLogDisplay(this.m_sKWKeyExpires, this.m_nKWExpires));
		};  
		
		cookie.prototype.cookieSet = 
			function cookieSet(obj)
		{
			//console.log(this.kWLogCalled());
            
			if (!validate.isNotNull(this.m_kWValues))
			{
				console.error(this.kWLogInvalid("m_kWValues"));
			}

			if (!validate.isNotNull(obj))
			{
				console.error(this.kWLogInvalid("obj"));
			}
            
            this.m_kWState = obj;

            this.cookieUnPackState();
  		};  

		cookie.prototype.cookieUnPackState = 
			function cookieUnPackState() 
		{
            var value   = null;
            
            var nIndex  = -1;
            var nLength = -1;
            
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWState))
			{
				console.error(this.kWLogInvalid("m_kWState"));
			}

			if (!validate.isNotNull(this.m_kWValues))
			{
				console.error(this.kWLogInvalid("m_kWValues"));
			}

            nLength = this.m_kWValues.getKWLength();
            
    		for (nIndex=0; nIndex<nLength; nIndex++)
            {
                value = this.m_kWValues.getKWValByIndex(nIndex);
                if (!validate.isNotNull(value))
                {
                    console.error(this.kWLogErrRetrieve("value"));
                }
                
                value.setKWValue(this.m_kWState[value.getKWKey()]);
            }
		};
		
		return cookie;
		
	}
)