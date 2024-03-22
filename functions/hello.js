// functions/hello.js

export default function handler(request, response) {
    console.log("cloud function hosted along with angular ssr");
    return response.status(200).json({message: "testing"});
  }