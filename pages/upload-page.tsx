import type { NextPage } from "next";
import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import styles from "./upload-page.module.css";

const UploadPage: NextPage = () => {
  const router = useRouter();

  const onCLMTextClick = useCallback(() => {
    router.push("/c-l-m");
  }, [router]);

  const onDraftTextClick = useCallback(() => {
    router.push("/draft");
  }, [router]);

  const onNavigationHomeContainerClick = useCallback(() => {
    router.push("/landing-page");
  }, [router]);

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
          <div className={styles.documentContainerWrapper}>
            <div className={styles.documentContainer}>
              <div className={styles.documentContent}>
                <a className={styles.document}>Document</a>
              </div>
              <a className={styles.clm} onClick={onCLMTextClick}>
                CLM
              </a>
            </div>
          </div>
          <div className={styles.navigationContainerParent}>
            <div className={styles.navigationContainer}>
              <a className={styles.draft} onClick={onDraftTextClick}>
                Draft
              </a>
            </div>
            <div
              className={styles.navigationHome}
              onClick={onNavigationHomeContainerClick}
            >
              <a className={styles.home}>Home</a>
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
      <section className={styles.uploadUiComponent}>
        <div className={styles.uploadContainerWrapper}>
          <div className={styles.uploadContainer}>
            <div className={styles.uploadHeader}>
              <a className={styles.upload}>Upload</a>
            </div>
            <div className={styles.uploadFileBackgroundParent}>
              <div className={styles.uploadFileBackground} />
              <div className={styles.instructionContentParent}>
                <div className={styles.instructionContent}>
                  <div className={styles.instructionDetails}>
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
                  Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word,
                  PPT
                </div>
              </div>
            </div>
            <div className={styles.uploadingStatus}>
              <b className={styles.uploading}>{`Uploading `}</b>
              <TextField
                className={styles.uploadingFile1}
                placeholder="your-file-here.PDF"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="10px" height="10px" src="/vector.svg" />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#e3e3e3" },
                  "& .MuiInputBase-root": {
                    height: "37px",
                    backgroundColor: "#fff",
                    paddingRight: "16px",
                    fontSize: "12px",
                  },
                  "& .MuiInputBase-input": { color: "#0f0f0f" },
                }}
              />
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
        >
          Upload Files
        </Button>
      </section>
    </div>
  );
};

export default UploadPage;
