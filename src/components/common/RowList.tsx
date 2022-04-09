import { VFC, memo } from 'react';
import clsx from 'clsx';
import { RowListType } from 'types/common/rowList';

const componentName = 'RowList';

export const RowList: VFC<RowListType> = memo((props) => {
  const { children, pcLine = 4, spLine = 2 } = props;

  if (!children) {
    throw new Error(`Unexpected Component Props. For ${componentName}`);
  }

  return (
    <ul className={clsx('c-row', `c-row--pc${pcLine}`, `c-row--sp${spLine}`)}>
      {children.map((child, i) => (
        <li className={'c-row__item'} key={i}>
          {child}
        </li>
      ))}
    </ul>
  );
});
