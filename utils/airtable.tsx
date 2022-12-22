import Airtable from 'airtable';

// Airtable configurations. make sure the keys are not leaked.

// UNCHAIN applications
const base_unchainApplication = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_UNCHAINAPPLICATION as string);
const table_unchainApplication = base_unchainApplication(
  process.env.AIRTABLE_TABLE_UNCHAINAPPLICATION as string,
);

export { table_unchainApplication };
