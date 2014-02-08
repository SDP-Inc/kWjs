/**********************************************************************
 *
 * canvas/obj.js
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
		"../../value/height/obj",
		"../../value/width/obj",
		"../../../base/view/obj",
		"kWStat/validate"
	], 
	function
	(
		height,
		width,
		base,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function canvas()
		{
			//console.log("canvas::constructor");
			
			this.m_kWHeight	= null;
			this.m_kWWidth	= null;
		}

		canvas.prototype = new base();
		canvas.prototype.constructor = canvas;
		canvas.constructor = base.prototype.constructor;

		canvas.prototype.check = 
			function check()
		{
			base.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		canvas.prototype.init = 
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

		canvas.prototype.getKWHeight =
			function()
		{
			return this.m_kWHeight;
		};

		canvas.prototype.getKWWidth =
			function()
		{
			return this.m_kWWidth;
		};

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
	
		canvas.prototype.baseCreateOR = 
			function()
		{
			this.canvasCreate();
		};

		canvas.prototype.baseDeleteOR =
			function()
		{
			this.canvasDelete();
		};

		canvas.prototype.baseInitOR =
			function()
		{
			this.canvasInit();
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

		canvas.prototype.canvasCreate = 
			function canvasCreate() 
		{
			//console.log(this.kWLogCalled());
			
			this.canvasCreateHeight();
			this.canvasCreateWidth();
		};
		
		canvas.prototype.canvasCreateHeight = 
			function canvasCreateHeight() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWHeight))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWHeight = new height();
			
			this.m_kWHeight.setKWView(this);
			this.m_kWHeight.setKWIDParent(this.m_sKWID);
			
			this.m_kWHeight.check();
			this.m_kWHeight.init();

			this.kWAddValue(this.m_kWHeight);
		};
		
		canvas.prototype.canvasCreateWidth = 
			function canvasCreateWidth() 
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWWidth))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}
			
			this.m_kWWidth = new width();
			
			this.m_kWWidth.setKWView(this);
			this.m_kWWidth.setKWIDParent(this.m_sKWID);
			
			this.m_kWWidth.check();
			this.m_kWWidth.init();

			this.kWAddValue(this.m_kWWidth);
		};

		canvas.prototype.canvasDelete =
			function canvasDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWHeight	= null;
			this.m_kWWidth	= null;
		};

		canvas.prototype.canvasInit =
			function canvasInit()
		{
			//console.log(this.kWLogCalled());
		};

		return canvas;

	}
);
