/**********************************************************************
 *
 * file/obj.js
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
		"../../../attrs/input/file/obj",
		"../../../view/input/file/obj",
		"../obj",
		"jquery",
		"kWStat/validate"
	], 
	function
	(
		attrs,
		view,
		input,
		$,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function file()
		{
			//console.log("file::constructor");

			this.m_sKWType	    = "file";
			
			this.m_sKWAccept	= null;
		}

		file.prototype = new input();
		file.prototype.constructor = file;
		file.constructor = input.prototype.constructor;

		file.prototype.check = 
			function check()
		{
			input.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		file.prototype.init = 
			function init()
		{
			//console.log(this.kWLogCalled());
			input.prototype.init.call(this);
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

		file.prototype.fileInitOR =
			function fileInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		file.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.fileCreateAttrs(); 
		};
		
		file.prototype.elmtCreateViewOR = 
			function()
		{
			return this.fileCreateView();
		};
		
		file.prototype.inputInitOR = 
			function()
		{
			this.fileInit();
		};
		
		file.prototype.inputRetrieveOR = 
			function()
		{
			this.fileRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		file.prototype.fileCreateAttrs = 
			function fileCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWAccept(this.m_sKWAccept);
			
			return theAttrs;
		};

		file.prototype.fileCreateView = 
			function fileCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		file.prototype.fileInit = 
			function fileInit()
		{
			//console.log(this.kWLogCalled());
			this.fileInitOR();
		};
		
		file.prototype.fileRetrieve = 
			function fileRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.fileRetrieveAccept();
		};
		
		file.prototype.fileRetrieveAccept = 
			function fileRetrieveAccept()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWAccept))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWAccept();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWAccept = value.getKWValue();
			if (validate.isString(this.m_sKWAccept))
			{
				//console.debug(this.kWLogDisplay("m_sKWAccept", this.m_sKWAccept));
			}
		};		
		
		return file;

	}
);
