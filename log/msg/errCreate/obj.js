/**********************************************************************
 *
 * errCreate/obj.js
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
	//***		public initializors
	//***
	//*******************************************************************//

		function errCreate() 
		{
			this.m_nKWMode	= enums.nErrCreate;

			this.m_sKWMode	= "error creating";
			this.m_sError	= "error creating";

			this.m_sKWTag 	= null;
		}

		errCreate.prototype = new msg();
		errCreate.prototype.constructor = errCreate;
		errCreate.constructor = msg.prototype.constructor;

		errCreate.prototype.check =
			function()
		{
			//this.bLogCheck();

			if (!this.m_sError)
			{
				this.bLogCheckInvalid("m_sError");
			}

			if (!this.m_sKWTag)
			{
				this.bLogCheckInvalid("m_sKWTag");
			}

			msg.prototype.check.call(this);
		};

		errCreate.prototype.init =
			function()
		{
			//this.bLogInit();
			msg.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***				public accessors
	//***
	//*******************************************************************//

		errCreate.prototype.setKWTag =
			function(sVal)
		{
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
	//***				protected (overrCreateidable)
	//***
	//*******************************************************************//

		errCreate.prototype.msgCreateTextImpl = 
			function()
		{
			this.ecCreateText();
		},

	//*******************************************************************//
	//***																	   
	//***				protected (non-overrCreateidable)
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***				private
	//***
	//*******************************************************************//

		errCreate.prototype.ecCreateText = 
			function()
		{
			//this.bLogCalled("ecCreateText");

			if (this.m_sKWText)
			{
				this.kWLogRepeated("ecCreateText");
			}

			if (!this.m_sError)
			{
				this.bLogCheckInvalid("ecCreateText", "m_sError");
			}

			if (!this.m_sKWTag)
			{
				this.bLogCheckInvalid("ecCreateText", "m_sKWTag");
			}

			this.m_sKWText = this.m_sError + " [" + this.m_sKWTag + "]";
		};
		
		return errCreate;

	}
)