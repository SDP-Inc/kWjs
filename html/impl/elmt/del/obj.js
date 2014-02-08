/**********************************************************************
 *
 * del/obj.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2013 iTKunst Corporation
 *
 *
 **********************************************************************/

define
(
	[	
		"../../attrs/del/obj",
		"../../view/del/obj",
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

		function del()
		{
			//console.log("del::constructor");
			this.m_sKWTag		= "del";
			
			this.m_sKWCite		= null;
			this.m_sKWDateTime	= null;
		}

		del.prototype = new elmt();
		del.prototype.constructor = del;
		del.constructor = elmt.prototype.constructor;

		del.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		del.prototype.init = 
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

		del.prototype.delInitOR = 
			function delInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		del.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.delCreateAttrs(); 
		};
		
		del.prototype.elmtCreateViewOR =
			function()
		{
			return this.delCreateView();
		};
		
		del.prototype.elmtInitOR =
			function()
		{
			this.delInit();
		};
		
		del.prototype.elmtRetrieveOR =
			function()
		{
			this.delRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		del.prototype.delCreateAttrs = 
			function delCreateAttrs()
		{
			theAttrs = null;
			
			//console.log(this.kWLogCalled());
			theAttrs = new attrs();
			
			theAttrs.setKWCite(this.m_sKWCite);
			theAttrs.setKWDateTime(this.m_sKWDateTime);
			
			return theAttrs;
		};

		del.prototype.delCreateView = 
			function delCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		del.prototype.delInit = 
			function delInit()
		{
			//console.log(this.kWLogCalled());
			this.delInitOR();
		};
		
		del.prototype.delRetrieve = 
			function delRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.delRetrieveCite();
			this.delRetrieveDateTime();
		};
		
		del.prototype.delRetrieveCite = 
			function delRetrieveCite()
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
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWCite = value.getKWValue();
			if (validate.isString(this.m_sKWCite))
			{
				//console.debug(this.kWLogDisplay("m_sKWCite", this.m_sKWCite));
			}
		};
		
		del.prototype.delRetrieveDateTime = 
			function delRetrieveDateTime()
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
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWDateTime = value.getKWValue();
			if (validate.isString(this.m_sKWDateTime))
			{
				//console.debug(this.kWLogDisplay("m_sKWDateTime", this.m_sKWDateTime));
			}
		};
		
		return del;

	}
);
