import { VFC, memo } from 'react';
import { RowListType } from 'types/common/rowList';

export const RowList: VFC<RowListType> = memo((props) => {
  const { children, pcLine = 4, spLine = 2 } = props;

  return (
    <div className={`c-row c-row--pc${pcLine} c-row--sp${spLine}`}>
      {children.map((child, i) => (
        <div className={'c-row__item'} key={i}>
          {child}
        </div>
      ))}
    </div>
  );
});
