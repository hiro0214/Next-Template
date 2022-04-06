import { VFC, memo } from 'react';
import { ColumnListType } from 'types/common/columnList';

export const ColumnList: VFC<ColumnListType> = memo((props) => {
  const { children } = props;

  return (
    <ul className={'c-column'}>
      {children.map((child, i) => (
        <li className={'c-column__item'} key={i}>
          {child}
        </li>
      ))}
    </ul>
  );
});
