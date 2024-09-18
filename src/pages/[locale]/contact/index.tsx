import { NextPage } from 'next';

import { Layout } from '@/components/layouts/baseLayout';
import ContactFormDangerous from '@/components/molecules/contactform/static';
import { useI18n } from '@/hooks/useI18n';

const Contact: NextPage = () => {
  const { t } = useI18n();

  return (
    <Layout pageTitle="Contact">
      <div id="container" className="space-y-16 px-8 py-32">
        <h2 className="text-center text-3xl tracking-widest laptop:text-6xl">
          {t('CONTACT.TITLE')}
        </h2>
        <div className="mx-auto mt-8 laptop:w-2/3">
          <ContactFormDangerous />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
