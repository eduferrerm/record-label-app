import { ReactNode } from "react";

interface ButtonShared {
  text: string;
}

type ButtonConditional =
  | {
      buttonAction?: () => void;
      href?: never;
      targetBlank?: never;
    }
  | {
      buttonAction?: never;
      href?: string;
      targetBlank?: boolean;
      noreferrer: true;
      nofollow: true;
    };

type Props = ButtonShared & ButtonConditional;

export default function MDSButton(props: Props): ReactNode {
  const { buttonAction, href, text, targetBlank } = props;
  const style =
    "rounded-full h-10 border-2 border-solid border-mds-grey-600 px-2 font-mds-sans-cond-bold text-mds-text-1 uppercase leading-none flex justfy-center items-center";

  return buttonAction ? (
    <button className={style} onClick={() => buttonAction()}>
      {text}
    </button>
  ) : targetBlank ? (
    <a className={style} href={href} target="_blank">
      {text}
    </a>
  ) : (
    <a className={style} href={href}>
      {text}
    </a>
  );
}
