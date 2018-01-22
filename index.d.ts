declare module 'ckeditor/balloon' {
  interface Balloon {
    create(): PromiseLike<any>
  }
  export default Balloon;
}