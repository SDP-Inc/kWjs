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
		"../../attrs/q/obj",
		"../../view/q/obj",
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

		function q()
		{
			//console.log("q::constructor");
			this.m_sKWTag	= "q";
			
			this.m_sKWCite	= null;
		}

		q.prototype = new elmt();
		q.prototype.constructor = q;
		q.constructor = elmt.prototype.constructor;

		q.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		q.prototype.init =
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

		q.prototype.qInitOR = 
			function qInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		q.prototype.elmtCreateAttrsOR =
			function()
		{
			return this.qCreateAttrs(); 
		};
		
		q.prototype.elmtCreateViewOR =
			function()
		{
			return this.qCreateView();
		};
		
		q.prototype.elmtInitOR =
			function()
		{
			this.qInit();
		};
		
		q.prototype.elmtRetrieveOR =
			function()
		{
			this.qRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		q.prototype.qCreateAttrs = 
			function qCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWCite(this.m_sKWCite);
			
			return theAttrs;
		};

		q.prototype.qCreateView = 
			function qCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		q.prototype.qInit = 
			function qInit()
		{
			//console.log(this.kWLogCalled());
			this.qInitOR();
		};
		
		q.prototype.qRetrieve = 
			function qRetrieve()
		{
			//console.log(this.kWLogCalled());
			this.qRetrieveCite();
		};
		
		q.prototype.qRetrieveCite = 
			function qRetrieveCite()
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
		
		return q;

	}
);
