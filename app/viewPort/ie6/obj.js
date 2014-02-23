/**********************************************************************
 *
 * ie6/obj.js
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

		function ie6()
		{
			//console.log("ie6::constructor")
		}

		ie6.prototype = new strategy();
		ie6.prototype.constructor = ie6;
		ie6.constructor = strategy.prototype.constructor;

		ie6.prototype.check =
			function check()
		{
			strategy.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		ie6.prototype.init =
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

		ie6.prototype.strategyInitOR = function()
		{
			this.ie6Init();
		};

		ie6.prototype.strategyResizeOR = function()
		{
			this.ie6Resize();
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

		ie6.prototype.ie6Init =
			function ie6Init()
		{
			//console.log(this.kWLogCalled());
		};

		ie6.prototype.ie6Resize =
			function ie6Resize()
		{
			//console.log(this.kWLogCalled());

			if (!validate.isNotNull(document.documentElement))
			{
				this.kWLogInvalid("documentElement")
			}

			if (!validate.isNotNull(document.documentElement.clientWidth))
			{
				this.kWLogInvalid("clientWidth")
			}

			this.m_nKWWidth = document.documentElement.clientWidth;
			this.m_nKWHeight = document.documentElement.clientHeight;
		};

		return ie6;

	}

)