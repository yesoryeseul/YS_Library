import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: string;
      gray500: string;
    };
    fontSize: {
      small: string;
      medium: string;
      title: string;
      subtitle: string;
    };
  }
}