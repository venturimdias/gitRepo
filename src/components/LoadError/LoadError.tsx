interface IloadError{
  loading: boolean,
  error: any
}
const LoadError = ({ loading, error}: IloadError) => {
  return <>
    {loading && <div>Loading...</div>}
    {error && <>Error :( {console.log(error)}</>}
  </>
}
export { LoadError }