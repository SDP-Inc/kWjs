/**********************************************************************
 *
 * mvc/obj.js
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
		"./children/obj",
		"./viewMVC/obj",
		"kWLog/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
		children,
		view,
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
	
		function mvc() 
		{

			this.m_kWChildren			= null;
			this.m_kWModel			    = null;
			this.m_kWValueField		    = null;
			this.m_kWView			    = null;
			this.m_kWViewChild  	    = null;
			this.m_kWViewParent		    = null;

			this.m_hKWDefault           = null;
			this.m_hKWReady       	    = null;
			this.m_hKWResize       	    = null;

			this.m_sKWField			    = null;
			this.m_sKWFile			    = null;
			this.m_sKWTopicPub      	= null;
			this.m_sKWTopicPubReady	    = null;
			this.m_sKWTopicPubResize	= null;
			this.m_sKWTopicSub    	    = null;
			this.m_sKWTopicSubReady	    = null;
			this.m_sKWTopicSubResize	= null;
			
			this.m_bKWHasModel		    = false;
			this.m_bKWHasView			= true;
			this.m_bKWIsReady			= false;
		}

		mvc.prototype = new log();
		mvc.prototype.constructor = mvc;
		mvc.constructor = log.prototype.constructor;

		mvc.prototype.check = 
			function check() 
		{
			log.prototype.check.call(this);

			//console.log(this.kWLogCalled());
			
			if (this.m_bKWHasModel)
			{
				if (!validate.isNotNull(this.m_kWModel))
				{
					console.error(this.kWLogInvalid("m_kWModel"));
				}
			}
		};

		mvc.prototype.init = 
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

		mvc.prototype.getKWChildByID =
			function(sVal)
			{
				return this.mvcGetChildByID(sVal);
			};

		mvc.prototype.getKWChildByIndex =
			function(nVal)
			{
				return this.mvcGetChildByIndex(nVal);
			};

		mvc.prototype.getKWChildCount =
			function()
			{
				return this.mvcGetChildCount();
			};

		mvc.prototype.getKWModelValue =
			function(sVal)
		{
			return this.mvcRetrieveValue(sVal);
		};
		
		mvc.prototype.getKWModelValueField =
			function()
		{
			return this.m_kWValueField;
		};
		
		mvc.prototype.getKWViewBool =
			function(sVal)
		{
			return this.mvcGetViewBool(sVal);
		};
		
		mvc.prototype.getKWViewChild =
			function(nVal)
		{
			return this.mvcGetViewChild(nVal);
		};
		
		mvc.prototype.getKWViewCount =
			function()
		{
			return this.mvcGetViewCount();
		};
		
		mvc.prototype.getKWViewI18N =
			function(sVal)
		{
			return this.mvcGetViewI18N(sVal);
		};
		
		mvc.prototype.getKWViewNumeric =
			function(sVal)
		{
			return this.mvcGetViewNumeric(sVal);
		};
		
		mvc.prototype.getKWViewText =
			function(sVal)
		{
			return this.mvcGetViewText(sVal);
		};
		
		mvc.prototype.isKWReady = function()
		{
			return this.m_bKWIsReady;
		};

		mvc.prototype.setKWField =
			function(sVal)
		{
			this.m_sKWField = sVal;
		};

		mvc.prototype.setKWFile =
			function(sVal)
		{
			this.m_sKWFile = sVal;
		};

		mvc.prototype.setKWID =
			function(sVal)
		{
			this.m_sKWID = sVal;
		};

		mvc.prototype.setKWModel =
			function(obj)
		{
			this.m_kWModel = obj;
		};

		mvc.prototype.setKWView =
			function(obj) 
		{
			this.m_kWView = obj;
		};

		mvc.prototype.setKWViewParent =
			function(obj)
		{
			this.m_kWViewParent = obj;
		};

	//*******************************************************************//
	//***																	   
	//***		public callbacks
	//***
	//*******************************************************************//

		mvc.prototype.callbackDefault = 
			function(sTopic, data) 
		{
			this.mvcHandleCBDefault(sTopic, data);
		};
		
		mvc.prototype.callbackReady = 
			function(sTopic, data) 
		{
			this.mvcHandleCBReady(sTopic, data);
		};
		
		mvc.prototype.callbackResize = 
			function(sTopic, data) 
		{
			this.mvcHandleCBResize(sTopic, data);
		};
		
		mvc.prototype.callbackView = 
			function() 
		{
			this.mvcHandleCBView();
		};
		
		mvc.prototype.callbackViewChild = 
			function() 
		{
			this.mvcHandleCBViewChild();
		};
		
	//*******************************************************************//
	//***																	   
	//***		public methods
	//***
	//*******************************************************************//

		mvc.prototype.kWAddChild =
			function(obj)
		{
			this.mvcAddChild(obj);
		};

		mvc.prototype.kWEmpty =
			function()
		{
			this.mvcEmpty();
		};

		mvc.prototype.kWLoad =
			function()
		{
			this.mvcLoad();
		};

		mvc.prototype.kWPublish =
			function(sTopic, data) 
		{
			this.mvcPublish(sTopic, data);
		};
		
		mvc.prototype.kWPublishDefault =
			function() 
		{
			this.mvcPublishDefault();
		};
		
		mvc.prototype.kWPublishReady =
			function() 
		{
			this.mvcPublishReady();
		};
		
		mvc.prototype.kWPublishResize =
			function() 
		{
			this.mvcPublishResize();
		};

		mvc.prototype.kWRefresh =
			function()
		{
			this.mvcRefresh();
		};

		mvc.prototype.kWSubscribe =
			function(sTopic) 
		{
			return this.mvcSubscribe(sTopic);
		};

		mvc.prototype.kWUnSubscribeDefault =
			function()
		{
			this.mvcUnSubscribeDefault();
		};

		mvc.prototype.kWUnSubscribeReady =
			function()
		{
			this.mvcUnSubscribeReady();
		};

		mvc.prototype.kWUnSubscribeResize =
			function()
		{
			this.mvcUnSubscribeResize();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		mvc.prototype.uBLDeleteOR =
			function()
		{
			this.mvcDelete();
		};

		mvc.prototype.uBLDisableOR =
			function()
		{
			this.mvcDisable();
		};

		mvc.prototype.uBLEnableOR =
			function()
		{
			this.mvcEnable();
		};

		mvc.prototype.uBLInitOR =
			function()
		{
			this.mvcInit();
		};

		mvc.prototype.uBLResizeOR =
			function()
		{
			this.mvcResize();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		mvc.prototype.mvcCreateViewOR =
			function mvcCreateViewOR()
		{
			return this.mvcCreateViewBase();
		};

		mvc.prototype.mvcDeleteOR =
			function mvcDeleteOR()
		{
			console.error(this.kWLogNotImpl());
		};

		mvc.prototype.mvcDisableOR =
			function mvcDisableOR()
		{
			//console.error(this.kWLogNotImpl());
		};

		mvc.prototype.mvcEnableOR =
			function mvcEnableOR()
		{
			//console.error(this.kWLogNotImpl());
		};

		mvc.prototype.mvcEmptyOR =
			function mvcEmptyOR()
		{
			//console.error(this.kWLogNotImpl());
		};

		mvc.prototype.mvcHandleCBDefaultOR =
			function mvcHandleCBDefaultOR(sTopic, data)
		{
			console.error(this.kWLogNotImpl());
		};
		
		mvc.prototype.mvcHandleCBReadyOR = 
			function mvcHandleCBReadyOR(sTopic, data)
		{
			console.error(this.kWLogNotImpl());
		};
		
		mvc.prototype.mvcHandleCBResizeOR = 
			function mvcHandleCBResizeOR(sTopic, data)
		{
			console.error(this.kWLogNotImpl());
		};

		mvc.prototype.mvcInitOR =
			function mvcInitOR()
		{
			console.error(this.kWLogNotImpl());
		};

		mvc.prototype.mvcLoadOR =
			function mvcLoadOR()
		{
			//console.error(this.kWLogNotImpl());
		};

		mvc.prototype.mvcRefreshOR =
			function mvcRefreshOR()
		{
			//console.error(this.kWLogNotImpl());
		};

		mvc.prototype.mvcResizeOR =
			function mvcResizeOR()
		{
			//console.error(this.kWLogNotImpl());
		};

		mvc.prototype.mvcRetrieveOR =
			function mvcRetrieveOR()
		{
			//console.error(this.kWLogNotImpl());
		};

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		mvc.prototype.mvcAddChild =
			function mvcAddChild(obj)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWChildren))
			{
				console.error(this.kWLogInvalid("m_kWChildren"));
			}

			if (!validate.isNotNull(obj))
			{
				console.error(this.kWLogInvalid('obj'));
			}

			this.m_kWChildren.kWAddChild(obj);
		};

		mvc.prototype.mvcCreateChildren =
			function mvcCreateChildren()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWChildren))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			this.m_kWChildren = new children();
			this.m_kWChildren.setKWID(this.m_sKWID);

			this.m_kWChildren.check();
			this.m_kWChildren.init();
		};

		mvc.prototype.mvcCreateView =
			function mvcCreateView() 
		{
			//console.log(this.kWLogCalled());

			if (!this.m_bKWHasView)
			{
				return;
			}
			
			if (validate.isNotNull(this.m_kWView))
			{
				//console.debug(this.kWLogStatus("m_kWView is not null"));
				this.callbackView();
				return;
			}
			
			if (!validate.isString(this.m_sKWExt))
			{
				//console.error(this.kWLogInvalid("m_sKWExt"));
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			if (!validate.isFunction(this.callbackView))
			{
				console.error(this.kWLogInvalid("callbackView"));
			}
			
			if (!validate.isFunction(this.callbackView))
			{
				console.error(this.kWLogInvalid("callbackView"));
			}
			
			this.m_kWView = this.mvcCreateViewOR();
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogErrRetrieve("callbackView"));
			}
			
			if (!validate.isFunction(this.m_kWView.setKWContext))
			{
				console.error(this.kWLogInvalid("setKWContext"));
			}
			
			this.m_kWView.setKWContext(this);
			this.m_kWView.setKWExt(this.m_sKWExt);
			this.m_kWView.setKWFile(this.m_sKWFile);
			this.m_kWView.setKWID(this.m_sKWID);
			this.m_kWView.setKWMethod(this.callbackView);
			this.m_kWView.setKWParent(this.m_kWViewParent);
			
			this.m_kWView.check();
			this.m_kWView.init();
		};
	
		mvc.prototype.mvcCreateViewBase =
			function mvcCreateViewBase() 
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		mvc.prototype.mvcDelete =
			function mvcDelete()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWChildren))
			{
				this.m_kWChildren.kWDelete();
			}

			if (validate.isNotNull(this.m_kWView))
			{
				this.m_kWView.kWDelete();
			}

			this.kWUnSubscribeDefault();
			this.kWUnSubscribeReady();
			this.kWUnSubscribeResize();

			this.m_kWChildren			= null;
			this.m_kWModel			    = null;
			this.m_kWValueField		    = null;
			this.m_kWView			    = null;
			this.m_kWViewChild		    = null;
			this.m_kWViewParent		    = null;

			this.mvcDeleteOR();
		};

		mvc.prototype.mvcDisable =
			function mvcDisable()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWChildren))
			{
				this.m_kWChildren.kWDisable();
			}

			this.mvcDisableOR();
		};

		mvc.prototype.mvcEmpty =
			function mvcEmpty()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWChildren))
			{
				this.m_kWChildren.kWEmpty();
			}

			this.mvcEmptyOR();
		};

		mvc.prototype.mvcEnable =
			function mvcEnable()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWChildren))
			{
				this.m_kWChildren.kWEnable();
			}

			this.mvcEnableOR();
		};

		mvc.prototype.mvcGetChildByID =
			function mvcGetChildByID(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWChildren))
			{
				console.error(this.kWLogInvalid("m_kWChildren"));
			}

			if (!validate.isString(sVal))
			{
				console.error(this.kWLogInvalid("sVal"));
			}

			return this.m_kWChildren.getKWValByKey(sVal);
		};

		mvc.prototype.mvcGetChildByIndex =
			function mvcGetChildByIndex(nVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWChildren))
			{
				console.error(this.kWLogInvalid("m_kWChildren"));
			}

			if (!validate.isNumberNotNeg(nVal))
			{
				console.error(this.kWLogInvalid("nVal"));
			}

			return this.m_kWChildren.getKWValByIndex(nVal);
		};

		mvc.prototype.mvcGetChildCount =
			function mvcGetChildCount()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWChildren))
			{
				return 0;
			}

			return this.m_kWChildren.getKWLength();
		};

		mvc.prototype.mvcGetViewBool =
			function mvcGetViewBool(sVal)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			return this.m_kWView.getKWAsBool(sVal);
		};
		
		mvc.prototype.mvcGetViewChild = 
			function mvcGetViewChild(nVal)
		{
			var theView = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNumberNotNeg(nVal))
			{
				console.error(this.kWLogInvalid("nVal"));
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			theView = this.m_kWView.getKWChild(nVal);
			
			return theView;
		};
		
		mvc.prototype.mvcGetViewCount = 
			function mvcGetViewCount()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			return this.m_kWView.getKWCount();
		};
		
		mvc.prototype.mvcGetViewI18N = 
			function mvcGetViewI18N(sVal)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			return this.m_kWView.getKWAsI18N(sVal);
		};
		
		mvc.prototype.mvcGetViewNumeric = 
			function mvcGetViewNumeric(sVal)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			return this.m_kWView.getKWAsNumeric(sVal);
		};
		
		mvc.prototype.mvcGetViewText = 
			function mvcGetViewText(sVal)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			return this.m_kWView.getKWAsText(sVal);
		};
		
		mvc.prototype.mvcHandleCBDefault = 
			function mvcHandleCBDefault(sTopic, data)
		{
			//console.log(this.kWLogCalled());

			//console.debug(this.kWLogDisplay("sTopic", sTopic));

			this.mvcHandleCBDefaultOR(sTopic, data);
		};
		
		mvc.prototype.mvcHandleCBReady = 
			function mvcHandleCBReady(sTopic, data)
		{
			//console.log(this.kWLogCalled());

			//console.debug(this.kWLogDisplay("sTopic", sTopic));

			this.mvcHandleCBReadyOR(sTopic, data);
		};
		
		mvc.prototype.mvcHandleCBResize = 
			function mvcHandleCBResize(sTopic, data)
		{
			//console.log(this.kWLogCalled());
            
			//console.debug(this.kWLogDisplay("sTopic", sTopic));
            
 			this.mvcHandleCBResizeOR(sTopic, data);
		};
		
		mvc.prototype.mvcHandleCBView = 
			function mvcHandleCBView() 
		{
			//console.log(this.kWLogCalled());
			
			this.mvcRetrieve();
			this.mvcSubscribeDefault();
			this.mvcSubscribeReady();
			this.mvcSubscribeResize();
			
			this.mvcInitOR();
		};
		
		mvc.prototype.mvcInit = 
			function mvcInit()
		{
			//console.log(this.kWLogCalled());

			this.mvcCreateChildren();

			if (this.m_bKWHasView)
			{
				this.mvcCreateView();
			}
			else
			{
				this.mvcHandleCBView();
			}
		};

		mvc.prototype.mvcLoad =
			function mvcLoad()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWChildren))
			{
				console.error(this.kWLogInvalid("m_kWChildren"));
			}

			this.mvcLoadOR();

			this.m_kWChildren.kWLoad();
		};

		mvc.prototype.mvcPublish =
			function mvcPublish(sTopic, data)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(data))
			{
				//console.error(this.kWLogInvalid("data"));
			}
			
			if (!validate.isNotNull(sTopic))
			{
				console.error(this.kWLogInvalid("sTopic"));
			}

			//console.debug(this.kWLogDisplay("sTopic", sTopic));

			$.publish(sTopic, data);
		};
		
		mvc.prototype.mvcPublishDefault = 
			function mvcPublishDefault()
		{
			var data = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sKWTopicPub))
			{
				console.error(this.kWLogInvalid("m_sKWTopicPub"));
			}
			
			data = {};
			
			//console.debug(this.kWLogDisplay("m_sKWTopicPub", this.m_sKWTopicPub));
            
			this.kWPublish(this.m_sKWTopicPub, data);
		};  
		
		mvc.prototype.mvcPublishReady = 
			function mvcPublishReady()
		{
			var data = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sKWTopicPubReady))
			{
				console.error(this.kWLogInvalid("m_sKWTopicPubReady"));
			}
			
			this.m_bKWIsReady	= true;
			
			data = {};
			
			//console.debug(this.kWLogDisplay("m_sKWTopicPubReady", this.m_sKWTopicPubReady));
            
			this.mvcPublish(this.m_sKWTopicPubReady, data);
			this.mvcUnSubscribeReady();
		};
		
		mvc.prototype.mvcPublishResize = 
			function mvcPublishResize()
		{
			var data = null;
			
			//console.lo(this.kWLogCalled());
			
			if (!validate.isString(this.m_sKWTopicPubResize))
			{
				console.error(this.kWLogInvalid("m_sKWTopicPubResize"));
			}
			
			data = {};
			
			//console.debug(this.kWLogDisplay("m_sKWTopicPubResize", this.m_sKWTopicPubResize));
            
			this.mvcPublish(this.m_sKWTopicPubResize, data);
		};

		mvc.prototype.mvcRefresh =
			function mvcRefresh()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWChildren))
			{
				console.error(this.kWLogInvalid("m_kWChildren"));
			}

			this.mvcRefreshOR();

			this.m_kWChildren.kWRefresh();
		};

		mvc.prototype.mvcResize =
			function mvcResize()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWChildren))
			{
				console.error(this.kWLogInvalid("m_kWChildren"));
			}

			this.mvcResizeOR();

			this.m_kWChildren.kWResize();
		};

		mvc.prototype.mvcRetrieve =
			function mvcRetrieve()
		{
			//console.log(this.kWLogCalled())
			
			this.mvcRetrieveHasModel();
			
			if (this.m_bKWHasModel)
			{
				this.mvcRetrieveField();
				this.mvcRetrieveValueField();
			}

			if (this.m_bKWHasView)
			{
				this.mvcRetrieveID();
				this.mvcRetrieveTopicPub();
				this.mvcRetrieveTopicPubReady();
				this.mvcRetrieveTopicPubResize();
				this.mvcRetrieveTopicSub();
				this.mvcRetrieveTopicSubReady();
				this.mvcRetrieveTopicSubResize();

				this.mvcRetrieveOR();
			}
		};

		mvc.prototype.mvcRetrieveField = 
			function mvcRetrieveField()
		{
			var value = null;
			
			//console.log(this.kWLogCalled())
			
			if (!this.m_bKWHasModel)
			{
				return;
			}

			if (validate.isString(this.m_sKWField))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWField();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			this.m_sKWField = value.getKWValue();
			if (validate.isString(this.m_sKWField))
			{
				//console.debug(this.kWLogDisplay("m_sKWField", this.m_sKWField));
			}
		};

		mvc.prototype.mvcRetrieveHasModel = 
			function mvcRetrieveHasModel() 
		{
			var bHasModel = null;

			var value = null;

			//console.log(this.kWLogCalled());

			if (!this.m_bKWHasView)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWHasModel();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			bHasModel = value.getKWValue();
			if (validate.isBool(bHasModel))
			{
				this.m_bKWHasModel = bHasModel;
				//console.debug(this.kWLogDisplay("m_bKWHasModel", this.m_bKWHasModel));
			}
		};
		
		mvc.prototype.mvcRetrieveID = 
			function mvcRetrieveID() 
		{
			var value = null;
			
			var sID = null;
			
			//console.log(this.kWLogCalled());

			if (!this.m_bKWHasView)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWValueID();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			sID = value.getKWValue();
			if (validate.isString(sID))
			{
				this.m_sKWID = sID;
				//console.log(this.kWLogDisplay("sID", sID));
			}
		};
		
		mvc.prototype.mvcRetrieveIDParent = 
			function mvcRetrieveIDParent() 
		{
			var sID = null;
			
			//console.log(this.kWLogCalled());

			if (validate.isString(this.m_sKWIDParent))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWViewParent))
			{
				console.error(this.kWLogInvalid("m_kWViewParent"));
			}
			
			this.m_sKWIDParent = this.m_kWViewParent.getKWID();
			if (!validate.isString(this.m_sKWIDParent))
			{
				//console.log(this.kWLogErrRetrieve("m_sKWIDParent"));
			}
		};
		
		mvc.prototype.mvcRetrieveTopicPub = 
			function mvcRetrieveTopicPub() 
		{
			var value = null;
			
			//console.log(this.kWLogCalled());

			if (!this.m_bKWHasView)
			{
				return;
			}

			if (validate.isString(this.m_sKWTopicPub))
			{
			    return; 
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWTopicPub();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			this.m_sKWTopicPub = value.getKWValue();
			if (validate.isString(this.m_sKWTopicPub))
			{
				//console.log(this.kWLogDisplay("m_sKWTopicPub", this.m_sKWTopicPub));
			}
		};
		
		mvc.prototype.mvcRetrieveTopicPubReady = 
			function mvcRetrieveTopicPubReady() 
		{
			var value = null;
			
			//console.log(this.kWLogCalled());

			if (!this.m_bKWHasView)
			{
				return;
			}

			if (validate.isString(this.m_sKWTopicPubReady))
			{
			    return; 
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWTopicPubReady();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			this.m_sKWTopicPubReady = value.getKWValue();
			if (validate.isString(this.m_sKWTopicPubReady))
			{
				//console.log(this.kWLogDisplay("m_sKWTopicPubReady", this.m_sKWTopicPubReady));
			}
		};
		
		mvc.prototype.mvcRetrieveTopicPubResize = 
			function mvcRetrieveTopicPubResize() 
		{
			var value = null;
			
			//console.log(this.kWLogCalled());

			if (!this.m_bKWHasView)
			{
				return;
			}

			if (validate.isString(this.m_sKWTopicPubResize))
			{
			    return; 
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWTopicPubResize();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			this.m_sKWTopicPubResize = value.getKWValue();
			if (validate.isString(this.m_sKWTopicPubResize))
			{
				//console.log(this.kWLogDisplay("m_sKWTopicPubResize", this.m_sKWTopicPubResize));
			}
		};
		
		mvc.prototype.mvcRetrieveTopicSub = 
			function mvcRetrieveTopicSub() 
		{
			var value = null;
			
			//console.log(this.kWLogCalled());

			if (!this.m_bKWHasView)
			{
				return;
			}

			if (validate.isString(this.m_sKWTopicSub))
			{
			    return; 
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWTopicSub();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			this.m_sKWTopicSub = value.getKWValue();
			if (validate.isString(this.m_sKWTopicSub))
			{
				//console.log(this.kWLogDisplay("m_sKWTopicSub", this.m_sKWTopicSub));
			}
		};
		
		mvc.prototype.mvcRetrieveTopicSubReady = 
			function mvcRetrieveTopicSubReady() 
		{
			var value = null;
			
			//console.log(this.kWLogCalled());

			if (!this.m_bKWHasView)
			{
				return;
			}

			if (validate.isString(this.m_sKWTopicSubReady))
			{
			    return; 
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWTopicSubReady();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			this.m_sKWTopicSubReady = value.getKWValue();
			if (validate.isString(this.m_sKWTopicSubReady))
			{
				//console.log(this.kWLogDisplay("m_sKWTopicSubReady", this.m_sKWTopicSubReady));
			}
		};
		
		mvc.prototype.mvcRetrieveTopicSubResize = 
			function mvcRetrieveTopicSubResize() 
		{
			var value = null;
			
			//console.log(this.kWLogCalled());

			if (!this.m_bKWHasView)
			{
				return;
			}

			if (validate.isString(this.m_sKWTopicSubResize))
			{
			    return; 
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			value = this.m_kWView.getKWTopicSubResize();
			if (!validate.isNotNull(value))
			{
				return;
			}
			
			this.m_sKWTopicSubResize = value.getKWValue();
			if (validate.isString(this.m_sKWTopicSubResize))
			{
				//console.debug(this.kWLogDisplay("m_sKWTopicSubResize", this.m_sKWTopicSubResize));
			}
		};
		
		mvc.prototype.mvcRetrieveValue = 
			function mvcRetrieveValue(sKey)
		{
			var sValue = null;
			
			//console.log(this.kWLogCalled())

			if (!validate.isString(sKey))
			{
				//console.log(this.kWLogInvalid("sKey"));
			}
			
			if (!validate.isNotNull(this.m_kWModel))
			{
				//console.log(this.kWLogInvalid("m_kWModel"));
			}
			
			sValue = this.m_kWModel[sKey];
			if (validate.isString(sValue))
			{
				//console.log(this.kWLogDisplay(sKey, sValue));
			}
			
			return sValue;
		};
		
		mvc.prototype.mvcRetrieveValueField = 
			function mvcRetrieveValueField()
		{
			//console.log(this.kWLogCalled())

			if (validate.isString(this.m_kWValueField))
			{
				return;
			}

			if (!validate.isString(this.m_sKWField))
			{
				return;
			}
			
			this.m_kWValueField = this.getKWModelValue(this.m_sKWField);
			if (validate.isString(this.m_kWValueField))
			{
				//console.debug(this.kWLogDisplay("m_kWValueField", this.m_kWValueField));
			}
		};
		
		mvc.prototype.mvcRetrieveViewChild = 
			function mvcRetrieveViewChild()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWViewChild))
			{
				console.error(this.kWLogInvalid("m_kWViewChild"));
			}
			
			if (!validate.isString(this.m_sKWFileChild))
			{
				console.error(this.kWLogInvalid("m_sKWFileChild"));
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			if (!validate.isString(this.m_sKWExt	))
			{
				console.error(this.kWLogInvalid("m_sExt"));
			}
			
			if (!validate.isFunction(this.callbackViewChild))
			{
				console.error(this.kWLogInvalid("callbackViewChild"));
			}
			
			//console.log(this.kWLogDisplay("m_sKWFileChild", this.m_sKWFileChild));
			
			this.m_kWViewChild = new view();
			
			this.m_kWViewChild.setKWContext(this);
			this.m_kWViewChild.setExt(this.m_sKWExt	);
			this.m_kWViewChild.setKWFile(this.m_sKWFileChild);
			this.m_kWViewChild.setKWID(this.m_sKWID + "_child");
			this.m_kWViewChild.setKWMethod(this.callbackViewChild);
			
			this.m_kWViewChild.check();
			this.m_kWViewChild.init();
		};
		
		mvc.prototype.mvcSubscribe = 
			function mvcSubscribe(sTopic, method)
		{
			var hSub = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(sTopic))
			{
				console.error(this.kWLogInvalid("sTopic"));
			}
			
			if (!validate.isNotNull(method))
			{
				console.error(this.kWLogInvalid("method"));
			}

			//console.debug(this.kWLogDisplay("sTopic", sTopic));
			
			hSub = $.subscribe(sTopic, method, this);
			if (!validate.isNotNull(hSub))
			{
				console.error(this.kWLogErrCreate("hSub"));
			}
			
			return hSub;
		};
		
		mvc.prototype.mvcSubscribeDefault = 
			function mvcSubscribeDefault()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sKWTopicSub))
			{
				return;
			}
			
			if (validate.isNotNull(this.m_hKWDefault))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isFunction(this.callbackDefault))
			{
				console.error(this.kWLogInvalid("callbackDefault"));
			}
				
			//console.debug(this.kWLogDisplay("m_sKWTopicSub", this.m_sKWTopicSub));
			
			this.m_hKWDefault = this.mvcSubscribe(	this.m_sKWTopicSub, 
                                            		this.callbackDefault	);
		};
		
		mvc.prototype.mvcSubscribeReady = 
			function mvcSubscribeReady()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sKWTopicSubReady))
			{
				return;
			}
			
			if (validate.isNotNull(this.m_hKWReady))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isFunction(this.callbackReady))
			{
				console.error(this.kWLogInvalid("callbackReady"));
			}
				
			//console.debug(this.kWLogDisplay("m_sKWTopicSubReady", this.m_sKWTopicSubReady));
			
			this.m_hKWReady = this.mvcSubscribe(	this.m_sKWTopicSubReady, 
												this.callbackReady	);
		};
		
		mvc.prototype.mvcSubscribeResize = 
			function mvcSubscribeResize()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(this.m_sKWTopicSubResize))
			{
				return;
			}
			
			if (validate.isNotNull(this.m_hKWResize))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isFunction(this.callbackResize))
			{
				console.error(this.kWLogInvalid("callbackResize"));
			}
				
			//console.debug(this.kWLogDisplay("m_sKWTopicSubResize", this.m_sKWTopicSubResize));
			
			this.m_hKWResize = this.mvcSubscribe(	this.m_sKWTopicSubResize, 
												this.callbackResize	);
		};
		
		mvc.prototype.mvcUnSubscribe =
			function mvcUnSubscribe(handle)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(handle))
			{
				console.error(this.kWLogInvalid("handle"));
			}
			
			$.unsubscribe(handle);
		};
		
		mvc.prototype.mvcUnSubscribeDefault =
			function mvcUnSubscribeDefault()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_hKWDefault))
			{
				return;
			}
			
			this.mvcUnSubscribe(this.m_hKWDefault);
			//console.debug(this.kWLogStatus("hi"));
		};

		mvc.prototype.mvcUnSubscribeReady =
			function mvcUnSubscribeReady()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_hKWReady))
			{
				return;
			}

			this.mvcUnSubscribe(this.m_hKWReady);
			//console.debug(this.kWLogStatus("hi"));
		};

		mvc.prototype.mvcUnSubscribeResize =
			function mvcUnSubscribeResize()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_hKWResize))
			{
				return;
			}

			this.mvcUnSubscribe(this.m_hKWResize);
			//console.debug(this.kWLogStatus("hi"));
		};

		return mvc;

	}
);
