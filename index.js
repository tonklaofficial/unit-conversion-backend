const { convert } = require("./convert");

exports.handler = async (event) => {
    
    if (!event.body) {
        return {
            statusCode : 400,
            "headers" : {
                "Content-Type" :"application/json",
                // "Access-Control-Allow-Origin" : event.stageVariables.corsHeader,
                "Access-Control-Allow-Origin" : "*",
            },
            body : JSON.stringify({
                message : "Incomplete Entry."
            })
        }
    }
    
    try {
        
        const body = JSON.parse(event.body);
        
        if (!body.measurement || !body.from || !body.to) {
            return {
                statusCode : 400,
                "headers" : {
                    "Content-Type" :"application/json",
                    // "Access-Control-Allow-Origin" : event.stageVariables.corsHeader,
                    "Access-Control-Allow-Origin" : "*",
                },
                body : JSON.stringify({
                    message : "Incomplete Entry."
                })
            }
        };
        
        if (typeof body.measurement !== "string" || typeof body.from !== "string" || typeof body.to !== "string" || typeof body.number !== "number") {
            return {
                statusCode : 400,
                "headers" : {
                    "Content-Type" :"application/json",
                    // "Access-Control-Allow-Origin" : event.stageVariables.corsHeader,
                    "Access-Control-Allow-Origin" : "*",
                },
                body : JSON.stringify({
                    message : "Invalid types."
                })
            }
        }
        
        const result = convert(body.measurement , body.from , body.to , body.number);
        
        if (!result.status) {
            return {
                statusCode : 400,
                "headers" : {
                    "Content-Type" :"application/json",
                    // "Access-Control-Allow-Origin" : event.stageVariables.corsHeader,
                    "Access-Control-Allow-Origin" : "*",
                },
                body : JSON.stringify({
                    message : "Invalid measurement."
                })
            }
        }
        
        
        return {
            statusCode : 200,
            "headers" : {
                "Content-Type" :"application/json",
                // "Access-Control-Allow-Origin" : event.stageVariables.corsHeader,
                "Access-Control-Allow-Origin" : "*",
            },
            body : JSON.stringify({
                result : result.result,
            })
        }
    } catch (e) {
        console.log("ERROR" , e);
        return {
            statusCode : 400,
            "headers" : {
                "Content-Type" :"application/json",
                // "Access-Control-Allow-Origin" : event.stageVariables.corsHeader,
                "Access-Control-Allow-Origin" : "*",
                // "Access-Control-Allow-Credentials": true
            },
            body : JSON.stringify({
                message : "An error occurred, please try again."
            })
        }
    }
};
