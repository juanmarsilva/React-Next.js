import React from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import Link from 'next/link';

const Pricing = () => {

    return (
        <MainLayout>

             <h1 className={'title'}>
                    {/* Ir al <a href="/">Home</a> */}
                    Ir al <Link href='/' >Home</Link>
                </h1>

                <p className={'description'}>
                    Get started by editing{' '} <code className={'code'}>pages/princing/index.jsx</code>
                </p>

        </MainLayout>
    )
}

export default Pricing;