/**********************************************************************
 *
 * coord/obj.js
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

		function coord() 
		{
			this.m_nKWMode	= enums.nCoord;

			this.m_sKWMode	= "coord";

			this.m_nKWX		= null;
			this.m_nKWY		= null;
		}

		coord.prototype = new msg();
		coord.prototype.constructor = coord;
		coord.constructor = msg.prototype.constructor;

		coord.prototype.check = 
			function()
		{
			//this.bLogCheck();

			if (!validateNumber(this.m_nKWX))
			{
				this.bLogInvalid("m_nKWX");
			}

			if (!validateNumber(this.m_nKWY))
			{
				this.bLogInvalid("m_nKWY");
			}

			msg.prototype.check.call(this);
		};
	
		coord.prototype.init =
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

		coord.prototype.setKWX =
			function(nVal)
		{
			this.m_nKWX = nVal;
		};

		coord.prototype.setKWY =
			function(nVal)
		{
			this.m_nKWY = nVal;
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

	//*******************************************************************//
	//***																	   
	//***				protected (non-overridable)
	//***
	//*******************************************************************//

		coord.prototype.msgInitOR =
			function()
		{
			this.coordInit();
		};

		coord.prototype.msgCreateTextImpl = 
			function()
		{
			this.coordCreateText();
		};

	//*******************************************************************//
	//***																	   
	//***					protected (accessible)
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***				private
	//***
	//*******************************************************************//

		coord.prototype.coordInit = 
			function()
		{
			//this.bLogCalled("coordInit");
		};

		coord.prototype.coordCreateText = 
			function()
		{
			//this.bLogCalled("coordCreateText");

			var sTitle = null;

			if (this.m_sKWText)
			{
				this.bLogRepeated("coordCreateText");
			}

			if (!m_sKWTag)
			{
				this.bLogInvalid("coordCreateText", m_sKWTag);
			}

			if (!validateNumber(this.m_nKWX))
			{
				this.bLogInvalid("coordCreateText", "m_nKWX");
			}

			if (!validateNumber(this.m_nKWY))
			{
				this.bLogInvalid("coordCreateText", "m_nKWY");
			}

			sTitle	     = this.m_sKWTag;
			
			this.m_sKWText	= sTitle
							+ "[" 
							+ this.m_nKWX
							+ "," 
							+ this.m_nKWY
							+ "]";
		
		};
			
		return coord;
			
	}
)