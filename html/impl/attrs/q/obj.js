/**********************************************************************
 *
 * q/obj.js
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
		"../../attr/cite/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		cite,
		html,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function q()
		{
			//console.log("q::constructor");
			
			this.m_kWCite		= null;
			
			this.m_sKWCite		= null;
		}

		q.prototype = new html();
		q.prototype.constructor = q;
		q.constructor = html.prototype.constructor;

		q.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		q.prototype.init =
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

		q.prototype.setKWCite =
			function(sVal)
		{
			this.qSetCite(sVal);
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
	
		q.prototype.htmlCreateOR = 
			function()
		{
			this.qCreate();
		};

		q.prototype.htmlDeleteOR =
			function()
		{
			this.qDelete();
		};

		q.prototype.htmlInitOR = 
			function()
		{
			this.qInit();
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

		q.prototype.qCreate = 
			function qCreate()
		{
			//console.log(this.kWLogCalled());
			this.qCreateCite();
		};
		
		q.prototype.qCreateCite = 
			function qCreateCite()
		{
			var value   = null;
			
			var sValue  = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWCite))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWCite();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isString(sValue))
			{
				sValue = this.m_sKWCite;
			}

			if (!validate.isString(sValue))
			{
				return;
			}
			
			this.qCreateCiteImpl();
			
			this.m_kWCite.setKWValue(sValue);
		};

		q.prototype.qCreateCiteImpl =
			function qCreateCiteImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWCite))
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

			this.m_kWCite = new cite();

			this.m_kWCite.setKWIDParent(this.m_sKWID);
			this.m_kWCite.setKWDom(this.m_kWDom);

			this.m_kWCite.check();
			this.m_kWCite.init();

			this.kWAddAttr(this.m_kWCite);
		};

		q.prototype.qDelete =
			function qDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWCite = null;
		};

		q.prototype.qInit = 
			function qInit()
		{
			//console.log(this.kWLogCalled());
		};

		q.prototype.qSetCite =
			function qSetCite(sVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(sVal))
			{
				return;
			}

			this.m_sKWCite = sVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWCite))
			{
				this.qCreateCiteImpl();
			}

			this.m_kWCite.setKWValue(this.m_sKWCite);
		};

		return q;
	}
);
