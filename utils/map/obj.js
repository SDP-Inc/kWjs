/**********************************************************************
 *
 * map/obj.js
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
		"stat/globals",
		"kWLog/obj",
		"kWStat/validate"	
	],
	function
	(
		globals,
		log,
		validate
	)
	{
		
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
			
		function map() 
		{
            this.m_sKWExt       = "map";
            
			this.m_kWIndex      = null;
			this.m_kWKeyArray   = null;
			this.m_kWMap        = null;
			this.m_kWValArray   = null;
			
			this.m_sKWConstant	= null;
			this.m_sKWSeparator	= null;
		}

		map.prototype = new log();
		map.prototype.constructor = map;
		map.constructor = log.prototype.constructor;

		map.prototype.check =
			function check()
		{
			log.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		map.prototype.init = 
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

		map.prototype.isKWEmpty =
			function()
		{
			return this.mapIsEmpty();
		};

		map.prototype.isKWPresent =
			function(sID)
		{
			return this.mapIsPresent(sID);
		};

		map.prototype.getKWLength =
			function()
		{
			return this.mapGetLength();
		};

		map.prototype.getKWValByIndex =
			function(nIndex)
		{
			return this.mapGetValByIndex(nIndex);
		};

		map.prototype.getKWValByKey =
			function(sKey)
		{
			return this.mapGetValByKey(sKey);
		};

		map.prototype.setKWConstant =
			function(sVal)
		{
			this.sConstant = sVal;
		};

		map.prototype.setKWSeparator =
			function(sVal)
		{
			this.sSeparator = sVal;
		};

	//*******************************************************************//
	//***																	   
	//***		public methods
	//***
	//*******************************************************************//

		map.prototype.kWAdd =
			function(sID, obj)
		{
			this.mapAdd(sID, obj);
		};

		map.prototype.kWEmpty =
			function()
			{
				this.mapEmpty();
			};

		map.prototype.kWRemove =
			function(sID)
		{
			this.mapRemove(sID);
		};

		map.prototype.toString =
			function()
		{
			return this.mapToString();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		map.prototype.uBLDeleteOR =
			function()
			{
				this.mapDelete();
			};

		map.prototype.uBLInitOR =
			function()
			{
				this.mapInit();
			};

	//*******************************************************************//
	//***																	   
	//***		private methods - overrides
	//***
	//*******************************************************************//

		map.prototype.mapInitOR = 
			function()
		{
			//console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		map.prototype.mapAdd = 
			function mapAdd(sID, obj)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWValArray))
			{
				console.error(this.kWLogInvalid("m_kWValArray"));
			}

			if (!validate.isNotNull(this.m_kWIndex))
			{
				console.error(this.kWLogInvalid("m_kWIndex"));
			}

			if (!validate.isNotNull(this.m_kWMap))
			{
				console.error(this.kWLogInvalid("m_kWMap"));
			}

			if (!validate.isNotNull(sID))
			{
				console.error(this.kWLogInvalid("sID"));
			}

			if (!validate.isNotNull(obj))
			{
				console.error(this.kWLogInvalid("obj"));
			}

			if (this.isKWPresent(sID))
			{
				console.error(this.kWLogDisplay(sID, "duplicated"));
			}

			//console.log(this.kWLogDisplay("sID", sID));
			
			this.m_kWValArray.push(obj);
			this.m_kWKeyArray.push(sID);
			this.m_kWMap[sID] = obj;
			this.m_kWIndex[sID] = this.m_kWValArray.length - 1;
		};

		map.prototype.mapCreate = 
			function mapCreate()
		{
			//console.log(this.kWLogCalled());

			this.m_kWKeyArray = [];
			this.m_kWValArray = [];
			this.m_kWIndex = {};
			this.m_kWMap = {};
		};

		map.prototype.mapDelete =
			function mapDelete()
			{
				//console.log(this.kWLogCalled());

				this.mapEmpty();

				this.m_kWIndex      = null;
				this.m_kWKeyArray   = null;
				this.m_kWMap        = null;
				this.m_kWValArray   = null;
			};

		map.prototype.mapDeleteValues =
			function mapDeleteValues()
			{
				var nLength = -1;
				var nIndex = -1;

				var value = null;

				//console.log(this.kWLogCalled());

				nLength = this.getKWLength();

				for (nIndex = 0; nIndex < nLength; nIndex++)
				{
					value = this.getKWValByIndex(nIndex);
					if (!validate.isNotNull(value))
					{
						console.error(this.kWLogErrRetrieve("value"));
					}

					if (validate.isFunction(value.kWDelete))
					{
						value.kWDelete();
					}
				}
			};

		map.prototype.mapEmpty =
			function mapEmpty()
			{
				//console.log(this.kWLogCalled());

				this.mapDeleteValues();
				this.mapCreate();
			};

		map.prototype.mapGetLength =
			function mapGetLength()
		{
			var sVal = null;

			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWValArray))
			{
				//console.error(this.kWLogInvalid("m_kWValArray"));
			}

			return this.m_kWValArray.length;
		};

		map.prototype.mapGetStringIDOL = 
			function mapGetStringIDOL()
		{
			var arrayIDOL = null;

			var sCode	= null;
			var sIDOL	= null;
			var sVal	= null;

			var nIndex	= -1;
			var nLength	= -1;

			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWValArray))
			{
				//console.error(this.kWLogInvalid("m_kWValArray"));
			}

			if (!validate.isNotNull(globals.gFiltersInfo))
			{
				//console.error(this.kWLogInvalid("gFiltersInfo"));
			}

			arrayIDOL = [];

			nLength = this.m_kWValArray.length;

			for (nIndex = 0; nIndex < nLength; nIndex++)
			{
				sCode = this.m_kWValArray[nIndex];
				if (!validate.isString(sCode))
				{
					//console.error(this.kWLogErrRetrieve("sCode"));
				}

				sIDOL = globals.gFiltersInfo.getKWIDOL(sCode);
				if (!validate.isString(sIDOL))
				{
					//console.error(this.kWLogErrRetrieve("sIDOL"));
				}

				arrayIDOL[nIndex] = sIDOL;
			}

			sVal = arrayIDOL.join("|");

			return sVal;
		};

		map.prototype.mapGetValByIndex =
			function mapGetValByIndex(nIndex)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWValArray))
			{
				//console.error(this.kWLogInvalid("m_kWValArray"));
			}

			if (!validate.isNotNull(this.m_kWIndex))
			{
				//console.error(this.kWLogInvalid("m_kWIndex"));
			}

			if (!validate.isNotNull(this.m_kWMap))
			{
				//console.error(this.kWLogInvalid("m_kWMap"));
			}

			if (!validate.isNumberNotNeg(nIndex))
			{
				//console.error(this.kWLogInvalid("nIndex"));
			}

			return this.m_kWValArray[nIndex];
		};

		map.prototype.mapGetValByKey = 
			function mapGetValByKey(sKey)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWValArray))
			{
				//console.error(this.kWLogInvalid("m_kWValArray"));
			}

			if (!validate.isNotNull(this.m_kWIndex))
			{
				//console.error(this.kWLogInvalid("m_kWIndex"));
			}

			if (!validate.isNotNull(this.m_kWMap))
			{
				//console.error(this.kWLogInvalid("m_kWMap"));
			}

			if (!validate.isString(sKey))
			{
				//console.error(this.kWLogInvalid("sKey"));
			}

			return this.m_kWMap[sKey];
		};

		map.prototype.mapInit =
			function mapInit()
		{
			//console.log(this.kWLogCalled());

			this.mapCreate();
			this.mapInitOR();
		};
		
		map.prototype.mapIsEmpty = 
			function mapIsEmpty()
		{
			nIndex = -1;

			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWValArray))
			{
				//console.error(this.kWLogInvalid("m_kWValArray"));
			}

			if (!validate.isNotNull(this.m_kWIndex))
			{
				//console.error(this.kWLogInvalid("m_kWIndex"));
			}

			if (!validate.isNotNull(this.m_kWMap))
			{
				//console.error(this.kWLogInvalid("m_kWMap"));
			}

			if (this.m_kWValArray.length === 0)
			{
				return true;
			}

			return false;
		};

		map.prototype.mapIsPresent = 
			function mapIsPresent(sID)
		{
			nIndex = -1;

			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWValArray))
			{
				console.error(this.kWLogInvalid("m_kWValArray"));
			}

			if (!validate.isNotNull(this.m_kWIndex))
			{
				console.error(this.kWLogInvalid("m_kWIndex"));
			}

			if (!validate.isNotNull(this.m_kWMap))
			{
				console.error(this.kWLogInvalid("m_kWMap"));
			}

			if (!validate.isNotNull(sID))
			{
				console.error(this.kWLogInvalid("sID"));
			}

			//console.log(this.kWLogDisplay("sID", sID));

			nIndex = this.m_kWIndex[sID];
			if (nIndex == undefined)
			{
				return false;
			}
			
			//console.log(this.kWLogDisplay("nIndex", nIndex));
			
			if (validate.isNumberNotNeg(nIndex))
			{
				return true;
			}

			return false;
		};

		map.prototype.mapRemove = 
			function mapRemove(sID)
		{
			nIndex = -1;

			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWValArray))
			{
				console.error(this.kWLogInvalid("m_kWValArray"));
			}

			if (!validate.isNotNull(this.m_kWIndex))
			{
				console.error(this.kWLogInvalid("m_kWIndex"));
			}

			if (!validate.isNotNull(this.m_kWMap))
			{
				console.error(this.kWLogInvalid("m_kWMap"));
			}

			if (!validate.isString(sID))
			{
				console.error(this.kWLogInvalid("sID"));
			}

			if (!this.isKWPresent(sID))
			{
				console.error(this.kWLogInvalid("sID"));
			}

			nIndex = this.m_kWIndex[sID];
			if (!validate.isNumberNotNeg(nIndex))
			{
				console.error(this.kWLogErrRetrieve("nIndex"));
			}

			this.m_kWKeyArray.splice(nIndex, 1);
			this.m_kWValArray.splice(nIndex, 1);

			this.m_kWMap[sID] = null;

			this.m_kWIndex = {};

			for (nIndex = 0;nIndex < this.m_kWValArray.length; nIndex++)
			{
				this.m_kWIndex[this.m_kWKeyArray[nIndex]] = nIndex;
			}
		};

		map.prototype.mapToString = 
			function mapToString()
		{
			var sVal = null;

			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWValArray))
			{
				console.error(this.kWLogInvalid("m_kWValArray"));
			}

			sVal = this.m_kWValArray.join("|");

			return sVal;
		};
		
		return map;
	}
)