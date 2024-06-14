import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  const router = useRouter();

  const onUploadActionContainerClick = useCallback(() => {
    router.push("/upload-page");
  }, [router]);

  const onDraftActionContainerClick = useCallback(() => {
    router.push("/draft");
  }, [router]);

  return (
    <div className={[styles.uploadActionsWrapper, className].join(" ")}>
      <div className={styles.uploadActions}>
        <div
          className={styles.uploadAction}
          onClick={onUploadActionContainerClick}
        >
          <div className={styles.uploadActionChild} />
          <h2 className={styles.documentUpload}>Document Upload</h2>
          <img
            className={styles.uploadButtonIcon}
            loading="lazy"
            alt=""
            src="/rectangle@2x.png"
          />
        </div>
        <div
          className={styles.draftAction}
          onClick={onDraftActionContainerClick}
        >
          <div className={styles.draftActionChild} />
          <h2 className={styles.draftALegal}>Draft a Legal Contract</h2>
          <img
            className={styles.draftButtonIcon}
            loading="lazy"
            alt=""
            src="/rectangle-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
