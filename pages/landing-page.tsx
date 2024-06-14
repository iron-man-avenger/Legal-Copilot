import type { NextPage } from "next";
import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./landing-page.module.css";

const LandingPage: NextPage = () => {
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
            <a className={styles.clm}>CLM</a>
          </div>
          <div className={styles.draftWrapper}>
            <a className={styles.draft}>Draft</a>
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
              src="/frame-12.svg"
              onClick={onFrameContainerClick}
            />
          </div>
        </div>
      </header>
      <div className={styles.frameContainer}>
        <div className={styles.frameChild} />
        <div className={styles.draftALegal}>Draft a Legal Contract</div>
      </div>
      <section className={styles.landingPageInner}>
        <div className={styles.frameDiv}>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent1} onClick={onDocumentTextClick}>
              <div className={styles.frameItem} />
              <h3 className={styles.documentUpload}>Document Upload</h3>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div
              className={styles.searchOrLegalMatterParent}
              onClick={onSearchIconClick}
            >
              <h3 className={styles.searchOrLegal}>Search or Legal matter</h3>
              <img className={styles.searchIcon1} alt="" src="/search-1.svg" />
            </div>
            <div className={styles.myProfile}>
              <div className={styles.frameParent3}>
                <div className={styles.frameParent4}>
                  <div className={styles.profilePictureParent}>
                    <img
                      className={styles.profilePictureIcon}
                      alt=""
                      src="/profile-picture@2x.png"
                    />
                    <div className={styles.editPictureParent}>
                      <div className={styles.editPicture} />
                      <img
                        className={styles.edit03Icon}
                        loading="lazy"
                        alt=""
                        src="/edit03.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.frameWrapper2}>
                    <div className={styles.yourNameParent}>
                      <a className={styles.yourName}>Your name</a>
                      <div className={styles.yournamegmailcom}>
                        yourname@gmail.com
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.xIcon}
                    loading="lazy"
                    alt=""
                    src="/x.svg"
                    onClick={onFrameContainerClick}
                  />
                </div>
                <img
                  className={styles.frameInner}
                  loading="lazy"
                  alt=""
                  src="/line-261.svg"
                />
              </div>
              <div className={styles.nameInput}>
                <div className={styles.name}>Name</div>
                <div className={styles.yourName1}>your name</div>
              </div>
              <img
                className={styles.myProfileChild}
                alt=""
                src="/line-261-1.svg"
              />
              <div className={styles.contactInfo}>
                <div className={styles.emailAccount}>Email account</div>
                <div className={styles.contactDetails}>
                  <div className={styles.yournamegmailcom1}>
                    yourname@gmail.com
                  </div>
                </div>
              </div>
              <img
                className={styles.myProfileItem}
                loading="lazy"
                alt=""
                src="/line-261-1.svg"
              />
              <div className={styles.contactInfo1}>
                <div className={styles.mobileNumber}>{`Mobile number `}</div>
                <div className={styles.addNumberWrapper}>
                  <div className={styles.addNumber}>Add number</div>
                </div>
              </div>
              <img
                className={styles.myProfileInner}
                loading="lazy"
                alt=""
                src="/line-261-1.svg"
              />
              <div className={styles.frameParent5}>
                <div className={styles.locationParent}>
                  <div className={styles.location}>Location</div>
                  <Button
                    className={styles.button}
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "14",
                      background: "#2489ff",
                      borderRadius: "6px",
                      "&:hover": { background: "#2489ff" },
                      height: 36,
                    }}
                  >
                    Save Change
                  </Button>
                </div>
                <div className={styles.usaWrapper}>
                  <div className={styles.usa}>USA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
