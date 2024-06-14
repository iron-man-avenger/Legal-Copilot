import type { NextPage } from "next";
import { useCallback } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import styles from "./draft.module.css";

const Draft: NextPage = () => {
  const router = useRouter();

  const onDocumentTextClick = useCallback(() => {
    // Please sync "Upload page" to the project
  }, []);

  const onCLMTextClick = useCallback(() => {
    // Please sync "CLM" to the project
  }, []);

  const onFrameContainerClick = useCallback(() => {
    router.push("/landing-page");
  }, [router]);

  const onFrameIconClick = useCallback(() => {
    // Please sync "History" to the project
  }, []);

  const onFrameIconClick1 = useCallback(() => {
    // Please sync "Landing Page" to the project
  }, []);

  return (
    <div className={styles.draft}>
      <section className={styles.frameParent}>
        <header className={styles.frameGroup}>
          <div className={styles.groupWrapper}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group1.svg"
            />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
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
              <div className={styles.frameWrapper}>
                <div
                  className={styles.draftWrapper}
                  onClick={onFrameContainerClick}
                >
                  <a className={styles.draft1}>Draft</a>
                </div>
              </div>
              <div
                className={styles.homeWrapper}
                onClick={onFrameContainerClick}
              >
                <a className={styles.home}>Home</a>
              </div>
            </div>
            <div className={styles.draftAContractWithAiParent}>
              <h1 className={styles.draftAContract}>
                Draft a Contract with AI
              </h1>
              <img
                className={styles.rectangleIcon}
                loading="lazy"
                alt=""
                src="/rectangle1@2x.png"
              />
            </div>
          </div>
          <div className={styles.searchParent}>
            <img
              className={styles.searchIcon}
              loading="lazy"
              alt=""
              src="/search1.svg"
            />
            <img
              className={styles.frameIcon}
              loading="lazy"
              alt=""
              src="/frame.svg"
              onClick={onFrameIconClick}
            />
            <div className={styles.frameFrame}>
              <img
                className={styles.frameIcon1}
                alt=""
                src="/frame-1.svg"
                onClick={onFrameIconClick1}
              />
            </div>
          </div>
        </header>
        <div className={styles.frameWrapper1}>
          <div className={styles.agreementTypesParent}>
            <div className={styles.agreementTypes}>
              <div className={styles.agreementList}>
                <div className={styles.agreementNames}>
                  <div className={styles.ndaAgreement}>NDA Agreement</div>
                  <div className={styles.agreementNamesInner}>
                    <img
                      className={styles.frameChild}
                      loading="lazy"
                      alt=""
                      src="/frame-1000006650.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.agreementList1}>
                <div className={styles.generalLeaseAgreement}>
                  General Lease Agreement
                </div>
                <div className={styles.agreementListInner}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/frame-1000006650.svg"
                  />
                </div>
              </div>
              <div className={styles.agreementList2}>
                <div className={styles.mineDraftParent}>
                  <div className={styles.mineDraft}>{`Mine Draft `}</div>
                  <div className={styles.frameWrapper2}>
                    <img
                      className={styles.frameInner}
                      alt=""
                      src="/frame-1000006650.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.agreementList3}>
                <div className={styles.ppaAgreementParent}>
                  <div className={styles.ppaAgreement}>PPA Agreement</div>
                  <div className={styles.frameWrapper3}>
                    <img
                      className={styles.frameChild1}
                      alt=""
                      src="/frame-1000006650.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.agreementList4}>
                <div className={styles.ndaAgreement1}>NDA Agreement</div>
                <div className={styles.agreementListChild}>
                  <img
                    className={styles.frameChild2}
                    alt=""
                    src="/frame-1000006650.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper4}>
              <div className={styles.uploadFileBackgroundParent}>
                <div className={styles.uploadFileBackground} />
                <div className={styles.uploadReferenceDocumentParent}>
                  <div className={styles.uploadReferenceDocument}>
                    Upload reference document
                  </div>
                  <img
                    className={styles.uploadIcon}
                    loading="lazy"
                    alt=""
                    src="/upload-icon1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.draftChild} />
      <footer className={styles.draftInner}>
        <div className={styles.frameParent1}>
          <div className={styles.searchBarParent}>
            <TextField
              className={styles.searchBar}
              variant="standard"
              select
              value={1}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    style={{ marginLeft: "16px", marginRight: "33px" }}
                  >
                    <img width="24px" height="24px" src="/icon.svg" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment
                    position="end"
                    style={{ marginRight: "16px" }}
                  >
                    <img width="24px" height="24px" src="/icon-2.svg" />
                  </InputAdornment>
                ),
              }}
              SelectProps={{ IconComponent: () => null }}
              sx={{
                borderColor: "#8f8f8f",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fbfbfb",
                borderRadius: "28px",
                width: "97.64150943396226%",
                height: "62px",
                "& .MuiInput-underline:before": { borderBottom: "none" },
                "& .MuiInput-underline:after": { borderBottom: "none" },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottom: "none",
                },
                "& .MuiInputBase-root": { height: "100%" },
                "& .MuiInputBase-input": {
                  color: "#49454f",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Sedan",
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <MenuItem value={1}>Enter a prompt here</MenuItem>
            </TextField>
            <div className={styles.rectangleParent}>
              <img
                className={styles.rectangleIcon1}
                alt=""
                src="/background-shape@2x.png"
              />
              <div className={styles.frameWrapper5}>
                <div className={styles.frameChild3} />
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper6}>
            <img
              className={styles.frameChild4}
              loading="lazy"
              alt=""
              src="/frame-21.svg"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Draft;
