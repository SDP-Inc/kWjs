/**********************************************************************
 *
 * colGroup/obj.js
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
		"../../attrs/colGroup/obj",
		"../../view/colGroup/obj",
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

		function colGroup()
		{
			//console.log("colGroup::constructor");
			
			this.m_sKWTag	= "colgroup";
			
			this.m_nKWSpan	= null;
		}

		colGroup.prototype = new elmt();
		colGroup.prototype.constructor = colGroup;
		colGroup.constructor = elmt.prototype.constructor;

		colGroup.prototype.check =
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		colGroup.prototype.init = 
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

		colGroup.prototype.cgInitOR = 
			function cgInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		colGroup.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.cgCreateAttrs(); 
		};
		
		colGroup.prototype.elmtCreateViewOR = 
			function()
		{
			return this.cgCreateView();
		};
		
		colGroup.prototype.elmtInitOR = 
			function()
		{
			this.cgInit();
		};
		
		colGroup.prototype.elmtRetrieveOR = 
			function()
		{
			this.cgRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		colGroup.prototype.cgCreateAttrs = 
			function cgCreateAttrs()
		{
			theAttrs = null;
			
			//console.log(this.kWLogCalled());
			theAttrs = new attrs();
			
			theAttrs.setKWSpan(this.m_nKWSpan);
			
			return theAttrs;
		};

		colGroup.prototype.cgCreateView = 
			function cgCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		colGroup.prototype.cgInit = 
			function cgInit()
		{
			//console.log(this.kWLogCalled());
			this.cgInitOR();
		};
		
		colGroup.prototype.cgRetrieve = 
			function cgRetrieve()
		{
			//console.log(this.kWLogCalled());
			this.cgRetrieveSpan();
		};
		
		colGroup.prototype.cgRetrieveSpan = 
			function cgRetrieveSpan()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberPos(this.m_nKWSpan))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWSpan();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_nKWSpan = value.getKWValue();
			if (validate.isNumberPos(this.m_nKWSpan))
			{
				//console.debug(this.kWLogDisplay("m_nKWSpan", this.m_nKWSpan));
			}
		};
		
		return colGroup;

	}
);
