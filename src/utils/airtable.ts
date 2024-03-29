import Airtable from 'airtable';

// Airtable configurations. make sure the keys are not leaked.

const base_websiteInquiry = new Airtable({
  apiKey: process.env.AIRTABLE_PAT,
}).base(process.env.AIRTABLE_BASE_INQUIRYFORM as string);

const table_websiteInquiry = base_websiteInquiry(
  process.env.AIRTABLE_TABLE_INQUIRYFORM as string
);

export { table_websiteInquiry };
