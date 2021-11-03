import * as React from "react";
import { Helmet } from "react-helmet";
import { Switch, Route, RouteComponentProps } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import * as querystring from "querystring";
import * as classnames from "classnames";
import { minify } from "terser";

import {
  MainLayoutWithAdSpacesBrandingQuery,
  MainLayoutWithAdSpacesQuery,
  MainLayoutWithoutAdSpacesBrandingQuery,
} from "../../../../apollo-query-types";
import { BrandingLayoutTemplate } from "./BrandingLayoutTemplate";
import { StandartLayoutTemplate } from "./StandartTemplateLayout";
import { Footer } from "../Footer";
import {
  Props as MainLayoutBehaviourProps,
  ScrollDirection,
} from "./MainLayoutBehaviour";
import { MainMenuItemLabel } from "../../../../../frontend/main/MainMenuItemLabel";
import { AdSpace } from "../AdSpace";
import { Header } from "../Header";
import { SearchBar } from "../SearchBar";
import { NotFound } from "../../NotFound";
import { LayoutError } from "../../../../LayoutError";
import { CookieNotification } from "../CookieNotification";
import { PasswordSavingModal } from "../PasswordRecovery/PasswordSavingModal";
import { ErrorBoundary } from "../../../common/ErrorBoundary";
import { CommonPublicationTypes } from "../../../../../frontend/Publication";
import { ErrorLayout } from "../ErrorLayout";
import { NewsletterFormFooter } from "../NewsletterFormFooter";
import { newsletterType } from "../../CommonPublication/NewsletterFormForPublication/NewsletterFormForPublicationTemplate";
import { SectionMenu } from "../SectionMenu";
import { StickyButtonTemplate } from "../../../common/StyckyButton/StyckyButton";
import { PulseButtonTemplate } from "../../../common/PulseButton/PulseButtonTemplate";

interface Props extends MainLayoutBehaviourProps {
  isShowSearchBar: boolean;
  isShowCookieNotification: boolean;
  isHeaderPositionFixed: boolean;
  scrollDirection: ScrollDirection;
  headerColor: string;
  layoutContentRef: React.RefObject<HTMLDivElement>;
  commonPublicationType?: CommonPublicationTypes;
  onToggleSearchBar(): void;
}

const { code: YA_HEADER_BIDDING_SETTINGS, error: minifyError } = minify(
  `var adfoxBiddersMap = {
            "betweenDigital": "1417146",
            "myTarget": "1315360",
            "criteo": "1386955",
            "rtbhouse": "1386961",
            "getintent": "1386963",
            "alfasense": "1386970",
            "redllama": "1593327"
    };
    var adUnits = [
        {
            "code": "adfox_fullscreen",
            "bids": [
                {
                    bidder: "redllama",
                    params: {
                        placementId: "194",
                    },
                },
            ],
        },
        {
            "code": "adfox_line_1",
            "bids": [
                {
                    "bidder": "betweenDigital",
                    "params": {
                        "placementId": "3926138"
                    }
                },
                {
                    "bidder": "myTarget",
                    "params": {
                        "placementId": "722764"
                    }
                },
                {
                    "bidder": "criteo",
                    "params": {
                        "placementId": "1442685"
                    }
                },
                {
                    "bidder": "rtbhouse",
                    "params": {
                        "placementId": "SMXF2i2P9hxlvsUlbYu1"
                    }
                },
                {
                    "bidder": "getintent",
                    "params": {
                        "placementId": "66_970x250_alfadart"
                    }
                },
                {
                    "bidder": "alfasense",
                    "params": {
                        "placementId": "2054"
                    }
                }
            ],
            "sizes": [
                [
                    970,
                    250
                ]
            ]
        },
        {
            "code": "adfox_line_2",
            "bids": [
                {
                    "bidder": "betweenDigital",
                    "params": {
                        "placementId": "3926139"
                    }
                },
                {
                    "bidder": "myTarget",
                    "params": {
                        "placementId": "802670"
                    }
                },
                {
                    "bidder": "criteo",
                    "params": {
                        "placementId": "1442685"
                    }
                },
                {
                    "bidder": "rtbhouse",
                    "params": {
                        "placementId": "SMXF2i2P9hxlvsUlbYu1"
                    }
                },
                {
                    "bidder": "getintent",
                    "params": {
                        "placementId": "66_970x250_alfadart"
                    }
                },
                {
                    "bidder": "alfasense",
                    "params": {
                        "placementId": "2054"
                    }
                }
            ],
            "sizes": [
                [
                    970,
                    250
                ]
            ]
        },
        {
            "code": "adfox_line_3",
            "bids": [
                {
                    "bidder": "betweenDigital",
                    "params": {
                        "placementId": "3926140"
                    }
                },
                {
                    "bidder": "myTarget",
                    "params": {
                        "placementId": "802672"
                    }
                },
                {
                    "bidder": "criteo",
                    "params": {
                        "placementId": "1442685"
                    }
                },
                {
                    "bidder": "rtbhouse",
                    "params": {
                        "placementId": "SMXF2i2P9hxlvsUlbYu1"
                    }
                },
                {
                    "bidder": "getintent",
                    "params": {
                        "placementId": "66_970x250_alfadart"
                    }
                },
                {
                    "bidder": "alfasense",
                    "params": {
                        "placementId": "2054"
                    }
                }
            ],
            "sizes": [
                [
                    970,
                    250
                ]
            ]
        },
        {
            "code": "adfox_300x600",
            "bids": [
                {
                    "bidder": "betweenDigital",
                    "params": {
                        "placementId": "3926141"
                    }
                },
                {
                    "bidder": "myTarget",
                    "params": {
                        "placementId": "806990"
                    }
                },
                {
                    "bidder": "criteo",
                    "params": {
                        "placementId": "1442683"
                    }
                },
                {
                    "bidder": "rtbhouse",
                    "params": {
                        "placementId": "SMXF2i2P9hxlvsUlbYu1"
                    }
                },
                {
                    "bidder": "getintent",
                    "params": {
                        "placementId": "66_300x600_alfadart"
                    }
                },
                {
                    "bidder": "alfasense",
                    "params": {
                        "placementId": "2055"
                    }
                }
            ],
            "sizes": [
                [
                    300,
                    600
                ]
            ]
        },
        {
            "code": "adfox_640x440_1",
            "bids": [
                {
                    "bidder": "betweenDigital",
                    "params": {
                        "placementId": "3926142"
                    }
                },
                {
                    "bidder": "myTarget",
                    "params": {
                        "placementId": "806995"
                    }
                },
                {
                    "bidder": "criteo",
                    "params": {
                        "placementId": "1442680"
                    }
                },
                {
                    "bidder": "rtbhouse",
                    "params": {
                        "placementId": "SMXF2i2P9hxlvsUlbYu1"
                    }
                },
                {
                    "bidder": "getintent",
                    "params": {
                        "placementId": "66_300x250_alfadart"
                    }
                },
                {
                    "bidder": "alfasense",
                    "params": {
                        "placementId": "2056"
                    }
                }
            ],
            "sizes": [
                [
                    300,
                    250
                ]
            ]
        },
        {
            "code": "adfox_640x440_long",
            "bids": [
                {
                    "bidder": "betweenDigital",
                    "params": {
                        "placementId": "3926144"
                    }
                },
                {
                    "bidder": "myTarget",
                    "params": {
                        "placementId": "813097"
                    }
                },
                {
                    "bidder": "criteo",
                    "params": {
                        "placementId": "1442680"
                    }
                },
                {
                    "bidder": "rtbhouse",
                    "params": {
                        "placementId": "SMXF2i2P9hxlvsUlbYu1"
                    }
                },
                {
                    "bidder": "getintent",
                    "params": {
                        "placementId": "66_300x250_alfadart"
                    }
                },
                {
                    "bidder": "alfasense",
                    "params": {
                        "placementId": "2056"
                    }
                }
            ],
            "sizes": [
                [
                    300,
                    250
                ]
            ]
        },
        {
            "code": "adfox_640x440_2",
            "bids": [
                {
                    "bidder": "betweenDigital",
                    "params": {
                        "placementId": "3926143"
                    }
                },
                {
                    "bidder": "myTarget",
                    "params": {
                        "placementId": "802674"
                    }
                },
                {
                    "bidder": "criteo",
                    "params": {
                        "placementId": "1442680"
                    }
                },
                {
                    "bidder": "rtbhouse",
                    "params": {
                        "placementId": "SMXF2i2P9hxlvsUlbYu1"
                    }
                },
                {
                    "bidder": "getintent",
                    "params": {
                        "placementId": "66_300x250_alfadart"
                    }
                },
                {
                    "bidder": "alfasense",
                    "params": {
                        "placementId": "2056"
                    }
                }
            ],
            "sizes": [
                [
                    300,
                    250
                ]
            ]
        }
    ];
    var userTimeout = 900;
    window.YaHeaderBiddingSettings = {
        biddersMap: adfoxBiddersMap,
        adUnits: adUnits,
        timeout: userTimeout
    };`
);
if (minifyError) {
  console.error("Error minifying header bidding script");
  throw minifyError;
}

export function MainLayoutTemplate({
  query,
  layoutError,
  layoutErrorTitle,
  children,
  isShowSearchBar,
  isShowCookieNotification,
  onToggleSearchBar,
  isShowFooterNewsletterForm,
  isShowHeaderSectionMenu,
  footerBgColor,
  disabledAdSpaceTypes,
  commonPublicationType,
  metaTagsParamsFactory,
  isHeaderPositionFixed,
  scrollDirection,
  layoutContentRef,
  googleAnalyticsCustomDimensions,
  isDisableAnalytics,
  isAddRelapScript,
  headerColor,
  activeSection,
}: Props): JSX.Element {
  const { error, data } = query;
  const sectionMenuClassName = classnames("layout__subheader", {
    ["layout__subheader_post"]:
      commonPublicationType === CommonPublicationTypes.POST,
    ["layout__subheader_news"]:
      commonPublicationType === CommonPublicationTypes.NEWS,
  });
  const headerStyle = {
    "--color": `#${headerColor}`,
  } as React.CSSProperties;

  if (!data || error) {
    return <p>Произошла ошибка, попробуйте обновить страницу</p>;
  }

  const {
    projectConfig: { vendor },
  } = data;
  const adSpaces = isDataWithAdSpaces(data) ? data.adSpaces : null;
  const branding = isDataWithBranding(data) ? data.branding : null;

  const topLeaderBoard = adSpaces?.topLeaderBoard;
  const mobileTopLeaderBoard = adSpaces?.mobileLeaderBoard;
  const isBranded = Boolean(branding);
  const LayoutTemplate = isBranded
    ? BrandingLayoutTemplate
    : StandartLayoutTemplate;
  const ROOT_CLASS = "i-layout";
  const headerClassName = classnames(`${ROOT_CLASS}__header`, {
    [`${ROOT_CLASS}__header_position_fixed`]: isHeaderPositionFixed,
    [`${ROOT_CLASS}__header_scroll_${scrollDirection}`]:
      scrollDirection !== "static" && scrollDirection,
  });
  const isProdEnv = data.systemConfig.env === "prod";
  const googleAnalyticsUserIdJS =
    !isDisableAnalytics && data.authorizedSiteUserId
      ? `ga('set', 'userId', '${data.authorizedSiteUserId}');`
      : "";
  const googleAnalyticsCustomDimensionsJS =
    !isDisableAnalytics && googleAnalyticsCustomDimensions
      ? Object.entries(googleAnalyticsCustomDimensions)
          .map(
            ([index, value]) => `ga('set', 'dimension${index}', '${value}');`
          )
          .join("")
      : "";

  const newsletter = newsletterType.mDigest;

  if (LayoutError.Forbidden === layoutError && layoutErrorTitle) {
    return (
      <Route
        render={({ staticContext }) => {
          if (staticContext) {
            staticContext.statusCode = 403;
          }
          return <ErrorLayout title={layoutErrorTitle} />;
        }}
      />
    );
  }

  return (
    <LayoutTemplate branding={branding}>
      {metaTagsParamsFactory && (
        <Helmet>
          <title>{metaTagsParamsFactory.documentTitle}</title>
          <script
            type="text/javascript"
            src="//an.yandex.ru/system/context.js"
            async
          />
          <script
            async
            src="https://yastatic.net/pcode/adfox/header-bidding.js"
          />

          <script>{YA_HEADER_BIDDING_SETTINGS}</script>
          <script
            src="https://yastatic.net/pcode/adfox/loader.js"
            crossOrigin="anonymous"
            async
          />

          {!isDisableAnalytics && (
            <script>{`window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', '${data.projectConfig.vendor.google.analytics.trackingId}');
${googleAnalyticsUserIdJS}
${googleAnalyticsCustomDimensionsJS}
ga('send', 'pageview');`}</script>
          )}
          {!isDisableAnalytics && (
            <script async src="https://www.google-analytics.com/analytics.js" />
          )}

          {/* keep ?version in sync with other references to openapi.js */}
          <script async src="https://vk.com/js/api/openapi.js?168" />
          <meta name="title" content={metaTagsParamsFactory.title} />
          <meta
            name="description"
            content={metaTagsParamsFactory.description}
          />
          <link rel="canonical" href={metaTagsParamsFactory.canonicalUrl} />
          <meta property="fb:pages" content="1640011122904824" />
          {metaTagsParamsFactory.getOpenGraphParams().map((item) => (
            <meta
              property={item.property}
              content={item.content}
              key={item.property}
            />
          ))}
          {metaTagsParamsFactory.getTwitterParams().map((item) => (
            <meta name={item.name} content={item.content} key={item.name} />
          ))}
          {!isAddRelapScript && (
            <meta property="relap:article" content="false" />
          )}
        </Helmet>
      )}

      {isProdEnv && isAddRelapScript && (
        <script
          type="text/javascript"
          async
          src="https://relap.io/v7/relap.js"
          data-relap-token="s4f-T0rORrtGBgMG"
        />
      )}
      <noscript>
        <iframe
          // tslint:disable-next-line:max-line-length
          src={`https://www.googletagmanager.com/ns.html?id=${vendor.google.tagManager.containerId}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <noscript>
        <div>
          <img
            // tslint:disable-next-line: max-line-length
            src={`https://mc.yandex.ru/watch/${vendor.metrika.counterId}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
      {!layoutError && (
        <React.Fragment>
          {!isBranded &&
            topLeaderBoard &&
            topLeaderBoard.isEnabled &&
            !(
              disabledAdSpaceTypes &&
              disabledAdSpaceTypes.includes(topLeaderBoard.type)
            ) && (
              <div className="i-layout__top-leaderboard-banner">
                <ErrorBoundary>
                  <AdSpace adSpace={topLeaderBoard} />
                </ErrorBoundary>
              </div>
            )}
          {mobileTopLeaderBoard &&
            mobileTopLeaderBoard.isEnabled &&
            !(
              disabledAdSpaceTypes &&
              disabledAdSpaceTypes.includes(mobileTopLeaderBoard.type)
            ) && (
              <div className="i-layout__ad-top-line-mobile">
                <ErrorBoundary>
                  <AdSpace adSpace={mobileTopLeaderBoard} isMobile={true} />
                </ErrorBoundary>
              </div>
            )}
        </React.Fragment>
      )}

      <PulseButtonTemplate />
      <div className="i-layout__header-wrap">
        <ErrorBoundary>
          <div
            className={`${ROOT_CLASS}__header`}
            ref={layoutContentRef}
            style={headerStyle}
          >
            <Switch>
              <Route
                path="/newsletter"
                exact={true}
                render={() => (
                  <Header
                    headerMobileClassName={headerClassName}
                    mainMenuSelectedItemId={MainMenuItemLabel.NEWS_LETTERS}
                    hasBranding={isBranded}
                    onToggleSearchBar={onToggleSearchBar}
                    isDisableAnalytics={isDisableAnalytics}
                  />
                )}
              />
              <Route
                path="/newsletter"
                render={() => (
                  <Header
                    headerMobileClassName={headerClassName}
                    mainMenuSelectedItemId={MainMenuItemLabel.NEWS_LETTERS}
                    hasBranding={isBranded}
                    onToggleSearchBar={onToggleSearchBar}
                    isDisableAnalytics={isDisableAnalytics}
                  />
                )}
              />
              <Route
                path="/podcast"
                render={() => (
                  <Header
                    headerMobileClassName={headerClassName}
                    mainMenuSelectedItemId={MainMenuItemLabel.PODCAST}
                    hasBranding={isBranded}
                    onToggleSearchBar={onToggleSearchBar}
                    isDisableAnalytics={isDisableAnalytics}
                  />
                )}
              />
              <Route
                path="/blog"
                render={() => (
                  <Header
                    headerMobileClassName={headerClassName}
                    mainMenuSelectedItemId={MainMenuItemLabel.BLOGS}
                    hasBranding={isBranded}
                    onToggleSearchBar={onToggleSearchBar}
                    isDisableAnalytics={isDisableAnalytics}
                  />
                )}
              />
              <Route
                render={() => (
                  <Header
                    headerMobileClassName={headerClassName}
                    hasBranding={isBranded}
                    onToggleSearchBar={onToggleSearchBar}
                    isDisableAnalytics={isDisableAnalytics}
                  />
                )}
              />
            </Switch>
          </div>
        </ErrorBoundary>
        <ErrorBoundary>
          <CSSTransition
            in={isShowSearchBar}
            timeout={300}
            classNames="search-bar-main"
            unmountOnExit
          >
            <SearchBar
              isFixed={isHeaderPositionFixed}
              onToggleSearchBar={onToggleSearchBar}
              isDisableAnalytics={isDisableAnalytics}
            />
          </CSSTransition>
        </ErrorBoundary>
      </div>

      {!layoutError && (
        <React.Fragment>
          <ErrorBoundary>
            {!isShowHeaderSectionMenu && (
              <div className={sectionMenuClassName}>
                <Route
                  render={({ location }) => (
                    <SectionMenu
                      pathname={location.pathname}
                      isNavMobileShown={false}
                      blockClass="i-layout"
                      activeSection={activeSection}
                    />
                  )}
                />
              </div>
            )}
          </ErrorBoundary>
          <div className="i-layout__content">{children}</div>
          {!isShowFooterNewsletterForm && (
            <ErrorBoundary>
              <NewsletterFormFooter
                newsletter={newsletter}
                classModifier="size_large"
                isMobile={false}
                typeForAnalytics="footer"
              />
            </ErrorBoundary>
          )}
          <CSSTransition
            in={isShowSearchBar}
            timeout={300}
            classNames="layout__backdrop"
            unmountOnExit
          >
            <div className="layout__backdrop" />
          </CSSTransition>
          <ErrorBoundary>
            <Footer bgColor={footerBgColor} />
          </ErrorBoundary>
          <Route
            path="/"
            exact
            render={(routeProps: RouteComponentProps) => {
              const passwordRecoveryParams =
                getPasswordRecoveryParams(routeProps);
              return passwordRecoveryParams ? (
                <ErrorBoundary>
                  <PasswordSavingModal
                    passwordRecoveryParams={passwordRecoveryParams}
                  />
                </ErrorBoundary>
              ) : null;
            }}
          />
        </React.Fragment>
      )}
      {LayoutError.NotFound === layoutError && (
        <Route
          render={({ staticContext }) => {
            if (staticContext) {
              staticContext.statusCode = 404;
            }
            return <NotFound />;
          }}
        />
      )}
      {isShowCookieNotification && (
        <ErrorBoundary>
          <CookieNotification
            isShowCookieNotification={isShowCookieNotification}
          />
        </ErrorBoundary>
      )}
    </LayoutTemplate>
  );
}

function isDataWithAdSpaces(
  data:
    | MainLayoutWithAdSpacesBrandingQuery
    | MainLayoutWithAdSpacesQuery
    | MainLayoutWithoutAdSpacesBrandingQuery
): data is MainLayoutWithAdSpacesBrandingQuery | MainLayoutWithAdSpacesQuery {
  return (
    (data as MainLayoutWithAdSpacesBrandingQuery | MainLayoutWithAdSpacesQuery)
      .adSpaces !== undefined
  );
}

function isDataWithBranding(
  data:
    | MainLayoutWithAdSpacesBrandingQuery
    | MainLayoutWithAdSpacesQuery
    | MainLayoutWithoutAdSpacesBrandingQuery
): data is MainLayoutWithAdSpacesBrandingQuery {
  return (data as MainLayoutWithAdSpacesBrandingQuery).branding !== undefined;
}

function getPasswordRecoveryParams(routeProps: RouteComponentProps) {
  const locationSearch =
    routeProps.location.search && routeProps.location.search.slice(1);
  const urlSearchParams = querystring.parse(locationSearch);
  const email = urlSearchParams.email;
  const token = urlSearchParams.token;
  const passwordRecoveryUI = urlSearchParams.passwordRecoveryUI;

  return passwordRecoveryUI &&
    email &&
    token &&
    typeof email === "string" &&
    typeof token === "string"
    ? { email, token }
    : null;
}
