import type { NextApiRequest, NextApiResponse } from 'next';

import AirtableError from 'airtable/lib/airtable_error';
import { table_unchainApplication } from 'utils/airtable';

type SubmitData = {
  message: string;
  submit: {
    name: string;
    email: string;
    discord: string;
    walletAddress: string;
    github?: string;
    twitter?: string;
    whyUnchain: string;
    yearsCoding: number;
    superpower: string;
    agreeToTermsAndPolicy: true;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'GET': {
      return res
        .status(200)
        .send(
          'POST https://unchain.tech/api/apply\n\n\n- send a POST request to our application endpoint.\n- Format your entry form as a raw JSON request body like below.\n- If successful, you\'ll receive a 201 response with next steps.\n\n\n{\n   "name": "YOUR NAME"\n   "email":  "you@yourmail.com"\n   "discord": "discord#1234"\n   "walletAddress": "0x123456abcde"\n   "github": "https://github.com/yourgithub" (optional)\n   "twitter": "https://twitter.com/yourtwitter" (optional)\n   "whyUnchain": "Please tell us why you wish to contribute to UNCHAIN."\n   "yearsCoding": integer\n   "superpower": "What is your strength? How can you be special in the UNCHAIN community?"\n   "agreeToTermsAndPolicy": true\n}\n\n\n- Terms of Service: https://unchain-shiftbase.notion.site/20220228-437efe5314d64e0f965efe911b062ce2\n- Privacy Policy: https://unchain-shiftbase.notion.site/20220303-11d1b7d0e0384aa9912b6893decd51dc\n\n\n shiftbase, Inc.',
        );
    }

    case 'POST': {
      const newApplicant: SubmitData['submit'] = req.body;
      try {
        const newRecords = await table_unchainApplication.create(newApplicant);

        return res.status(201).json({
          message: `Application successful. ${
            newRecords._rawJson.fields.yearsCoding >= 3
              ? 'Welcome to our community! Portal link: https://app.unchain.tech'
              : 'If you are selected to join the community, you will be contacted soon.'
          }`,
          timestamp: newRecords._rawJson.createdTime,
          fields: newRecords._rawJson.fields,
        });
      } catch (err) {
        return res
          .status(500)
          .end(
            `Failed submission${
              err instanceof AirtableError ? `: ${err.message}` : ''
            } 😕`,
          );
      }
    }
    default: {
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
}
