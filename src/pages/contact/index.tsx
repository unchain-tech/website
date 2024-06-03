import { NextPage } from 'next';

import { Layout } from '@/components/layouts/baseLayout';
import ContactFormDangerous from '@/components/molecules/contactform/static';

const Contact: NextPage = () => {
  return (
    <Layout pageTitle="Contact">
      <div id="container" className="space-y-16 px-8 py-32">
        <h2 className="text-center text-3xl tracking-widest laptop:text-6xl">
          CONTACT FORM
        </h2>
        <div className="mx-auto mt-8 laptop:w-2/3">
          <ContactFormDangerous />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
