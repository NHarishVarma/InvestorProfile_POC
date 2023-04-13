import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UserProfile13.module.css";

const UserProfile13: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTabButtonContainerClick = useCallback(() => {
    navigate("/user-profile-1");
  }, [navigate]);

  const onTabButtonContainer2Click = useCallback(() => {
    navigate("/user-profile-1-1");
  }, [navigate]);

  const onComponent2121Click = useCallback(() => {
    navigate("/user-profile-1-2");
  }, [navigate]);

  const onComponent2122Click = useCallback(() => {
    navigate("/user-profile-1-2");
  }, [navigate]);

  const onIconMaterialCloseClick = useCallback(() => {
    navigate("/user-profile-1-2");
  }, [navigate]);

  return (
    <div className={styles.userProfile13}>
      <div className={styles.userProfile13Child} />
      <div className={styles.userProfile13Item} />
      <div className={styles.userProfile13Inner} />
      <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
      <div className={styles.rectangleDiv} />
      <div className={styles.userProfile13Child1} />
      <div className={styles.tabButton} onClick={onTabButtonContainerClick}>
        <div className={styles.tabButtonChild} />
        <div className={styles.personalInformation}>Personal Information</div>
        <img
          className={styles.iconMaterialInfoOutline}
          alt=""
          src="/icon-materialinfooutline.svg"
        />
      </div>
      <div className={styles.tabButton1}>
        <div className={styles.tabButtonItem} />
        <div className={styles.investmentProfile}>{`Investment Profile `}</div>
        <img
          className={styles.financeChipFill1Wght400GraIcon}
          alt=""
          src="/finance-chip-fill1-wght400-grad0-opsz48-1.svg"
        />
      </div>
      <div className={styles.tabButton2} onClick={onTabButtonContainer2Click}>
        <div className={styles.tabButtonChild} />
        <div className={styles.bankingInformation}>Banking Information</div>
        <img
          className={styles.accountBalanceFill0Wght400Icon}
          alt=""
          src="/account-balance-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.investorProfile}>Investor Profile</div>
      <div className={styles.navbarbgParent}>
        <img className={styles.navbarbgIcon} alt="" src="/navbarbg.svg" />
        <img className={styles.userMenuIcon} alt="" src="/user-menu.svg" />
        <div className={styles.groupParent}>
          <img className={styles.groupChild} alt="" src="/group-330.svg" />
          <div className={styles.groupWrapper}>
            <div className={styles.groupWrapper}>
              <div className={styles.alternativeInvestmentPlatforContainer}>
                Al<span className={styles.t}>t</span>ernati
                <span className={styles.v}>v</span>e
              </div>
            </div>
          </div>
        </div>
        <div className={styles.searchParent}>
          <div className={styles.search}>Search</div>
          <img
            className={styles.iconactionsearch24px}
            alt=""
            src="/iconactionsearch-24px.svg"
          />
        </div>
      </div>
      <div className={styles.navDrawerLeft}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupWrapper}>
            <img className={styles.path428Icon} alt="" src="/path-428.svg" />
            <div className={styles.leftNavButton}>
              <div className={styles.groupWrapper} />
              <img
                className={styles.storefrontFill0Wght400Grad0Icon}
                alt=""
                src="/storefront-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton1}>
              <div className={styles.groupWrapper} />
              <img
                className={styles.notificationsFill0Wght400GrIcon}
                alt=""
                src="/notifications-fill0-wght400-grad0-opsz48.svg"
              />
              <img
                className={styles.leftNavButtonInner}
                alt=""
                src="/ellipse-58.svg"
              />
              <div className={styles.div}>4</div>
            </div>
            <div className={styles.leftNavButton2}>
              <div className={styles.groupWrapper}>
                <img
                  className={styles.iconAwesomeTasks}
                  alt=""
                  src="/icon-awesometasks.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton3}>
              <div className={styles.leftNavButtonChild1} />
              <div className={styles.groupWrapper}>
                <img
                  className={styles.manageAccountsFill1Wght400Icon}
                  alt=""
                  src="/manage-accounts-fill1-wght400-grad0-opsz48.svg"
                />
              </div>
              <div className={styles.leftNavButtonChild2} />
            </div>
            <div className={styles.leftNavButton4}>
              <div className={styles.groupWrapper}>
                <img
                  className={styles.homeStorageFill0Wght400GraIcon}
                  alt=""
                  src="/home-storage-fill0-wght400-grad0-opsz48.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton5}>
              <div className={styles.groupWrapper} />
              <img
                className={styles.settingsFill0Wght400Grad0OIcon}
                alt=""
                src="/settings-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton6}>
              <div className={styles.groupWrapper} />
              <img
                className={styles.logoutFill0Wght400Grad0OpsIcon}
                alt=""
                src="/logout-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton7}>
              <div className={styles.groupWrapper} />
              <img
                className={styles.homeFill0Wght300Grad0Opsz4Icon}
                alt=""
                src="/home-fill0-wght300-grad0-opsz40.svg"
              />
            </div>
            <div className={styles.leftNavClosedChild} />
            <div className={styles.closedMenuIcon}>
              <div className={styles.closedMenuIconChild} />
              <div className={styles.closedMenuIconItem} />
              <div className={styles.closedMenuIconInner} />
              <img
                className={styles.chevronRightFill0Wght400GrIcon}
                alt=""
                src="/chevron-right-fill0-wght400-grad0-opsz48-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.component2094}
        alt=""
        src="/component-209--4.svg"
      />
      <div className={styles.thomas}>Thomas</div>
      <div className={styles.smith}>Smith</div>
      <div className={styles.onboardingConfirmButton}>
        <div className={styles.onboardingConfirmButtonChild} />
        <div className={styles.investedInAlternatives}>
          Invested in alternatives before
        </div>
        <div className={styles.no}>No</div>
        <img
          className={styles.editFill0Wght400Grad0Opsz4Icon}
          alt=""
          src="/edit-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.onboardingConfirmButton1}>
        <div className={styles.onboardingConfirmButtonChild} />
        <div className={styles.investedInAlternatives}>Your income</div>
        <div className={styles.no}>$0 - $200,000</div>
        <img
          className={styles.editFill0Wght400Grad0Opsz4Icon}
          alt=""
          src="/edit-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.onboardingConfirmButton2}>
        <div className={styles.onboardingConfirmButtonChild} />
        <div className={styles.investedInAlternatives}>Your net worth</div>
        <div className={styles.no}>$1,000,001 - $5,000,000</div>
        <img
          className={styles.editFill0Wght400Grad0Opsz4Icon}
          alt=""
          src="/edit-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.onboardingConfirmButton3}>
        <div className={styles.onboardingConfirmButtonChild} />
        <div className={styles.investedInAlternatives}>Qualified client</div>
        <div className={styles.no}>No</div>
        <img
          className={styles.editFill0Wght400Grad0Opsz4Icon}
          alt=""
          src="/edit-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.onboardingConfirmButton4}>
        <div className={styles.onboardingConfirmButtonChild} />
        <div className={styles.investedInAlternatives}>Employment status</div>
        <div className={styles.no}>Employed</div>
        <img
          className={styles.editFill0Wght400Grad0Opsz4Icon}
          alt=""
          src="/edit-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.onboardingConfirmButton5}>
        <div className={styles.onboardingConfirmButtonChild} />
        <div className={styles.investedInAlternatives}>Risk tolerance</div>
        <div className={styles.no}>Moderate</div>
        <img
          className={styles.editFill0Wght400Grad0Opsz4Icon}
          alt=""
          src="/edit-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.onboardingConfirmButton6}>
        <div className={styles.onboardingConfirmButtonChild} />
        <div className={styles.investedInAlternatives}>Time Horizon</div>
        <div className={styles.no}>0 - 3 years</div>
        <img
          className={styles.editFill0Wght400Grad0Opsz4Icon}
          alt=""
          src="/edit-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.onboardingConfirmButton7}>
        <div className={styles.onboardingConfirmButtonChild} />
        <div className={styles.investedInAlternatives}>Investment style</div>
        <div className={styles.no}>Growth</div>
        <img
          className={styles.editFill0Wght400Grad0Opsz4Icon}
          alt=""
          src="/edit-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.onboardingConfirmButton8}>
        <div className={styles.onboardingConfirmButtonChild} />
        <div className={styles.investedInAlternatives}>
          Potential investment amount
        </div>
        <div className={styles.no}>$50,000 - $100,000</div>
        <img
          className={styles.editFill0Wght400Grad0Opsz4Icon}
          alt=""
          src="/edit-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <div className={styles.userProfile13Child2} />
      <div className={styles.bgParent}>
        <div className={styles.bg} />
        <div className={styles.component2121} onClick={onComponent2121Click}>
          <div className={styles.groupWrapper}>
            <div className={styles.buttonNormalChild} />
            <div className={styles.save}>SAVE</div>
          </div>
        </div>
        <div className={styles.component2122} onClick={onComponent2122Click}>
          <div className={styles.groupWrapper}>
            <div className={styles.buttonNormalItem} />
            <div className={styles.cancel}>Cancel</div>
          </div>
        </div>
        <img
          className={styles.iconMaterialClose}
          alt=""
          src="/icon-materialclose.svg"
          onClick={onIconMaterialCloseClick}
        />
      </div>
      <div className={styles.userProfile13Inner1}>
        <div className={styles.groupWrapper}>
          <div className={styles.logoParent}>
            <b className={styles.logo}>
              <p
                className={styles.haveYouInvested}
              >{`Have you invested in `}</p>
              <p className={styles.haveYouInvested}>alternatives before?</p>
            </b>
            <div className={styles.largeSelectionButton}>
              <div className={styles.onboardingConfirmButtonChild} />
              <div className={styles.yes}>Yes</div>
              <div className={styles.inPrivateEquity}>
                In private equity, venture capital, or similar
              </div>
            </div>
            <div className={styles.largeSelectionButton1}>
              <div className={styles.onboardingConfirmButtonChild} />
              <div className={styles.yes}>No</div>
              <div className={styles.inPrivateEquity}>
                But excited to learn more
              </div>
            </div>
          </div>
          <div className={styles.whatAreAlternativesParent}>
            <div className={styles.whatAreAlternatives}>
              What are alternatives?
            </div>
            <img
              className={styles.iconMaterialInfoOutline1}
              alt=""
              src="/icon-materialinfooutline1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile13;
