import { Link } from 'react-router-dom';


  function truncateString(str, num) {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
  }

  export default function Post (props) {

      return (

        <>
          <h2>{props.title}</h2>
          <p>{props.author}</p>
          <div>{truncateString(props.children, 100)}</div>
          <Link to={`/BlogDetail/${props.id}`}>See details</Link>
        </>
      )
  }