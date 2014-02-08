/**********************************************************************
 *
 * notImpl/obj.js
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
	//***		public notImplializors
	//***
	//*******************************************************************//

		function notImpl() 
		{
			this.m_nKWMode 	    = enums.nNotImpl;

			this.m_sKWMode	    = "not Implemented";
			this.m_sKWNotImpl   = "is not implemented";
		}

		notImpl.prototype = new msg();
		notImpl.prototype.constructor = notImpl;
		notImpl.constructor = msg.prototype.constructor;

		notImpl.prototype.check = 
			function()
		{
			//this.bLogCheck();

			if (!this.m_sKWNotImpl)
			{
				this.bLogCheckInvalid("m_sKWNotImpl");
			}
			
			msg.prototype.check.call(this);
		};

		notImpl.prototype.invalid = 
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
	//***				public notImpls
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

		notImpl.prototype.msgCreateTextImpl = 
			function()
		{
			this.notImplCreateText();
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

		notImpl.prototype.notImplCreateText = 
			function()
		{
			//this.bLogCalled("notImplCreateText");

			if (this.m_sKWText)
			{
				this.kWLogRepeated("notImplCreateText");
			}

			if (!this.m_sKWNotImpl)
			{
				this.bLogCheckInvalid("notImplCreateText", "m_sKWNotImpl");
			}

			this.m_sKWText = this.m_sKWNotImpl;
		};
		
		return notImpl;

	}
)