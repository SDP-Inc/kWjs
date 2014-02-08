/**********************************************************************
 *
 * status/obj.js
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
	//***		public statusializors
	//***
	//*******************************************************************//

		function status() 
		{
			this.m_nKWMode 	    = enums.nStatus;

			this.m_sKWMode	    = "status";

			this.m_sKWStatus 	= null;
		}
		
		status.prototype = new msg();
		status.prototype.constructor = status;
		status.constructor = msg.prototype.constructor;

		status.prototype.check = function()
		{
			//this.bLogCheck();

			if (!this.m_sKWStatus)
			{
				this.bLogCheckInvalid("m_sKWStatus");
			}
			
			msg.prototype.check.call(this);
		};

		status.prototype.invalid = function()
		{
			//this.bLogInit();
			msg.prototype.check.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***				public accessors
	//***
	//*******************************************************************//

		status.prototype.setKWStatus = function(sVal)
		{
			this.m_sKWStatus = sVal;
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

		status.prototype.msgCreateTextImpl = function()
		{
			this.statusCreateText();
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

		status.prototype.statusCreateText = function()
		{
			//this.bLogCalled("statusCreateText");

			if (this.m_sKWText)
			{
				this.kWLogRepeated("statusCreateText");
			}

			if (!this.m_sKWStatus)
			{
				this.bLogCheckInvalid("statusCreateText", "m_sKWStatus");
			}

			this.m_sKWText = this.m_sKWStatus;
		}
		
		return status;

	}
)