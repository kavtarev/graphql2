import * as React from "react";
import { BottomMenu } from "../BottomMenu";
import { SocialMenu } from "../SocialMenu";
import { Copyright } from "../Copyright";

interface Props {
  bgColor?: string;
}

export function FooterTemplate({ bgColor }: Props): JSX.Element {
  const ROOT_CLASS = "footer";
  const bgColorModifier = bgColor
    ? `${ROOT_CLASS}_background-color_${bgColor}`
    : "";
  return (
    <footer className={`${ROOT_CLASS} ${bgColorModifier}`}>
      <BottomMenu isNavMobileShown={false} />
      <SocialMenu isNavMobileShown={false} />
      <Copyright blockClass={ROOT_CLASS} />
      <div className="footer_agreement">
        <a href="/License">Пользовательское соглашение</a>
      </div>
    </footer>
  );
}
