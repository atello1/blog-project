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
          <h2 className='blogListing__title'>{props.title}</h2>
          <p className='blogListing__author'>{props.author}</p>
          <div className='blogListing__extract'>{truncateString(props.children, 100)}</div>
          <Link className='bouton' to={`/BlogDetail/${props.id}`}>See details</Link>
        </>
      )
  }