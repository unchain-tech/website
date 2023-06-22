import type { NextApiRequest, NextApiResponse } from 'next';

// import AirtableError from 'airtable/lib/airtable_error';
// import { table_unchainApplication } from 'utils/airtable';

// type SubmitData = {
//   message: string;
//   submit: {
//     name: string;
//     email: string;
//     discord: string;
//     walletAddress: string;
//     github?: string;
//     twitter?: string;
//     yearsCoding: number;
//     referral: string;
//     agreeToTermsAndPolicy: boolean;
//   };
// };

// function validateEmail(email: string) {
//   const re =
//     /^([a-zA-Z0-9_-]+(?:.[a-zA-Z0-9_-]+)*)@((?:[a-zA-Z0-9_-]+.)*[a-zA-Z0-9_][a-zA-Z0-9_-]{0,66})[.]([a-z]{2,6}(?:.[a-z]{2})?)$/;
//   return re.test(email);
// }

// function validateDiscord(discord: string) {
//   const re = /^.{3,32}#[0-9]{4}$/;
//   return re.test(discord);
// }

// function validateWalletAddress(walletAddress: string) {
//   const re = /^0x[a-fA-F0-9]{40}$/;
//   return re.test(walletAddress);
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET': {
      return res
        .status(200)
        .send(
          ' This endpoint is deprecated. Join our discord at https://discord.gg/w3AyyvKypT. shiftbase, Inc.'
        );
      // .send(
      //   ' =========================== \n === Welcome to UNCHAIN! === \n =========================== \n\n POST https://unchain.tech/api/apply \n\n\n - send a POST request to our application endpoint. \n - Format your entry form as a raw JSON request body like below. \n - If successful, you\'ll receive a 201 response with next steps.\n\n\n { \n   "name": "YOUR NAME"\n   "email":  "you@yourmail.com"\n   "discord": "discord#1234"\n   "walletAddress": "0x123456abcde"\n   "github": "https://github.com/yourgithub" (optional)\n   "twitter": "https://twitter.com/yourtwitter" (optional)\n   "yearsCoding": integer\n   "referral": "Where did you find out about UNCHAIN?"\n   "agreeToTermsAndPolicy": true \n } \n\n\n - Terms of Service: https://unchain-shiftbase.notion.site/20220228-437efe5314d64e0f965efe911b062ce2 \n - Privacy Policy: https://unchain-shiftbase.notion.site/20220303-11d1b7d0e0384aa9912b6893decd51dc \n\n\n shiftbase, Inc.',
      // );
    }

    // case 'POST': {
    //   const newApplicant: SubmitData['submit'] = req.body;

    //   if (!newApplicant) {
    //     return res.status(401).end('Missing application form.');
    //   }

    //   const {
    //     name,
    //     email,
    //     discord,
    //     walletAddress,
    //     github,
    //     twitter,
    //     yearsCoding,
    //     referral,
    //     agreeToTermsAndPolicy,
    //   } = newApplicant;

    //   if (
    //     !(name && email && discord && walletAddress && yearsCoding && referral)
    //   ) {
    //     return res.status(402).end('Missing required fields.');
    //   } else if (!validateEmail(email)) {
    //     return res.status(411).end('Invalid email address format.');
    //   } else if (!validateDiscord(discord)) {
    //     return res.status(412).end('Invalid discord handle format.');
    //   } else if (!validateWalletAddress(walletAddress)) {
    //     return res.status(413).end('Invalid wallet address format.');
    //   } else if (yearsCoding < 0) {
    //     return res.status(414).end('Coding years must be a natural integer.');
    //   } else if (yearsCoding > 50) {
    //     return res.status(414).end('Coding years must be less than 50 years.');
    //   } else if (!agreeToTermsAndPolicy) {
    //     return res.status(403).end('You must agree to the terms and policy.');
    //   }

    //   try {
    //     const newRecords = await table_unchainApplication.create(newApplicant);
    //     const inviteCode = process.env.DISCORD_REFCODE;

    //     return res.status(201).json({
    //       message: `Application successful. Welcome to UNCHAIN Academy! Invite link: https://discord.gg/${inviteCode} 🎉 `,
    //       timestamp: newRecords._rawJson.createdTime,
    //       fields: newRecords._rawJson.fields,
    //     });
    //   } catch (err) {
    //     return res
    //       .status(500)
    //       .end(
    //         `Failed submission${
    //           err instanceof AirtableError ? `: ${err.message}` : ''
    //         } 😕`,
    //       );
    //   }
    // }
    default: {
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
}
