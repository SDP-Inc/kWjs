/**********************************************************************
 *
 * viewPort/obj.js
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
		"./compliant/obj",
		"./ie6/obj",
		"kWLog/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
		compliant,
		ie6,
		log,
		validate,
		$
	)
	{

	//*******************************************************************//
	//***
	//***		public initializors
	//***
	//*******************************************************************//

		function viewPort()
		{
			//console.log("viewPort::constructor")

			this.m_sKWExt	    = "viewPort";

			this.m_strategy     = null;

			this.m_nKWHeight    = -1;
			this.m_nKWWidth     = -1;
		}

		viewPort.prototype = new log();
		viewPort.prototype.constructor = viewPort;
		viewPort.constructor = log.prototype.constructor;

		viewPort.prototype.check =
			function check()
		{
			log.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		viewPort.prototype.init =
			function init()
		{
			//console.log(this.kWLogCalled());
			log.prototype.init.call(this);
		};

	//*******************************************************************//
	//***
	//***		public accessors
	//***
	//*******************************************************************//

		viewPort.prototype.getKWHeight =
			function()
		{
			return this.m_nKWHeight;
		};

		viewPort.prototype.getKWWidth =
			function()
		{
			return this.m_nKWWidth;
		};

	//*******************************************************************//
	//***
	//***		public methods
	//***
	//*******************************************************************//

		viewPort.prototype.resize = function()
		{
			this.viewPortResize();
		};

	//*******************************************************************//
	//***
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		viewPort.prototype.uBLInitOR = function()
		{
			this.viewPortInit();
		};

		viewPort.prototype.uBLResizeOR = function()
		{
			this.viewPortResize();
		};

	//*******************************************************************//
	//***
	//***		private methods
	//***
	//*******************************************************************//

		viewPort.prototype.viewPortCreate =
			function viewPortCreate()
		{
			//console.log(this.kWLogCalled());

			if (typeof window.innerWidth != 'undefined')
			{
				this.m_strategy = new compliant;

				return;
			}

			if ((typeof document.documentElement != 'undefined'             )
			&&  (typeof document.documentElement.clientWidth != 'undefined' )
			&&  (document.documentElement.clientWidth != 0                  ))
			{
				this.m_strategy = new ie6;

				return;
			}

		};

		viewPort.prototype.viewPortInit =
			function viewPortInit()
		{
			//console.lo(this.kWLogCalled());

			this.viewPortCreate();
			this.viewPortInitStrategy();
		};

		viewPort.prototype.viewPortInitStrategy =
			function viewPortInitStrategy()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_strategy))
			{
				this.kWLogInvalid("m_strategy");
			}

			if(!validate.isString(this.m_sKWID))
			{
				console.error(this.kWLogInvalid("m_sKWID"));
			}

			this.m_strategy.setKWIDParent(this.m_sKWID);

			this.m_strategy.check();
			this.m_strategy.init();

		};

		viewPort.prototype.viewPortResize =
			function viewPortResize()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(this.m_strategy))
			{
				this.kWLogInvalid("m_strategy");
			}

			this.m_strategy.resize();

			this.m_nKWHeight = this.m_strategy.getKWHeight();
			this.m_nKWWidth = this.m_strategy.getKWWidth();
		};

		return viewPort;

	}

)