/**********************************************************************
 *
 * link/obj.js
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
		"../../attrs/link/obj",
		"../../view/link/obj",
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

		function link()
		{
			//console.log("a::constructor");

			this.m_sKWTag				= "link";
			
			this.m_bKWIsClickHandled	= true;
			
			this.m_sKWHRef			    = null;
			this.m_sKWHRefLang		    = null;
			this.m_sKWMedia			    = null;
			this.m_sKWRel				= null;
			this.m_sKWSizes			    = null;
			this.m_sKWType			    = null;
		}

		link.prototype = new elmt();
		link.prototype.constructor = link;
		link.constructor = elmt.prototype.constructor;

		link.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		link.prototype.init = 
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

		link.prototype.setKWHRef =
			function(sVal)
		{
			this.m_sKWHRef = sVal;
		};

	//*******************************************************************//
	//***																	   
	//***		public callbacks
	//***
	//*******************************************************************//
	
		link.prototype.linkCallback = 
			function(e) 
		{
			var self = null;
			
			//console.log("a::aCallback");

			e.preventDefault();
		
			self = $.data(this, "ctlr");
			if (!self)
			{
			   throw new Error("a::aCallback() [self] invalid"); 
			}

			self.linkClick(e);
		};
		
	//*******************************************************************//
	//***																	   
	//***		public methods
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		link.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.linkCreateAttrs(); 
		};
		
		link.prototype.elmtCreateViewOR = 
			function()
		{
			return this.linkCreateView();
		};
		
		link.prototype.elmtInitOR = 
			function()
		{
			this.linkInit();
		};
		
		link.prototype.elmtRetrieveOR = 
			function()
		{
			this.linkRetrieve(); 
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		link.prototype.linkClickOR = 
			function aClickOR()
		{
			console.error(this.kWLogNotImpl());
		};

		link.prototype.linkInitOR = 
			function aInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		link.prototype.linkClick = 
			function linkClick()
		{
			//console.log(this.kWLogCalled());
			this.linkClickOR();
		};

		link.prototype.linkCreateAttrs = 
			function linkCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWHRef(this.m_sKWHRef);
			theAttrs.setKWHRefLang(this.m_sKWHRefLang);
			theAttrs.setKWMedia(this.m_sKWMedia);
			theAttrs.setKWRel(this.m_sKWRel);
			theAttrs.setKWSizes(this.m_sKWSizes);
			theAttrs.setKWType(this.m_sKWType);
			
			return theAttrs;
		};

		link.prototype.linkCreateView = 
			function linkCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		link.prototype.linkInit = 
			function linkInit()
		{
			//console.log("a::aInit");
			
			this.linkSubscribe();
			this.linkInitOR();
		};

		link.prototype.linkRetrieve = 
			function linkRetrieve()
		{
			//console.log("a::aInit");
			this.linkRetrieveHRef();
			this.linkRetrieveHRefLang();
			this.linkRetrieveIsClickHandled();
			this.linkRetrieveMedia();
			this.linkRetrieveRel();
			this.linkRetrieveSizes();
		};

		link.prototype.linkRetrieveHRef = 
			function aRetrieveHRef()
		{
			//console.log(this.kWLogCalled());
			
			this.linkRetrieveHRefI18N()
			
			if (!validate.isString(this.m_sKWHRef))
			{
				this.linkRetrieveHRefRaw();
			}
		};
		
		link.prototype.linkRetrieveHRefI18N = 
			function aRetrieveHRefI18N()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWHRef))
			{
				console.error(this.kWLogRepeated());
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
			
			this.m_sKWHRef = value.getKWValue();
			if (validate.isString(this.m_sKWHRef))
			{
				//console.debug(this.kWLogDisplay("m_sKWHRef", this.m_sKWHRef));
			}
		};
		
		link.prototype.linkRetrieveHRefLang = 
			function aRetrieveHRefLang()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWHRefLang))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWHRefLang();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWHRefLang = value.getKWValue();
			if (validate.isString(this.m_sKWHRefLang))
			{
				//console.debug(this.kWLogDisplay("m_sKWHRefLang", this.m_sKWHRefLang));
			}
		};
		
		link.prototype.linkRetrieveHRefRaw = 
			function aRetrieveHRefRaw()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWHRefRaw))
			{
				console.error(this.kWLogRepeated());
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
			
			this.m_sKWHRef = value.getKWValue();
			if (validate.isString(this.m_sKWHRef))
			{
				//console.debug(this.kWLogDisplay("m_sKWHRef", this.m_sKWHRef));
			}
		};
		
		link.prototype.linkRetrieveIsClickHandled = 
			function aRetrieveIsClickHandled()
		{
			var value			= null;
			
			var bIsClickHandled = null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWIsClickHandled();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bIsClickHandled = value.getKWValue();
			if (validate.isBool(bIsClickHandled))
			{
				this.m_bKWIsClickHandled = bIsClickHandled;
				//console.debug(this.kWLogDisplay("m_bKWIsClickHandled", this.m_bKWIsClickHandled));
			}
		};
		
		link.prototype.linkRetrieveMedia = 
			function aRetrieveMedia()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWMedia))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWMedia();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWMedia = value.getKWValue();
			if (validate.isString(this.m_sKWMedia))
			{
				//console.debug(this.kWLogDisplay("m_sKWMedia", this.m_sKWMedia));
			}
		};
		
		link.prototype.linkRetrieveRel = 
			function aRetrieveRel()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWRel))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWRel();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWRel = value.getKWValue();
			if (validate.isString(this.m_sKWRel))
			{
				//console.debug(this.kWLogDisplay("m_sKWRel", this.m_sKWRel));
			}
		};
		
		link.prototype.linkRetrieveSizes = 
			function aRetrieveSizes()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWSizes))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWSizes();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWSizes = value.getKWValue();
			if (validate.isString(this.m_sKWSizes))
			{
				//console.debug(this.kWLogDisplay("m_sKWSizes", this.m_sKWSizes));
			}
		};
		
		link.prototype.linkRetrieveType = 
			function aRetrieveType()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWType))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWType();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWType = value.getKWValue();
			if (validate.isString(this.m_sKWType))
			{
				//console.debug(this.kWLogDisplay("m_sKWType", this.m_sKWType));
			}
		};
		
		link.prototype.linkSubscribe = 
			function aSubscribe()
		{
			//console.log(this.kWLogCalled());
			
			if (!this.m_bKWIsClickHandled)
			{
				return;
			}
			
			if (!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}

			if (!validate.isFunction(this.linkCallback))
			{
				console.error(this.kWLogInvalid("aCallback"));
			}

			this.m_kWDom.click(this.linkCallback);
		};
		
		return link;

	}
);
