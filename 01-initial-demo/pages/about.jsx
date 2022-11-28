import Link from 'next/link';
import DarkLayout from '../components/layouts/DarkLayout';
import MainLayout from '../components/layouts/MainLayout';

const AboutPage = () => {
    return (
        <>
                <h1 className={'title'}>
                    {/* Ir al <a href="/">Home</a> */}
                    Ir al <Link href='/' >Home</Link>
                </h1>

                <p className={'description'}>
                    Get started by editing{' '} <code className={'code'}>pages/about.jsx</code>
                </p>
        </>
    );
};

export default AboutPage;

AboutPage.getLayout = function getLayout( page ) {
    return (
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    );
};
