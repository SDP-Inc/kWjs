/**********************************************************************
 *
 * text/obj.js
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
		"../../../base/attr/direct/obj",
		"kWStat/validate"
	],
	function
	(
		direct,
		validate
	)
	{

	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//
	
		function text() 
		{
			//console.log("text::constructor");
			this.m_sKWExt	= "text";
			this.m_sKWAttr	= "text";
		}

		text.prototype = new direct();
		text.prototype.constructor = text;
		text.constructor = direct.prototype.constructor;

		text.prototype.check =
			function check() 
		{
			direct.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		text.prototype.init =
			function init() 
		{
			//console.log(this.kWLogCalled());
			direct.prototype.init.call(this);
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

		text.prototype.clear = function() 
		{
			//console.log(this.kWLogCalled());
			this.textClear();
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		text.prototype.baseRetrieveOR = 
			function()
		{
			this.textRetrieve(); 
		};
		
		text.prototype.directInitOR = 
			function()
		{
			this.textInit(); 
		};
		
		text.prototype.directSetValueDomOR = 
			function directSetValueDomOR(obj)
		{
			this.textSetValueDom(obj); 
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
		
		text.prototype.textClear = 
			function textClear()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}
			
			this.m_kWDom.text("");
		};
		
		text.prototype.textInit = 
			function textInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		text.prototype.textRetrieve = 
			function textRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			this.m_kWValueView = this.m_kWView.getKWText();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		text.prototype.textSetValueDom = 
			function textSetValueDom(obj)
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isString(obj))
			{
				return;
			}
			
			if (!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}
			
			//console.debug(this.kWLogDisplay("obj",obj));
			
			this.m_kWDom.text(obj);
		};
		
		return text;

	}
);
