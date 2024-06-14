import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import SearchBar from "../components/search-bar";
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
    // Please sync "CLM" to the project
  }, []);

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
    // Please sync "History" to the project
  }, []);

  const onFrameIconClick1 = useCallback(() => {
    // Please sync "Landing Page" to the project
  }, []);

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
        <div className={styles.frameParent}>
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
              loading="lazy"
              alt=""
              src="/frame-1.svg"
              onClick={onFrameIconClick1}
            />
          </div>
        </div>
      </header>
      <section className={styles.searchContainer}>
        <div className={styles.searchBarParent}>
          <SearchBar />
          <FrameComponent />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
