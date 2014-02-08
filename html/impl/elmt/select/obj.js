/**********************************************************************
 *
 * select/obj.js
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
		"../../attrs/select/obj",
		"../../view/select/obj",
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

		function select()
		{
			//console.log("select::constructor");

			this.m_sKWTag			= "select";
			
			this.m_sKWForm			= "";
			this.m_sKWName			= "";
			
			this.m_nKWSize			= -1;
			
			this.m_bKWAutoFocus		= false;
			this.m_bKWDisabled		= false;
			this.m_bKWMultiple		= false;
			this.m_bKWRequired		= false;
		}

		select.prototype = new elmt();
		select.prototype.constructor = select;
		select.constructor = elmt.prototype.constructor;

		select.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		select.prototype.init = 
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

		select.prototype.setKWMultiple =
			function(bVal)
		{
			thism_bKWMultiple = bVal;
		};

	//*******************************************************************//
	//***																	   
	//***		public callbacks
	//***
	//*******************************************************************//
	
		select.prototype.callbackChange =
			function(evt)
		{
			var obj = null;

			var sID = null;
			var sValue = null;
			var sText = null;

			//console.log("select::callbackChange() called")

			evt.preventDefault();

			obj = $.data(this, "ctlr");
			if (!obj)
			{
			   throw new Error("select::callbackChange() [obj] invalid"); 
			}

			sValue = $(this).attr('value');
			if (!validate.isString(sValue))
			{
			   throw new Error("select::callbackChange() <sValue> invalid"); 
			}

			obj.click(sValue, sID);
		};

		select.prototype.callbackChangeIE =
			function(evt)
		{
			var sValue  = null;
			var $select = null;
			var obj     = null;
			var elmt    = null;

			//console.log("select::callbackChangeIE() called")

			elmt = evt.srcElement;
			if (!elmt)
			{
				throw new Error("select::callbackChangeIE() [elmt] invalid"); 
			}

			sValue = elmt.value;
			if (!validate.isString(sValue))
			{
				throw new Error("select::callbackChangeIE() [sValue] invalid"); 
			}

			$select = $('#filter_body');
			if (!$select)
			{
			   throw new Error("select::callbackChangeIE() [$select] invalid"); 
			}

			obj = $select.data("ctlr");
			if (!obj)
			{
			   throw new Error("select::callbackChangeIE() [obj] invalid"); 
			}
			
			obj.selectClick(sValue);
		};

	//*******************************************************************//
	//***																	   
	//***		public methods
	//***
	//*******************************************************************//

		select.prototype.click = 
			function(sValue, sID)
		{
		   this.selectClick(sValue, sID);
		};

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//

		select.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.selectCreateAttrs(); 
		};
		
		select.prototype.elmtCreateViewOR = 
			function()
		{
			return this.selectCreateView();
		};
		
		select.prototype.elmtInitOR = 
			function()
		{
			this.selectInit();
		};
		
		select.prototype.elmtRetrieveOR = 
			function()
		{
			this.selectRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		select.prototype.selectClickOR = 
			function selectClickOR(sValue)
		{
			console.error(this.kWLogNotImpl());
		};
		
		select.prototype.selectInitOR = 
			function selectInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		select.prototype.selectCreateAttrs = 
			function selectCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWAutoFocus(this.m_bKWAutoFocus);
			theAttrs.setKWDisabled(this.m_bKWDisabled);
			theAttrs.setKWForm(this.m_sKWForm);
			theAttrs.setKWMultiple(this.m_bKWMultiple);
			theAttrs.setKWName(this.m_sKWName);
			theAttrs.setKWRequired(this.m_bKWRequired);
			theAttrs.setKWSize(this.m_nKWSize);
			
			return theAttrs;
		};

		select.prototype.selectCreateView = 
			function selectCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		select.prototype.selectClick = 
			function selectClick(sValue)
		{
			//console.log(this.kWLogCalled());
			this.selectClickOR(sValue);
		};
		
		select.prototype.selectInit = 
			function selectInit()
		{
			//console.log(this.kWLogCalled());
			this.selectSubscribe();
			this.selectInitOR();
		};

		select.prototype.selectRetrieve = 
			function selectRetrieve()
		{
			//console.log(this.kWLogCalled());
			this.selectRetrieveAutoFocus();
			this.selectRetrieveDisabled();
			this.selectRetrieveForm();
			this.selectRetrieveMultiple();
			this.selectRetrieveName();
			this.selectRetrieveRequired();
			this.selectRetrieveSize();
		};

		select.prototype.selectRetrieveAutoFocus = 
			function selectRetrieveAutoFocus()
		{
			var value	= null;
			
			var bValue	= false;
			
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
			
			bValue = value.getKWValue();
			if (validate.isBool(bValue))
			{
				this.m_bKWAutoFocus = bValue;
				//console.error(this.kWLogDisplay("m_bKWAutoFocus", this.m_bKWAutoFocus));
			}
		};

		select.prototype.selectRetrieveDisabled = 
			function selectRetrieveDisabled()
		{
			var value	= null;
			
			var bValue	= false;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWDisabled();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bValue = value.getKWValue();
			if (validate.isBool(bValue))
			{
				this.m_bKWDisabled = bValue;
				//console.error(this.kWLogDisplay("m_bKWDisabled", this.m_bKWDisabled));
			}
		};

		select.prototype.selectRetrieveForm = 
			function selectRetrieveForm()
		{
			var value	= null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWForm))
			{
				console.error(this.logDuplicated());
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

		select.prototype.selectRetrieveMultiple = 
			function selectRetrieveMultiple()
		{
			var value	= null;
			
			var bValue	= false;
			
			//console.log(this.kWLogCalled());
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWMultiple();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			bValue = value.getKWValue();
			if (validate.isBool(bValue))
			{
				this.m_bKWMultiple = bValue;
				//console.error(this.kWLogDisplay("m_bKWMultiple", this.m_bKWMultiple));
			}
		};

		select.prototype.selectRetrieveName = 
			function selectRetrieveName()
		{
			var value	= null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWName))
			{
				console.error(this.logDuplicated());
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

		select.prototype.selectRetrieveRequired = 
			function selectRetrieveRequired()
		{
			var value	= null;
			
			var bValue	= false;
			
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
			
			bValue = value.getKWValue();
			if (validate.isBool(bValue))
			{
				this.m_bKWRequired = bValue;
				//console.error(this.kWLogDisplay("m_bKWRequired", this.m_bKWRequired));
			}
		};

		select.prototype.selectRetrieveSize = 
			function selectRetrieveSize()
		{
			var value	= null;
			
			var nValue	= false;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberNotNeg(this.m_nKWSize))
			{
				console.error(this.logDuplicated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWSize();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			nValue = value.getKWValue();
			if (validate.isNumberNotNeg(nValue))
			{
				this.m_nKWSize = nValue;
				//console.error(this.kWLogDisplay("m_nKWSize", this.m_nKWSize));
			}
		};
		
		select.prototype.selectSubscribe =
			function selectSubscribe()
		{
			//console.log(this.kWLogCalled());
			
			if (!validate.isDom(this.m_kWDom))
			{
				console.error(this.kWLogInvalid("m_kWDom"));
			}

			if (!validate.isFunction(this.callbackChange))
			{
				console.error(this.kWLogInvalid("callbackChange"));
			}

			if (!validate.isFunction(this.callbackChangeIE))
			{
				console.error(this.kWLogInvalid("callbackChangeIE"));
			}

			if ($.browser.msie)
			{    
				var elmt = this.m_kWDom.get(0);
				elmt.attachEvent("onchange", this.callbackChangeIE);
			}
			else
			{
				this.m_kWDom.change(this.callbackChange);
			}
		}
		
		return select;
		
	}
);
