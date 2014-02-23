/**********************************************************************
 *
 * compliant/obj.js
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
		"../strategy/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
		strategy,
		validate,
		$
	)
	{

	//*******************************************************************//
	//***
	//***		public initializors
	//***
	//*******************************************************************//

		function compliant()
		{
			//console.log("compliant::constructor")

			this.m_nKWWidth       = -1;
			this.m_nKWHeight      = -1;
		}

		compliant.prototype = new strategy();
		compliant.prototype.constructor = compliant;
		compliant.constructor = strategy.prototype.constructor;

		compliant.prototype.check =
			function check()
		{
			strategy.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		compliant.prototype.init =
			function init()
		{
			//console.log(this.kWLogCalled());
			strategy.prototype.init.call(this);
		};

	//*******************************************************************//
	//***
	//***		public accessors
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

		compliant.prototype.strategyInitOR = function()
		{
			this.compliantInit();
		};

		compliant.prototype.strategyResizeOR = function()
		{
			this.compliantResize();
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


		compliant.prototype.compliantInit =
			function compliantInit()
		{
			//console.log(this.kWLogCalled());
		};

		compliant.prototype.compliantResize =
			function compliantResize()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(typeof window.innerWidth))
			{
				this.kWLogInvalid("window.innerWidth")
			}

			this.m_nKWWidth = window.innerWidth;
			this.m_nKWHeight = window.innerHeight;
		};

		return compliant;

	}

)