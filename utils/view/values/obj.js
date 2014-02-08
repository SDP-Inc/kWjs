/**********************************************************************
 *
 * values/obj.js
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
	
		function values() 
		{
			//console.log("values::constructor");
		}

		values.prototype = new map();
		values.prototype.constructor = values;
		values.constructor = map.prototype.constructor;

		values.prototype.check = 
			function check() 
		{
			map.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		values.prototype.init = 
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

		values.prototype.kWAddValue =
			function(obj)
			{
				this.valuesAddValue(obj);
			};

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		values.prototype.mapInitOR =
			function()
		{
			this.valuesInit(); 
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

		values.prototype.valuesAddValue =
			function valuesAddValue(obj)
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

		values.prototype.valuesInit =
			function valuesInit()
		{
			//console.log(this.kWLogCalled());
		};

		return values;

	}
);
