import type { NextPage } from "next";
import UploadList from "./upload-list";
import styles from "./recent-uploads.module.css";

export type RecentUploadsType = {
  className?: string;
};

const RecentUploads: NextPage<RecentUploadsType> = ({ className = "" }) => {
  return (
    <div className={[styles.recentUploads, className].join(" ")}>
      <UploadList
        userHistory="User History"
        nileshKalal="Nilesh Kalal"
        prashantMarathe="Prashant Marathe"
        mitalJadeja="Mital Jadeja "
        dhirajKumar="Dhiraj Kumar"
        shubhamVerma="Shubham Verma"
        mahishaMudaliar="Mahisha Mudaliar"
        dhwaniSakhiya="Dhwani Sakhiya   "
      />
      <div className={styles.chatHistory}>
        <div className={styles.historyList}>
          <div className={styles.chatHistory1}>Chat History</div>
        </div>
        <div className={styles.draftHistory}>
          <div className={styles.draftList}>
            <div className={styles.draftItem}>
              <div className={styles.validationPeriodOfContainer}>
                <span className={styles.validationPeriodOfContainer1}>
                  <ol className={styles.validationPeriodOfNda}>
                    <li>{`Validation Period of NDA `}</li>
                  </ol>
                </span>
              </div>
              <img className={styles.frameIcon} alt="" src="/frame1.svg" />
            </div>
            <div className={styles.summarizeTheLegalDraftParent}>
              <div className={styles.summarizeTheLegalContainer}>
                <span className={styles.summarizeTheLegalContainer1}>
                  <ol className={styles.summarizeTheLegalDraft}>
                    <li>Summarize the Legal Draft</li>
                  </ol>
                </span>
              </div>
              <img className={styles.frameIcon1} alt="" src="/frame1.svg" />
            </div>
            <div className={styles.analyzeRisksOfLeaseAgreemeParent}>
              <div className={styles.analyzeRisksOf}>
                {" "}
                3. Analyze Risks of Lease Agreement
              </div>
              <img className={styles.frameIcon2} alt="" src="/frame1.svg" />
            </div>
            <div className={styles.riskMitigationOfNdaParent}>
              <div className={styles.riskMitigationOfContainer}>
                <span className={styles.riskMitigationOfContainer1}>
                  <ol className={styles.riskMitigationOfNda}>
                    <li>{`Risk Mitigation of NDA `}</li>
                  </ol>
                </span>
              </div>
              <img className={styles.frameIcon3} alt="" src="/frame1.svg" />
            </div>
            <div className={styles.powerPurchaseAgreementAnalyParent}>
              <div className={styles.powerPurchaseAgreementContainer}>
                <span>
                  <ol className={styles.powerPurchaseAgreementAnaly}>
                    <li>{`Power Purchase Agreement Analysis  `}</li>
                  </ol>
                </span>
              </div>
              <img className={styles.frameIcon4} alt="" src="/frame1.svg" />
            </div>
            <div className={styles.smartCounselForMultiplePpaParent}>
              <div className={styles.smartCounselForContainer}>
                <span className={styles.smartCounselForContainer1}>
                  <ol className={styles.smartCounselForMultiplePpa}>
                    <li>{`Smart Counsel for Multiple PPA’s  `}</li>
                  </ol>
                </span>
              </div>
              <img className={styles.frameIcon5} alt="" src="/frame1.svg" />
            </div>
            <div className={styles.copyrightClaimingCompaniesParent}>
              <div className={styles.copyrightClaimingCompaniesContainer}>
                <span className={styles.copyrightClaimingCompaniesContainer1}>
                  <ol className={styles.copyrightClaimingCompanies}>
                    <li>Copyright Claiming Companies</li>
                  </ol>
                </span>
              </div>
              <img className={styles.frameIcon6} alt="" src="/frame1.svg" />
            </div>
          </div>
          <div className={styles.emptyDraft}>
            <div className={styles.noDraftContent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentUploads;
