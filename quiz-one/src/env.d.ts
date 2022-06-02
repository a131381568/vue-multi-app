/// <reference types="vite/client" />

declare module "bcrypt";
declare module "vee-validate";
declare module "@vueuse/head";
declare module "throttle-debounce";

declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<any, {}, any>;
  export default component;
}

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  // Only string type here to avoid hard to debug cast problems in your components!
  readonly VITE_APP_VERSION: string;
  readonly VITE_APP_BUILD_EPOCH?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// import axios from "axios";
// declare module "axios" {
//   export type AxiosResponse<T = any> = Promise<T>;
// }

import * as axios from "axios";
declare module "axios" {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>;
  }
}
