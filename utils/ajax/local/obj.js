/**********************************************************************
 *
	 * local/obj.js
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

		function local()
		{
			//console.log("local::constructor")

			this.m_bKWIsCrossDomain	= false;

			this.m_sKWDataType		= "json";
 		}

		local.prototype = new ajax();
		local.prototype.constructor = local;
		local.constructor = ajax.prototype.constructor;

 		return local;
	}
);