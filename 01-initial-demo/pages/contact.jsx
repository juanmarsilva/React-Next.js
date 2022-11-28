import React from 'react';
import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout';

const Contact = () => {
    return (
        <MainLayout>
                <h1 className={'title'}>
                    {/* Ir al <a href="/about">About</a> */}
                    Ir al <Link href='/'>Home</Link>
                </h1>

                <p className={'description'}>
                    Get started by editing{' '}
                    <code className={'code'}>pages/contact.jsx</code>
                </p>
        </MainLayout>
    )
}

export default Contact;
