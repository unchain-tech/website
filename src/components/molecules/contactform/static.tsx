import SendIcon from '@mui/icons-material/Send';
import {
  Alert,
  Button,
  Checkbox,
  createTheme,
  FormControlLabel,
  TextField,
  ThemeProvider,
} from '@mui/material';
import AirtableError from 'airtable/lib/airtable_error';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { useI18n } from '@/hooks/useI18n';
import { languageDetector } from '@/lib/languageDetector';
import { type FormInput } from '@/types/form';
import {
  table_websiteInquiry,
  validateEmailRegex,
  validateWalletAddressRegex,
} from '@/utils/form';

const ContactFormDangerous: FC = () => {
  const router = useRouter();
  const { t } = useI18n();
  const detectedLng = languageDetector.detect();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: {
      name: '',
      organization: '',
      email: '',
      wallet: '',
      inquiry: '',
      privacy: false,
    },
  });

  const [sendStatus, setSendStatus] = useState<number>(0);

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    if (!sendStatus) {
      setSendStatus(1);

      if (!data) {
        setSendStatus(3);
        throw new Error('400, Missing application form.');
      }
      const { name, organization, email, wallet, inquiry, privacy } = data;

      if (!(name && organization && email && inquiry && privacy)) {
        setSendStatus(3);
        throw new Error('400, Missing required fields.');
      }
      if (!(typeof name === 'string' && 2 < name.length && name.length < 31)) {
        setSendStatus(3);
        throw new Error('Invalid name. (min 3 char, max 30 char)');
      }
      if (
        !(
          typeof organization === 'string' &&
          2 < organization.length &&
          organization.length < 31
        )
      ) {
        setSendStatus(3);
        throw new Error('Invalid organization. (min 3 char, max 30 char)');
      }
      if (!validateEmailRegex(email)) {
        setSendStatus(3);
        throw new Error('Invalid email address.');
      }
      if (!validateWalletAddressRegex(wallet)) {
        setSendStatus(3);
        throw new Error('Invalid wallet address.');
      }
      if (
        !(
          typeof inquiry === 'string' &&
          29 < inquiry.length &&
          inquiry.length < 2001
        )
      ) {
        setSendStatus(3);
        throw new Error('Invalid inquiry. (min 30 char, max 2000 char)');
      }
      console.log('New submission: ', data);
      try {
        const newRecords = await table_websiteInquiry.create({
          ...data,
        });
        setSendStatus(2);
        return JSON.stringify({
          message: 'SUCCESS',
          record: newRecords.fields as FormInput,
        });
      } catch (err) {
        setSendStatus(3);
        throw new Error(
          `Failed${err instanceof AirtableError ? `: ${err.message}` : ''} 😕`
        );
      }
    }
  };

  const PopupAlerts = (props: { status: number }) => {
    if (props.status === 1) {
      return <Alert severity="info">Submitting, hold on...</Alert>;
    }
    if (props.status === 2) {
      return (
        <Alert
          severity="success"
          onClose={() => {
            setSendStatus(0);
            router.reload();
          }}
        >
          Your inquiry was successfully submitted.
        </Alert>
      );
    }
    if (props.status === 3) {
      return (
        <Alert
          severity="error"
          onClose={() => {
            setSendStatus(0);
            router.reload();
          }}
        >
          Invalid submission.
        </Alert>
      );
    }
    return <></>;
  };

  return (
    /* handleSubmit() will validate inputs before invoking onSubmit() */
    <div className="py-8">
      <ThemeProvider
        theme={createTheme({
          palette: {
            mode: 'dark',
          },
        })}
      >
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                sx={{ mb: 1 }}
                variant="filled"
                label="name*"
                disabled={!!sendStatus}
                {...register('name', {
                  required: 'your name is required',
                })}
                error={!!errors.name}
                helperText={errors?.name ? errors.name.message : '\u00a0'}
                {...field}
              />
            )}
          />

          <Controller
            name="organization"
            control={control}
            render={({ field }) => (
              <TextField
                sx={{ mb: 1 }}
                variant="filled"
                label="organization*"
                disabled={!!sendStatus}
                {...register('organization', {
                  required: 'Your organization is required',
                })}
                error={!!errors.organization}
                helperText={
                  errors?.organization ? errors.organization.message : '\u00a0'
                }
                {...field}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                sx={{ mb: 1 }}
                variant="filled"
                label="email*"
                disabled={!!sendStatus}
                {...register('email', {
                  required: 'Your email address is required',
                })}
                error={!!errors.email}
                helperText={errors?.email ? errors.email.message : '\u00a0'}
                {...field}
              />
            )}
          />

          <Controller
            name="wallet"
            control={control}
            render={({ field }) => (
              <TextField
                sx={{ mb: 1 }}
                variant="filled"
                label="wallet address*"
                disabled={!!sendStatus}
                {...register('wallet', {
                  required: 'Your wallet address is required',
                })}
                error={!!errors.wallet}
                helperText={errors?.wallet ? errors.wallet.message : '\u00a0'}
                {...field}
              />
            )}
          />

          <Controller
            name="inquiry"
            control={control}
            render={({ field }) => (
              <TextField
                variant="filled"
                label="inquiry*"
                multiline={true}
                minRows={3}
                disabled={!!sendStatus}
                {...register('inquiry', {
                  required: 'Your inquiry is required',
                  maxLength: {
                    value: 2000,
                    message:
                      'Your inquiry must be 2000 characters or fewer in length.',
                  },
                })}
                error={!!errors.inquiry}
                helperText={errors?.inquiry ? errors.inquiry.message : '\u00a0'}
                {...field}
              />
            )}
          />

          <div className="mx-auto">
            <FormControlLabel
              name="privacy"
              sx={{ mb: 1 }}
              control={
                <Controller
                  name="privacy"
                  control={control}
                  defaultValue={true}
                  render={({ field: { value, ref, ...field } }) => (
                    <Checkbox
                      {...field}
                      inputRef={ref}
                      checked={value}
                      color="primary"
                      disabled={!!sendStatus}
                      required
                    />
                  )}
                />
              }
              label={
                <div className="flex flex-row space-x-1">
                  <p>
                    {detectedLng == 'en' ? (
                      <span className="hover:no-cursor text-sm">
                        Agree to the{' '}
                      </span>
                    ) : (
                      <></>
                    )}

                    <a
                      href="https://example.com"
                      className="text-sm font-light underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t('PRIVACY POLICY')}
                    </a>

                    {detectedLng == 'ja' ? (
                      <span className="hover:no-cursor text-sm">に同意</span>
                    ) : (
                      <></>
                    )}
                  </p>
                </div>
              }
            />
          </div>

          <PopupAlerts status={sendStatus} />
          <div className="mx-auto">
            <Button
              endIcon={<SendIcon />}
              type="submit"
              variant="outlined"
              color="inherit"
              disabled={!!sendStatus}
            >
              {!!sendStatus
                ? sendStatus == 2
                  ? 'Submitted'
                  : 'Submitting'
                : 'Send'}
            </Button>
          </div>
        </form>
      </ThemeProvider>
    </div>
  );
};

export default ContactFormDangerous;
