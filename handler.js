import * as dynamoDbLib from "./helpers/dynamo";
import { success, failure } from "./helpers/response";

export async function main(event, context, callback)
{
    callback(null, success(event));
}