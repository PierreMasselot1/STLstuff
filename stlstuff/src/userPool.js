import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_DfUNXdtM0",
    ClientId: "59jdmg4ehvcm065eebr01ugt7n"
}

export default new CognitoUserPool(poolData);