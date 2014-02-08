/**********************************************************************
 *
 * details/obj.js
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
		"../../attr/open/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		open,
		html,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function details()
		{
			//console.log("details::constructor");
			
			this.m_kWOpen	= null;
			
			this.m_bKWOpen	= true;
		}

		details.prototype = new html();
		details.prototype.constructor = details;
		details.constructor = html.prototype.constructor;

		details.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		details.prototype.init =
			function init()
		{
			//console.log(this.kWLogCalled());
			html.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		details.prototype.setKWOpen =
			function(bVal)
		{
			this.detailsSetOpen(bVal);
		};

	//*******************************************************************//
	//***																	   
	//***		public callbacks
	//***
	//*******************************************************************//
	
	//*******************************************************************//
	//***																	   
	//***		public methods
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private methods (non-overrides)
	//***
	//*******************************************************************//
	
		details.prototype.htmlCreateOR = 
			function()
		{
			this.detailsCreate();
		};

		details.prototype.htmlDeleteOR =
		    function()
		{
		    this.detailsDelete();
		};

		details.prototype.htmlInitOR =
			function()
		{
			this.detailsInit();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		details.prototype.detailsCreate = 
			function detailsCreate()
		{
			//console.log(this.kWLogCalled());
			this.detailsCreateOpen();
		};

        details.prototype.detailsCreateOpen =
            function detailsCreateOpen()
        {
            var value   = null;

            var bValue  = null;

            //console.log(this.kWLogCalled());

            if (validate.isNotNull(this.m_kWOpen))
            {
                console.error(this.kWLogRepeated());
            }

            if (!validate.isNotNull(this.m_kWView))
            {
                console.error(this.kWLogInvalid("m_kWView"));
            }

            value = this.m_kWView.getKWOpen();
            if (validate.isNotNull(value))
            {
                bValue = value.getKWValue();
            }

            if (!validate.isBool(bValue))
            {
                bValue = this.m_bKWOpen;
            }

            if (!validate.isBool(bValue))
            {
                return;
            }

            this.detailsCreateOpenImpl();

            this.m_kWOpen.setKWValue(bValue);
        };

        details.prototype.detailsCreateOpenImpl =
            function detailsCreateOpenImpl()
        {
            //console.log(this.kWLogCalled());

            if (validate.isNotNull(this.m_kWOpen))
            {
                console.error(this.kWLogRepeated());
            }

            if (!validate.isNotNull(this.m_kWDom))
            {
                console.error(this.kWLogInvalid("m_kWDom"));
            }

            if (!validate.isString(this.m_sKWID))
            {
                console.error(this.kWLogInvalid("m_sKWID"));
            }

            this.m_kWOpen = new open();

            this.m_kWOpen.setKWIDParent(this.m_sKWID);
            this.m_kWOpen.setKWDom(this.m_kWDom);

            this.m_kWOpen.check();
            this.m_kWOpen.init();

            this.kWAddAttr(this.m_kWOpen);
        };

        details.prototype.detailsDelete =
            function detailsDelete()
        {
            console.log(this.kWLogCalled());

            this.m_kWOpen	= null;
        };

		details.prototype.detailsInit =
			function detailsInit()
		{
			//console.log(this.kWLogCalled());
		};

		details.prototype.detailsSetOpen =
            function detailsSetOpen(bVal)
        {
            //console.log(this.kWLogCalled());

            if (!validate.isBool(bVal))
            {
                return;
            }

            this.m_bKWOpen = bVal;

            if (!this.m_bKWInit)
            {
                return;
            }

            if (!validate.isNotNull(this.m_kWOpen))
            {
                this.detailsCreateOpenImpl();
            }

            this.m_kWOpen.setKWValue(this.m_bKWOpen);
        };

		return details;

	}
);
