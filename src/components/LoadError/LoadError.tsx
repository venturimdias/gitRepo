interface IloadError{
  loading: boolean,
  error: any
}
const LoadError = ({ loading, error}: IloadError) => {
  return <>
    {loading && <>Loading...</>}
    {error && <>Error :( {console.log(error)}</>}
  </>
}
export { LoadError }