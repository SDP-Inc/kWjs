/**********************************************************************
 *
 * tag/obj.js
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
	//***		public tagializors
	//***
	//*******************************************************************//

		function tag() 
		{
			this.m_nKWMode 	= enums.nTag;

			this.m_sKWMode	= "tag";

			this.m_sKWTag 	= null;
			this.m_sKWValue	= null;
		}

		tag.prototype = new msg();
		tag.prototype.constructor = tag;
		tag.constructor = msg.prototype.constructor;

		tag.prototype.check = 
			function()
		{
			//this.bLogCheck();
			
			if (!this.m_sKWTag)
			{
				this.bLogCheckInvalid("m_sKWTag");
			}

			if (!this.m_sKWValue)
			{
				this.bLogCheckInvalid("m_sKWValue");
			}

			msg.prototype.check.call(this);
		};

		tag.prototype.invalid = 
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

		tag.prototype.setKWTag =
			function(sVal)
		{
			this.m_sKWTag = sVal;
		};

		tag.prototype.setKWValue =
			function(sVal)
		{
			this.m_sKWValue = sVal;
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

		tag.prototype.baseCreateTextImpl = 
			function()
		{
			this.tagCreateText();
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

		tag.prototype.tagCreateText = 
			function()
		{
			//this.bLogCalled("tagCreateText");

			if (this.m_sKWText)
			{
				this.bLogRepeated("tagCreateText");
			}

			if (!this.m_sKWTag)
			{
				this.bLogInvalid("tagCreateText", "m_sKWTag");
			}

			if (!this.m_sKWValue)
			{
				this.bLogInvalid("tagCreateText", "m_sKWValue");
			}

			this.m_sKWText = this.m_sKWTag + "[" + this.m_sKWValue + "}";
		};
		
		return tag;

	}
)