import AirtableError from 'airtable/lib/airtable_error';
import type { NextApiRequest, NextApiResponse } from 'next';

import { type FormInput } from '@/types/form';
import {
  table_websiteInquiry,
  validateEmailRegex,
  validateWalletAddressRegex,
} from '@/utils/form';
import rateLimit from '@/utils/rateLimit';

type ResponseData = {
  message: string;
  posted: FormInput;
};

const limitCheck = rateLimit();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | string>
) {
  let ip = req.headers['x-real-ip'] as string;
  const forwardedFor = req.headers['x-forwarded-for'] as string;
  if (!ip && forwardedFor) {
    ip = forwardedFor?.split(',').at(0) ?? 'Unknown';
  }

  try {
    await limitCheck.check(res, 5, ip);
  } catch (err) {
    console.error(err);
    return res
      .status(429)
      .end(
        `Rate Limited: ${
          err instanceof Error ? err.message : 'server is currently busy'
        }. IP log: ${ip}`
      );
  }

  switch (req.method) {
    case 'POST': {
      const newInquiry: FormInput = req.body;
      if (!newInquiry) {
        return res.status(400).end('Missing application form.');
      }
      const { name, organization, email, inquiry } = newInquiry;

      if (!(name && organization && email && inquiry)) {
        return res.status(400).end('Missing required fields.');
      }
      if (!(typeof name === 'string' && 1 < name.length && name.length < 51)) {
        return res.status(400).end('Invalid name. (min 2 char, max 50 char)');
      }
      if (
        !(
          typeof organization === 'string' &&
          1 < organization.length &&
          organization.length < 51
        )
      ) {
        return res
          .status(400)
          .end('Invalid organization. (min 2 char, max 50 char)');
      }
      if (!validateEmailRegex(email)) {
        return res.status(400).end('Invalid email address.');
      }
      if (!validateWalletAddressRegex(email)) {
        return res.status(400).end('Invalid email address.');
      }
      if (
        !(
          typeof inquiry === 'string' &&
          99 < inquiry.length &&
          inquiry.length < 2001
        )
      ) {
        return res
          .status(400)
          .end('Invalid inquiry. (min 100 char, max 2000 char)');
      }
      console.log('New submission: ', newInquiry);
      try {
        const newRecords = await table_websiteInquiry.create({
          ...newInquiry,
          ip: ip,
        });
        return res.status(201).json({
          message: 'POST',
          posted: newRecords.fields as FormInput,
        });
      } catch (err) {
        return res
          .status(500)
          .end(
            `Failed${err instanceof AirtableError ? `: ${err.message}` : ''} 😕`
          );
      }
    }
    default: {
      return res
        .status(405)
        .end(`Method ${req.method} Not Allowed. IP log: ${ip}`);
    }
  }
}

// necessary for netlify functions
// export const config = {
//   type: 'experimental-background',
// };
