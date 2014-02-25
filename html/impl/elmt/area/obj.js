/**********************************************************************
 *
 * area/obj.js
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
		"../../attrs/area/obj",
		"../../view/area/obj",
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

		function area()
		{
			//console.log("area::constructor");
			this.m_sKWTag		= "area";
			
			this.m_sKWCoords	= null;
			this.m_sKWHRef		= null;
			this.m_sKWHRefLang	= null;
			this.m_sKWMedia		= null;
			this.m_sKWRel		= null;
			this.m_sKWShape		= null;
			this.m_sKWTarget	= null;
			this.m_sKWType		= null;
		}

		area.prototype = new elmt();
		area.prototype.constructor = area;
		area.constructor = elmt.prototype.constructor;

		area.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		area.prototype.init = 
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

		area.prototype.areaInitOR = 
			function areaInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		area.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.areaCreateAttrs(); 
		};
		
		area.prototype.elmtCreateViewOR = 
			function()
		{
			return this.areaCreateView();
		};
		
		area.prototype.elmtInitOR = 
			function()
		{
			this.areaInit();
		};
		
		area.prototype.elmtRetrieveOR = 
			function()
		{
			this.areaRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		area.prototype.areaCreateAttrs = 
			function areaCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			theAttrs = new attrs();
			
			theAttrs.setKWCoords(this.m_sKWCoords);
			theAttrs.setKWHRef(this.m_sKWHRef);
			theAttrs.setKWHRefLang(this.m_sKWHRefLang);
			theAttrs.setKWMedia(this.m_sKWMedia);
			theAttrs.setKWRel(this.m_sKWRel);
			theAttrs.setKWShape(this.m_sKWShape);
			theAttrs.setKWTarget(this.m_sKWTarget);
			theAttrs.setKWType(this.m_sKWType);
			
			return theAttrs;
		};

		area.prototype.areaCreateView = 
			function areaCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		area.prototype.areaInit = 
			function areaInit()
		{
			//console.log(this.kWLogCalled());
			this.areaInitOR();
		};
		
		area.prototype.areaRetrieve = function()
		{
			//console.log("a::aInit");
			this.areaRetrieveCoords();
			this.areaRetrieveHRef();
			this.areaRetrieveHRefLang();
			this.areaRetrieveMedia();
			this.areaRetrieveRel();
			this.areaRetrieveShape();
			this.areaRetrieveTarget();
			this.areaRetrieveType();
		};

		area.prototype.areaRetrieveCoords = 
			function areaRetrieveCoords()
		{
			var value   = null;

			var sValue  = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWCoords();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			sValue = value.getKWValue();
			if (!validate.isString(sValue))
			{
				return;
			}

			this.m_sKWCoords = sValue;
			//console.debug(this.kWLogDisplay("m_sKWCoords", this.m_sKWCoords));
		};
		
		area.prototype.areaRetrieveHRef = 
			function areaRetrieveHRef()
		{
			//console.log(this.kWLogCalled());
			
			this.areaRetrieveHRefI18N()
			this.areaRetrieveHRefRaw();
		};
		
		area.prototype.areaRetrieveHRefI18N = 
			function areaRetrieveHRefI18N()
		{
			var value = null;
			
			var sValue  = null;

			//console.log(this.kWLogCalled());
			
			if (this.m_bKWHRefRetrieved)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWHRef();
			if (!validate.isNotNull(value))
			{
				//console.error(this.kWLogErrRetrieve("value"));
			}
			
			sValue = value.getKWValue();
			if (!validate.isString(sValue))
			{
				return;
			}

			this.m_sKWHRef = sValue;
			//console.debug(this.kWLogDisplay("m_sKWHRef", this.m_sKWHRef));
			this.m_bKWHRefRetrieved = true;
		};
		
		area.prototype.areaRetrieveHRefLang = 
			function aRetrieveHRefLang()
		{
			var value = null;
			
			var sValue  = null;

			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWHRefLang();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			sValue = value.getKWValue();
			if (!validate.isString(sValue))
			{
				return;
			}

			this.m_sKWHRefLang = sValue;
			//console.debug(this.kWLogDisplay("m_sKWHRefLang", this.m_sKWHRefLang));
		};
		
		area.prototype.areaRetrieveHRefRaw = 
			function areaRetrieveHRefRaw()
		{
			var value = null;
			
			var sValue  = null;

			//console.log(this.kWLogCalled());
			
			if (this.m_bKWHRefRetrieved)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWHRefRaw();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			sValue = value.getKWValue();
			if (!validate.isString(sValue))
			{
				return;
			}

			this.m_sKWHRef = sValue;
			//console.debug(this.kWLogDisplay("m_sKWHRef", this.m_sKWHRef));
			this.m_bKWHRefRetrieved = true;
		};
		
		area.prototype.areaRetrieveMedia = 
			function aRetrieveMedia()
		{
			var value = null;
			
			var sValue  = null;

			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWMedia();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			sValue = value.getKWValue();
			if (!validate.isString(sValue))
			{
				return;
			}

			this.m_sKWMedia = sValue;
			//console.debug(this.kWLogDisplay("m_sKWMedia", this.m_sKWMedia));
		};
		
		area.prototype.areaRetrieveRel = 
			function aRetrieveRel()
		{
			var value = null;
			
			var sValue  = null;

			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWRel();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			sValue = value.getKWValue();
			if (!validate.isString(sValue))
			{
				return;
			}

			this.m_sKWRel = sValue;
			//console.debug(this.kWLogDisplay("m_sKWRel", this.m_sKWRel));
		};
		
		area.prototype.areaRetrieveShape = 
			function areaRetrieveShape()
		{
			var value = null;
			
			var sValue  = null;

			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWShape();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			sValue = value.getKWValue();
			if (!validate.isString(sValue))
			{
				return;
			}

			this.m_sKWShape = sValue;
			//console.debug(this.kWLogDisplay("m_sKWShape", this.m_sKWShape));
		};
		
		area.prototype.areaRetrieveTarget = 
			function aRetrieveTarget()
		{
			var value = null;
			
			var sValue  = null;

			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWTarget();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			sValue = value.getKWValue();
			if (!validate.isString(sValue))
			{
				return;
			}

			this.m_sKWTarget = sValue;
			//console.debug(this.kWLogDisplay("m_sKWTarget", this.m_sKWTarget));
		};
		
		area.prototype.areaRetrieveType = 
			function areaRetrieveType()
		{
			var value = null;
			
			var sValue  = null;

			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWType();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			sValue = value.getKWValue();
			if (!validate.isString(sValue))
			{
				return;
			}

			this.m_sKWType = sValue;
			//console.debug(this.kWLogDisplay("m_sKWType", this.m_sKWType));
		};
		
		return area;

	}
);
