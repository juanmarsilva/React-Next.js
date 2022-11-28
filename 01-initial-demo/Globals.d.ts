declare module "*.module.css" {
    const classes: { [key: string]: string}
    export default classes
}

declare module "*.module.scss" {
    const classes: { [key: string]: string}
    export default classes
}
  
// and so on for whatever flavor of css you're using