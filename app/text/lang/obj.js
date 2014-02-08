/**********************************************************************
 *
 * lang/obj.js
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
		"kWStat/validate"
	],
	function
	(
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function lang()
		{
			//console.log("lang::constructor")

			this.m_sKWLang = null;
		}

		lang.prototype.check = function()
		{
			//console.log("lang::check")
		};

		lang.prototype.init = function()
		{
			 //console.log("lang::init")
			 this.langInit();
		};  

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		lang.prototype.getKWLang = function()
		{
			return this.m_sKWLang;
		};

		lang.prototype.setKWLang = function()
		{
			return this.m_sKWLang;
		};

	//*******************************************************************//
	//***																	   
	//***		public methods
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		lang.prototype.langInit = function()
		{
			var sLang = null;

			//console.log("lang::langInit")

			sLang = document.documentElement.lang;
			if(!validate.isString(sLang))
			{
			   throw new Error("lang::langCreate() [sLang] error retrieve"); 
			} 
			
			if (sLang === "en")
			{
				this.m_sKWLang = "e";
			}
			else
			{
				this.m_sKWLang = "f";
			}
		};
		
		return lang;

	}
)