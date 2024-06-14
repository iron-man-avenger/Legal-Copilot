import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./c-l-m.module.css";

const CLM: NextPage = () => {
  const router = useRouter();

  const onDocumentTextClick = useCallback(() => {
    router.push("/upload-page");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/landing-page");
  }, [router]);

  const onDraftTextClick = useCallback(() => {
    router.push("/draft");
  }, [router]);

  return (
    <div className={styles.clm}>
      <div className={styles.clmInner}>
        <header className={styles.frameParent}>
          <div className={styles.groupWrapper}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group1.svg"
            />
          </div>
          <div className={styles.draftContentParent}>
            <div className={styles.draftContent}>
              <a className={styles.document} onClick={onDocumentTextClick}>
                Document
              </a>
            </div>
            <div className={styles.frameWrapper}>
              <div
                className={styles.clmWrapper}
                onClick={onFrameContainerClick}
              >
                <a className={styles.clm1}>CLM</a>
              </div>
            </div>
            <div className={styles.draftContent1}>
              <a className={styles.draft} onClick={onDraftTextClick}>
                Draft
              </a>
            </div>
            <div className={styles.homeWrapper} onClick={onFrameContainerClick}>
              <a className={styles.home}>Home</a>
            </div>
          </div>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/frame-5.svg"
          />
        </header>
      </div>
      <section className={styles.subContent}>
        <div className={styles.contentBlock}>
          <div className={styles.sustainableBlock}>
            <img
              className={styles.sustainable11}
              loading="lazy"
              alt=""
              src="/sustainable-1-1@2x.png"
            />
          </div>
          <h1
            className={styles.contractLifeCycleManagement}
          >{`Contract Life-Cycle Management `}</h1>
          <img
            className={styles.rectangleIcon}
            loading="lazy"
            alt=""
            src="/rectangle2@2x.png"
          />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.contractTypeParent}>
              <div className={styles.contractType}>
                <div
                  className={styles.contractManagementSystem}
                >{`Contract Management System `}</div>
              </div>
              <div className={styles.contractExamples}>
                <div className={styles.contractList}>
                  <div className={styles.landAgreement}>Land Agreement</div>
                  <div className={styles.placeholderList}>
                    <a className={styles.placeholder}>10</a>
                  </div>
                </div>
                <div className={styles.contractList1}>
                  <a className={styles.nda}>NDA</a>
                  <div className={styles.wrapper}>
                    <div className={styles.div}>16</div>
                  </div>
                </div>
                <div className={styles.contractList2}>
                  <a className={styles.serviceContract}>Service Contract</a>
                  <div className={styles.container}>
                    <a className={styles.a}>9</a>
                  </div>
                </div>
                <div className={styles.contractList3}>
                  <div className={styles.mineDraft}>Mine Draft</div>
                  <div className={styles.frame}>
                    <div className={styles.div1}>6</div>
                  </div>
                </div>
                <div className={styles.contractList4}>
                  <div className={styles.gla}>GLA</div>
                  <div className={styles.frameDiv}>
                    <div className={styles.div2}>7</div>
                  </div>
                </div>
                <div className={styles.contractList5}>
                  <a className={styles.ppa}>PPA</a>
                  <div className={styles.wrapper1}>
                    <a className={styles.a1}>5</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.nestedPeriodParent}>
                <div className={styles.nestedPeriod}>
                  <div className={styles.deeplyNestedPeriod}>
                    <div className={styles.validationBlock}>
                      <div className={styles.validationContent}>
                        <div className={styles.validationPeriod}>
                          Validation Period
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent2}>
                      <div className={styles.frameParent3}>
                        <div className={styles.contractExpireIn45DaysParent}>
                          <div
                            className={styles.contractExpireIn}
                          >{`Contract Expire in 45 Days `}</div>
                          <div className={styles.div3}>12</div>
                        </div>
                        <img
                          className={styles.frameItem}
                          loading="lazy"
                          alt=""
                          src="/line-265.svg"
                        />
                      </div>
                      <div className={styles.expireDaysContent}>
                        <div className={styles.expireDaysBlock}>
                          <div
                            className={styles.contractExpireIn1}
                          >{`Contract Expire in 30 Days `}</div>
                          <div className={styles.separator}>08</div>
                        </div>
                        <img
                          className={styles.expireDaysContentChild}
                          alt=""
                          src="/line-265.svg"
                        />
                      </div>
                      <div className={styles.todayBlockParent}>
                        <div className={styles.todayBlock}>
                          <div
                            className={styles.contractExpireIn2}
                          >{`Contract Expire in 14 Days `}</div>
                          <div className={styles.wrapper2}>
                            <div className={styles.div4}>06</div>
                          </div>
                        </div>
                        <img
                          className={styles.frameInner}
                          alt=""
                          src="/line-265.svg"
                        />
                      </div>
                      <div className={styles.expireDaysContent1}>
                        <div className={styles.frameParent4}>
                          <div className={styles.contractExpireIn07DaysParent}>
                            <div
                              className={styles.contractExpireIn3}
                            >{`Contract Expire in 07 Days `}</div>
                            <div className={styles.emptyElementWrapper}>
                              <div className={styles.emptyElement}>02</div>
                            </div>
                          </div>
                          <img
                            className={styles.lineIcon}
                            alt=""
                            src="/line-265.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.todayContent}>
                      <div className={styles.todayValue}>
                        <div
                          className={styles.contractExpireIn4}
                        >{`Contract Expire in Today `}</div>
                        <div className={styles.div5}>01</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.emptyContent}>
                    <div className={styles.subEmptyContent}>
                      <div className={styles.nestedEmptyContent} />
                    </div>
                  </div>
                </div>
                <div className={styles.vectorWrapper}>
                  <img
                    className={styles.frameChild1}
                    alt=""
                    src="/line-265.svg"
                  />
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.nestedRiskParent}>
                  <div className={styles.nestedRisk}>
                    <div className={styles.riskContent}>
                      <div className={styles.riskAnalysis}>Risk Analysis</div>
                    </div>
                    <div className={styles.expireContentParent}>
                      <div className={styles.expireContent}>
                        <div className={styles.expireBlock}>
                          <div
                            className={styles.contractExpireIn5}
                          >{`Contract Expire in 45 Days `}</div>
                          <div className={styles.multipleExpire}>12</div>
                        </div>
                        <img
                          className={styles.expireContentChild}
                          alt=""
                          src="/line-265.svg"
                        />
                      </div>
                      <div className={styles.expireContent1}>
                        <div className={styles.contractExpireIn45DaysGroup}>
                          <div
                            className={styles.contractExpireIn6}
                          >{`Contract Expire in 45 Days `}</div>
                          <div className={styles.div6}>12</div>
                        </div>
                        <img
                          className={styles.expireContentItem}
                          alt=""
                          src="/line-265.svg"
                        />
                      </div>
                      <div className={styles.expireContent2}>
                        <div className={styles.contractExpireIn45DaysContainer}>
                          <div
                            className={styles.contractExpireIn7}
                          >{`Contract Expire in 45 Days `}</div>
                          <div className={styles.div7}>12</div>
                        </div>
                        <img
                          className={styles.expireContentInner}
                          alt=""
                          src="/line-265.svg"
                        />
                      </div>
                      <div className={styles.expireContent3}>
                        <div className={styles.contractExpireIn45DaysParent1}>
                          <div
                            className={styles.contractExpireIn8}
                          >{`Contract Expire in 45 Days `}</div>
                          <div className={styles.div8}>12</div>
                        </div>
                        <img
                          className={styles.expireContentChild1}
                          alt=""
                          src="/line-265.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.subEmptyRiskWrapper}>
                    <div className={styles.subEmptyRisk}>
                      <div className={styles.nestedEmptyRisk} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imageContentWrapper}>
            <div className={styles.imageContent}>
              <div className={styles.imageContentChild} />
              <div className={styles.imageBlock}>
                <img
                  className={styles.image1Icon}
                  loading="lazy"
                  alt=""
                  src="/image-1@2x.png"
                />
              </div>
              <div className={styles.agreementTypeParent}>
                <div className={styles.agreementType}>
                  <div className={styles.ndaAgreement}>NDA Agreement</div>
                  <div
                    className={styles.sarajiMineDraft}
                  >{`SARAJI MINE DRAFT `}</div>
                </div>
                <div className={styles.contractingPartiesParent}>
                  <div className={styles.contractingParties}>
                    Contracting Parties
                  </div>
                  <div className={styles.frameWrapper2}>
                    <div className={styles.nestedAtqorParent}>
                      <div className={styles.nestedAtqor}>
                        <div className={styles.contractorBlock}>
                          <div
                            className={styles.contractor}
                          >{`Contractor    `}</div>
                        </div>
                        <div className={styles.nestedAtqorChild} />
                        <div className={styles.atqor}>atQor</div>
                      </div>
                      <div className={styles.duplicateAtqor}>
                        <div className={styles.nestedDuplicate}>
                          <div className={styles.duplicateBlock}>
                            <div
                              className={styles.contractor1}
                            >{`Contractor    `}</div>
                          </div>
                          <div className={styles.atqor1}>atQor</div>
                          <div className={styles.nestedDuplicateChild} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.signatoriesContainerParent}>
                  <div className={styles.signatoriesContainer}>
                    <div className={styles.frameParent5}>
                      <div className={styles.frameParent6}>
                        <div className={styles.signatoriesWrapper}>
                          <div
                            className={styles.signatories}
                          >{`Signatories    `}</div>
                        </div>
                        <div className={styles.lineDiv} />
                      </div>
                      <div className={styles.frameParent7}>
                        <div className={styles.signatoriesFrame}>
                          <div
                            className={styles.signatories1}
                          >{`Signatories    `}</div>
                        </div>
                        <div className={styles.frameChild2} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.metadataContainer}>
                    <div className={styles.metadataParent}>
                      <div className={styles.metadata}>Metadata</div>
                      <div className={styles.minesInfo}>
                        <div className={styles.sarajiMines}>Saraji Mines</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.emptyContainerWrapper}>
                    <div className={styles.emptyContainer} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CLM;
