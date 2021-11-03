import * as React from "react";
import {
  mobileMenuLinks,
  mobileUserMenuLinks,
  bottomMenuLinks,
} from "../../bottomMenuLinks";

interface Props {
  isNavMobileShown: boolean;
}

export function BottomMenuTemplate({ isNavMobileShown }: Props): JSX.Element {
  const ROOT_CLASS = isNavMobileShown ? "bottom-mobile-menu" : "bottom-menu";

  return (
    <React.Fragment>
      {isNavMobileShown ? (
        <div>
          <ul className={ROOT_CLASS}>
            {mobileMenuLinks.map(({ label, url }) => (
              <li key={label} className={`${ROOT_CLASS}__item`}>
                <a className={`${ROOT_CLASS}__link`} href={url}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ul className={`${ROOT_CLASS}-user`}>
            {mobileUserMenuLinks.map(({ label, url }) => (
              <li key={label} className={`${ROOT_CLASS}-user__item`}>
                <a className={`${ROOT_CLASS}-user__link`} href={url}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul className={ROOT_CLASS}>
          {bottomMenuLinks.map(({ label, url }) => (
            <li key={label} className={`${ROOT_CLASS}__item`}>
              <a className={`${ROOT_CLASS}__link`} href={url}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
}
