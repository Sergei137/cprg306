// Student info React component

import Link from 'next/link';

export default function StudentInfo() {
return (
    <div>
        <p>Name: Sergei</p>
        <p>Course Section: CPRG 306 D</p>
        <p>GitHub Link: <Link href="https://github.com/Sergei137/cprg306-assignments" target="_blank">https://github.com/Sergei137/cprg306-assignments</Link></p>
    </div>
    );
}
