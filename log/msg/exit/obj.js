/**********************************************************************
 *
 * exit/obj.js
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

		function exit() 
		{
			this.m_nKWMode 	    = enums.nExit;

			this.m_sKWMode	    = "exit";

			this.m_sKWExited 	= "exited";
		}

		exit.prototype = new msg();
		exit.prototype.constructor = exit;
		exit.constructor = msg.prototype.constructor;

		exit.prototype.check =
			function()
		{
			//this.bLogCheck();

			if (!this.m_sKWExited)
			{
				this.bLogCheckInvalid("m_sKWExited");
			}

			msg.prototype.check.call(this);
		};

		exit.prototype.init = 
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

		exit.prototype.baseCreateTextImpl =
			function()
		{
			this.exitCreateText();
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

		exit.prototype.exitCreateText =
			function()
		{
			//this.bLogCalled("exitCreateText");

			if (this.m_sKWText)
			{
				this.kWLogRepeated("exitCreateText");
			}

			if (!this.m_sKWExited)
			{
				this.bLogCheckInvalid("exitCreateText", "m_sKWExited");
			}

			this.m_sKWText = this.m_sKWExited;
		};
		
		return exit;

	}
)