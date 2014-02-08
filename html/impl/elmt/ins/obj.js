/**********************************************************************
 *
 * ins/obj.js
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
		"../../attrs/ins/obj",
		"../../view/ins/obj",
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

		function ins()
		{
			//console.log("ins::constructor");
			this.m_sKWTag		= "ins";
			
			this.m_sKWCite		= null;
			this.m_sKWDateTime	= null;
		}

		ins.prototype = new elmt();
		ins.prototype.constructor = ins;
		ins.constructor = elmt.prototype.constructor;

		ins.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		ins.prototype.init = 
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

		ins.prototype.insInitOR = 
			function insInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		ins.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.insCreateAttrs(); 
		};
		
		ins.prototype.elmtCreateViewOR = 
			function()
		{
			return this.insCreateView();
		};
		
		ins.prototype.elmtInitOR = 
			function()
		{
			this.insInit();
		};
		
		ins.prototype.elmtRetrieveOR =
			function()
		{
			this.insRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		ins.prototype.insCreateAttrs = 
			function insCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWCite(this.m_sKWCite);
			theAttrs.setKWDateTime(this.m_sKWDateTime);
			
			return theAttrs;
		};

		ins.prototype.insCreateView = 
			function insCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		ins.prototype.insInit = 
			function insInit()
		{
			//console.log(this.kWLogCalled());
			this.insInitOR();
		};
		
		ins.prototype.insRetrieve = 
			function insRetrieve()
		{
			//console.log(this.kWLogCalled());
			this.insRetrieveCite();
			this.insRetrieveDateTime();
		};
		
		ins.prototype.insRetrieveCite = 
			function insRetrieveCite()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWCite))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWCite();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value", value));
			}
			
			this.m_sKWCite = value.getKWValue();
			if (validate.isString(this.m_sKWCite))
			{
				//console.log(this.kWLogDisplay("m_sImgCite", this.m_sImgCite));
			}
		};
		
		ins.prototype.insRetrieveDateTime = 
			function insRetrieveDateTime()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWDateTime))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWDateTime();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value", value));
			}
			
			this.m_sKWDateTime = value.getKWValue();
			if (validate.isString(this.m_sKWDateTime))
			{
				//console.log(this.kWLogDisplay("m_sImgDateTime", this.m_sImgDateTime));
			}
		};
		
		return ins;

	}
);
