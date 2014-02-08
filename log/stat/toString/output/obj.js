/**********************************************************************
 *
 * itk.kL.stat.toString.output.obj.js
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
		"dojo/_base/declare",
		"../../gobals/output/obj"
	], 
	function
	(
		declare,
		globals
	)
	{
		return declare
		(
			[], 
			{
				toString: function(nVal)
				{
					//gTraceStatic.kWLogCalled("toString");
				
					var sVal = null;
					
					if (!validateNumberPos(nVal))
					{
						gTraceStatic.kWLogInvalid("toString", "nVal");
					}
					
					switch(nVal)
					{
						case globals.nCons:
							sVal = "console";
							break;
			
						case globals.nHost:
							sVal = "output";
							break;
			
						default:
							gTraceStatic.kWLogInvalid("toString", "nVal");
			
					}
				
					if (!sVal)
					{
						gTraceStatic.kWLogErr("toString");
					}
				
					return sVal;
				}

			}
		)
	}
)