import { Context, APIGatewayProxyResult, APIGatewayEvent } from "aws-lambda";

export const lambdaHandler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  if (event.httpMethod === "GET") {
    console.log(`Event: ${JSON.stringify(event, null, 2)}`);
    console.log(`Context: ${JSON.stringify(context, null, 2)}`);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "GET REQUEST SUCCESSFUL",
      }),
    };
  } else {
    return {
      statusCode: 555,
      body: JSON.stringify({
        message: "Method doesn't exist",
      }),
    };
  }
};
