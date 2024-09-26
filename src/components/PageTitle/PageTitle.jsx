function PageTitle({ children }) {
  return <h1>{children}</h1>;
}
export default PageTitle;

//we do this so that every child  of PageTirle can be wrapped in <h1></h1> (children are in pages)
