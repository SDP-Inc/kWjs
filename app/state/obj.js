/**********************************************************************
 *
 * state/obj.js
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
		"kWMVC/obj",
		"kWStat/validate",
		"jquery"
	],
	function
	(
		mvc,
		validate,
		$
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function state()
		{
			//console.log("state::constructor")
			this.m_sKWExt = "state";
		}

		state.prototype = new mvc();
		state.prototype.constructor = state;
		state.constructor = mvc.prototype.constructor;
		
		state.prototype.check = function check()
		{
			mvc.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		state.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			mvc.prototype.init.call(this);
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

		state.prototype.state = function()
		{
			this.stateFired();
		};

	//*******************************************************************//
	//***																		
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
		
		state.prototype.mvcHandleCBDefaultOR  = function()
		{
			this.stateHandleCBDefault();
		};

		state.prototype.mvcInitOR = function()
		{
			this.stateInit();
		};

	//*******************************************************************//
	//***																		
	//***		private methods (overrides)
	//***
	//*******************************************************************//
		
		state.prototype.stateFiredOR = 
			function stateFiredOR()
		{
			//console.error(this.kWLogNotImpl());
		};

		state.prototype.stateInitOR = 
			function stateInitOR()
		{
			//console.error(this.kWLogNotImpl());
		};

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		state.prototype.stateFired = 
			function stateFired()
		{
			//console.log(this.kWLogCalled())
			this.stateFiredOR();
		};
		
		state.prototype.stateHandleCBDefault = 
			function stateHandleCBDefault()
		{
			//console.log(this.kWLogCalled())
			this.stateFired();
		};
		
		state.prototype.stateInit = 
			function stateInit()
		{
			//console.log(this.kWLogCalled())
			this.stateInitOR();
		};
		
		return state;
		
	}
)