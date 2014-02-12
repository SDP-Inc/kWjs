/**********************************************************************
 *
 * called/obj.js
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
	
		function called() 
		{
			this.m_nKWMode 		= enums.nCalled;

			this.m_sKWMode		= "called";
		}
		
		called.prototype = new msg();
		called.prototype.constructor = called;
		called.constructor = msg.prototype.constructor;

		called.prototype.check =
			function()
		{
			//this.bLogCheck();
			msg.prototype.check.call(this);
		};

		called.prototype.init = 
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

		called.prototype.msgCreateTextImpl =
			function()
		{
			this.calledCreateText();
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

		called.prototype.calledCreateText = 
			function()
		{
			//this.bLogCalled("calledCreateText");

			if (this.m_sKWText)
			{
				this.bLogRepeated("calledCreateText");
			}

			if (!this.m_sKWMode)
			{
				this.bLogInvalid("calledCreateText", "m_sCalled");
			}

			this.m_sKWText = this.m_sKWMode;
		};
		
		return called;
		
	}
)