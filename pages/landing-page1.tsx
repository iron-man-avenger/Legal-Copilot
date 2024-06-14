import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import SettingsDropdown from "../components/settings-dropdown";
import styles from "./landing-page1.module.css";

const LandingPage1: NextPage = () => {
  const router = useRouter();

  const onGroupClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onDocumentTextClick = useCallback(() => {
    router.push("/upload-page");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/landing-page");
  }, [router]);

  const onSearchIconClick = useCallback(() => {
    router.push("/search");
  }, [router]);

  const onSearchPlaceholderIconClick = useCallback(() => {
    router.push("/history1");
  }, [router]);

  return (
    <div className={styles.landingPage}>
      <img className={styles.landingPageChild} alt="" src="/frame-5.svg" />
      <header className={styles.main}>
        <div className={styles.content}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group1.svg"
            onClick={onGroupClick}
          />
        </div>
        <div className={styles.navigation}>
          <div className={styles.documentWrapper}>
            <a className={styles.document} onClick={onDocumentTextClick}>
              Document
            </a>
          </div>
          <div className={styles.clmWrapper}>
            <a className={styles.clm}>CLM</a>
          </div>
          <div className={styles.draftWrapper}>
            <a className={styles.draft}>Draft</a>
          </div>
          <div className={styles.homeWrapper} onClick={onFrameContainerClick}>
            <a className={styles.home}>Home</a>
          </div>
        </div>
        <div className={styles.searchBar}>
          <img
            className={styles.searchIcon}
            loading="lazy"
            alt=""
            src="/search.svg"
            onClick={onSearchIconClick}
          />
          <img
            className={styles.searchPlaceholderIcon}
            loading="lazy"
            alt=""
            src="/frame.svg"
            onClick={onSearchPlaceholderIconClick}
          />
          <div className={styles.searchIconWrapper}>
            <img
              className={styles.searchIcon1}
              alt=""
              src="/frame-12.svg"
              onClick={onFrameContainerClick}
            />
          </div>
        </div>
      </header>
      <section className={styles.settingsDropdownWrapper}>
        <SettingsDropdown />
      </section>
    </div>
  );
};

export default LandingPage1;
