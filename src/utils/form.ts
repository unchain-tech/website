import Airtable from 'airtable';

// Airtable configurations. make sure the keys are not leaked.

const base_websiteInquiry = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_PAT,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_INQUIRYFORM as string);

const table_websiteInquiry = base_websiteInquiry(
  process.env.NEXT_PUBLIC_AIRTABLE_TABLE_INQUIRYFORM as string
);

const validateEmailRegex = (email: string) => {
  const re =
    /^([a-zA-Z0-9_-]+(?:.[a-zA-Z0-9_-]+)*)@((?:[a-zA-Z0-9_-]+.)*[a-zA-Z0-9_][a-zA-Z0-9_-]{0,66})[.]([a-z]{2,6}(?:.[a-z]{2})?)$/;
  return re.test(email);
};

const validateWalletAddressRegex = (address: string) => {
  const re = /^0x[a-fA-F0-9]{40}$/;
  const re_ens = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.eth$/;
  return re.test(address) || re_ens.test(address);
};

export { table_websiteInquiry, validateEmailRegex, validateWalletAddressRegex };
