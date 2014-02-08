/**********************************************************************
 *
 * colGroup/obj.js
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

		function colGroup()
		{
			//console.log("colGroup::constructor");
			this.m_kWSpan	= null;
			
			this.m_nKWSpan	= -1;
		}

		colGroup.prototype = new html();
		colGroup.prototype.constructor = colGroup;
		colGroup.constructor = html.prototype.constructor;

		colGroup.prototype.check =
			function check()
		{
			html.prototype.check.call(this);
			//console.log(this.kWLogCalled());
		};

		colGroup.prototype.init = 
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

		colGroup.prototype.setKWSpan =
			function(nVal)
		{
            this.colGroupSetSpan(nVal);
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
	
		colGroup.prototype.htmlCreateOR =
			function()
		{
			this.cgCreate();
		};

        colGroup.prototype.htmlDeleteOR =
            function()
        {
            this.colGroupDelete();
        };

		colGroup.prototype.htmlInitOR = 
			function()
		{
			this.cgInit();
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

		colGroup.prototype.cgCreate = 
			function cgCreate()
		{
			//console.log(this.kWLogCalled());
			this.colGroupCreateSpan();
		};

        colGroup.prototype.colGroupCreateSpan =
            function colGroupCreateSpan()
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

            this.colGroupCreateSpanImpl();

            this.m_kWSpan.setKWValue(nValue);
        };

	    colGroup.prototype.colGroupCreateSpanImpl =
	        function colGroupCreateSpanImpl()
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

        colGroup.prototype.colGroupDelete =
            function colGroupDelete()
        {
            //console.log(this.kWLogCalled());

            this.m_kWSpan		= null;
        };

		colGroup.prototype.cgInit = 
			function cgInit()
		{
			//console.log(this.kWLogCalled());
		};
        
        colGroup.prototype.colGroupSetSpan =
            function colGroupSetSpan(nVal)
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
                this.colGroupCreateSpanImpl();
            }

            this.m_kWSpan.setKWValue(this.m_nKWSpan);
        };

		return colGroup;

	}
);
