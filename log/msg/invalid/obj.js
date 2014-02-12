/**********************************************************************
 *
 * invalid/obj.js
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
		"../obj",
		"../stat/enums"
	], 
	function
	(
		msg,
		enums
	)
	{
		
	//*******************************************************************//
	//***																	   
	//***		public invalidializors
	//***
	//*******************************************************************//

		function invalid() 
		{
			this.m_nKWMode        = enums.nInvalid;

			this.m_sKWMode        = "invalid";
			this.m_sKWIsInvalid   = "is invalid";
			
			this.m_sKWTag         = null;
		}

		invalid.prototype = new msg();
		invalid.prototype.constructor = invalid;
		invalid.constructor = msg.prototype.constructor;

		invalid.prototype.check = 
			function()
		{
			//this.bLogCheck();

			if (!this.m_sKWIsInvalid)
			{
				this.bLogInvalid("m_sKWIsInvalid");
			}

			if (!this.m_sKWTag)
			{
				this.bLogInvalid("m_sKWTag");
			}

			msg.prototype.check.call(this);
		};

		invalid.prototype.invalid =
			function()
		{
			//this.bLogInit();
			msg.prototype.check.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***				public accessors
	//***
	//*******************************************************************//

		invalid.prototype.setKWTag =
			function(sVal)
		{
			//this.bLogCalled("setKWTag");
			this.m_sKWTag = sVal;
		};

	//*******************************************************************//
	//***																	   
	//***				public methods
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***				protected
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***				protected (overridable)
	//***
	//*******************************************************************//

		invalid.prototype.msgCreateTextImpl = 
			function()
		{
			this.invalidCreateText();
		};

	//*******************************************************************//
	//***																	   
	//***				protected (non-overridable)
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***				private
	//***
	//*******************************************************************//

		invalid.prototype.invalidCreateText =
			function()
		{
			//this.bLogCalled("invalidCreateText");

			if (!this.m_sKWIsInvalid)
			{
				this.bLogCheckInvalid("invalidCreateText", "m_sKWIsInvalid");
			}

			if (!this.m_sKWTag)
			{
				this.bLogInvalid("invalidCreateText", "m_sKWTag");
			}

			this.m_sKWText = "[" + this.m_sKWTag + "] " + this.m_sKWIsInvalid;
		};

		return invalid;
		
	}

)