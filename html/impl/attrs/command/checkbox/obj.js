/**********************************************************************
 *
 * checkbox/obj.js
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
		"../../../attr/checked/obj",
		"../obj",
		"kWStat/validate"
	], 
	function
	(
		checked,
		command,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function checkbox()
		{
			//console.log("checkbox::constructor");

			this.m_kWChecked	= null;
			
			this.m_bKWChecked	= false;
		}

		checkbox.prototype = new command();
		checkbox.prototype.constructor = checkbox;
		checkbox.constructor = command.prototype.constructor;

		checkbox.prototype.check = function check()
		{
			command.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		checkbox.prototype.init = function init()
		{
			//console.log(this.kWLogCalled());
			command.prototype.init.call(this);
		};

	//*******************************************************************//
	//***																	   
	//***		public accessors
	//***
	//*******************************************************************//

		checkbox.prototype.setKWChecked = function(bVal)
		{
			this.cbSetChecked(bVal);
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
		
		checkbox.prototype.commandCreateOR = function()
		{
			this.cbCreate();
		};

		checkbox.prototype.commandDeleteOR = function()
		{
		      this.cbDelete();
		};

		checkbox.prototype.commandInitOR = function()
		{
			this.cbInit();
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

		checkbox.prototype.cbCreate =
			function cbCreate()
		{
			//console.log(this.kWLogCalled());
			this.cbCreateChecked();
		};

        checkbox.prototype.cbCreateChecked =
            function cbCreateChecked()
        {
            var value   = null;

            var bValue  = null;

            //console.log(this.kWLogCalled());

            if (validate.isNotNull(this.m_kWChecked))
            {
                console.error(this.kWLogRepeated());
            }

            if (!validate.isNotNull(this.m_kWView))
            {
                console.error(this.kWLogInvalid("m_kWView"));
            }

            value = this.m_kWView.getKWChecked();
            if (validate.isNotNull(value))
            {
                bValue = value.getKWValue();
            }

            if (!validate.isBool(bValue))
            {
                bValue = this.m_sKWChecked;
            }

            if (!validate.isBool(bValue))
            {
                return;
            }

            this.cbCreateCheckedImpl();

            this.m_kWChecked.setKWValue(bValue);
        };

	    checkbox.prototype.cbCreateCheckedImpl =
	        function cbCreateCheckedImpl()
        {
            //console.log(this.kWLogCalled());

            if (validate.isNotNull(this.m_kWChecked))
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

            this.m_kWChecked = new checked();

            this.m_kWChecked.setKWIDParent(this.m_sKWID);
            this.m_kWChecked.setKWDom(this.m_kWDom);

            this.m_kWChecked.check();
            this.m_kWChecked.init();

            this.kWAddAttr(this.m_kWChecked);
        };

	    checkbox.prototype.cbDelete =
	        function cbDelete()
        {
            //console.log(this.kWLogCalled());

            this.m_kWChecked		= null;
        };

		checkbox.prototype.cbInit =
			function cbInit()
		{
			//console.log(this.kWLogCalled());
		};

	    checkbox.prototype.cbSetChecked =
	        function cbSetChecked(bVal)
        {
            //console.log(this.kWLogCalled());

            if (!validate.isBool(bVal))
            {
                return;
            }

            this.m_bKWChecked = bVal;

            if (!this.m_bKWInit)
            {
                return;
            }

            if (!validate.isNotNull(this.m_kWChecked))
            {
                this.cbCreateCheckedImpl();
            }

            this.m_kWChecked.setKWValue(this.m_bKWChecked);
        };

        return checkbox;

	}
);
