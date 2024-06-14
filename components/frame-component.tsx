import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/search");
  }, [router]);

  const onChevronRightIconClick = useCallback(() => {
    // Please sync "Landing Page" to the project
  }, []);

  const onFrameContainerClick1 = useCallback(() => {
    router.push("/upload-page");
  }, [router]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div
            className={styles.searchOrLegalMatterParent}
            onClick={onFrameContainerClick}
          >
            <h2 className={styles.searchOrLegal}>Search or Legal matter</h2>
            <img className={styles.searchIcon} alt="" src="/search-1.svg" />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameChild} />
            <h2 className={styles.draftALegal}>Draft a Legal Contract</h2>
          </div>
          <div className={styles.profile}>
            <div className={styles.frameDiv}>
              <div className={styles.ellipseWrapper}>
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/ellipse-137@2x.png"
                />
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.yourNameParent}>
                  <a className={styles.yourName}>Your name</a>
                  <div className={styles.yournamegmailcom}>
                    yourname@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.profileChild} />
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper2}>
                <div className={styles.frameParent2}>
                  <div className={styles.user01Parent}>
                    <img
                      className={styles.user01Icon}
                      loading="lazy"
                      alt=""
                      src="/user01.svg"
                    />
                    <a className={styles.myProfile}>My Profile</a>
                  </div>
                  <img
                    className={styles.chevronRightIcon}
                    loading="lazy"
                    alt=""
                    src="/chevronright.svg"
                    onClick={onChevronRightIconClick}
                  />
                </div>
              </div>
              <div className={styles.frameWrapper3}>
                <div className={styles.frameParent3}>
                  <div className={styles.settings01Parent}>
                    <img
                      className={styles.settings01Icon}
                      loading="lazy"
                      alt=""
                      src="/settings01.svg"
                    />
                    <a className={styles.settings}>Settings</a>
                  </div>
                  <img
                    className={styles.chevronRightIcon1}
                    alt=""
                    src="/chevronright.svg"
                    onClick={onChevronRightIconClick}
                  />
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.bell01Parent}>
                  <img
                    className={styles.bell01Icon}
                    loading="lazy"
                    alt=""
                    src="/bell01.svg"
                  />
                  <div className={styles.notification}>Notification</div>
                </div>
                <div className={styles.allowWrapper}>
                  <div className={styles.allow}>Allow</div>
                </div>
              </div>
              <div className={styles.frameWrapper4}>
                <div className={styles.logOut04Parent}>
                  <img
                    className={styles.logOut04Icon}
                    loading="lazy"
                    alt=""
                    src="/logout04.svg"
                  />
                  <div className={styles.logOut}>Log Out</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent5} onClick={onFrameContainerClick1}>
        <div className={styles.frameInner} />
        <h2 className={styles.documentUpload}>Document Upload</h2>
      </div>
    </div>
  );
};

export default FrameComponent;
