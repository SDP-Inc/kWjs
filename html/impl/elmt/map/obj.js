/**********************************************************************
 *
 * map/obj.js
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
		"../../attrs/map/obj",
		"../../view/map/obj",
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

		function map()
		{
			//console.log("map::constructor");
			
			this.m_sKWTag		= "map";
			
			this.m_sKWName		= null;
		}

		map.prototype = new elmt();
		map.prototype.constructor = map;
		map.constructor = elmt.prototype.constructor;

		map.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		map.prototype.init =
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

		map.prototype.mapInitOR = 
			function mapInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		map.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.mapCreateAttrs(); 
		};
		
		map.prototype.elmtCreateViewOR =
			function()
		{
			return this.mapCreateView();
		};
		
		map.prototype.elmtInitOR =
			function()
		{
			this.mapInit();
		};
		
		map.prototype.elmtRetrieveOR = 
			function()
		{
			this.mapRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		map.prototype.mapCreateAttrs = 
			function mapCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWName(this.m_sKWName);
			
			return theAttrs;
		};

		map.prototype.mapCreateView = 
			function mapCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		map.prototype.mapInit = 
			function mapInit()
		{
			//console.log(this.kWLogCalled());
			this.mapInitOR();
		};
		
		map.prototype.mapRetrieve = 
			function mapRetrieve()
		{
			//console.log(this.kWLogCalled());
			this.mapRetrieveName();
		};
		
		map.prototype.mapRetrieveName = 
			function mapRetrieveName()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWName))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWName();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value", value));
			}
			
			this.m_sKWName = value.getKWValue();
			if (validate.isString(this.m_sKWName))
			{
				//console.log(this.kWLogDisplay("m_sImgName", this.m_sImgName));
			}
		};
		
		return map;

	}
);
