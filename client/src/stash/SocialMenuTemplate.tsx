import * as React from "react";
import * as classnames from "classnames";
import { SvgIcon } from "../../../common/SvgIcon";
import { socialMenuLinks } from "../../socialMenuLinks";

interface Props {
  isNavMobileShown: boolean;
}

export function SocialMenuTemplate({ isNavMobileShown }: Props): JSX.Element {
  const ROOT_CLASS = "socials-menu";
  const menuClassName = classnames(
    `${ROOT_CLASS}`,
    {
      [`${ROOT_CLASS}_mobile`]: isNavMobileShown,
    },
    {
      [`${ROOT_CLASS}_main`]: !isNavMobileShown,
    }
  );

  const listClassName = classnames(
    `${ROOT_CLASS}__list`,
    {
      [`${ROOT_CLASS}__list_mobile`]: isNavMobileShown,
    },
    {
      [`${ROOT_CLASS}__list_main`]: !isNavMobileShown,
    }
  );

  const liClassName = classnames(
    `${ROOT_CLASS}__item`,
    {
      [`${ROOT_CLASS}__item_mobile`]: isNavMobileShown,
    },
    {
      [`${ROOT_CLASS}__item_main`]: !isNavMobileShown,
    }
  );

  const svgClassName = classnames({
    [`${ROOT_CLASS}__popup-icon`]: isNavMobileShown,
  });

  return (
    <div className={menuClassName}>
      <div className="social_grid">
        {/*   {socialMenuLinks.map(({ url, label }) => (
          <a
            key={label}
            className={`${ROOT_CLASS}__link`}
            href={url}
            target="_blank"
          >
            <SvgIcon
              className={`${ROOT_CLASS}__icon ${svgClassName} ${label}-icon`}
              // tslint:disable-next-line:max-line-length
              relPath={`/main/components/SocialMenu/socials-sprite.svg#${label}`}
            />
          </a>
        ))} */}

        <a
          href="https://vk.com/flaconmagazine"
          target="_blank"
          className="socials-menu__link"
        >
          <svg
            width="30"
            height="30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15" cy="15" r="15" fill="#1D1D1D"></circle>
            <path
              d="M21.204 17.457c-1.537-1.361-1.249-1.09.577-3.449 1.057-1.36 1.538-2.268 1.442-2.631-.096-.363-.961-.272-.961-.272H19.57s-.192 0-.384.09c-.192.091-.288.273-.288.273s-.48 1.089-.961 1.996c-1.154 1.996-1.73 2.087-1.923 1.996-.48-.272-.384-1.18-.384-1.724 0-1.905.288-2.631-.577-2.904-.288-.09-.577-.181-1.345-.181-.962 0-1.827 0-2.307.272-.192.09-.48.454-.288.454s.576.09.864.363c.289.363.289 1.18.289 1.18s0 2.268-.48 2.54c-.385.273-.866-.181-1.923-1.996-.577-.907-1.057-1.906-1.057-1.906s-.096-.181-.192-.272c-.193-.181-.385-.181-.385-.181H5.538s-.385 0-.577.181c-.096.182 0 .454 0 .454s2.019 4.446 4.325 6.806c2.115 2.087 4.518 1.996 4.518 1.996h1.057s.384 0 .48-.181c.193-.182.193-.454.193-.454s0-1.361.672-1.543c.673-.181 1.538 1.27 2.5 1.906.768.454 1.153.363 1.153.363h2.499s1.25-.09.673-.998c0-.272-.385-.817-1.826-2.178z"
              fill="#fff"
            ></path>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/flacon_magazine/"
          target="_blank"
          className="socials-menu__link"
        >
          <svg
            width="30"
            height="30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15" cy="15" r="15" fill="#1D1D1D"></circle>
            <path
              d="M15.027 12.65c-1.311 0-2.32.982-2.32 2.258 0 1.277 1.008 2.258 2.32 2.258 1.31 0 2.319-.982 2.319-2.258s-1.009-2.257-2.32-2.257z"
              fill="#fff"
            ></path>
            <path
              d="M21.683 10.393c-.202-.49-.404-.785-.807-1.276-.404-.393-.807-.59-1.311-.785-.505-.197-1.009-.197-1.715-.295h-2.823s-2.118 0-2.925.098c-.706 0-1.311.098-1.815.393a2.86 2.86 0 00-1.11.687c-.403.295-.605.785-.806 1.178-.202.393-.303.982-.303 1.669-.1.785-.1 2.847-.1 2.847s0 2.061.1 2.846c.101.786.101 1.277.404 1.67.201.49.403.784.806 1.275.404.393.807.59 1.311.786.505.196.908.196 1.715.294h2.723s2.117 0 2.924-.098c.706-.098 1.311-.098 1.715-.393.504-.196.806-.392 1.31-.785.404-.393.606-.785.807-1.276.202-.491.202-.884.303-1.669v-2.65-2.847c-.1-.687-.1-1.178-.403-1.669zm-6.656 8.05c-2.017 0-3.63-1.571-3.63-3.534 0-1.964 1.512-3.534 3.63-3.534 2.117 0 3.63 1.57 3.63 3.534 0 1.963-1.613 3.533-3.63 3.533zm3.731-6.381a.784.784 0 01-.807-.785c0-.393.404-.786.807-.786a.785.785 0 110 1.57z"
              fill="#fff"
            ></path>
          </svg>
        </a>
        <a
          href="https://www.facebook.com/flaconmagazine/"
          target="_blank"
          className="socials-menu__link"
        >
          <svg
            width="30"
            height="30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15" cy="15" r="15" fill="#1D1D1D"></circle>
            <path
              d="M16.089 22.2h-3.546v-7.078h-1.719v-2.77h1.72v-1.64c0-2.36 1.074-3.693 3.867-3.693h2.364v2.872h-1.504c-1.075 0-1.182.308-1.182 1.026v1.436h2.686l-.322 2.77h-2.364V22.2z"
              fill="#fff"
            ></path>
          </svg>
        </a>
        <a
          href="https://t.me/flacon_mag"
          target="_blank"
          className="socials-menu__link"
        >
          <svg
            width="30"
            height="30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15" cy="15" r="15" fill="#1D1D1D"></circle>
            <g clip-path="url(#clip0)">
              <path
                d="M7.26 14.734l3.392 1.28 1.313 4.27a.398.398 0 00.635.193l1.89-1.559a.56.56 0 01.688-.02l3.41 2.505a.399.399 0 00.627-.245l2.498-12.151a.401.401 0 00-.535-.46l-13.922 5.43a.406.406 0 00.004.757zm4.494.599l6.63-4.129c.119-.074.241.09.139.185l-5.472 5.143a1.152 1.152 0 00-.351.686l-.186 1.396c-.025.187-.284.205-.335.025l-.717-2.547a.678.678 0 01.292-.76z"
                fill="#fff"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0">
                <path
                  fill="#fff"
                  transform="translate(7 8.5)"
                  d="M0 0h15v13H0z"
                ></path>
              </clipPath>
            </defs>
          </svg>
        </a>
        <a
          href="https://www.youtube.com/channel/UCKWcCE0BppJoP2Z5RlkFnOw"
          target="_blank"
          className="socials-menu__link"
        >
          <svg
            width="30"
            height="30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15" cy="15" r="15" fill="#1D1D1D"></circle>
            <path
              d="M22.8 11.8c-.2-1.3-.8-2.2-2.2-2.4C18.4 9 15 9 15 9s-3.4 0-5.6.4c-1.4.2-2.1 1.1-2.2 2.4C7 13.1 7 15 7 15s0 1.9.2 3.2c.2 1.3.8 2.2 2.2 2.4 2.2.4 5.6.4 5.6.4s3.4 0 5.6-.4c1.4-.3 2-1.1 2.2-2.4.2-1.3.2-3.2.2-3.2s0-1.9-.2-3.2zM13 18v-6l5 3-5 3z"
              fill="#fff"
            ></path>
          </svg>
        </a>
        <a
          href="https://invite.viber.com/?g2=AQAFH1G0iOW4h0uULsefZ3gius4%2FtwbG8kIIqU7yKYmLyxa6Vllalymr613qowEM"
          target="_blank"
          className="socials-menu__link"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
            <circle fill="#1D1D1D" cx="15" cy="15" r="15"></circle>
            <g fill="#FFF">
              <path d="M14.6 9.5c.2.1.3.1.7.1 1.2.1 1.9.3 2.7.9 1 .7 1.6 1.8 1.9 3.1.1.3.1.6.1 1 0 .3 0 .4.1.5.1.2.3.3.5.3h.1c.2 0 .4-.1.5-.2.1-.2.1-.3.1-.7 0-1.1-.3-2.1-.7-2.9-.3-.6-.6-1-1.1-1.5-.6-.5-1-.8-1.6-1.2-.7-.3-1.2-.4-1.9-.5h-.6c-.4 0-.5 0-.7.1-.1.1-.2.3-.2.5-.1.3 0 .4.1.5z"></path>
              <path d="M18.2 14.3c0 .3 0 .6.3.8.1 0 .2.1.3.1.1 0 .2 0 .3-.1l.3-.3c.1-.2 0-.7 0-.9-.1-.7-.3-1.4-.7-1.9-.7-1-1.7-1.6-3.1-1.8-.5-.1-.8-.1-1 .2-.2.2-.1.5 0 .7.1.2.4.2.6.2.5 0 1.1.2 1.5.5.5.3.8.7 1.1 1.1.3.4.4.9.4 1.4z"></path>
              <path d="M17.1 12.4c-.3-.3-.7-.5-1.1-.5h-.4c-.2 0-.3 0-.4.1-.2.1-.3.2-.3.4s0 .4.1.5c.1.2.3.2.6.2.5.1.7.2.9.5.1.2.1.3.1.6 0 .2.1.4.2.5.1.1.2.1.4.1.1 0 .3 0 .4-.1.2-.2.2-.4.2-.8-.1-.7-.3-1.1-.7-1.5z"></path>
              <path d="M21.2 19.2c0-.2-.1-.5-.2-.6-.1-.2-1.1-.9-1.5-1.2-.3-.2-.9-.5-1.1-.7-.4-.2-.7-.2-1.1-.1-.1 0-.1 0-.2.1-.2.1-.3.2-.6.6-.3.3-.3.4-.3.4s-.1 0-.1.1c-.2.1-.5 0-1.1-.3-.5-.2-.9-.5-1.3-.9s-.8-.8-1-1.2c-.3-.5-.5-1.1-.5-1.3 0-.1 0-.3.1-.3h.1l.3-.3c.5-.4.7-.6.8-.9.1-.3 0-.6-.2-1.1-.4-.7-1.5-2.1-2-2.5-.1 0-.2-.1-.3-.1-.2-.1-.5-.1-.6-.1-.2 0-.5.2-1.1.6-.3.2-.8.7-.9.9-.3.5-.2 1 .1 1.8.3.7.6 1.5 1 2.2.1.1.2.3.3.4.1.1.2.3.3.4l.1.2c.1.1.1.2.2.2.1.2.2.3.3.5 1.3 1.7 2.8 3 4.5 4.1h.1c.3.2.5.3.8.5l.1.1c.3.2.6.3.8.4h.1c.3.2.6.3.9.4.3.1.5.2.8.2h.1c.2 0 .3 0 .4-.1l.6-.3.1-.1s.1-.1.2-.1l.8-.8c.1-.2.3-.4.4-.6-.2-.1-.1-.3-.2-.5z"></path>
            </g>
          </svg>
        </a>
        <a
          href="https://www.pinterest.ru/flacon_mag/"
          target="_blank"
          className="socials-menu__link"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
            <circle fill="#1D1D1D" cx="15" cy="15" r="15"></circle>
            <path
              fill="#FFF"
              d="M15.2 8.5c-3.6 0-5.5 2.3-5.5 4.8 0 1.2.6 2.6 1.7 3.1.2.1.2 0 .3-.1 0-.1.2-.6.2-.9 0-.1 0-.2-.1-.2-.3-.4-.6-1.1-.6-1.8 0-1.7 1.4-3.4 3.7-3.4 2 0 3.5 1.3 3.5 3.2 0 2.1-1.1 3.6-2.6 3.6-.8 0-1.4-.6-1.2-1.4.2-.9.7-2 .7-2.6 0-.6-.3-1.1-1-1.1-.8 0-1.5.8-1.5 1.9 0 .7.2 1.2.2 1.2s-.8 3.3-1 3.9c-.3 1 0 2.7.1 2.9 0 .1.1.1.2 0s1.1-1.5 1.4-2.5c.1-.4.5-1.9.5-1.9.3.5 1.1.9 1.9.9 2.5 0 4.3-2.2 4.3-4.9-.1-2.8-2.3-4.7-5.2-4.7z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
