declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";

declare module "*.svg" {
  const value: any;
  export = value;
}
