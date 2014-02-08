/**********************************************************************
 *
 * factory.js
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
		"../called/obj",
		"../coord/obj",
		"../display/obj",
		"../err/obj",
		"../errCreate/obj",
		"../errRetrieve/obj",
		"../exit/obj",
		"../invalid/obj",
		"../notImpl/obj",
		"../repeated/obj",
		"../status/obj",
		"../success/obj",
		"../tag/obj",
		"./enums",
		"kWStat/validate"
	], 
	function
	(
		called,
		coord,
		display,
		err,
		errCreate,
		errRetrieve,
		exit,
		invalid,
		notImpl,
		repeated,
		status,
		success,
		tag,
		enums,
		validate
	)
	{
		function create(nVal)
		{
			//gTraceStatic.kWLogCalled("create");
			
			//console.log("create");
			var obj = null;

			if (!validate.isNumberPos(nVal))
			{
				gTraceStatic.kWLogInvalid("create", "nVal");
			}

			switch(nVal)
			{
				case enums.nCalled:
					obj = new called();
					break;

				case enums.nCoord:
					obj = new coord();
					break;

				case enums.nDisplay:
					obj = new display();
					break;

				case enums.nCoord:
					obj = new coord();
					break;

				case enums.nErr:
					obj = new err();
					break;

				case enums.nErrCreate:
					obj = new errCreate();
					break;

				case enums.nErrRetrieve:
					obj = new errRetrieve();
					break;

				case enums.nExit:
					obj = new exit();
					break;

				case enums.nInvalid:
					obj = new invalid();
					break;

				case enums.nNotImpl:
					obj = new notImpl();
					break;

				case enums.nRepeated:
					obj = new repeated();
					break;

				case enums.nStatus:
					obj = new status();
					break;

				case enums.nSuccess:
					obj = new success();
					break;

				case enums.nTag:
					obj = new tag();
					break;

				default:
					gTraceStatic.kWLogInvalid("create", "nVal");

			}

			if (!obj)
			{
				gTraceStatic.baseLogError("create");
			}

			return obj;
		}
		
		return create;
	}
)
