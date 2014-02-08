/**********************************************************************
 *
 * fieldset/obj.js
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
		"../../attrs/fieldset/obj",
		"../../view/fieldset/obj",
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

		function fieldset()
		{
			//console.log("fieldset::constructor");
			
			this.m_sKWTag		= "fieldset";
			
			this.m_sKWForm		= null;
			this.m_sKWName		= null;
			
			this.m_bKWDisabled	= true;
		}

		fieldset.prototype = new elmt();
		fieldset.prototype.constructor = fieldset;
		fieldset.constructor = elmt.prototype.constructor;

		fieldset.prototype.check = 
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		fieldset.prototype.init =
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
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		fieldset.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.fsCreateAttrs(); 
		};
		
		fieldset.prototype.elmtCreateViewOR = 
			function()
		{
			return this.fsCreateView();
		};
		
		fieldset.prototype.elmtInitOR = 
			function()
		{
			this.fsInit();
		};
		
		fieldset.prototype.elmtRetrieveOR = 
			function()
		{
			this.fsRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		fieldset.prototype.fsInitOR = 
			function fsInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		fieldset.prototype.fsCreateAttrs = 
			function fsCreateAttrs()
		{
			theAttrs = null;
			
			//console.log(this.kWLogCalled());
			theAttrs = new attrs();
			
			theAttrs.setKWDisabled(this.m_bKWDisabled);
			theAttrs.setKWForm(this.m_sKWForm);
			theAttrs.setKWName(this.m_sKWName);
			
			return theAttrs;
		};

		fieldset.prototype.fsCreateView = 
			function fsCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		fieldset.prototype.fsInit = 
			function fsInit()
		{
			//console.log(this.kWLogCalled());
			this.fsInitOR();
		};
		
		fieldset.prototype.fsRetrieve = 
			function fsRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.fsRetrieveDisabled();
			this.fsRetrieveForm();
			this.fsRetrieveName();
		};
		
		fieldset.prototype.fsRetrieveDisabled = 
			function fsRetrieveDisabled()
		{
			var value	= null;
			
			var bVal	= false;
			
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
			
			bVal = value.getKWValue();
			if (validate.isBool(bVal))
			{
				this.m_bKWDisabled = bVal;
				//console.debug(this.kWLogDisplay("m_bKWDisabled", this.m_bKWDisabled));
			}
		};
		
		fieldset.prototype.fsRetrieveForm = 
			function fsRetrieveForm()
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
			if (validate.isString(this.m_nForm))
			{
				//console.debug(this.kWLogDisplay("m_sKWForm", this.m_sKWForm));
			}
		};
		
		fieldset.prototype.fsRetrieveName = 
			function fsRetrieveName()
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
		
		return fieldset;

	}
);
