declare module 'webpack-config' {
  export class Config {
    extend(configuration: any): this;
    merge(configuration: any): this;
  }

  export interface Environment {
    setAll(config: any): void
  }

  export const environment: Environment;

  export default Config;
}
