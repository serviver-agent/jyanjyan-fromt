import * as React from 'react';

type Props = {
  className?: string;
  label?: string;
  onChange: (value: string) => void;
  type?: string;
  value: string;
};

export default ({
  className,
  onChange,
  type = 'text',
  value,
  label,
}: Props): React.ReactElement => {
  const onChangeInputValue = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      onChange(e.currentTarget.value);
    },
    [onChange]
  );
  return (
    <>
      <input
        className={className}
        onChange={onChangeInputValue}
        placeholder={label}
        type={type}
        value={value}
      />
      <style jsx>{`
        input {
          border-bottom: 1px solid #444;
          border: 0px;
          font-size: 1rem;
          height: 2rem;
          width: 16rem;
          margin: 1rem 0;
          :focus {
            border-bottom: 1px solid rgba(97, 205, 213, 0.6);
            box-shadow: 0px 3px 0px rgba(97, 205, 213, 0.2);
          }
        }
      `}</style>
    </>
  );
};
