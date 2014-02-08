/**********************************************************************
 *
 * command/obj.js
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
		"../../attr/disabled/obj",
		"../../attr/icon/obj",
		"../../attr/label/obj",
		"../../attr/type/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		disabled,
		icon,
		label,
		type,
		html,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function command()
		{
			//console.log("command::constructor");

			this.m_kWDisabled	= null;
			this.m_kWIcon		= null;
			this.m_kWLabel		= null;
			this.m_kWType		= null;

			this.m_sKWIcon		= null;
			this.m_sKWLabel		= null;
			this.m_sKWType		= null;
			
			this.m_bKWDisabled	= false;
		}

		command.prototype = new html();
		command.prototype.constructor = command;
		command.constructor = html.prototype.constructor;

		command.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		command.prototype.init =
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

		command.prototype.setKWDisabled =
			function(bVal)
		{
			this.commandSetDisabled(bVal);
		};

		command.prototype.setKWIcon =
			function(sVal)
		{
		    this.commandSetIcon(sVal);
		};

		command.prototype.setKWLabel =
			function(sVal)
		{
		    this.commandSetLabel(sVal);
		};

		command.prototype.setKWType =
			function(sVal)
		{
		    this.commandSetType(sVal);
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
	
		command.prototype.htmlCreateOR =
			function()
		{
			this.commandCreate();
		};

		command.prototype.htmlDeleteOR =
		    function()
		{
		    this.commandDelete();
		};

		command.prototype.htmlInitOR =
			function()
		{
			this.commandInit();
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods (overrides)
	//***
	//*******************************************************************//

		command.prototype.commandCreateOR =
			function commandCreateOR()
		{
			console.error(this.kWLogNotImpl());
		};

		command.prototype.commandDeleteOR =
			function commandDeleteOR()
		{
			console.error(this.kWLogNotImpl());
		};

		command.prototype.commandInitOR =
			function commandInitOR()
		{
			console.error(this.kWLogNotImpl());
		};
		
	//*******************************************************************//
	//***																	   
	//***		private methods
	//***
	//*******************************************************************//

		command.prototype.commandCreate = 
			function commandCreate()
		{
			//console.log(this.kWLogCalled());
			
			this.commandCreateDisabled();
			this.commandCreateIcon();
			this.commandCreateLabel();
			
			this.commandCreateOR();
		};

        command.prototype.commandCreateDisabled =
            function commandCreateDisabled()
        {
            var value   = null;

            var bValue  = null;

            //console.log(this.kWLogCalled());

            if (validate.isNotNull(this.m_kWDisabled))
            {
                console.error(this.kWLogRepeated());
            }

            if (!validate.isNotNull(this.m_kWView))
            {
                console.error(this.kWLogInvalid("m_kWView"));
            }

            value = this.m_kWView.getKWDisabled();
            if (validate.isNotNull(value))
            {
                bValue = value.getKWValue();
            }

            if (!validate.isBool(bValue))
            {
                bValue = this.m_bKWDisabled;
            }

            if (!validate.isBool(bValue))
            {
                return;
            }

            this.commandCreateDisabledImpl();

            this.m_kWDisabled.setKWValue(bValue);
        };

        command.prototype.commandCreateDisabledImpl =
            function commandCreateDisabledImpl()
        {
            //console.log(this.kWLogCalled());

            if (validate.isNotNull(this.m_kWDisabled))
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

            this.m_kWDisabled = new disabled();

            this.m_kWDisabled.setKWIDParent(this.m_sKWID);
            this.m_kWDisabled.setKWDom(this.m_kWDom);

            this.m_kWDisabled.check();
            this.m_kWDisabled.init();

            this.kWAddAttr(this.m_kWDisabled);
        };

        command.prototype.commandCreateIcon =
            function commandCreateIcon()
        {
            var value   = null;

            var sValue  = null;

            //console.log(this.kWLogCalled());

            if (validate.isNotNull(this.m_kWIcon))
            {
                console.error(this.kWLogRepeated());
            }

            if (!validate.isNotNull(this.m_kWView))
            {
                console.error(this.kWLogInvalid("m_kWView"));
            }

            value = this.m_kWView.getKWIcon();
            if (validate.isNotNull(value))
            {
                sValue = value.getKWValue();
            }

            if (!validate.isString(sValue))
            {
                sValue = this.m_sKWIcon;
            }

            if (!validate.isString(sValue))
            {
                return;
            }

            this.commandCreateIconImpl();

            this.m_kWIcon.setKWValue(sValue);
        };

        command.prototype.commandCreateIconImpl =
            function commandCreateIconImpl()
        {
            //console.log(this.kWLogCalled());

            if (validate.isNotNull(this.m_kWIcon))
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

            this.m_kWIcon = new icon();

            this.m_kWIcon.setKWIDParent(this.m_sKWID);
            this.m_kWIcon.setKWDom(this.m_kWDom);

            this.m_kWIcon.check();
            this.m_kWIcon.init();

            this.kWAddAttr(this.m_kWIcon);
        };

        command.prototype.commandCreateLabel =
            function commandCreateLabel()
        {
            var value   = null;

            var sValue  = null;

            //console.log(this.kWLogCalled());

            if (validate.isNotNull(this.m_kWLabel))
            {
                console.error(this.kWLogRepeated());
            }

            if (!validate.isNotNull(this.m_kWView))
            {
                console.error(this.kWLogInvalid("m_kWView"));
            }

            value = this.m_kWView.getKWLabel();
            if (validate.isNotNull(value))
            {
                sValue = value.getKWValue();
            }

            if (!validate.isString(sValue))
            {
                sValue = this.m_sKWLabel;
            }

            if (!validate.isString(sValue))
            {
                return;
            }

            this.commandCreateLabelImpl();

            this.m_kWLabel.setKWValue(sValue);
        };

        command.prototype.commandCreateLabelImpl =
            function commandCreateLabelImpl()
        {
            //console.log(this.kWLogCalled());

            if (validate.isNotNull(this.m_kWLabel))
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

            this.m_kWLabel = new label();

            this.m_kWLabel.setKWIDParent(this.m_sKWID);
            this.m_kWLabel.setKWDom(this.m_kWDom);

            this.m_kWLabel.check();
            this.m_kWLabel.init();

            this.kWAddAttr(this.m_kWLabel);
        };

        command.prototype.commandDelete =
            function commandDelete()
        {
            console.log(this.kWLogCalled());

            this.m_kWDisabled	= null;
            this.m_kWIcon		= null;
            this.m_kWLabel		= null;
            this.m_kWType		= null;

            this.commandDeleteOR();
        };

        command.prototype.commandInit =
			function commandInit()
		{
			//console.log(this.kWLogCalled());
			this.commandInitOR();
		};

		command.prototype.commandSetDisabled =
            function commandSetDisabled(bVal)
        {
            //console.log(this.kWLogCalled());

            if (!validate.isBool(bVal))
            {
                return;
            }

            this.m_bKWDisabled = bVal;

            if (!this.m_bKWInit)
            {
                return;
            }

            if (!validate.isNotNull(this.m_kWDisabled))
            {
                this.commandCreateDisabledImpl();
            }

            this.m_kWDisabled.setKWValue(this.m_bKWDisabled);
        };

        command.prototype.commandSetIcon =
            function commandSetIcon(sVal)
        {
            //console.log(this.kWLogCalled());

            if (!validate.isString(sVal))
            {
                return;
            }

            this.m_sKWIcon = sVal;

            if (!this.m_bKWInit)
            {
                return;
            }

            if (!validate.isNotNull(this.m_kWIcon))
            {
                this.commandCreateIconImpl();
            }

            this.m_kWIcon.setKWValue(this.m_sKWIcon);
        };

        command.prototype.commandSetLabel =
            function commandSetLabel(sVal)
        {
            //console.log(this.kWLogCalled());

            if (!validate.isString(sVal))
            {
                return;
            }

            this.m_sKWLabel = sVal;

            if (!this.m_bKWInit)
            {
                return;
            }

            if (!validate.isNotNull(this.m_kWLabel))
            {
                this.commandCreateLabelImpl();
            }

            this.m_kWLabel.setKWValue(this.m_sKWLabel);
        };

        command.prototype.commandSetType =
            function commandSetType(sVal)
        {
            //console.log(this.kWLogCalled());

            if (!validate.isString(sVal))
            {
                return;
            }

            this.m_sKWType = sVal;

            if (!this.m_bKWInit)
            {
                return;
            }

            if (!validate.isNotNull(this.m_kWType))
            {
                this.commandCreateTypeImpl();
            }

            this.m_kWType.setKWValue(this.m_sKWType);
        };

        return command;

	}
);
