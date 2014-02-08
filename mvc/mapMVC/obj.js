/**********************************************************************
 *
 * mapMVC.js
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
		"kWMVC/obj",
		"kWStat/validate"	
	],
	function
	(
		map,
		mvc,
		validate
	)
	{
		
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
			
		function mapMVC() 
		{
			this.m_bKWHasMultiple		= true;
				
			this.m_sKWKeyConstant		= "kwConstant";
			this.m_sKWKeyHasMultiple	= "kwHasMultiple";
			this.m_sKWKeyIDNumeric	    = "kwIDNumeric";
			this.m_sKWKeySeparator	    = "kwSeparator";
			
			this.m_kWMap				= null;
			
			this.m_sKWConstant		    = null;
			this.m_sKWSeparator		    = null;
			
			this.m_nKWID				= -1;
			
			this.m_bKWHasMultiple		= false;
		}

		mapMVC.prototype = new mvc();
		mapMVC.prototype.constructor = mapMVC;
		mapMVC.constructor = mvc.prototype.constructor;

		mapMVC.prototype.check =
			function check()
		{
			mvc.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isString("m_sKWKeyConstant"))
			{
				console.error(this.kWLogInvalid("m_sKWKeyConstant"));
			}
			
			if (!validate.isString("m_sKWKeyHasMultiple"))
			{
				console.error(this.kWLogInvalid("m_sKWKeyHasMultiple"));
			}
			
			if (!validate.isString("m_sKWKeyIDNumeric"))
			{
				console.error(this.kWLogInvalid("m_sKWKeyIDNumeric"));
			}
			
			if (!validate.isString("m_sKWKeySeparator"))
			{
				console.error(this.kWLogInvalid("m_sKWKeySeparator"));
			}
		};

		mapMVC.prototype.init =
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

		mapMVC.prototype.getKWIDNumeric =
			function()
		{
			return this.m_nKWID;
		};

		mapMVC.prototype.getKWLength =
			function()
		{
			return this.mmGetLength();
		};

		mapMVC.prototype.getKWValByIndex =
			function(nIndex)
		{
			return this.mmGetValByIndex(nIndex);
		};

		mapMVC.prototype.getKWValByKey =
			function(sKey)
		{
			return this.mmGetValByKey(sKey);
		};

		mapMVC.prototype.isKWEmpty =
			function()
		{
			return this.mmIsEmpty();
		};

		mapMVC.prototype.isKWPresent =
			function(sID)
		{
			return this.mmIsPresent(sID);
		};

	//*******************************************************************//
	//***																	   
	//***		public methods
	//***
	//*******************************************************************//

		mapMVC.prototype.kWAdd =
			function(sID, obj)
		{
			this.mmAdd(sID, obj);
		};

		mapMVC.prototype.kWDeleteAll =
			function()
		{
			this.mmDeleteAll();
		};

		mapMVC.prototype.kWEmpty =
			function()
		{
			this.mmEmpty();
		};

		mapMVC.prototype.kWRemove =
			function(sID)
		{
			this.mmRemove(sID);
		};

		mapMVC.prototype.toggle = 
			function(sID)
		{
			this.mmToggle(sID);
		};

		mapMVC.prototype.toString = 
			function()
		{
			return this.mmToString();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
		
		mapMVC.prototype.mvcInitOR = 
			function()
		{
			this.mmInit();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods - overrides
	//***
	//*******************************************************************//

		mapMVC.prototype.mmInitOR = 
			function mmInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
		mapMVC.prototype.mmStoreOR = 
			function mmStoreOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		mapMVC.prototype.mmAdd = 
			function mmAdd(sID, obj)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWMap))
			{
				console.error(this.kWLogInvalid("m_kWMap"));
			}
			
			if (!this.m_bKWHasMultiple)
			{
				this.kWEmpty();
			}
			
			this.m_kWMap.kWAdd(sID, obj);
		};

		mapMVC.prototype.mmCreate =
			function mmCreate()
			{
				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWMap))
				{
					console.error(this.kWLogRepeated());
				}

				if (!validate.isString(this.m_sKWID))
				{
					console.error(this.kWLogInvalid("m_sKWID"));
				}

				if (!validate.isString(this.m_sKWSeparator))
				{
					console.error(this.kWLogInvalid("m_sKWSeparator"));
				}

				this.m_kWMap = new map();

				this.m_kWMap.setKWID(this.m_sKWID);
				this.m_kWMap.setKWSeparator(this.m_sKWSeparator);
				this.m_kWMap.setKWConstant(this.m_sKWConstant);

				this.m_kWMap.check();
				this.m_kWMap.init();
			};

		mapMVC.prototype.mmDeleteAll =
			function mmDeleteAll()
			{
				console.log(this.kWLogCalled());

				if (!validate.isNotNull(this.m_kWMap))
				{
					return;
				}

				this.m_kWMap.kWDeleteAll();
				this.kWMap = null;
			};

		mapMVC.prototype.mmEmpty = 
			function mmEmpty()
		{
			//console.log(this.logCalled());

			if (!validate.isNotNull(this.m_kWMap))
			{
				console.error(this.logInvalid("m_kWMap"));
			}
			
			this.m_kWMap.kWEmpty();
		};

		mapMVC.prototype.mmGetLength =
			function mmGetLength()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWMap))
			{
				console.error(this.kWLogInvalid("m_kWMap"));
			}
			
			return this.m_kWMap.getKWLength();
		};

		mapMVC.prototype.mmGetValByIndex =
			function mmGetValByIndex(nIndex)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWMap))
			{
				console.error(this.kWLogInvalid("m_kWMap"));
			}
			
			return this.m_kWMap.getKWValByIndex(nIndex);
		};

		mapMVC.prototype.mmGetValByKey = 
			function mmGetValByKey(sKey)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWMap))
			{
				console.error(this.kWLogInvalid("m_kWMap"));
			}
			
			return this.m_kWMap.getKWValByKey(sKey);
		};

		mapMVC.prototype.mmInit =
			function mmInit()
		{
			//console.log(this.kWLogCalled());

			this.mmRetrieve();
			
			this.mmCreate();
			this.mmStore();
			this.mmInitOR();
		};
		
		mapMVC.prototype.mmIsEmpty = 
			function mmIsEmpty()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWMap))
			{
				console.error(this.kWLogInvalid("m_kWMap"));
			}
			
			return this.m_kWMap.isKWEmpty();
		};

		mapMVC.prototype.mmIsPresent = 
			function mmIsPresent(sID)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWMap))
			{
				console.error(this.kWLogInvalid("m_kWMap"));
			}
			
			return this.m_kWMap.isKWPresent(sID);
		};

		mapMVC.prototype.mmRetrieveConstant = 
			function mmRetrieveConstant()
		{
			//console.log(this.kWLogCalled());
		
			if (!validate.isString(this.m_sKWKeyConstant))
			{
				console.error(this.kWLogInvalid("m_sKWKeyConstant"));
			}
			
			this.m_sKWConstant = this.getKWViewText(this.m_sKWKeyConstant);
			if (validate.isString(this.m_sKWConstant))
			{
				//console.debug(this.kWLogDisplay(this.m_sKWKeyConstant, this.m_sKWConstant));
			}
		};
		
		mapMVC.prototype.mmPublish = 
			function mmPublish()
		{
			var data = null;
			
			//console.log(this.kWLogCalled());
		
			if (!validate.isString(this.m_sKWTopicPub))
			{
				console.error(this.kWLogInvalid("m_sKWTopicPub"));
			}
			
			data = {};
			
			this.mvcPublish(this.m_sKWTopicPub, data);
		};
		
		mapMVC.prototype.mmRetrieve =
			function mmRetrieve()
		{
			//console.log(this.kWLogCalled());
			this.mmRetrieveConstant();
			this.mmRetrieveHasMultiple();
			this.mmRetrieveIDNumeric();
			this.mmRetrieveSeparator();
		};
		
		mapMVC.prototype.mmRetrieveHasMultiple = 
			function mmRetrieveHasMultiple()
		{
			//console.log(this.kWLogCalled());
		
			if (!validate.isString(this.m_sKWKeyHasMultiple))
			{
				console.error(this.kWLogInvalid("m_sKWKeyHasMultiple"));
			}
			
			this.m_bKWHasMultiple = this.getKWViewBool(this.m_sKWKeyHasMultiple);
			if (!validate.isBool(this.m_bKWHasMultiple))
			{
				console.error(this.kWLogErrRetrieve("m_bKWHasMultiple"));
			}
			//console.debug(this.kWLogDisplay(this.m_sKWKeyHasMultiple, this.m_bKWHasMultiple));
		};
		
		mapMVC.prototype.mmRetrieveIDNumeric = 
			function mmRetrieveIDNumeric()
		{
			//console.log(this.kWLogCalled());
		
			if (validate.isNumberPos(this.m_nKWID))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWKeyIDNumeric))
			{
				console.error(this.kWLogInvalid("m_sKWKeyIDNumeric"));
			}
			
			this.m_nKWID = this.getKWViewNumeric(this.m_sKWKeyIDNumeric);
			if (!validate.isNumberNotNeg(this.m_nKWID))
			{
				console.error(this.kWLogErrRetrieve("m_nKWID"));
			}
			//console.debug(this.kWLogDisplay(this.m_sKWKeyIDNumeric, this.m_nKWID));
		};
		
		mapMVC.prototype.mmRetrieveSeparator = 
			function mmRetrieveSeparator()
		{
			//console.log(this.kWLogCalled());
		
			if (validate.isString(this.m_sKWSeparator))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWKeySeparator))
			{
				console.error(this.kWLogInvalid("m_sKWKeySeparator"));
			}
			
			this.m_sKWSeparator = this.getKWViewText(this.m_sKWKeySeparator);
			if (!validate.isString(this.m_sKWSeparator))
			{
				console.error(this.kWLogErrRetrieve("m_sKWSeparator"));
			}
			
			//console.debug(this.kWLogDisplay(this.m_sKWKeySeparator, this.m_sKWSeparator));
		};
		
		mapMVC.prototype.mmRemove = 
			function mmRemove(sID)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWMap))
			{
				console.error(this.kWLogInvalid("m_kWMap"));
			}
			
			this.m_kWMap.kWRemove(sID);
		};

		mapMVC.prototype.mmStore = 
			function mmStore()
		{
			//console.log(this.kWLogCalled());
			this.mmStoreOR();
		};

		mapMVC.prototype.mmToggle = 
			function mmToggle(sID)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWMap))
			{
				console.error(this.kWLogInvalid("m_kWMap"));
			}
			
			this.m_kWMap.toggle(sID);
		};

		mapMVC.prototype.mmToString = 
			function mmToString()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWMap))
			{
				console.error(this.kWLogInvalid("m_kWMap"));
			}
			
			return this.m_kWMap.toString();
		};

		return mapMVC;
	}
);