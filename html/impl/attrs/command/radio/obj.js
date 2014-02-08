/**********************************************************************
 *
 * radio/obj.js
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
		"../../../attr/radioGroup/obj",
		"../obj",
		"kWStat/validate"
	], 
	function
	(
		checked,
		radioGroup,
		command,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function radio()
		{
			//console.log("radio::constructor");

			this.m_kWChecked		= null;
			this.m_kWRadioGroup	    = null;

			this.m_sKWRadioGroup	= null;

			this.m_bKWChecked		= false;
		}

		radio.prototype = new command();
		radio.prototype.constructor = radio;
		radio.constructor = command.prototype.constructor;

		radio.prototype.check =
			function check()
		{
			command.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		radio.prototype.init =
			function init()
		{
			//console.log(this.kWLogCalled());
			command.prototype.init.call(this);
		};

	//*******************************************************************//
	//***
	//***		public accessors
	//***
	//*******************************************************************//

		radio.prototype.setKWChecked =
			function(bVal)
		{
			this.radioSetChecked(bVal);
        };

		radio.prototype.setKWRadioGroup =
			function(sVal)
		{
			this.radioSetRadioGroup(sVal);
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

		radio.prototype.commandCreateOR =
			function()
		{
			this.radioCreate();
		};

		radio.prototype.commandDeleteOR = function()
		{
		      this.radioDelete();
		};

		radio.prototype.commandInitOR =
			function()
		{
			this.radioInit();
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

		radio.prototype.radioCreate =
			function radioCreate()
		{
			//console.log(this.kWLogCalled());
			this.radioCreateChecked();
			this.radioCreateRadioGroup();
		};

        radio.prototype.radioCreateChecked =
            function radioCreateChecked()
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
                bValue = this.m_bKWChecked;
            }

            if (!validate.isBool(bValue))
            {
                return;
            }

            this.radioCreateCheckedImpl();

            this.m_kWChecked.setKWValue(bValue);
        };

	    radio.prototype.radioCreateCheckedImpl =
	        function radioCreateCheckedImpl()
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

	    radio.prototype.radioCreateRadioGroup =
	        function radioCreateRadioGroup()
        {
            var value   = null;

            var sValue  = null;

            //console.log(this.kWLogCalled());

            if (validate.isNotNull(this.m_kWRadioGroup))
            {
                console.error(this.kWLogRepeated());
            }

            if (!validate.isNotNull(this.m_kWView))
            {
                console.error(this.kWLogInvalid("m_kWView"));
            }

            value = this.m_kWView.getKWRadioGroup();
            if (validate.isNotNull(value))
            {
                sValue = value.getKWValue();
            }

            if (!validate.isString(sValue))
            {
                sValue = this.m_sKWRadioGroup;
            }

            if (!validate.isString(sValue))
            {
                return;
            }

            this.radioCreateRadioGroupImpl();

            this.m_kWRadioGroup.setKWValue(sValue);
        };

	    radio.prototype.radioCreateRadioGroupImpl =
	        function radioCreateRadioGroupImpl()
        {
            //console.log(this.kWLogCalled());

            if (validate.isNotNull(this.m_kWRadioGroup))
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

            this.m_kWRadioGroup = new radioGroup();

            this.m_kWRadioGroup.setKWIDParent(this.m_sKWID);
            this.m_kWRadioGroup.setKWDom(this.m_kWDom);

            this.m_kWRadioGroup.check();
            this.m_kWRadioGroup.init();

            this.kWAddAttr(this.m_kWRadioGroup);
        };

	    radio.prototype.radioDelete =
	        function radioDelete()
        {
            //console.log(this.kWLogCalled());

            this.m_kWChecked		= null;
            this.m_kWRadioGroup		= null;
        };

		radio.prototype.radioInit =
			function radioInit()
		{
			//console.log(this.kWLogCalled());
		};

	    radio.prototype.radioSetChecked =
	        function radioSetChecked(bVal)
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
                this.radioCreateCheckedImpl();
            }

            this.m_kWChecked.setKWValue(this.m_bKWChecked);
        };

	    radio.prototype.radioSetRadioGroup =
	        function radioSetRadioGroup(sVal)
        {
            //console.log(this.kWLogCalled());

            if (!validate.isString(sVal))
            {
                return;
            }

            this.m_sKWRadioGroup = sVal;

            if (!this.m_bKWInit)
            {
                return;
            }

            if (!validate.isNotNull(this.m_kWRadioGroup))
            {
                this.radioCreateRadioGroupImpl();
            }

            this.m_kWRadioGroup.setKWValue(this.m_sKWRadioGroup);
        };

		return radio;

	}
);
