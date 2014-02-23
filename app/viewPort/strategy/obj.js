/**********************************************************************
 *
 * strategy/obj.js
 *
 * author: Patrick Dooley
 *
 **********************************************************************
 *
 * Copyright (c) 2013 iTKunst Corporation
 *
 **********************************************************************/

define
(
	[
		"kWLog/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
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

		function strategy()
		{
			//console.log("strategy::constructor")

			this.m_sKWExt      = "strategy";

			this.m_nKWWidth       = -1;
			this.m_nKWHeight      = -1;
		}

		strategy.prototype = new log();
		strategy.prototype.constructor = strategy;
		strategy.constructor = log.prototype.constructor;

		strategy.prototype.check =
			function check()
		{
			log.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		strategy.prototype.init =
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

		strategy.prototype.getKWHeight =
			function()
		{
			return this.m_nKWHeight;
		};

		strategy.prototype.getKWWidth =
			function()
		{
			return this.m_nKWWidth;
		};

	//*******************************************************************//
	//***
	//***		public methods
	//***
	//*******************************************************************//

		strategy.prototype.resize = function()
		{
			this.strategyResize();
		};

	//*******************************************************************//
	//***
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		strategy.prototype.uBLInitOR = function()
		{
			this.strategyInit();
		};

	//*******************************************************************//
	//***
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		strategy.prototype.StrategyInitOR =
			function StrategyInitOR()
		{
			this.kWLogNotImpl();
		};

		strategy.prototype.StrategyResizeOR =
			function StrategyResizeOR()
		{
			this.kWLogNotImpl();
		};


	//*******************************************************************//
	//***
	//***		private methods
	//***
	//*******************************************************************//

		strategy.prototype.strategyInit =
			function strategyInit()
		{
			//console.log(this.kWLogCalled());

			this.strategyInitOR();
		};

		strategy.prototype.strategyResize =
			function strategyResize()
		{
			//console.log(this.kWLogCalled());

			this.strategyResizeOR();
		};

		return strategy;

	}

)