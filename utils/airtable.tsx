import Airtable from 'airtable';

// Airtable configurations. make sure the keys are not leaked.

// website inquiries
const base_websiteInquiry = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_INQUIRYFORM as string);
const table_websiteInquiry = base_websiteInquiry(
  process.env.AIRTABLE_TABLE_INQUIRYFORM as string,
);

// UNCHAIN applications
const base_unchainApplication = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_UNCHAINAPPLICATION as string);
const table_unchainApplication = base_unchainApplication(
  process.env.AIRTABLE_TABLE_UNCHAINAPPLICATION as string,
);

export { table_websiteInquiry, table_unchainApplication };
