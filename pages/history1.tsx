import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import RecentUploads from "../components/recent-uploads";
import UploadList from "../components/upload-list";
import styles from "./history1.module.css";

const History1: NextPage = () => {
  const router = useRouter();

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

  return (
    <div className={styles.history}>
      <header className={styles.homepage}>
        <div className={styles.layout}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group1.svg"
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
        <img
          className={styles.homepageChild}
          loading="lazy"
          alt=""
          src="/frame-5.svg"
        />
      </header>
      <section className={styles.historyInner}>
        <div className={styles.recentUploadsParent}>
          <RecentUploads />
          <div className={styles.recentUploads}>
            <UploadList
              userHistory="Recent Uploads "
              nileshKalal="NDA Agreement"
              prashantMarathe="Power Purchase Agreement  "
              mitalJadeja="General Lease Agreement"
              dhirajKumar="Mine Draft"
              shubhamVerma="Mutual Agreement"
              mahishaMudaliar="Data Agreement"
              dhwaniSakhiya="Environmental Compliance"
              propBackgroundColor="#fbf9f1"
              mitalJadejaBackgroundColor="#fbf9f1"
              dhirajKumarBackgroundColor="#fbf9f1"
              shubhamVermaBackgroundColor="#fbf9f1"
              mahishaMudaliarBackgroundColor="#fbf9f1"
              dhwaniSakhiyaBackgroundColor="#fbf9f1"
              propBackgroundColor1="#fbf9f1"
              propBackgroundColor2="#fbf9f1"
              propBackgroundColor3="#fbf9f1"
            />
            <UploadList
              userHistory="Recent Drafts"
              nileshKalal=" NDA for Lead Business School"
              prashantMarathe="Power Purchase Draft  "
              mitalJadeja="Contract of Mutual Agreement "
              dhirajKumar="Power of Attorney"
              shubhamVerma="Mine Draft for SAI"
              mahishaMudaliar="HIPAA Violation Notice Draft"
              dhwaniSakhiya="Rent Agreement For AL-Hadid"
              propBackgroundColor="#f7f7f7"
              mitalJadejaBackgroundColor="#f7f7f7"
              dhirajKumarBackgroundColor="#f7f7f7"
              shubhamVermaBackgroundColor="#f7f7f7"
              mahishaMudaliarBackgroundColor="#f7f7f7"
              dhwaniSakhiyaBackgroundColor="#f7f7f7"
              propBackgroundColor1="#f7f7f7"
              propBackgroundColor2="#f7f7f7"
              propBackgroundColor3="#f7f7f7"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default History1;
