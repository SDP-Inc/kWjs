/**********************************************************************
 *
 * col/obj.js
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
		"../../attr/span/obj",
		"../../../base/attrs/html/obj",
		"kWStat/validate"
	], 
	function
	(
		span,
		html,
		validate
	)
	{
			
	//*******************************************************************//
	//***																	   
	//***		public initializors
	//***
	//*******************************************************************//

		function col()
		{
			//console.log("col::constructor");
			this.m_kWSpan	= null;

			this.m_nKWSpan	= -1;
		}

		col.prototype = new html();
		col.prototype.constructor = col;
		col.constructor = html.prototype.constructor;

		col.prototype.check =
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		col.prototype.init =
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

		col.prototype.setKWSpan =
			function(nVal)
		{
            this.colSetSpan(nVal);
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

		col.prototype.htmlCreateOR =
			function()
		{
			this.colCreate();
		};

		col.prototype.htmlDeleteOR =
            function()
        {
            this.colDelete();
        };

		col.prototype.htmlInitOR =
			function()
		{
			this.colInit();
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

		col.prototype.colCreate =
			function colCreate()
		{
			//console.log(this.kWLogCalled());
			this.colCreateSpan();
		};

        col.prototype.colCreateSpan =
            function colCreateSpan()
        {
            var value   = null;

            var nValue  = null;

            //console.log(this.kWLogCalled());

            if (validate.isNotNull(this.m_kWSpan))
            {
                console.error(this.kWLogRepeated());
            }

            if (!validate.isNotNull(this.m_kWView))
            {
                console.error(this.kWLogInvalid("m_kWView"));
            }

            value = this.m_kWView.getKWSpan();
            if (validate.isNotNull(value))
            {
                nValue = value.getKWValue();
            }

            if (!validate.isNumberNotNeg(nValue))
            {
                nValue = this.m_nKWSpan;
            }

            if (!validate.isNumberNotNeg(nValue))
            {
                return;
            }

            this.colCreateSpanImpl();

            this.m_kWSpan.setKWValue(nValue);
        };

	    col.prototype.colCreateSpanImpl =
	        function colCreateSpanImpl()
        {
            //console.log(this.kWLogCalled());

            if (validate.isNotNull(this.m_kWSpan))
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

            this.m_kWSpan = new span();

            this.m_kWSpan.setKWIDParent(this.m_sKWID);
            this.m_kWSpan.setKWDom(this.m_kWDom);

            this.m_kWSpan.check();
            this.m_kWSpan.init();

            this.kWAddAttr(this.m_kWSpan);
        };

	    col.prototype.colDelete =
	        function colDelete()
        {
            //console.log(this.kWLogCalled());

            this.m_kWSpan		= null;
        };

	    col.prototype.colInit =
			function colInit()
		{
			//console.log(this.kWLogCalled());
		};

	    col.prototype.colSetSpan =
	        function colSetSpan(nVal)
        {
            //console.log(this.kWLogCalled());

            if (!validate.isNumberNotNeg(nVal))
            {
                return;
            }

            this.m_nKWSpan = nVal;

            if (!this.m_bKWInit)
            {
                return;
            }

            if (!validate.isNotNull(this.m_kWSpan))
            {
                this.colCreateSpanImpl();
            }

            this.m_kWSpan.setKWValue(this.m_nKWSpan);
        };

		return col;

	}
);
