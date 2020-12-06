import React, { FC } from 'react';

interface Props {
  title: string;
}

const Title: FC<{ title: string }> = ({ title }: Props) => {
  return <h2 style={{ color: '#fff' }}>{title}</h2>;
};

export default Title;
