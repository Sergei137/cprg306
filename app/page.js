// Root page

import StudentInfo from './StudentInfo';
import Link from 'next/link';

export default function RootPage() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 Assignments</h1>
      <br></br>
      <StudentInfo></StudentInfo>
      <br></br>
      <p>Assignments:</p>
      <p><Link href="week2" target="_blank">Week 2</Link></p>
      <p><Link href="week3" target="_blank">Week 3</Link></p>
      <p><Link href="week4" target="_blank">Week 4</Link></p>
      <p><Link href="week5" target="_blank">Week 5</Link></p>
      <p><Link href="week6" target="_blank">Week 6</Link></p>
      <p><Link href="week7" target="_blank">Week 7</Link></p>
      <p><Link href="week8" target="_blank">Week 8</Link></p>
    </div>
  );
}
