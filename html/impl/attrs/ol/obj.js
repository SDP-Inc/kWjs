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
		"../../attr/reversed/obj",
		"../../attr/start/obj",
		"../../attr/type/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		reversed,
		start,
		type,
		html,
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
			//console.olg("ol::constructor");

			this.m_kWReversed	= null;
			this.m_kWStart		= null;
			this.m_kWType		= null;
			
			this.m_sKWType		= null;
			
			this.m_bKWReversed	= false;
			
			this.m_nKWStart		= -1;
		}

		ol.prototype = new html();
		ol.prototype.constructor = ol;
		ol.constructor = html.prototype.constructor;

		ol.prototype.check =
			function check()
		{
			html.prototype.check.call(this);
			//console.olg(this.olgCalled());
		};

		ol.prototype.init = 
			function init()
		{
			//console.olg(this.olgCalled());
			html.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		ol.prototype.setKWReversed =
			function(bVal)
		{
			this.olSetReversed(bVal);
		};

		ol.prototype.setKWStart =
			function(nVal)
		{
			this.olSetStart(nVal);
		};

		ol.prototype.setKWType =
			function(sVal)
		{
			this.olSetType(sVal);
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

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		ol.prototype.htmlCreateOR =
			function()
		{
			this.olCreate();
		};
		
		ol.prototype.htmlDeleteOR =
			function()
		{
			this.olDelete();
		};

		ol.prototype.htmlInitOR =
			function()
		{
			this.olInit();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		ol.prototype.olCreate = 
			function olCreate()
		{
			//console.olg(this.olgCalled());
			
			this.olCreateReversed();
			this.olCreateStart();
			this.olCreateType();
		};
		
		ol.prototype.olCreateReversed =
			function olCreateReversed()
		{
			var value   = null;

			var bValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWReversed))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWReversed();
			if (validate.isNotNull(value))
			{
				bValue = value.getKWValue();
			}

			if (!validate.isBool(bValue))
			{
				bValue = this.m_bKWReversed;
			}

			if (!validate.isBool(bValue))
			{
				return;
			}

			this.olCreateReversedImpl();

			this.m_kWReversed.setKWValue(bValue);
		};

		ol.prototype.olCreateReversedImpl =
			function olCreateReversedImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWReversed))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			this.m_kWReversed = new reversed();

			this.m_kWReversed.setKWIDParent(this.m_sKWID);
			this.m_kWReversed.setKWDom(this.m_kWDom);

			this.m_kWReversed.check();
			this.m_kWReversed.init();

			this.kWAddAttr(this.m_kWReversed);
		};

		ol.prototype.olCreateStart =
			function olCreateStart()
		{
			var value   = null;

			var nValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWStart))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWStart();
			if (validate.isNotNull(value))
			{
				nValue = value.getKWValue();
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				nValue = this.m_nKWStart;
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				return;
			}

			this.olCreateStartImpl();

			this.m_kWStart.setKWValue(nValue);
		};

		ol.prototype.olCreateStartImpl =
			function olCreateStartImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWStart))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			this.m_kWStart = new start();

			this.m_kWStart.setKWIDParent(this.m_sKWID);
			this.m_kWStart.setKWDom(this.m_kWDom);

			this.m_kWStart.check();
			this.m_kWStart.init();

			this.kWAddAttr(this.m_kWStart);
		};

		ol.prototype.olCreateType =
			function olCreateType()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWType))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWType();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWType;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.olCreateTypeImpl();

			this.m_kWType.setKWValue(sValue);
		};

		ol.prototype.olCreateTypeImpl =
			function olCreateTypeImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWType))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			this.m_kWType = new type();

			this.m_kWType.setKWIDParent(this.m_sKWID);
			this.m_kWType.setKWDom(this.m_kWDom);

			this.m_kWType.check();
			this.m_kWType.init();

			this.kWAddAttr(this.m_kWType);
		};

		ol.prototype.olDelete =
			function olDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWReversed	= null;
			this.m_kWStart		= null;
			this.m_kWType		= null;
		};

		ol.prototype.olInit =
			function olInit()
		{
			//console.olg(this.olgCalled());
		};
		
		ol.prototype.olSetReversed =
			function olSetReversed(bVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isBool(bVal))
			{
				return;
			}

			this.m_bKWReversed = bVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWReversed))
			{
				this.olCreateReversedImpl();
			}

			this.m_kWReversed.setKWValue(this.m_bKWReversed);
		};


		ol.prototype.olSetStart =
			function olSetStart(nVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNumberNotNeg(nVal))
			{
				return;
			}

			this.m_nKWStart = nVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWStart))
			{
				this.olCreateStartImpl();
			}

			this.m_kWStart.setKWValue(this.m_nKWStart);
		};


		ol.prototype.olSetType =
			function olSetType(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWType = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWType))
			{
				this.olCreateTypeImpl();
			}

			this.m_kWType.setKWValue(this.m_sKWType);
		};

		return ol;

	}
);
