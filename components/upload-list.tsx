import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./upload-list.module.css";

export type UploadListType = {
  className?: string;
  userHistory?: string;
  nileshKalal?: string;
  prashantMarathe?: string;
  mitalJadeja?: string;
  dhirajKumar?: string;
  shubhamVerma?: string;
  mahishaMudaliar?: string;
  dhwaniSakhiya?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  mitalJadejaBackgroundColor?: CSSProperties["backgroundColor"];
  dhirajKumarBackgroundColor?: CSSProperties["backgroundColor"];
  shubhamVermaBackgroundColor?: CSSProperties["backgroundColor"];
  mahishaMudaliarBackgroundColor?: CSSProperties["backgroundColor"];
  dhwaniSakhiyaBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propBackgroundColor2?: CSSProperties["backgroundColor"];
  propBackgroundColor3?: CSSProperties["backgroundColor"];
};

const UploadList: NextPage<UploadListType> = ({
  className = "",
  userHistory,
  nileshKalal,
  prashantMarathe,
  mitalJadeja,
  dhirajKumar,
  shubhamVerma,
  mahishaMudaliar,
  dhwaniSakhiya,
  propBackgroundColor,
  mitalJadejaBackgroundColor,
  dhirajKumarBackgroundColor,
  shubhamVermaBackgroundColor,
  mahishaMudaliarBackgroundColor,
  dhwaniSakhiyaBackgroundColor,
  propBackgroundColor1,
  propBackgroundColor2,
  propBackgroundColor3,
}) => {
  const uploadListStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: mitalJadejaBackgroundColor,
    };
  }, [mitalJadejaBackgroundColor]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: dhirajKumarBackgroundColor,
    };
  }, [dhirajKumarBackgroundColor]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: shubhamVermaBackgroundColor,
    };
  }, [shubhamVermaBackgroundColor]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: mahishaMudaliarBackgroundColor,
    };
  }, [mahishaMudaliarBackgroundColor]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: dhwaniSakhiyaBackgroundColor,
    };
  }, [dhwaniSakhiyaBackgroundColor]);

  const frameDiv5Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const frameDiv6Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const frameDiv7Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor3,
    };
  }, [propBackgroundColor3]);

  return (
    <div
      className={[styles.uploadList, className].join(" ")}
      style={uploadListStyle}
    >
      <div className={styles.uploadItem}>
        <div className={styles.userHistory}>{userHistory}</div>
      </div>
      <div className={styles.userUploads}>
        <div className={styles.frameParent}>
          <div className={styles.nileshKalalParent} style={frameDivStyle}>
            <div className={styles.nileshKalal}>
              <span className={styles.nileshKalalTxtContainer}>
                <ol className={styles.nileshKalal1}>
                  <li>{nileshKalal}</li>
                </ol>
              </span>
            </div>
            <img
              className={styles.frameIcon}
              loading="lazy"
              alt=""
              src="/frame1.svg"
            />
          </div>
          <div className={styles.prashantMaratheParent} style={frameDiv1Style}>
            <div className={styles.prashantMarathe}>
              <span className={styles.prashantMaratheTxtContainer}>
                <ol className={styles.prashantMarathe1}>
                  <li>{prashantMarathe}</li>
                </ol>
              </span>
            </div>
            <img className={styles.frameIcon1} alt="" src="/frame1.svg" />
          </div>
          <div className={styles.mitalJadejaParent} style={frameDiv2Style}>
            <div className={styles.mitalJadeja}>
              <span className={styles.mitalJadejaTxtContainer}>
                <ol className={styles.mitalJadeja1}>
                  <li>{mitalJadeja}</li>
                </ol>
              </span>
            </div>
            <img className={styles.frameIcon2} alt="" src="/frame1.svg" />
          </div>
          <div className={styles.dhirajKumarParent} style={frameDiv3Style}>
            <div className={styles.dhirajKumar}>
              <span className={styles.dhirajKumarTxtContainer}>
                <ol className={styles.dhirajKumar1}>
                  <li>{dhirajKumar}</li>
                </ol>
              </span>
            </div>
            <img className={styles.frameIcon3} alt="" src="/frame1.svg" />
          </div>
          <div className={styles.shubhamVermaParent} style={frameDiv4Style}>
            <div className={styles.shubhamVerma}>
              <span className={styles.shubhamVermaTxtContainer}>
                <ol className={styles.shubhamVerma1}>
                  <li>{shubhamVerma}</li>
                </ol>
              </span>
            </div>
            <img className={styles.frameIcon4} alt="" src="/frame1.svg" />
          </div>
          <div className={styles.mahishaMudaliarParent} style={frameDiv5Style}>
            <div className={styles.mahishaMudaliar}>
              <span className={styles.mahishaMudaliarTxtContainer}>
                <ol className={styles.mahishaMudaliar1}>
                  <li>{mahishaMudaliar}</li>
                </ol>
              </span>
            </div>
            <img className={styles.frameIcon5} alt="" src="/frame1.svg" />
          </div>
          <div className={styles.dhwaniSakhiyaParent} style={frameDiv6Style}>
            <div className={styles.dhwaniSakhiya}>
              <span className={styles.dhwaniSakhiyaTxtContainer}>
                <ol className={styles.dhwaniSakhiya1}>
                  <li>{dhwaniSakhiya}</li>
                </ol>
              </span>
            </div>
            <img className={styles.frameIcon6} alt="" src="/frame1.svg" />
          </div>
        </div>
        <div className={styles.emptyUploadWrapper} style={frameDiv7Style}>
          <div className={styles.emptyUpload} />
        </div>
      </div>
    </div>
  );
};

export default UploadList;
