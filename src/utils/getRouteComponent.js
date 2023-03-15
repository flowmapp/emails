export default (routes) => {
  const { component } = routes.find(
    ({ path }) => path === window.location.pathname.replace('/', ''),
  )
  return component
}
