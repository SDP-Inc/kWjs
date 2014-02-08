/**********************************************************************
 *
 * errRetrieve/obj.js
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

		function errRetrieve() 
		{
			this.m_nKWMode	= enums.nErrRetrieve;

			this.m_sKWMode	= "error retrieving";
			this.m_sError	= "error retrieving";

			this.m_sKWTag 	= null;
		}

		errRetrieve.prototype = new msg();
		errRetrieve.prototype.constructor = errRetrieve;
		errRetrieve.constructor = msg.prototype.constructor;

		errRetrieve.prototype.check = 
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

		errRetrieve.prototype.init =
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

		errRetrieve.prototype.setKWTag =
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
	//***				protected
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***				protected (overridable)
	//***
	//*******************************************************************//

		errRetrieve.prototype.msgCreateTextImpl = 
			function()
		{
			this.erCreateText();
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

		errRetrieve.prototype.erCreateText = 
			function()
		{
			//this.bLogCalled("erCreateText");

			if (this.m_sKWText)
			{
				this.kWLogRepeated("erCreateText");
			}

			if (!this.m_sError)
			{
				this.bLogCheckInvalid("erCreateText", "m_sError");
			}

			if (!this.m_sKWTag)
			{
				this.bLogCheckInvalid("erCreateText", "m_sKWTag");
			}

			this.m_sKWText = this.m_sError + " [" + this.m_sKWTag + "]";
		};
		
		return errRetrieve;

	}
)