/**********************************************************************
 *
 * validate.js
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
	],
	function
	(
	)
	{
		function validate()
		{
			
		}

		validate.isArray = 
			function(obj) 
		{
			//console.log("isArray called."); 

			if (validate.isPrimitive(obj))
			{
				return false;
			}
			
			if (validate.isNull(obj))
			{
				return false;
			}

			if (obj.constructor.toString().indexOf("Array") == -1)
			{
					//console.log("array() - array is invalid."); 
					return false;
			}

			return true;
		};

		validate.isBool = 
			function(obj) 
		{
			//console.log("isDom called."); 
			
			if (validate.isNull(obj))
			{
				return false;
			}
			
			if (obj.constructor === Boolean)
			{
				return true;
			}
			
			return false;
		};

		validate.isDom = 
			function(obj) 
		{
			//console.log("isDom called."); 
			
			if (!validate.isObject(obj))
			{
				return false;
			}
			
			if (validate.isNull(obj))
			{
				return false;
			}

			if (obj.length < 1)
			{
				return false;
			}

			return true;
		};

		validate.isFunction = 
			function(obj) 
		{
			//console.log("isFunction called."); 
			
			if (typeof obj === "function")
			{
				return true;
			}

			return false;
		};
		
		
		validate.isJSON = 
			function(obj)
		{
			//console.log("isNotNull called.");

			if (!validate.isNotNull(obj))
			{
				return false;
			}
			
			if (!validate.isNotUndefined(obj.identifier))
			{
				return false;
			}
			
			if (!validate.isNotNull(obj.items))
			{
				return false;
			}
			
			return true;
		};		

		validate.isNotNull = 
			function(obj)
		{
			//console.log("isNotNull called.");

			return !validate.isNull(obj);
		};		

		validate.isNotUndefined =
			function(obj)
		{
			//console.log("isNotUndefined called.");

			return !validate.isUndefined(obj);
		};		

		validate.isNull = 
			function(obj)
		{
			//console.log("isNull called.");
			
			if (validate.isUndefined(obj))
			{
				return true;
			}

			if (obj === null)
			{
				return true;
			}

			return false;
		};		

		validate.isNumber = 
			function(nVal)
		{
			//console.log("number called.");

			if (isNaN(nVal))
			{
				//console.log("number() - nVal is NaN."); 
				return false;
			}
			
			if (validate.isNull(nVal))
			{
				//console.log("number() - nVal is Null."); 
				return false;
			}

			return true;
		};

		validate.isNumberNotNeg =
			function(nVal)
			{
				//console.log("isNumberNotNeg called.");

				if (!validate.isNumber(nVal))
				{
					return false;
				}

				if (nVal < 0)
				{
					//console.log("numberNotNeg() - nVal is negative."); 
					return false;
				}

				return true;
			};

		validate.isNumberOdd =
			function(nVal)
			{
				//console.log("isNumberNotNeg called.");

				if (!validate.isNumber(nVal))
				{
					return false;
				}

				if (nVal % 2)
				{
					//console.log("numberNotNeg() - nVal is odd.");
					return true;
				}

				return false;
			};

		validate.isNumberPos =
			function(nVal)
		{
			//console.log("isNumberPos called."); 

			if (!validate.isNumber(nVal))
			{
					return false;
			}

			if (nVal === 0)
			{
					//console.log("numberPos() - nVal is 0."); 
					return false;
			}

			if (nVal < 0)
			{
					//gTrace.status("validateNumberPos" + " negative");
					//console.log("validateNumberPos() - nVal is negative."); 
					return false;
			}

			return true;
		};
		
		validate.isObject = 
			function(obj)
		{
			//console.log("isObject called."); 

			if (typeof obj !== "object")
			{
				return false;
			}

			if (this.isNull(obj))
			{
				return false;
			}

			return true;
		};

		validate.isPrimitive =
			function(obj)
		{
			//console.log("isPrimitive called."); 

			return !validate.isObject(obj);
		}

		validate.isString = 
			function(sVal)
		{
			//console.log("string() called."); 
			
			if (typeof sVal != "string")
			{
				return false;
			}

			if (!validate.isNotUndefined(sVal))
			{
				//console.log("string() - sVal is undefined."); 
				return false;
			}

			if (!sVal)
			{
				//console.log("string() - sVal is null."); 
				return false;
			}

			return true;
		};
		
		validate.isUndefined = 
			function(obj)
		{
			//console.log("isUndefined () called."); 
			
			if (obj === undefined)
			{
				return true;
			}

			return false;
		};
		
		return validate;
		
	}
		
)

 
