import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import { Modal } from 'components/common';
import { SIGNUP_MODAL_OPTIONS } from 'utils/constants';

const Address: React.FC = (): JSX.Element => {
  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  return <DaumPostcode onComplete={handleComplete} width={SIGNUP_MODAL_OPTIONS.ADDRESS.width} height={SIGNUP_MODAL_OPTIONS.ADDRESS.height} autoClose />;
};

export default Address;
