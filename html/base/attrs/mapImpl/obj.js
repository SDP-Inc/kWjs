/**********************************************************************
 *
 * mapImpl/obj.js
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
		"kWUtils/map/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
		map,
		validate,
		$
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function mapImpl() 
		{
			//console.log("mapImpl::constructor");
		}

		mapImpl.prototype = new map();
		mapImpl.prototype.constructor = mapImpl;
		mapImpl.constructor = map.prototype.constructor;

		mapImpl.prototype.check = 
			function check() 
		{
			map.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		mapImpl.prototype.init = 
			function init() 
		{
			//console.log(this.kWLogCalled());
			map.prototype.init.call(this);
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

		mapImpl.prototype.kWAddAttr =
			function(obj)
			{
				this.miAddAttr(obj);
			};

		mapImpl.prototype.kWLoad =
			function()
			{
				this.miLoad();
			};

		mapImpl.prototype.kWRefresh =
			function()
			{
				this.miRefresh();
			};

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		mapImpl.prototype.mapInitOR =
			function()
		{
			this.miInit(); 
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

		mapImpl.prototype.miAddChild =
			function miAddChild(obj)
			{
				var sID = null;

				//console.log(this.kWLogCalled());

				if (!validate.isNotNull(obj))
				{
					console.error(this.kWLogInvalid("obj"));
				}

				sID = obj.getKWID();
				if (!validate.isString(sID))
				{
					console.error(this.kWLogErrRetrieve("sID"));
				}

				this.kWAdd(sID, obj);

				//console.debug(this.kWLogDisplay("sID", sID));
			};

		mapImpl.prototype.miInit =
			function miInit()
		{
			//console.log(this.kWLogCalled());
		};

		mapImpl.prototype.miLoad =
			function miLoad()
			{
				var nLength = -1;
				var nIndex = -1;

				var attr = null;

				//console.log(this.kWLogCalled());

				nLength = this.getKWLength();

				for (nIndex = 0; nIndex < nLength; nIndex++)
				{
					attr = this.getKWValByIndex(nIndex);
					if (!validate.isNotNull(attr))
					{
						console.error(this.kWLogErrRetrieve("attr"));
					}

					attr.kWLoad();
				}
			};

		mapImpl.prototype.miRefresh =
			function miRefresh()
			{
				var nLength = -1;
				var nIndex = -1;

				var attr = null;

				//console.log(this.kWLogCalled());

				nLength = this.getKWLength();

				for (nIndex = 0; nIndex < nLength; nIndex++)
				{
					attr = this.getKWValByIndex(nIndex);
					if (!validate.isNotNull(attr))
					{
						console.error(this.kWLogErrRetrieve("attr"));
					}

					attr.kWRefresh();
				}
			};

		return mapImpl;

	}
);
