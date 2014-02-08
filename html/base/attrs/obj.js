/**********************************************************************
 *
 * base/obj.js
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
		"./mapImpl/obj",
		"kWLog/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
		attrs,
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
	
		function base() 
		{
			//console.log("base::constructor");

			this.m_kWAttrs	= null;
			this.m_kWDom	= null;
			this.m_kWView	= null;
		}

		base.prototype = new log();
		base.prototype.constructor = base;
		base.constructor = log.prototype.constructor;

		base.prototype.check = 
			function check() 
		{
			log.prototype.check.call(this);
			
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
		};

		base.prototype.init =
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

		base.prototype.setKWDom =
			function(obj)
		{
			this.m_kWDom = obj;
		};

		base.prototype.setKWView =
			function(obj) 
		{
			this.m_kWView = obj;
		};

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

		base.prototype.kWAddAttr =
			function(obj)
			{
				this.baseAddAttr(obj);
			};

		base.prototype.kWRemove =
			function(sVal)
			{
				this.baseRemoveVal(sVal);
			};

		base.prototype.set =
			function(sKey, sVal)
		{
			this.baseSet(sKey, sVal); 
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		base.prototype.uBLDeleteOR =
			function()
			{
				this.baseDelete();
			};

		base.prototype.uBLInitOR =
			function()
			{
				this.baseInit();
			};

		//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		base.prototype.baseCreateOR =
			function baseCreateOR()
			{
				console.error(this.kWLogNotImpl());
			};

		base.prototype.baseDeleteOR =
			function baseDeleteOR()
			{
				console.error(this.kWLogNotImpl());
			};

		base.prototype.baseInitOR =
			function baseInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		base.prototype.baseAddAttr =
			function baseAddAttr(obj)
			{
				var sID = null;

				//console.log(this.kWLogCalled());

				if (!validate.isNotNull(this.m_kWAttrs))
				{
					console.error(this.kWLogInvalid("m_kWAttrs"));
				}

				if (!validate.isNotNull(obj))
				{
					console.error(this.kWLogInvalid("obj"));
				}

				sID = obj.getKWID();
				if (!validate.isString(sID))
				{
					console.error(this.kWLogErrRetrieve("sID"));
				}

				//console.debug(this.kWLogDisplay("sID", sID));

				this.m_kWAttrs.kWAdd(sID, obj);
			};

		base.prototype.baseCreate =
			function baseCreate()
			{
				//console.log(this.kWLogCalled());

				this.baseCreateAttrs();

				this.baseCreateOR();
			};

		base.prototype.baseCreateAttrs =
			function baseCreateAttrs()
			{
				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWAttrs))
				{
					console.error(this.kWLogRepeated());
				}

				if (!validate.isString(this.m_sKWID))
				{
					console.error(this.kWLogInvalid("m_sKWID"));
				}

				this.m_kWAttrs = new attrs();
				this.m_kWAttrs.setKWID(this.m_sKWID);

				this.m_kWAttrs.check();
				this.m_kWAttrs.init();
			};


		base.prototype.baseDelete =
			function baseDelete()
			{
				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_kWAttrs))
				{
					this.m_kWAttrs.kWDelete();
				}

				this.m_kWAttrs	= null;
				this.m_kWDom	= null;
				this.m_kWView	= null;

				this.baseDeleteOR();
			};

		base.prototype.baseDisable =
			function baseDisable()
			{
				//console.log(this.kWLogCalled());

				if (validate.isNotNull(this.m_baseDisabled))
				{
					console.error(this.kWLogInvalid("m_baseDisabled"));
				}

				this.m_baseDisabled.setKWDisabled(true);
			};

		base.prototype.baseEnable =
			function baseEnable()
		{
			//console.log(this.kWLogCalled());
			if (validate.isNotNull(this.m_baseDisabled))
			{
				console.error(this.kWLogInvalid("m_baseDisabled"));
			}
			
			this.m_baseDisabled.setKWDisabled(false);
		};
		
		base.prototype.baseInit = 
			function baseInit()
		{
			//console.log(this.kWLogCalled());
			
			this.baseCreate();
			this.baseInitOR();
		};
		
		base.prototype.baseSet = 
			function baseSet(sTag, sVal)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(sTag))
			{
				console.error(this.kWLogInvalid(sTag));
			}
			
			if (!validate.isString(sVal))
			{
				console.error(this.kWLogInvalid(sVal));
			}
			
			if (!validate.isNotNull(this.m_kWDom))
			{
				console.error(this.kWLogInvalid(m_kWDom));
			}
			
			this.m_kWDom.attr(sTag, sVal);
		};
		
		return base;

	}
);
