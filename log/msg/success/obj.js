/**********************************************************************
 *
 * success/obj.js
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
	//***		public successializors
	//***
	//*******************************************************************//

		function success() 
		{
			this.m_nKWMode 	= enums.nSuccess;

			this.m_sKWMode	= "success";
		}

		success.prototype = new msg();
		success.prototype.constructor = success;
		success.constructor = msg.prototype.constructor;

		success.prototype.check = 
			function()
		{
			//this.bLogCheck();

			if (!this.m_sSuccess)
			{
				this.bLogCheckInvalid("m_sSuccess");
			}

			msg.prototype.check.call(this);
		};

		success.prototype.invalid =
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

		success.prototype.msgCreateTextImpl = 
			function()
		{
			this.successCreateText();
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

		success.prototype.successCreateText =
			function()
		{
			//this.bLogCalled("successCreateText");

			if (this.m_sKWText)
			{
				this.bLogRepeated("successCreateText");
			}

			if (!this.m_sSuccess)
			{
				this.bLogInvalid("successCreateText", "m_sSuccess");
			}

			this.m_sKWText = this.m_sSuccess;
		};
		
		return success;

	}
)