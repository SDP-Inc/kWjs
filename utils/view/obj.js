/**********************************************************************
 *
 * view/obj.js
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
		"./values/obj",
		"../jsonp/obj",
		"kWLog/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
		values,
		jsonp,
		log,
		validate,
		$
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function view() 
		{
			this.m_sKWKeyFileChild	= "kwFileChild";
			
			this.m_kWAjax			= null;
			this.m_kWCBContext		= null;
			this.m_kWCBMethod		= null;
			this.m_kWJson			= null;
			this.m_kWParent			= null;
			this.m_kWValues         = null;

			this.m_sKWFile			= null;
			this.m_sKWFileChild		= null;
		}

		view.prototype = new log();
		view.prototype.constructor = view;
		view.constructor = log.prototype.constructor;

		view.prototype.check = 
			function check() 
		{
			log.prototype.check.call(this);

			//console.log(this.kWLogCalled());
		
			if (!validate.isNotNull(this.m_kWCBContext))
			{
				//console.error(this.kWLogInvalid("m_kWCBContext"));
			}

			if (!validate.isNotNull(this.m_kWCBMethod))
			{
				//console.error(this.kWLogInvalid("m_kWCBContext"));
			}
			
			if (!validate.isString(this.m_sKWKeyFileChild))
			{
				console.error(this.kWLogInvalid("m_sKWKeyFileChild"));
			}
		};

		view.prototype.init = 
			function init() 
		{
			//console.log(this.kWLogCalled());
			log.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		view.prototype.getKWChild =
			function(nVal)
		{
			return this.viewGetChild(nVal);
		};
		
		view.prototype.getKWCount =
			function()
		{
			return this.m_kWJson.length;
		};
		
		view.prototype.getKWAsBool =
			function(sVal)
		{
			return this.viewGetAsBool(sVal);
		};
		
		view.prototype.getKWAsI18N =
			function(sVal)
		{
			return this.viewGetAsI18N(sVal);
		};
		
		view.prototype.getKWAsNumeric =
			function(sVal)
		{
			return this.viewGetAsNumeric(sVal);
		};
		
		view.prototype.getKWAsText =
			function(sVal)
		{
			return this.viewGetAsText(sVal);
		};
		
		view.prototype.getKWJSON =
			function()
		{
			return this.m_kWJson;
		};
		
		view.prototype.setKWContext =
			function(obj)
		{
			this.m_kWCBContext = obj;
		};

		view.prototype.setKWFile =
			function(sVal)
		{
			this.m_sKWFile = sVal;
		};

		view.prototype.setKWJSON =
			function(obj)
		{
			this.m_kWJson = obj;
		};

		view.prototype.setKWMethod =
			function(obj)
		{
			this.m_kWCBMethod = obj;
		};
		
		view.prototype.setKWParent =
			function(obj)
		{
			this.m_kWParent = obj;
		};

	//*******************************************************************//
	//***																	   
	//***		public callbacks
	//***
	//*******************************************************************//

		view.prototype.viewCB =
			function(data) 
		{
			this.viewHandleCB(data);
		};
		
		view.prototype.viewCBChild = 
			function(data) 
		{
			this.viewHandleCBChild(data);
		};
		
	//*******************************************************************//
	//***																	   
	//***		public methods
	//***
	//*******************************************************************//

		view.prototype.kWAddValue =
			function(obj)
			{
				this.viewAddValue(obj);
			};

		view.prototype.kWDelete =
			function()
			{
				this.viewDelete();
			};

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		view.prototype.uBLInitOR = 
			function()
		{
			this.viewInit();
		};
		
		view.prototype.uBLRetrieveIDParentOR = 
			function()
		{
			this.viewRetrieveIDParent();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		view.prototype.viewCreateOR =
			function viewCreateOR()
			{
				console.error(this.kWLogNotImpl());
			};

		view.prototype.viewDeleteOR =
			function viewDeleteOR()
			{
				console.error(this.kWLogNotImpl());
			};

		view.prototype.viewInitOR =
			function viewInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		view.prototype.viewAddValue =
			function viewAddValue(obj)
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

				this.m_kWValues.kWAddValue(obj);
			};

		view.prototype.viewCreate =
			function viewCreate()
			{
				//console.log(this.kWLogCalled());
				this.viewCreateOR();
			};

		view.prototype.viewCreateValues=
			function viewCreateValues()
			{
				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWValues))
				{
					console.error(this.kWLogRepeated());
				}

				if (!validate.isString(this.m_sKWID))
				{
					console.error(this.kWLogInvalid("m_sKWID"));
				}

				this.m_kWValues = new values();

				this.m_kWValues.setKWIDParent(this.m_sKWID);

				this.m_kWValues.check();
				this.m_kWValues.init();
			};

		view.prototype.viewDelete =
			function viewDelete()
			{
				//console.log(this.kWLogCalled());
				if (!validate.isNotNull(this.m_kWValues))
				{
					return;
				}

				this.m_kWValues.kWDelete();

				this.viewDeleteOR();
			};

		view.prototype.viewGetAsBool =
			function viewGetAsBool(sKey)
		{
			var bValue = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(sKey))
			{
				console.error(this.kWLogInvalid("sKey"));
			}
			
			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}
			
			bValue = this.m_kWJson[sKey];
			if (validate.isBool(bValue))
			{
				//console.debug(this.kWLogDisplay(sKey, bValue));
			}
			
			return bValue;
		};
		
		view.prototype.viewGetChild = 
			function viewGetChild(nVal)
		{
			var child = null;
			var json  = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNumberNotNeg(nVal))
			{
				console.error(this.kWLogInvalid("nVal"));
			}
			
			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			json = this.m_kWJson[nVal];
			if (!validate.isNotNull(json))
			{
				console.error(this.kWLogErrRetrieve("json"));
			}
			
			//console.debug(this.kWLogDisplay("nVal", nVal));
			
			child = new view();
			
			child.setKWJSON(json);
			child.setKWID(this.m_sKWID + nVal);
			
			child.check();
			child.init();
			
			return child;
		};
		
		view.prototype.viewGetAsI18N = 
			function viewGetAsI18N(sKey)
		{
			var sValue      = null;
            var sTextKey    =   null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(sKey))
			{
				console.error(this.kWLogInvalid("sKey"));
			}
			
			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}
			
			sTextKey = this.m_kWJson[sKey];
			if (!validate.isString(sTextKey))
			{
                return;
			}
            
			//console.debug(this.kWLogDisplay(sKey, sTextKey));
            
			sValue = this.getKWText(sTextKey);
			if (!validate.isString(sValue))
			{
 				console.error(this.kWLogErrRetrieve("sValue"));
			}
            
			//console.debug(this.kWLogDisplay(sKey, sValue));
 			
			return sValue;
		};
		
		view.prototype.viewGetAsNumeric = 
			function viewGetAsNumeric(sKey)
		{
			var nValue = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(sKey))
			{
				console.error(this.kWLogInvalid("sKey"));
			}
			
			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}
			
			nValue = this.m_kWJson[sKey];
			if (validate.isNumberNotNeg(nValue))
			{
				//console.debug(this.kWLogDisplay(sKey, nValue));
			}
			
			return nValue;
		};
		
		view.prototype.viewGetAsText = 
			function viewGetAsText(sKey)
		{
			var sValue = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(sKey))
			{
				console.error(this.kWLogInvalid("sKey"));
			}
			
			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}
			
			sValue = this.m_kWJson[sKey];
			if (validate.isString(sValue))
			{
				//console.debug(this.kWLogDisplay(sKey, sValue));
			}
			
			return sValue;
		};
		
		view.prototype.viewHandleCB = 
			function viewHandleCB(data)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(data))
			{
				console.error(this.kWLogInvalid("data"));
			}
			
			this.m_kWJson = data;
		
			this.viewLoadChild();
		};
		
		view.prototype.viewHandleCBChild = 
			function viewHandleCBChild(data)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(data))
			{
				console.error(this.kWLogInvalid("data"));
			}
			
			this.m_kWJson = data;
			
			this.viewCreate();
			this.viewInitOR();
			
			if (!this.m_kWCBContext)
			{
			   throw new Error("jsonp::jsonpCallback() [m_kWCBContext] invalid");
			}
			
			if (!this.m_kWCBMethod)
			{
			   throw new Error("jsonp::jsonpCallback() [m_kWCBMethod] invalid");
			}
			
			this.m_kWCBMethod.call(this.m_kWCBContext);
		};
		
		view.prototype.viewInit = 
			function viewInit()
		{
			//console.log(this.kWLogCalled());

			this.viewCreateValues();
			this.viewLoad();
		};
		
		view.prototype.viewLoad =
			function viewLoad()
		{
		 	//console.log(this.kWLogCalled());

			if (validate.isString(this.m_sKWFile))
			{
				this.viewLoadAjax();
			}
			else
			{
				this.viewLoadJSON();
				if (validate.isNotNull(this.m_kWJson))
				{
					return;
				}
				this.viewLoadChild();
			}
		};
		
		view.prototype.viewLoadAjax =
			function viewLoadAjax()
		{
		 	//console.log(this.kWLogCalled());

			if (!validate.isString(this.m_sKWFile))
			{
				console.error(this.kWLogInvalid("m_sKWFile"));
			}

			if (!validate.isFunction(this.viewCB))
			{
				console.error(this.kWLogInvalid("viewCB"));
			}

			//console.debug(this.kWLogDisplay("m_sKWFile", this.m_sKWFile));

			this.m_kWAjax = new jsonp();
			
			this.m_kWAjax.setKWContext(this);
			this.m_kWAjax.setKWMethod(this.viewCB);
			this.m_kWAjax.setKWFile(this.m_sKWFile);
			
			this.m_kWAjax.check();
			this.m_kWAjax.init();
		};
		
		view.prototype.viewLoadChild =
			function viewLoadChild() 
		{
			//console.log(this.kWLogCalled());

			this.viewRetrieveFileChild();
			if (validate.isString(this.m_sKWFileChild))
			{
				this.viewLoadChildAjax();
			}
			else
			{
				this.viewLoadChildJSON();
			}
		};
	
		view.prototype.viewLoadChildAjax =
			function viewLoadChildAjax()
		{
		 	//console.log(this.kWLogCalled());

			if (!validate.isString(this.m_sKWFileChild))
			{
				console.error(this.kWLogInvalid("m_sKWFileChild"));
			}

			if (!validate.isFunction(this.viewCBChild))
			{
				console.error(this.kWLogInvalid("viewCBChild"));
			}

			//console.debug(this.kWLogDisplay("m_sKWFileChild", this.m_sKWFileChild));

			this.m_kWAjax = new jsonp();
			
			this.m_kWAjax.setKWContext(this);
			this.m_kWAjax.setKWMethod(this.viewCBChild);
			this.m_kWAjax.setKWFile(this.m_sKWFileChild);
			
			this.m_kWAjax.check();
			this.m_kWAjax.init();
		};
		
		view.prototype.viewLoadChildJSON =
			function viewLoadChildAjax()
		{
		 	//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWJson))
			{
				console.error(this.kWLogInvalid("m_kWJson"));
			}

			if (!validate.isFunction(this.viewCBChild))
			{
				console.error(this.kWLogInvalid("viewCBChild"));
			}

			this.viewCBChild(this.m_kWJson);
		};
		
		view.prototype.viewLoadJSON = 
			function viewLoadJSON() 
		{
			var json	= null;
			var jsonParent = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWJson))
			{
				return;
			}
			
			if (!validate.isNotNull(this.m_kWParent))
			{
				console.error(this.kWLogInvalid("m_kWParent"));
			}
			
			if (!validate.isString(this.m_sKWExt))
			{
				console.error(this.kWLogInvalid("m_sKWExt"));
			}
			
			if (!validate.isFunction(this.m_kWParent.getKWJSON))
			{
				console.error(this.kWLogInvalid("getKWJSON"));
			}
			
			if (!validate.isFunction(this.viewCB))
			{
				console.error(this.kWLogInvalid("viewCB"));
			}
			
			//console.debug(this.kWLogDisplay("m_sKWExt", this.m_sKWExt));
			
			jsonParent = this.m_kWParent.getKWJSON();
			if (!validate.isNotNull(jsonParent))
			{
				console.error(this.kWLogErrRetrieve("jsonParent"));
			}
			
			json = jsonParent[this.m_sKWExt];
			if (!validate.isNotNull(json))
			{
				console.error(this.kWLogDisplay("m_sKWExt", this.m_sKWExt));
				console.error(this.kWLogErrRetrieve("json"));
			}
			
			this.viewCB(json);
		};
		
		view.prototype.viewRetrieveFileChild = 
			function viewRetrieveFileChild() 
		{
			//console.log(this.kWLogCalled());

			if (validate.isString(this.m_sKWFileChild))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWKeyFileChild))
			{
				console.error(this.kWLogInvalid("m_sKWKeyFileChild"));
			}
			
			this.m_sKWFileChild = this.getKWAsText(this.m_sKWKeyFileChild);
			if (validate.isString(this.m_sKWFileChild))
			{
				//console.debug(this.kWLogDisplay(this.m_sKWKeyFileChild, this.m_sKWFileChild));
			}
		};
		
		return view;

	}
);
