/**********************************************************************
 *
 * source/obj.js
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
		"../../attrs/source/obj",
		"../../view/source/obj",
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

		function source()
		{
			//console.log("source::constructor");

			this.m_sKWTag	= "source";
			
			this.m_sKWMedia	= null;
			this.m_sKWSrc	= null;
			this.m_sKWType	= null;
		}

		source.prototype = new elmt();
		source.prototype.constructor = source;
		source.constructor = elmt.prototype.constructor;

		source.prototype.check =
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		source.prototype.init =
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

		source.prototype.elmtCreateAttrsOR =
			function()
		{
			return this.sourceCreateAttrs(); 
		};
		
		source.prototype.elmtCreateViewOR =
			function()
		{
			return this.sourceCreateView();
		};
		
		source.prototype.elmtInitOR =
			function()
		{
			this.sourceInit();
		};
		
		source.prototype.elmtRetrieveOR =
			function()
		{
			this.sourceRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		source.prototype.sourceInitOR = 
			function sourceInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		source.prototype.sourceCreateAttrs = 
			function sourceCreateAttrs()
		{
			var theAttrs = null;
			
			//console.log(this.kWLogCalled());
			
			theAttrs = new attrs();
			
			theAttrs.setKWMedia(this.m_sKWMedia);
			theAttrs.setKWSrc(this.m_sKWSrc);
			theAttrs.setKWType(this.m_sKWType);
			
			return theAttrs;
		};

		source.prototype.sourceCreateView = 
			function sourceCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};

		source.prototype.sourceInit = 
			function sourceInit()
		{
			//console.log(this.kWLogCalled());
			this.sourceInitOR();
		};

		source.prototype.sourceRetrieve = 
			function sourceRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.sourceRetrieveMedia();
			this.sourceRetrieveSrc();
			this.sourceRetrieveType();
		};
		
		source.prototype.sourceRetrieveMedia = 
			function sourceRetrieveMedia()
		{
			var value	= null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWMedia))
			{
				console.error(this.logDuplicated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWMedia();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWMedia = value.getKWValue();
			if (validate.isString(this.m_sKWMedia))
			{
				//console.debug(this.kWLogDisplay("m_sKWMedia", this.m_sKWMedia));
			}
		};

		source.prototype.sourceRetrieveSrc = 
			function sourceRetrieveSrc()
		{
			var value	= null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWSrc))
			{
				console.error(this.logDuplicated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWSrc();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWSrc = value.getKWValue();
			if (validate.isString(this.m_sKWSrc))
			{
				//console.debug(this.kWLogDisplay("m_sKWSrc", this.m_sKWSrc));
			}
		};

		source.prototype.sourceRetrieveType = 
			function sourceRetrieveType()
		{
			var value	= null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWType))
			{
				console.error(this.logDuplicated());
			}
			
			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWType();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			this.m_sKWType = value.getKWValue();
			if (validate.isString(this.m_sKWType))
			{
				//console.debug(this.kWLogDisplay("m_sKWType", this.m_sKWType));
			}
		};
		
		return source;
		
	}
);
