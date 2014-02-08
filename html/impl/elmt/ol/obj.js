/**********************************************************************
 *
 * ol/obj.js
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
		"../../attrs/ol/obj",
		"../../view/ol/obj",
		"../../../base/elmt/obj",
		"kWStat/validate"
	], 
	function
	(
		attrs,
		view,
		elmt,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function ol()
		{
			//console.log("ol::constructor");
			this.m_sKWTag		= "ol";
			
			this.m_sKWType		= null;
			
			this.m_nKWStart		= -1;
			
			this.m_bKWReversed	= false;
		}

		ol.prototype = new elmt();
		ol.prototype.constructor = ol;
		ol.constructor = elmt.prototype.constructor;

		ol.prototype.check =
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		ol.prototype.init = 
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
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		ol.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.olCreateAttrs(); 
		};
		
		ol.prototype.elmtCreateViewOR =
			function()
		{
			return this.olCreateView();
		};
		
		ol.prototype.elmtInitOR = 
			function()
		{
			this.olInit();
		};
		
		ol.prototype.elmtRetrieveOR = 
			function()
		{
			this.olRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		ol.prototype.olInitOR = 
			function olInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		ol.prototype.olCreateAttrs = 
			function olCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWReversed(this.m_bKWReversed);
			theAttrs.setKWStart(this.m_nKWStart);
			theAttrs.setKWType(this.m_sKWType);
			
			return theAttrs;
		};

		ol.prototype.olCreateView = 
			function olCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		ol.prototype.olInit = 
			function olInit()
		{
			//console.log(this.kWLogCalled());
			this.olInitOR();
		};

		ol.prototype.olRetrieve = 
			function olRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.olRetrieveReversed();
			this.olRetrieveStart();
			this.olRetrieveType();
		};
	
		ol.prototype.olRetrieveReversed = 
			function olRetrieveReversed()
		{
			var value	= null;
			
			var bVal	= null;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWReversed();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWReversed = bVal;
				//console.debug(this.kWLogDisplay("m_bKWReversed", this.m_bKWReversed));
			}
		};
		
		ol.prototype.olRetrieveStart = 
			function olRetrieveStart()
		{
			var value = null;
			
			var nVal	= null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberNotNeg(this.m_nKWStart))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWStart();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value", value));
			}
			
			nVal = value.getKWValue();
			if (validate.isNumberNotNeg(nVal))
			{
				this.m_nKWStart = nVal;
				//console.debug(this.kWLogDisplay("m_nKWStart", this.m_nKWStart));
			}
		};
		
		ol.prototype.olRetrieveType = 
			function olRetrieveType()
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
				console.error(this.kWLogErrRetrieve("value", value));
			}
			
			this.m_sKWType = value.getKWValue();
			if (validate.isString(this.m_sKWType))
			{
				//console.log(this.kWLogDisplay("m_sKWType", this.m_sKWType));
			}
		};
			
		return ol;

	}
);
