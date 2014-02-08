/**********************************************************************
 *
 * repeated/obj.js
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
	//***		public repeatedializors
	//***
	//*******************************************************************//

		function repeated() 
		{
			this.m_nKWMode        = enums.nRepeated;

			this.m_sKWMode        = "repeated";

			this.m_sKWRepeated    = "is repeated";
		}

		repeated.prototype = new msg();
		repeated.prototype.constructor = repeated;
		repeated.constructor = msg.prototype.constructor;

		repeated.prototype.check = 
			function()
		{
			//this.bLogCheck();

			if (!this.m_sKWRepeated)
			{
				this.bLogCheckInvalid("m_sKWRepeated");
			}
			
			msg.prototype.check.call(this);
		};

		repeated.prototype.invalid = 
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

		repeated.prototype.msgCreateTextImpl =
			function()
		{
			this.repeatedCreateText();
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

		repeated.prototype.repeatedCreateText = 
			function()
		{
			//this.bLogCalled("repeatedCreateText");

			if (this.m_sKWText)
			{
				this.kWLogRepeated("repeatedCreateText");
			}

			if (!this.m_sKWRepeated)
			{
				this.bLogCheckInvalid("repeatedCreateText", "m_sKWRepeated");
			}

			this.m_sKWText = this.m_sKWRepeated;
		};
		
		return repeated;

	}
)