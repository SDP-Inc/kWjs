/**********************************************************************
 *
 * dialog/obj.js
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
		"../../attrs/dialog/obj",
		"../../view/dialog/obj",
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

		function dialog()
		{
			//console.log("dialog::constructor");
			this.m_sKWTag	= "dialog";
			
			this.m_bKWOpen	= true;
		}

		dialog.prototype = new elmt();
		dialog.prototype.constructor = dialog;
		dialog.constructor = elmt.prototype.constructor;

		dialog.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		dialog.prototype.init = 
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

		dialog.prototype.dialogInitOR = 
			function dialogInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		dialog.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.dialogCreateAttrs(); 
		};
		
		dialog.prototype.elmtCreateViewOR = 
			function()
		{
			return this.dialogCreateView();
		};
		
		dialog.prototype.elmtInitOR = 
			function()
		{
			this.dialogInit();
		};
		
		dialog.prototype.elmtRetrieveOR = 
			function()
		{
			this.dialogRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		dialog.prototype.dialogCreateAttrs = 
			function dialogCreateAttrs()
		{
			theAttrs = null;
			
			//console.log(this.kWLogCalled());
			theAttrs = new attrs();
			
			theAttrs.setKWOpen(this.m_bKWOpen);
			
			return theAttrs;
		};

		dialog.prototype.dialogCreateView = 
			function dialogCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		dialog.prototype.dialogInit = 
			function dialogInit()
		{
			//console.log(this.kWLogCalled());
			this.dialogInitOR();
		};
		
		dialog.prototype.dialogRetrieve = 
			function dialogRetrieve()
		{
			//console.log(this.kWLogCalled());
			this.dialogRetrieveOpen();
		};
		
		dialog.prototype.dialogRetrieveOpen = 
			function dialogRetrieveOpen()
		{
			var value	= null;
			
			var bVal	= true;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWOpen();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWOpen = bVal;
				//console.debug(this.kWLogDisplay("m_bKWOpen", this.m_bKWOpen));
			}
		};
		
		return dialog;

	}
);
