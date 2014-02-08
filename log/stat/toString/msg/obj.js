/**********************************************************************
 *
 * itk.kL.stat.toString.msg.obj.js
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
		"../../gobals/msg/obj"
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
						case globals.nCalled:
							sVal = "called";
							break;
			
						case globals.nCheck:
							sVal = "check";
							break;
			
						case globals.nCheckInvalid:
							sVal = "check invalid";
							break;
			
						case globals.nCoord:
							sVal = "coord";
							break;
			
						case globals.nCtor:
							sVal = "ctor";
							break;
			
						case globals.nDisplay:
							sVal = "display";
							break;
			
						case globals.nErr:
							sVal = "err";
							break;
			
						case globals.nErrCreate:
							sVal = "errCreate";
							break;
			
						case globals.nErrRetrieve:
							sVal = "errRetrieve";
							break;
			
						case globals.nExit:
							sVal = "exit";
							break;
			
						case globals.nInit:
							sVal = "init";
							break;
			
						case globals.nInvalid:
							sVal = "invalid";
							break;
			
						case globals.nNotImpl:
							sVal = "notImpl";
							break;
			
						case globals.nRepeated:
							sVal = "repeated";
							break;
			
						case globals.nStatus:
							sVal = "status";
							break;
			
						case globals.nSuccess:
							sVal = "success";
							break;
			
						case globals.nTag:
							sVal = "tag";
							break;
			
						default:
							gTraceStatic.kWLogInvalid("toString", "nVal");
			
					}
				
					if (!sVal)
					{
						gTraceStatic.baseLogError("toString");
					}
				
					//gTraceStatic.baseLogSuccess("toStringITKTraceMsg");
					
					return sVal;
				}
			
			}
		)
	}
)