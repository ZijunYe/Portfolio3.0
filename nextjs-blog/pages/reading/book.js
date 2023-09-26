import Link from 'next/link'; 
import Layout from '../components/layout';

export default function Book(){
    return(
        <Layout>
            <h2>Coming soon!</h2>
            <h3>
                <Link href="/">Back to homepage</Link>
            </h3>
        </Layout>
    ); 
}