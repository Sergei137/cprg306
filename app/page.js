// Home/root page

import StudentInfo from './StudentInfo'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 Assignments</h1>
      <br></br>
      <StudentInfo />
      <br></br>
      <p>Assignments:</p>
      <p><Link href="week2" target="_blank">Week 2</Link></p>
    </div>
  )
}
