import React from 'react';

export type Tag = 'div' | 'section' | 'header' | 'footer' | 'main' | 'nav' | 'article';

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: Tag;
}

const Container: React.FC<ContainerProps> = ({
  as: Tag = 'div',
  className = '',
  style,
  children,
  ...props
}) => {
  return (
    <Tag
      className={className}
      style={{
        maxWidth: 'var(--max-w)',
        marginInline: 'auto',
        paddingInline: 'var(--gutter)',
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Container;
