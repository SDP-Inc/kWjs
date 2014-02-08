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
		"../../attr/height/obj",
		"../../attr/width/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		height,
		width,
		html,
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

			this.m_kWHeight	    = null;
			this.m_kWWidth	    = null;
			
			this.m_nKWHeight	= -1;
			this.m_nKWWidth	    = -1;
		}

		canvas.prototype = new html();
		canvas.prototype.constructor = canvas;
		canvas.constructor = html.prototype.constructor;

		canvas.prototype.check =
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		canvas.prototype.init =
			function init()
		{
			//console.log(this.kWLogCalled());
			html.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		canvas.prototype.setKWHeight =
			function(nVal)
		{
			this.canvasSetHeight(nVal);
		};

		canvas.prototype.setKWWidth =
			function(nVal)
		{
			this.canvasSetWidth(nVal);
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
	
		canvas.prototype.htmlCreateOR = 
			function()
		{
			this.canvasCreate();
		};

		canvas.prototype.htmlDeleteOR =
			function()
		{
			this.canvasDelete();
		};

		canvas.prototype.htmlInitOR =
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
			var value   = null;

			var nValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWHeight))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWHeight();
			if (validate.isNotNull(value))
			{
				nValue = value.getKWValue();
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				nValue = this.m_sKWHeight;
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				return;
			}

			this.canvasCreateHeightImpl();

			this.m_kWHeight.setKWValue(nValue);
		};

		canvas.prototype.canvasCreateHeightImpl =
			function canvasCreateHeightImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWHeight))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			this.m_kWHeight = new height();

			this.m_kWHeight.setKWIDParent(this.m_sKWID);
			this.m_kWHeight.setKWDom(this.m_kWDom);

			this.m_kWHeight.check();
			this.m_kWHeight.init();

			this.kWAddAttr(this.m_kWHeight);
		};

		canvas.prototype.canvasCreateWidth =
			function canvasCreateWidth()
		{
			var value   = null;

			var nValue  = null;

			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWWidth))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWWidth();
			if (validate.isNotNull(value))
			{
				sValue = value.getKWValue();
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				nValue = this.m_sKWWidth;
			}

			if (!validate.isNumberNotNeg(nValue))
			{
				return;
			}

			this.canvasCreateWidthImpl();

			this.m_kWWidth.setKWValue(nValue);
		};

		canvas.prototype.canvasCreateWidthImpl =
			function canvasCreateWidthImpl()
		{
			//console.log(this.kWLogCalled());

			if (validate.isNotNull(this.m_kWWidth))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}

			if (!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			this.m_kWWidth = new width();

			this.m_kWWidth.setKWIDParent(this.m_sKWID);
			this.m_kWWidth.setKWDom(this.m_kWDom);

			this.m_kWWidth.check();
			this.m_kWWidth.init();

			this.kWAddAttr(this.m_kWWidth);
		};

		canvas.prototype.canvasDelete =
			function canvasDelete()
		{
			//console.log(this.kWLogCalled());

			this.m_kWHeight	    = null;
			this.m_kWWidth	    = null;
		};

		canvas.prototype.canvasInit =
			function canvasInit()
		{
			//console.log(this.kWLogCalled());
		};

		canvas.prototype.canvasSetHeight =
			function canvasSetHeight(nVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNumberNotNeg(nVal))
			{
				return;
			}

			this.m_nKWHeight = nVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWHeight))
			{
				this.canvasCreateHeightImpl();
			}

			this.m_kWHeight.setKWValue(this.m_nKWHeight);
		};

		canvas.prototype.canvasSetWidth =
			function canvasSetWidth(nVal)
		{
			//console.log(this.kWLogCalled());

			if (!validate.isString(nVal))
			{
				return;
			}

			this.m_nKWWidth = nVal;

			if (!this.m_bKWInit)
			{
				return;
			}

			if (!validate.isNotNull(this.m_kWWidth))
			{
				this.canvasCreateWidthImpl();
			}

			this.m_kWWidth.setKWValue(this.m_nKWWidth);
		};

		return canvas;

	}
);
