import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script src="https://www.paypal.com/sdk/js?client-id=ATwGx98qRYnpiclmWrMZ2-c2wKyw-P21wsgJ8vyIUbaw8LRPDZbGkcY1vBctXUCWDWbYWh5NF2Wej7hw"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
