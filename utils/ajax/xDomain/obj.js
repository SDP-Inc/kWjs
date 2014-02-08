/**********************************************************************
 *
 * xDomain/obj.js
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************/

define
(
	[
		"../obj"
	],
	function
	(
		ajax
	)
	{

	//*******************************************************************//
	//***																		
	//***		public initializors
	//***
	//*******************************************************************//

		function xDomain()
		{
			//console.log("xDomain::constructor")

			this.m_sKWDataType =      "jsonp";

			this.m_bKWIsCrossDomain   = true;
 		}

		xDomain.prototype = new ajax();
		xDomain.prototype.constructor = xDomain;
		xDomain.constructor = ajax.prototype.constructor;
		
		return xDomain;
	}
);