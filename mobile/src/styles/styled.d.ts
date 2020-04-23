import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;

      white: string;
      orange: string;
      grayHard: string;
      inputs: string;

      error: string;
    };

    fonts: {
      regular: string;
      medium: string;
    };
  }
}
