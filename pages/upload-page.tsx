import type { NextPage } from "next";
import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./upload-page.module.css";

const UploadPage: NextPage = () => {
  const router = useRouter();

  const onCLMTextClick = useCallback(() => {
    // Please sync "CLM" to the project
  }, []);

  const onDraftTextClick = useCallback(() => {
    router.push("/draft");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/landing-page");
  }, [router]);

  const onCTAClick = useCallback(() => {
    // Please sync "Upload page" to the project
  }, []);

  return (
    <div className={styles.uploadPage}>
      <header className={styles.frameParent}>
        <div className={styles.groupWrapper}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group1.svg"
          />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.documentWrapper}>
              <a className={styles.document}>Document</a>
            </div>
          </div>
          <div className={styles.homeWrapper}>
            <div className={styles.home}>Home</div>
          </div>
          <div className={styles.clmWrapper}>
            <a className={styles.clm} onClick={onCLMTextClick}>
              CLM
            </a>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.draftWrapper}>
              <a className={styles.draft} onClick={onDraftTextClick}>
                Draft
              </a>
            </div>
            <div
              className={styles.homeContainer}
              onClick={onFrameContainerClick}
            >
              <a className={styles.home1}>Home</a>
            </div>
          </div>
        </div>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/frame-5.svg"
        />
      </header>
      <div className={styles.searchBar}>
        <div className={styles.stateLayer}>
          <div className={styles.leadingIcon}>
            <div className={styles.container}>
              <div className={styles.stateLayer1}>
                <img className={styles.icon} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.supportingText}>Enter a prompt here</div>
          </div>
          <div className={styles.trailingElements}>
            <div className={styles.stTrailingIcon}>
              <div className={styles.container1}>
                <div className={styles.stateLayer2}>
                  <img className={styles.icon1} alt="" src="/icon-1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.ndTrailingIcon}>
              <div className={styles.container2}>
                <div className={styles.stateLayer3}>
                  <img className={styles.icon2} alt="" src="/icon-2.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.uploadPageChild} alt="" src="/frame-21.svg" />
      <div className={styles.uploadPageInner}>
        <div className={styles.frameItem} />
      </div>
      <section className={styles.uploadUiComponent}>
        <div className={styles.uploadWrapper}>
          <a className={styles.upload}>Upload</a>
        </div>
        <div className={styles.uploadUiComponentInner}>
          <div className={styles.uploadFileBackgroundParent}>
            <div className={styles.uploadFileBackground} />
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.uploadIconWrapper}>
                  <img
                    className={styles.uploadIcon}
                    loading="lazy"
                    alt=""
                    src="/upload-icon.svg"
                  />
                </div>
                <div className={styles.dragDropContainer}>
                  <span
                    className={styles.dragDrop}
                  >{`Drag & drop files or`}</span>
                  <span className={styles.span}>{` `}</span>
                  <span className={styles.browse}>Browse</span>
                </div>
              </div>
              <div className={styles.supportedFormatesJpeg}>
                Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
              </div>
            </div>
          </div>
        </div>
        <Button
          className={styles.cta}
          disableElevation
          variant="contained"
          sx={{
            color: "#000",
            fontSize: "14",
            background: "#eff6f6",
            borderRadius: "30px",
            "&:hover": { background: "#eff6f6" },
            width: 417,
            height: 45,
          }}
          onClick={onCTAClick}
        >
          Upload Files
        </Button>
      </section>
    </div>
  );
};

export default UploadPage;
