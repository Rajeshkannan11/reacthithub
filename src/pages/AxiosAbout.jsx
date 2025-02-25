import  {useQuery} from 'react-query'
import Axios from 'axios'

function AxiosAbout() {
    const {data,error,isLoading} = useQuery('post');

 if (isLoading)return <div>...Loading</div>;
 if (error)return <div>Error fetching data</div>
    return (
    <div>
      <h2>about</h2>
      <ul>
        {data.map(post => (
        <li key={post.id}>{post.tittle}</li>
       ) )}
    </ul>
    </div>
    )
}

export default AxiosAbout