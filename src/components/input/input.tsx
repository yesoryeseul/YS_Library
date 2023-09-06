import { ChangeEvent } from 'react';
import * as S from './input.style';

interface InputProps {
  variant: 'primary' | 'lineType';
  shape: 'none' | 'primary';
  leng: 'pc' | 'tablet' | 'mobile';
  value?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  variant,
  shape,
  leng,
  value,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <S.Input
      placeholder={placeholder}
      variant={variant}
      shape={shape}
      leng={leng}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;