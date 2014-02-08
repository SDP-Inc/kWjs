/**********************************************************************
 *
 * time/obj.js
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
		"../../attrs/time/obj",
		"../../view/time/obj",
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

		function time()
		{
			//console.log("time::constructor");

			this.m_sKWTag		= "time";
			
			this.m_sKWDateTime	= null;
		}

		time.prototype = new elmt();
		time.prototype.constructor = time;
		time.constructor = elmt.prototype.constructor;

		time.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		time.prototype.init = 
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

		time.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.timeCreateAttrs(); 
		};
		
		time.prototype.elmtCreateViewOR = 
			function()
		{
			return this.timeCreateView();
		};
		
		time.prototype.elmtInitOR = 
			function()
		{
			this.timeInit();
		};
		
		time.prototype.elmtRetrieveOR = 
			function()
		{
			this.timeRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		time.prototype.timeInitOR = 
			function timeInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		time.prototype.timeCreateAttrs = 
			function timeCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWDateTime(this.m_sKWDateTime);
			
			return theAttrs;
		};

		time.prototype.timeCreateView = 
			function timeCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		time.prototype.timeInit = 
			function timeInit()
		{
			//console.log(this.kWLogCalled());
			this.timeInitOR();
		};

		time.prototype.timeRetrieve = 
			function timeRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.timeRetrieveDateTime();
		};
		
		time.prototype.timeRetrieveDateTime = 
			function timeRetrieveDateTime()
		{
			var value	= null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWDateTime))
			{
				console.error(this.logDuplicated());
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
		
		return time;
		
	}
);
