/**********************************************************************
 *
 * embed/obj.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2013 iTKunst Corporation
 *
 *
 **********************************************************************/

define
(
	[	
		"../../attrs/embed/obj",
		"../../view/embed/obj",
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

		function embed()
		{
			//console.log("embed::constructor");
			this.m_sKWTag		= "embed";
			
			this.m_sKWType	    = null;
			this.m_sKWSrc		= null;
			
			this.m_nKWHeight    = -1;
			this.m_nKWWidth	    = -1;
		}

		embed.prototype = new elmt();
		embed.prototype.constructor = embed;
		embed.constructor = elmt.prototype.constructor;

		embed.prototype.check =
			function check()
		{
			elmt.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		embed.prototype.init = 
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
	
		embed.prototype.elmtCreateAttrsOR = 
			function()
		{
			return this.embedCreateAttrs(); 
		};
		
		embed.prototype.elmtCreateViewOR = 
			function()
		{
			return this.embedCreateView();
		};
		
		embed.prototype.elmtInitOR = 
			function()
		{
			this.embedInit();
		};
		
		embed.prototype.elmtRetrieveOR = 
			function()
		{
			this.embedRetrieve();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		embed.prototype.embedInitOR = 
			function embedInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		embed.prototype.embedCreateAttrs = 
			function embedCreateAttrs()
		{
			theAttrs = null;
			
			//console.log(this.kWLogCalled());
			theAttrs = new attrs();
			
			theAttrs.setKWHeight(this.m_nKWHeight);
			theAttrs.setKWType(this.m_sKWType);
			theAttrs.setKWSrc(this.m_sKWSrc);
			theAttrs.setKWWidth(this.m_nKWWidth);
			
			return theAttrs;
		};

		embed.prototype.embedCreateView = 
			function embedCreateView()
		{
			//console.log(this.kWLogCalled());
			return new view();
		};
		
		embed.prototype.embedInit = 
			function embedInit()
		{
			//console.log(this.kWLogCalled());
			this.embedInitOR();
		};
		
		embed.prototype.embedRetrieve = 
			function embedRetrieve()
		{
			//console.log(this.kWLogCalled());
			
			this.embedRetrieveHeight();
			this.embedRetrieveType();
			this.embedRetrieveSrc();
			this.embedRetrieveWidth();
		};
		
		embed.prototype.embedRetrieveHeight = 
			function embedRetrieveHeight()
		{
			var value	= null;
			
			var nVal	= -1;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberPos(this.m_nKWHeight))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWHeight();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			nVal = value.getKWValue();
			if (validate.isNumberPos(nVal))
			{
				this.m_nKWHeight = nVal;
				//console.debug(this.kWLogDisplay("m_nKWHeight", this.m_nKWHeight));
			}
		};		
		
		embed.prototype.embedRetrieveType = 
			function embedRetrieveType()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWType))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWType();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value", value));
			}
			
			this.m_sKWType = value.getKWValue();
			if (validate.isString(this.m_sKWType))
			{
				//console.log(this.kWLogDisplay("m_sImgType", this.m_sImgType));
			}
		};
		
		embed.prototype.embedRetrieveSrc = 
			function embedRetrieveSrc()
		{
			var value = null;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isString(this.m_sKWSrc))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWSrc();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value", value));
			}
			
			this.m_sKWSrc = value.getKWValue();
			if (validate.isString(this.m_sKWSrc))
			{
				//console.log(this.kWLogDisplay("m_sImgSrc", this.m_sImgSrc));
			}
		};
		
		embed.prototype.embedRetrieveWidth = 
			function embedRetrieveWidth()
		{
			var value = null;
			
			var nVal	= -1;
			
			//console.log(this.kWLogCalled());
			
			if (validate.isNumberPos(this.m_nKWWidth))
			{
				console.error(this.kWLogRepeated());
			}

			if (!validate.isNotNull(this.m_kWView))
			{
				console.error(this.kWLogInvalid("m_kWView"));
			}

			value = this.m_kWView.getKWWidth();
			if (!validate.isNotNull(value))
			{
				console.error(this.kWLogErrRetrieve("value"));
			}
			
			nVal = value.getKWValue();
			if (validate.isNumberPos(nVal))
			{
				this.m_nKWWidth = nVal;
				//console.debug(this.kWLogDisplay("m_nKWWidth", this.m_nKWWidth));
			}
		};		
		
		return embed;

	}
);
