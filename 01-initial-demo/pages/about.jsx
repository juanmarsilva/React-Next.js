import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout';

const AboutPage = () => {
    return (
        <MainLayout>
                <h1 className={'title'}>
                    {/* Ir al <a href="/">Home</a> */}
                    Ir al <Link href='/' >Home</Link>
                </h1>

                <p className={'description'}>
                    Get started by editing{' '} <code className={'code'}>pages/about.jsx</code>
                </p>
        </MainLayout>
    );
};

export default AboutPage;
