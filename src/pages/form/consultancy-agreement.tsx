import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Field, Button } from 'theme-ui';

export interface ConsultancyAgreementProps {
  agreementName: string;
  referenceId: string;
  customerName: string;
  customerAddress: string;
  customerInvoiceAddress: string;
  customerContact: string;
  ourContact: string;
  description: string;
  hourlyRate: string;
  startDate: string;
  scope: string;
  duration: string;
}

const ConsultancyAgreement: NextPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConsultancyAgreementProps>({
    defaultValues: {
      ourContact: 'Simen A. W. Olsen',
      customerInvoiceAddress: 'Samme som kundens adresse',
      hourlyRate: '1 650 NOK',
      startDate: 'Oppstart etter nærmere avtale',
      scope:
        'Det er vanskelig å si noe om oppdragets omfang. Bjerk vil holde kunde løpende informert om medgått tid.',
      duration:
        'Oppdraget trer i kraft fra oppstartsdato og løper til det sies opp av én av partene. Partene kan skriftlig si opp oppdraget med en gjensidig oppsigelsesfrist på én måned.',
    },
  });

  const onSubmit = (formData: ConsultancyAgreementProps) => {
    const rawData = JSON.stringify(formData);
    const data = Buffer.from(rawData).toString('base64');
    router.push(`/documents/consultancy-agreement-no?data=${data}`);
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field label="Oppdragets navn" {...register('agreementName')} />
      <Field
        label="Oppdragets ref. nr. hos Bjerk"
        {...register('referenceId')}
      />
      <Field label="Kundens navn" {...register('customerName')} />
      <Field label="Kundens adresse" {...register('customerAddress')} />
      <Field
        label="Faktureringsadresse"
        {...register('customerInvoiceAddress')}
      />
      <Field label="Kundens kontaktperson" {...register('customerContact')} />
      <Field label="Bjerks kontaktperson" {...register('ourContact')} />
      <Field label="Oppdraget gjelder" {...register('description')} />
      <Field label="Honorar" {...register('hourlyRate')} />
      <Field label="Oppstartsdato" {...register('startDate')} />
      <Field label="Oppdragets omfang" {...register('scope')} />
      <Field label="Løpetid - Oppsigelse" {...register('duration')} />
      <Button type="submit">Lag avtale</Button>
    </Box>
  );
};

export default ConsultancyAgreement;
