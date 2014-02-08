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
		"kWStat/validate"
	],
	function
	(
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public constructors
	//***
	//*******************************************************************//

		function map()
		{
			//console.log("map::constructor")

			this.m_array    = null;
			this.m_kWMap     = null;
			this.m_kWText		= null;
			
			this.m_sKWLang	= null;
		}

		map.prototype.check = function()
		{
			//console.log("map::check")

			if(!validate.isNotNull(this.m_kWText))
			{
			   throw new Error("map::check() [m_kWText] invalid");
			} 
			
			if(!validate.isString(this.m_sKWLang))
			{
			   throw new Error("map::check() [m_sKWLang] invalid");
			} 
		};

		map.prototype.init = function()
		{
			 //console.log("map::create")
			 this.mapInit();
		};  

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		map.prototype.getKWLang = function()
		{
			return this.m_sKWLang;
		};

		map.prototype.getKWVal = function(sVal)
		{
			return this.mapRetrieve(sVal);
		};

		map.prototype.setKWLang = function(sVal)
		{
			this.m_sKWLang = sVal;
		};

		map.prototype.setKWText = function(obj)
		{
			this.m_kWText = obj;
		};

	//*******************************************************************//
	//***																	   
	//***		public methods
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		map.prototype.mapCreate = function()
		{
			var nIndex  = -1;
			var item    = null;

			//console.log("map::mapCreate")

			if(validate.isNotNull(this.m_kWMap))
			{
			   throw new Error("map::mapCreate() duplicated"); 
			} 

			if(!validate.isNotNull(this.m_kWText))
			{
			   throw new Error("map::mapCreate() [m_kWText] invalid");
			} 

			this.m_kWMap = {};
			this.m_array = [];

			for (nIndex = 0; nIndex < this.m_kWText.items.length; nIndex++)
			{
				item = this.m_kWText.items[nIndex];
				if(!validate.isNotNull(item))
				{
				   throw new Error("map::mapCreate() [item] invalid"); 
				} 

				if(!validate.isString(item.id))
				{
				   throw new Error("map::mapCreate() [id] invalid"); 
				} 

				if(!validate.isString(item.t))
				{
				   throw new Error("map::mapCreate() [t] invalid"); 
				} 

				if (this.m_kWMap[item.id])
				{
				   throw new Error("map::mapCreate() <" + item.id + "> duplicated"); 
				}

				this.m_kWMap[item.id] = item.t;
				this.m_array[nIndex] = item.t;
			}
		};

		map.prototype.mapInit = function()
		{
			//console.log("map::mapInit")

			this.mapCreate();
		};

		map.prototype.mapRetrieve = function(sVal)
		{
			//console.log("map::mapRetrieve")

			if(!this.m_kWMap)
			{
			   throw new Error("map::mapRetrieve() [m_kWMap] invalid");
			} 

			return this.m_kWMap[sVal];

		};  

		return map;
		
	}
		
)
