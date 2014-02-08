/**********************************************************************
 *
 * dialog/obj.js
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

		function dialog()
		{
			//console.log("dialog::constructor");
			this.m_kWOpen	= null;
			
			this.m_bKWOpen	= true;
		}

		dialog.prototype = new html();
		dialog.prototype.constructor = dialog;
		dialog.constructor = html.prototype.constructor;

		dialog.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		dialog.prototype.init = 
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

		dialog.prototype.setKWOpen =
			function(bVal)
		{
			this.dialogSetOpen(bVal);
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
	
		dialog.prototype.htmlCreateOR =
			function()
		{
			this.dialogCreate();
		};

		dialog.prototype.htmlDeleteOR =
		    function()
		{
		    this.dialogDelete();
		};

		dialog.prototype.htmlInitOR = 
			function()
		{
			this.dialogInit();
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

		dialog.prototype.dialogCreate = 
			function dialogCreate()
		{
			//console.log(this.kWLogCalled());
			this.dialogCreateOpen();
		};

        dialog.prototype.dialogCreateOpen =
            function dialogCreateOpen()
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

            this.dialogCreateOpenImpl();

            this.m_kWOpen.setKWValue(bValue);
        };

        dialog.prototype.dialogCreateOpenImpl =
            function dialogCreateOpenImpl()
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

        dialog.prototype.dialogDelete =
            function dialogDelete()
        {
            console.log(this.kWLogCalled());

            this.m_kWOpen	= null;
        };

		dialog.prototype.dialogInit = 
			function dialogInit()
		{
			//console.log(this.kWLogCalled());
		};

		dialog.prototype.dialogSetOpen =
            function dialogSetOpen(bVal)
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
                this.dialogCreateOpenImpl();
            }

            this.m_kWOpen.setKWValue(this.m_bKWOpen);
        };

		return dialog;

	}
);
