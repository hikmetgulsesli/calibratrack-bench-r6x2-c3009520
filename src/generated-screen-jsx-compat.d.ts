import "react";

declare module "react" {
  interface HTMLAttributes<T> {
    oninput?: string;
    onchange?: string;
  }
}
