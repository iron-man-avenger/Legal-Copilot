import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent from "../components/frame-component";
import styles from "./landing-page.module.css";

const LandingPage: NextPage = () => {
  const router = useRouter();

  const onGroupClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onDocumentTextClick = useCallback(() => {
    router.push("/upload-page");
  }, [router]);

  const onCLMTextClick = useCallback(() => {
    router.push("/c-l-m");
  }, [router]);

  const onDraftTextClick = useCallback(() => {
    router.push("/draft");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/landing-page");
  }, [router]);

  const onSearchIconClick = useCallback(() => {
    router.push("/search");
  }, [router]);

  const onFrameIconClick = useCallback(() => {
    router.push("/history1");
  }, [router]);

  return (
    <div className={styles.landingPage}>
      <img className={styles.landingPageChild} alt="" src="/frame-5.svg" />
      <header className={styles.frameParent}>
        <div className={styles.groupWrapper}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group1.svg"
            onClick={onGroupClick}
          />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.documentWrapper}>
            <a className={styles.document} onClick={onDocumentTextClick}>
              Document
            </a>
          </div>
          <div className={styles.clmWrapper}>
            <a className={styles.clm} onClick={onCLMTextClick}>
              CLM
            </a>
          </div>
          <div className={styles.draftWrapper}>
            <a className={styles.draft} onClick={onDraftTextClick}>
              Draft
            </a>
          </div>
          <div className={styles.homeWrapper} onClick={onFrameContainerClick}>
            <a className={styles.home}>Home</a>
          </div>
        </div>
        <div className={styles.searchParent}>
          <img
            className={styles.searchIcon}
            loading="lazy"
            alt=""
            src="/search.svg"
            onClick={onSearchIconClick}
          />
          <img
            className={styles.frameIcon}
            loading="lazy"
            alt=""
            src="/frame.svg"
            onClick={onFrameIconClick}
          />
          <div className={styles.frameWrapper}>
            <img
              className={styles.frameIcon1}
              alt=""
              src="/frame-11.svg"
              onClick={onFrameContainerClick}
            />
          </div>
        </div>
      </header>
      <section className={styles.landingPageInner}>
        <FrameComponent />
      </section>
    </div>
  );
};

export default LandingPage;
