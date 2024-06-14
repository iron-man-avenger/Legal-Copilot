import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const LoginPage: NextPage = () => {
  const router = useRouter();

  const onGroupClick = useCallback(() => {
    router.push("/landing-page");
  }, [router]);

  return (
    <div className={styles.loginPage}>
      <div className={styles.frameParent}>
        <div className={styles.groupWrapper}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group.svg"
            onClick={onGroupClick}
          />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.logInWithYourAccountWrapper}>
            <div
              className={styles.logInWith}
            >{`Log in with your account `}</div>
          </div>
          <div className={styles.continueWithGoogleParent}>
            <div className={styles.continueWithGoogle} onClick={onGroupClick}>
              <div className={styles.googleLogoWrapper}>
                <img
                  className={styles.googleLogoIcon}
                  alt=""
                  src="/google-logo.svg"
                />
              </div>
              <p className={styles.continueWithGoogle1}>Continue with Google</p>
            </div>
            <div className={styles.continueWithMicrosoft}>
              <div className={styles.microsoftLogoWrapper}>
                <img
                  className={styles.microsoftLogoIcon}
                  alt=""
                  src="/microsoft-logo.svg"
                />
              </div>
              <div className={styles.continueWithMicrosoft1}>
                Continue with Microsoft Account
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameWrapper}>
          <div className={styles.legalCopilotParent}>
            <h1 className={styles.legalCopilot}>Legal Copilot</h1>
            <img
              className={styles.legalIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
        <div className={styles.w054n005249bp11Wrapper}>
          <img
            className={styles.w054n005249bp11Icon}
            loading="lazy"
            alt=""
            src="/2301w054n005249bp1-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
