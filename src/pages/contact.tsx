import { NextPage } from 'next';

import { Layout } from '@/components/layouts/baseLayout';
import ContactForm from '@/components/molecules/contactform/server';

const Contact: NextPage = () => {
  return (
    <Layout pageTitle="Contact">
      <div id="container" className="space-y-16 px-8 py-32">
        <h2 className="text-center text-3xl tracking-widest laptop:text-6xl">
          CONTACT FORM
        </h2>
        <div className="mx-auto mt-8 laptop:w-2/3">
          <p className="text-center">
            UNCHAIN is{' '}
            <a
              className="font-sans font-normal leading-relaxed tracking-wider"
              href="https://www.neweconomy.jp/posts/363923"
              target="_blank"
            >
              no longer
            </a>{' '}
            under management of shiftbase Inc. Submissions will be directed to
            the inbox of community admins.
          </p>
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
