export const aws_exports={
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    identityPoolId: 'us-west-2:5776cf11-b9de-43fb-ae73-1430f03a8ccc',
    // REQUIRED - Amazon Cognito Region
    region: 'us-west-2',
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'us-west-2_bjkyFObpw',
    // OPTIONAL - Amazon Cognito Web Client ID
    userPoolWebClientId: '35fphtvuuravdlpm0veleocv79',
  }
  ,
  API: {
    endpoints: [
      {
        name: "PetStore",
        endpoint: "https://f9u26pe19l.execute-api.us-west-2.amazonaws.com/beta",

      },
      {
        name: "ConsultantApi",
        endpoint: "https://zr25rl45gk.execute-api.us-west-2.amazonaws.com/dev",

      }
    ]
  }
}