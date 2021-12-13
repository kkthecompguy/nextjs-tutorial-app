import { Fragment } from 'react';
import Link from 'next/link'

function NewPage(){
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href='/news/nextjs-is-a-great-framework'>Nextjs is a Great Framework</Link>
        </li>
        <li>
          <Link href='/news/something-else'>Something else</Link>
        </li>
      </ul>
    </Fragment>
  ) 
}

export default NewPage;