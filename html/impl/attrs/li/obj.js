/**********************************************************************
 *
 * li/obj.js
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
		"../../attr/value/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		value,
		html,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function li()
		{
			//console.log("li::constructor");
			
			this.m_kWValue		= null;
			
			this.m_nKWValue		= null;
		}

		li.prototype = new html();
		li.prototype.constructor = li;
		li.constructor = html.prototype.constructor;

		li.prototype.check =
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		li.prototype.init =
			function init()
		{
			//console.log(this.kWLogCalled());
			html.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		li.prototype.setKWValue =
			function(nVal)
		{
			this.liSetValue(sVal);
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
	
		li.prototype.htmlCreateOR = 
			function()
		{
			this.liCreate();
		};

		li.prototype.htmlDeleteOR =
			function()
		{
			this.liDelete();
		};

		li.prototype.htmlInitOR =
			function()
		{
			this.liInit();
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

		li.prototype.liCreate = 
			function liCreate()
		{
			//console.log(this.kWLogCalled());
			this.liCreateValue();
		};

		li.prototype.liCreateValue =
			function liCreateValue()
		{
			var value   = null;

			var sValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWValue))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWValue();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWValue;
			}

			if (!validate.isString(sValue))
			{
				return;
			}

			this.liCreateValueImpl();

			this.m_kWValue.setKWValue(sValue);
		};

		li.prototype.liCreateValueImpl =
			function liCreateValueImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWValue))
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

			this.m_kWValue = new value();

			this.m_kWValue.setKWIDParent(this.m_sKWID);
			this.m_kWValue.setKWDom(this.m_kWDom);

			this.m_kWValue.check();
			this.m_kWValue.init();

			this.kWAddAttr(this.m_kWValue);
		};

		li.prototype.liDelete =
			function liDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWValue = null;
		};

		li.prototype.liInit =
			function liInit()
		{
			//console.log(this.kWLogCalled());
		};

		li.prototype.liSetValue =
			function liSetValue(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWValue = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWValue))
			{
				this.kWCreateValueImpl();
			}

			this.m_kWValue.setKWValue(this.m_sKWValue);
		};

		return li;

	}
);
