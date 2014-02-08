/**********************************************************************
 *
 * html/obj.js
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
	
		function html() 
		{
			//console.log("html::constructor");
			this.m_sKWExt	= "html";
			this.m_sKWAttr	= "html";
		}

		html.prototype = new direct();
		html.prototype.constructor = html;
		html.constructor = direct.prototype.constructor;

		html.prototype.check = 
			function check() 
		{
			direct.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		html.prototype.init =
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

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		html.prototype.directGetValueDomOR =
			function ()
			{
				return this.htmlGetValueDom();
			};

		html.prototype.baseRetrieveOR =
			function()
		{
			this.htmlRetrieve(); 
		};
		
		html.prototype.directInitOR = 
			function()
		{
			this.htmlInit(); 
		};
		
		html.prototype.directSetValueDomOR = 
			function directSetValueDomOR(obj)
		{
			this.htmlSetValueDom(obj); 
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

		html.prototype.htmlGetValueDom =
			function htmlGetValueDom()
			{
				var sVal = null;

				//console.log(this.kWLogCalled());
				if (!validate.isDom(this.m_kWDom))
				{
					console.error(this.kWLogInvalid("m_kWDom"));
				}

				sVal = this.m_kWDom[0].innerHTML;

				return sVal;
			};

		html.prototype.htmlInit =
			function htmlInit()
		{
			//console.log(this.kWLogCalled());
		};
		
		html.prototype.htmlRetrieve = 
			function htmlRetrieve()
		{
			console.log(this.kWLogCalled());
			
			if (validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogRepeated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}
			
			this.m_kWValueView = this.m_kWView.getKWHtml();
			if (!validate.isNotNull(this.m_kWValueView))
			{
				console.error(this.kWLogErrRetrieve("m_kWValueView"));
			}
		};
		
		html.prototype.htmlSetValueDom = 
			function htmlSetValueDom(obj)
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
			
			this.m_kWDom.html(obj);
		};
		
		return html;

	}
);
