import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    header: {
      background: string;
      menu: string;
      shadow: string;
    };
    body: {
      background: string;
    };
  }
}
