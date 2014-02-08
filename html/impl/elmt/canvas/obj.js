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
		"../../attrs/canvas/obj",
		"../../view/canvas/obj",
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

		function canvas()
		{
			//console.log("canvas::constructor");
			
			this.m_sKWTag		= "canvas";
			
			this.m_nKWHeight	= -1;
			this.m_nKWWidth	    = -1;
		}

		canvas.prototype = new elmt();
		canvas.prototype.constructor = canvas;
		canvas.constructor = elmt.prototype.constructor;

		canvas.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		canvas.prototype.init = 
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

		canvas.prototype.canvasInitOR = 
			function canvasInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		canvas.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.canvasCreateAttrs();
		};
		
		canvas.prototype.elmtCreateViewOR = 
			function()
		{
			return this.canvasCreateView();
		};
		
		canvas.prototype.elmtInitOR = 
			function()
		{
			this.canvasInit();
		};
		
		canvas.prototype.elmtRetrieveOR = 
			function()
		{
			this.canvasRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		canvas.prototype.canvasCreateAttrs = 
			function canvasCreateAttrs()
		{
			theAttrs = null;
			
			//console.log(this.kWLogCalled());
			theAttrs = new attrs();
			
			theAttrs.setKWHeight(this.m_nKWHeight);
			theAttrs.setKWWidth(this.m_nKWWidth);
			
			return theAttrs;
		};

		canvas.prototype.canvasCreateView = 
			function canvasCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		canvas.prototype.canvasInit = 
			function canvasInit()
		{
			//console.log(this.kWLogCalled());
			this.canvasInitOR();
		};
		
		canvas.prototype.canvasRetrieve = 
			function canvasRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.canvasRetrieveHeight();
			this.canvasRetrieveWidth();
		};
		
		canvas.prototype.canvasRetrieveHeight = 
			function canvasRetrieveHeight()
		{
			var value	= null;
			
			var nVal	= -1;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberPos(this.m_nKWHeight))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWHeight();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			nVal = value.getKWValue();
			if (validate.isNumberPos(nVal))
			{
				this.m_nKWHeight = nVal;
				//console.debug(this.kWLogDisplay("m_nKWHeight", this.m_nKWHeight));
			}
		};		
		
		canvas.prototype.canvasRetrieveWidth = 
			function canvasRetrieveWidth()
		{
			var value = null;
			
			var nVal	= -1;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberPos(this.m_nKWWidth))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWWidth();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			nVal = value.getKWValue();
			if (validate.isNumberPos(nVal))
			{
				this.m_nKWWidth = nVal;
				//console.debug(this.kWLogDisplay("m_nKWWidth", this.m_nKWWidth));
			}
		};		
		
		return canvas;

	}
);
