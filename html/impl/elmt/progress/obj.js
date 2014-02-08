/**********************************************************************
 *
 * progress/obj.js
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
		"../../attrs/progress/obj",
		"../../view/progress/obj",
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

		function progress()
		{
			//console.log("progress::constructor");
			this.m_sKWTag	= "progress";
			
			this.m_nKWMax	= -1;
			this.m_nKWValue	= -1;
		}

		progress.prototype = new elmt();
		progress.prototype.constructor = progress;
		progress.constructor = elmt.prototype.constructor;

		progress.prototype.check =
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		progress.prototype.init = 
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

		progress.prototype.elmtCreateAttrsOR =
			function()
		{
			return this.progressCreateAttrs(); 
		};
		
		progress.prototype.elmtCreateViewOR =
			function()
		{
			return this.progressCreateView();
		};
		
		progress.prototype.elmtInitOR = 
			function()
		{
			this.progressInit();
		};
		
		progress.prototype.elmtRetrieveOR =
			function()
		{
			this.progressRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		progress.prototype.progressInitOR = 
			function progressInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		progress.prototype.progressCreateAttrs = 
			function progressCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWMax(this.m_nKWMax);
			theAttrs.setKWValue(this.m_nKWValue);
			
			return theAttrs;
		};

		progress.prototype.progressCreateView = 
			function progressCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		progress.prototype.progressInit = 
			function progressInit()
		{
			//console.log(this.kWLogCalled());
			this.progressInitOR();
		};

		progress.prototype.progressRetrieve = 
			function progressRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.progressRetrieveMax();
			this.progressRetrieveValue();
		};
		
		progress.prototype.progressRetrieveMax = 
			function progressRetrieveMax()
		{
			var value	= null;
			
			var nVal	= null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberPos(this.m_nKWMax))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWMax();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			nVal = value.getKWValue();
			if (validate.isNumberPos(nVal))
			{
				this.m_nKWMax = nVal;
				//console.debug(this.kWLogDisplay("m_nKWMax", this.m_nKWMax));
			}
		};
		
		progress.prototype.progressRetrieveValue = 
			function progressRetrieveValue()
		{
			var value	= null;
			
			var nVal	= -1;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberPos(this.m_nKWValue))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWValue();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			nVal = value.getKWValue();
			if (validate.isNumberPos(nVal))
			{
				this.m_nKWValue = nVal;
				//console.debug(this.kWLogDisplay("m_nKWValue", this.m_nKWValue));
			}
		};		
		
		return progress;

	}
);
