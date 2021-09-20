import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import { Modal } from 'components/common';
import { SIGNUP_MODAL_OPTIONS } from 'utils/constants';

export interface IAddress {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setAddress: (address: string) => void;
}

const Address: React.FC<IAddress> = ({ isVisible, setAddress, setIsVisible }): JSX.Element => {
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

    setAddress(fullAddress);
    setIsVisible(false);
  };

  return (
    <Modal
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      content={<DaumPostcode onComplete={handleComplete} width={SIGNUP_MODAL_OPTIONS.ADDRESS.width} height={SIGNUP_MODAL_OPTIONS.ADDRESS.height} autoClose />}
    />
  );
};

export default Address;
