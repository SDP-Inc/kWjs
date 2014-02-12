/**********************************************************************
 *
 * display/obj.js
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

		function display() 
		{
			this.m_nKWMode	= enums.nDisplay;

			this.m_sKWMode	= "display";

			this.m_kWVal	= null;
			this.m_sKWTag	= null;
		};
		
		display.prototype = new msg();
		display.prototype.constructor = display;
		display.constructor = msg.prototype.constructor;

		display.prototype.check = 
			function()
		{
			//this.bLogCheck();

			if (!this.m_sKWTag)
			{
				this.bLogInvalid("m_sKWTag");
			}

			msg.prototype.check.call(this);
		};

		display.prototype.init =
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

		display.prototype.setKWTag =
			function(sVal)
		{
			this.m_sKWTag = sVal;
		};

		display.prototype.setKWVal =
			function(obj)
		{
			this.m_kWVal = obj;
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
	//***					protected (accessible)
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***				protected (non-overridable)
	//***
	//*******************************************************************//

		display.prototype.msgCreateTextImpl =
			function()
		{
			this.displayCreateText();
		};

	//*******************************************************************//
	//***																	   
	//***				protected (overridable)
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***				private
	//***
	//*******************************************************************//

		display.prototype.displayCreateText = 
			function()
		{
			//this.bLogCalled("displayCreateText");

			if (this.m_sKWText)
			{
				this.bLogRepeated("displayCreateText");
			}

			if (!this.m_sKWTag)
			{
				this.bLogInvalid("displayCreateText", "m_sKWTag");
			}

			this.m_sKWText = "[" + this.m_sKWTag + "] is [" + this.m_kWVal + "]";
		};
		
		return display;
		
	}
)