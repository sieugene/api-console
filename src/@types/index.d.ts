declare module 'react-json-editor-ajrm' {
  import * as React from 'react';

  type onChangeValues = {
    error: {token: number; line: number; reason: string};
    jsObject: undefined;
    json: string;
    lines: number;
    markupText: string;
    plainText: string;
  };

  export interface ScriptProps {
    id?: string;
    placeholder?: object;
    colors?: object;
    locale?: {[key: string]: string};
    height?: string;
    onChange?: (fn: any) => any;
    width?: string;
    style?: any;
    confirmGood?: boolean;
    markupText?: any;
    value?: string;
    lines?: boolean;
    reset?: boolean;
    viewOnly?: boolean;
    ref?: any;
  }

  export default class JSONInput extends React.Component<ScriptProps> {}
}

declare module 'react-json-editor-ajrm/locale/ru' {
  declare var ru: {
    [key: string]: string; // The string index has to contain any value reuned by the number index
  };

  export default ru;
}
