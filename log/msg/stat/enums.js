/**********************************************************************
 *
 * enums.js
 *
 * author: Patrick Dooley
 *
 **********************************************************************
 *
 * Copyright (c) 2013 iTKunst Corporation
 *
 **********************************************************************/

define
(
	[	
	], 
	function
	(
	)
	{

		function enums()
		{
			
		}
		
		enums.nID			= 1;
		
		enums.nCalled		= (enums.nID*=2);
		enums.nCoord		= (enums.nID*=2);
		enums.nDisplay		= (enums.nID*=2);
		enums.nDojo			= (enums.nID*=2);
		enums.nErr			= (enums.nID*=2);
		enums.nErrCreate	= (enums.nID*=2);
		enums.nErrRetrieve	= (enums.nID*=2);
		enums.nExit			= (enums.nID*=2);
		enums.nInvalid		= (enums.nID*=2);
		enums.nKamap		= (enums.nID*=2);
		enums.nNotImpl		= (enums.nID*=2);
		enums.nRepeated		= (enums.nID*=2);
		enums.nStatus		= (enums.nID*=2);
		enums.nSuccess		= (enums.nID*=2);
		enums.nTag			= (enums.nID*=2);
		
		return enums;
	}
)