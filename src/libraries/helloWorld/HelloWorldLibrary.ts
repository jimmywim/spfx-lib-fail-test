import { AadHttpClient, HttpClient, HttpClientResponse } from "@microsoft/sp-http";

export class HelloWorldLibrary {
  public name(): string {
    const configuration = AadHttpClient.configurations.v1;
    return 'HelloWorldLibrary';
  }
}
