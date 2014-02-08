/**********************************************************************
 *
 * textArea/obj.js
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
		"../../attrs/textArea/obj",
		"../../view/textArea/obj",
		"../../../base/elmt/obj",
		"kWStat/validate"
	], 
	function
	(
		attrs,
		view,
		elmt,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function textArea()
		{
			//console.log("textArea::constructor");

			this.m_sKWTag			= "textArea";
			
			this.m_sKWForm		    = null;
			this.m_sKWName		    = null;
			this.m_sKWPlaceHolder	= null;
			this.m_sKWWrap		    = null;
			
			this.m_bKWAutoFocus	    = false;
			this.m_bKWDisabled	    = false;
			this.m_bKWReadOnly	    = false;
			this.m_bKWRequired	    = false;
			
			this.m_nKWCols		    = -1;
			this.m_nKWMaxLength	    = -1;
			this.m_nKWRows		    = -1;
		}

		textArea.prototype = new elmt();
		textArea.prototype.constructor = textArea;
		textArea.constructor = elmt.prototype.constructor;

		textArea.prototype.check = function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		textArea.prototype.init = function init()
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
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		textArea.prototype.elmtCreateAttrsOR = function()
		{
			return this.taCreateAttrs(); 
		};
		
		textArea.prototype.elmtCreateViewOR = function()
		{
			return this.taCreateView();
		};
		
		textArea.prototype.elmtInitOR = function()
		{
			this.taInit();
		};
		
		textArea.prototype.elmtRetrieveOR = function()
		{
			this.taRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		textArea.prototype.taInitOR = 
			function taInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		textArea.prototype.taCreateAttrs = 
			function taCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWAutoFocus(this.m_bKWAutoFocus);
			theAttrs.setKWCols(this.m_nKWCols);
			theAttrs.setKWDisabled(this.m_bKWDisabled);
			theAttrs.setKWForm(this.m_sKWForm);
			theAttrs.setKWMaxLength(this.m_nKWMaxLength);
			theAttrs.setKWName(this.m_sKWName);
			theAttrs.setKWPlaceHolder(this.m_sKWPlaceHolder);
			theAttrs.setKWReadOnly(this.m_bKWReadOnly);
			theAttrs.setKWRequired(this.m_bKWRequired);
			theAttrs.setKWRows(this.m_nKWRows);
			theAttrs.setKWWrap(this.m_sKWWrap);
			
			return theAttrs;
		};

		textArea.prototype.taCreateView = 
			function taCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		textArea.prototype.taInit = 
			function taInit()
		{
			//console.log(this.kWLogCalled());
			this.taInitOR();
		};

		textArea.prototype.taRetrieve = 
			function taRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.taRetrieveAutoFocus();
			this.taRetrieveCols();
			this.taRetrieveDisabled();
			this.taRetrieveForm();
			this.taRetrieveMaxLength();
			this.taRetrieveName();
			this.taRetrievePlaceHolder();
			this.taRetrieveReadOnly();
			this.taRetrieveRequired();
			this.taRetrieveRows();
			this.taRetrieveWrap();
		};

		textArea.prototype.taRetrieveAutoFocus = 
			function taRetrieveAutoFocus()
		{
			var value	= null;
			
			var bVal	= true;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWAutoFocus();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWAutoFocus = bVal;
				//console.debug(this.kWLogDisplay("m_bKWAutoFocus", this.m_bKWAutoFocus));
			}
		};
		
		textArea.prototype.taRetrieveCols = 
			function taRetrieveCols()
		{
			var value	= null;
			
			var nVal	= true;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberNotNeg(this.m_nKWCols))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWCols();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			nVal = value.getKWValue();
			if (validate.isNumberNotNeg(nVal))
			{
				this.m_nKWCols = nVal;
				//console.debug(this.kWLogDisplay("m_nKWCols", this.m_nKWCols));
			}
		};
		
		textArea.prototype.taRetrieveDisabled = 
			function taRetrieveDisabled()
		{
			var value	= null;
			
			var bVal	= true;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_bKWDisabled))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWDisabled();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWDisabled = bVal;
				//console.debug(this.kWLogDisplay("m_bKWDisabled", this.m_bKWDisabled));
			}
		};
		
		textArea.prototype.taRetrieveForm = 
			function taRetrieveForm()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWForm))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWForm();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWForm = value.getKWValue();
			if (validate.isString(this.m_sKWForm))
			{
				//console.debug(this.kWLogDisplay("m_sKWForm", this.m_sKWForm));
			}
		};		
		
		textArea.prototype.taRetrieveMaxLength = 
			function taRetrieveMaxLength()
		{
			var value	= null;
			
			var nVal	= true;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberNotNeg(this.m_nKWMaxLength))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWMaxLength();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			nVal = value.getKWValue();
			if (validate.isNumberNotNeg(nVal))
			{
				this.m_nKWMaxLength = nVal;
				//console.debug(this.kWLogDisplay("m_nKWMaxLength", this.m_nKWMaxLength));
			}
		};
		
		textArea.prototype.taRetrieveName = 
			function taRetrieveName()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWName))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWName();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWName = value.getKWValue();
			if (validate.isString(this.m_sKWName))
			{
				//console.debug(this.kWLogDisplay("m_sKWName", this.m_sKWName));
			}
		};		
		
		textArea.prototype.taRetrievePlaceHolder = 
			function taRetrievePlaceHolder()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWPlaceHolder))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWPlaceHolder();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWPlaceHolder = value.getKWValue();
			if (validate.isString(this.m_sKWPlaceHolder))
			{
				//console.debug(this.kWLogDisplay("m_sKWPlaceHolder", this.m_sKWPlaceHolder));
			}
		};
		
		textArea.prototype.taRetrieveReadOnly = 
			function taRetrieveReadOnly()
		{
			var value	= null;
			
			var bVal	= true;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWReadOnly();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWReadOnly = bVal;
				//console.debug(this.kWLogDisplay("m_bKWReadOnly", this.m_bKWReadOnly));
			}
		};
		
		textArea.prototype.taRetrieveRequired = 
			function taRetrieveRequired()
		{
			var value	= null;
			
			var bVal	= true;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWRequired();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWRequired = bVal;
				//console.debug(this.kWLogDisplay("m_bKWRequired", this.m_bKWRequired));
			}
		};

		textArea.prototype.taRetrieveRows = 
			function taRetrieveRows()
		{
			var value	= null;
			
			var nVal	= true;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberNotNeg(this.m_nKWRows))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWRows();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			nVal = value.getKWValue();
			if (validate.isNumberNotNeg(nVal))
			{
				this.m_nKWRows = nVal;
				//console.debug(this.kWLogDisplay("m_nKWRows", this.m_nKWRows));
			}
		};
		
		textArea.prototype.taRetrieveWrap = 
			function taRetrieveWrap()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWWrap))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWWrap();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWWrap = value.getKWValue();
			if (validate.isString(this.m_sKWWrap))
			{
				//console.debug(this.kWLogDisplay("m_sKWWrap", this.m_sKWWrap));
			}
		};		
		
		return textArea;

	}
);
