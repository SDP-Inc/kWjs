/**********************************************************************
 *
 * direct/obj.js
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
		"../obj",
		"kWStat/validate"
	],
	function
	(
		base,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function direct() 
		{
			//console.log("direct::constructor");
		}

		direct.prototype = new base();
		direct.prototype.constructor = direct;
		direct.constructor = base.prototype.constructor;

		direct.prototype.check = 
			function check() 
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		direct.prototype.init = 
			function init() 
		{
			//console.log(this.kWLogCalled());
			base.prototype.init.call(this);
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

		direct.prototype.baseGetOR =
			function()
			{
				return this.directGet();
			};

		direct.prototype.baseInitOR =
			function()
			{
				this.directInit();
			};

		direct.prototype.baseSetOR =
			function(obj)
		{
			this.directSet(obj); 
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		direct.prototype.directGetValueDomOR =
			function directGetValueDomOR()
			{
				console.error(this.kWLogNotImpl());
			};

		direct.prototype.directInitOR =
			function directInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
		direct.prototype.directSetValueDomOR = 
			function directSetValueDomOR(obj)
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		direct.prototype.directGet =
			function directGet()
			{
				if (!this.m_bKWInit)
				{
					return;
				}

				return this.directGetValueDom();
			};

		direct.prototype.directGetValueDom =
			function directGetValueDom()
			{
				return this.directGetValueDomOR();
			};

		direct.prototype.directInit =
			function directInit()
		{
			//console.log(this.kWLogCalled());
			this.directInitOR();
		};

		direct.prototype.directSet = 
			function directSet(obj)
		 {
			if (!validate.isString(obj))
			{
				return;
			}
			
			this.m_kWValue = obj;
			
			if (!this.m_bKWInit)
			{
				return;
			}
			
			//console.debug(this.kWLogDisplay("obj", obj));
			
			this.directSetValueDom(obj);
		};
		
		direct.prototype.directSetValueDom = 
			function directSetValueDom(obj)
		{
			//console.log(this.kWLogCalled());
			
			this.directSetValueDomOR(obj);
		};
		
		return direct;

	}
);
