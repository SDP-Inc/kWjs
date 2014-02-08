/**********************************************************************
 *
 * del/obj.js
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
		"../../attr/cite/obj",
		"../../attr/dateTime/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		cite,
		dateTime,
		html,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function del()
		{
			//console.log("del::constructor");
			
			this.m_kWCite		= null;
			this.m_kWDateTime	= null;
			
			this.m_sKWCite		= null;
			this.m_sKWDateTime	= null;
		}

		del.prototype = new html();
		del.prototype.constructor = del;
		del.constructor = html.prototype.constructor;

		del.prototype.check = 
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		del.prototype.init = 
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

		del.prototype.setKWCite =
			function(sVal)
		{
			this.delSetCite(sVal);
		};

		del.prototype.setKWDateTime =
			function(sVal)
		{
			this.delSetDateTime(sVal);
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
	
		del.prototype.htmlCreateOR = 
			function()
		{
			this.delCreate();
		};
		
		del.prototype.htmlDeleteOR = function()
		{
			this.delDelete();
		};
		
		del.prototype.htmlInitOR = 
			function()
		{
			this.delInit();
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

		del.prototype.delCreate = 
			function delCreate()
		{
			//console.log(this.kWLogCalled());
			this.delCreateCite();
			this.delCreateDateTime();
		};

        del.prototype.delCreateCite =
            function delCreateCite()
        {
            var value   = null;

            var sValue  = null;

            //console.log(this.kWLogCalled());

            if (validate.isNotNull(this.m_kWCite))
            {
                console.error(this.kWLogRepeated());
            }

            if (!validate.isNotNull(this.m_kWView))
            {
                console.error(this.kWLogInvalid("m_kWView"));
            }

            value = this.m_kWView.getKWCite();
            if (validate.isNotNull(value))
            {
                sValue = value.getKWValue();
            }

            if (!validate.isString(sValue))
            {
                sValue = this.m_sKWCite;
            }

            if (!validate.isString(sValue))
            {
                return;
            }

            this.delCreateCiteImpl();

            this.m_kWCite.setKWValue(sValue);
        };

	    del.prototype.delCreateCiteImpl =
	        function delCreateCiteImpl()
        {
            //console.log(this.kWLogCalled());

            if (validate.isNotNull(this.m_kWCite))
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

            this.m_kWCite = new cite();

            this.m_kWCite.setKWIDParent(this.m_sKWID);
            this.m_kWCite.setKWDom(this.m_kWDom);

            this.m_kWCite.check();
            this.m_kWCite.init();

            this.kWAddAttr(this.m_kWCite);
        };


	    del.prototype.delCreateDateTime =
	        function delCreateDateTime()
        {
            var value   = null;

            var bValue  = null;

            //console.log(this.kWLogCalled());

            if (validate.isNotNull(this.m_kWDateTime))
            {
                console.error(this.kWLogRepeated());
            }

            if (!validate.isNotNull(this.m_kWView))
            {
                console.error(this.kWLogInvalid("m_kWView"));
            }

            value = this.m_kWView.getKWDateTime();
            if (validate.isNotNull(value))
            {
                sValue = value.getKWValue();
            }

            if (!validate.isString(sValue))
            {
                sValue = this.m_sKWDateTime;
            }

            if (!validate.isString(sValue))
            {
                return;
            }

            this.delCreateDateTimeImpl();

            this.m_kWDateTime.setKWValue(sValue);
        };

	    del.prototype.delCreateDateTimeImpl =
	        function delCreateDateTimeImpl()
        {
            //console.log(this.kWLogCalled());

            if (validate.isNotNull(this.m_kWDateTime))
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

            this.m_kWDateTime = new dateTime();

            this.m_kWDateTime.setKWIDParent(this.m_sKWID);
            this.m_kWDateTime.setKWDom(this.m_kWDom);

            this.m_kWDateTime.check();
            this.m_kWDateTime.init();

            this.kWAddAttr(this.m_kWDateTime);
        };

	    del.prototype.delDelete =
	        function delDelete()
        {
            //console.log(this.kWLogCalled());

            this.m_kWCite	    	= null;
			this.m_kWDateTime		= null;
        };

		del.prototype.delInit =
			function delInit()
		{
			//console.log(this.kWLogCalled());
		};

	    del.prototype.delSetCite =
	        function delSetCite(sVal)
        {
            //console.log(this.kWLogCalled());

            if (!validate.isString(sVal))
            {
                return;
            }

            this.m_sKWCite = sVal;

            if (!this.m_bKWInit)
            {
                return;
            }

            if (!validate.isNotNull(this.m_kWCite))
            {
                this.delCreateCiteImpl();
            }

            this.m_kWCite.setKWValue(this.m_sKWCite);
        };

	    del.prototype.delSetDateTime =
	        function delSetDateTime(sVal)
        {
            //console.log(this.kWLogCalled());

            if (!validate.isString(sVal))
            {
                return;
            }

            this.m_sKWDateTime = sVal;

            if (!this.m_bKWInit)
            {
                return;
            }

            if (!validate.isNotNull(this.m_kWDateTime))
            {
                this.delCreateDateTimeImpl();
            }

            this.m_kWDateTime.setKWValue(this.m_sKWDateTime);
        };

		return del;

	}
);
