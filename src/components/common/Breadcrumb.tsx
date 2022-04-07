import Link from 'next/link';
import { VFC, memo } from 'react';
import { BreadcrumbType } from 'types/common/breadcrumb';

export const BreadCrumb: VFC<BreadcrumbType> = memo((props) => {
  const { items } = props;

  return (
    <ul className={'c-breadcrumb'}>
      <li className={'c-breadcrumb__item'}>
        <Link href={'/'}>TOP</Link>
      </li>
      {items.map((item) => (
        <li className={'c-breadcrumb__item'} key={item.text}>
          {item.link ? <Link href={item.link}>{item.text}</Link> : <span>{item.text}</span>}
        </li>
      ))}
    </ul>
  );
});
